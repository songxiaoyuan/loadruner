import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.LinkedList;
import java.util.List;
import java.util.Set;
import java.util.TreeSet;
import java.util.logging.Logger;


import com.google.gson.*;
import com.thoughtworks.xstream.XStream;
import com.thoughtworks.xstream.io.xml.PrettyPrintWriter;
import com.thoughtworks.xstream.io.xml.StaxDriver;


public class Project {
	//inner class only for openedProject.
	private class OpenedProject implements Comparable{
		private String projectName;
		private String savedPath;
		private long timestamp;	//most recent access time.
		public OpenedProject(String projectName, String savedPath, long timestamp){
			this.projectName = projectName;
			this.savedPath = savedPath;
			this.timestamp = timestamp;
		}
		@Override
		public int compareTo(Object obj) {
			OpenedProject op = (OpenedProject)obj;
	        return new Long(timestamp).compareTo(new Long(op.timestamp)) * (-1);	//reverse the order
		}
	}
	private String projectName;
	private String savedPath;
	private String author;
	private Date date;
	private String comments;
	/*
	private List<Report> reports;
	private List<Result> results;
	private List<Scene> scenes;
	private List<Script> scripts;
	*/
	
	//Setter
	public String getProjectName(){
		return project.projectName;
	}
	
	public String getSavedPath(){
		return project.savedPath;
	}
	
	public String getAuthor(){
		return project.author;
	}
	
	public String getDate(){
		return project.date.toString();
	}
	
	public String getComments(){
		return project.comments;
	}
	//@XStreamOmitFiled
	private static Set<OpenedProject> openedProjs;	//打开的项目列表
	
	//Singleton	//系统中永远只有一个项目(处于使用中的项目)
	private Project(){
		/*
		this.reports = new LinkedList<Report>();
		this.results = new LinkedList<Result>();
		this.scenes = new LinkedList<Scene>();
		this.scripts = new LinkedList<Script>();
		*/
		openedProjs = new TreeSet<OpenedProject>();
		//openedProjs = new HashSet<OpenedProject>();
	}
	private static final Project project = new Project();
	private static final Logger log = MyLogger.getInstance();
	public static Project getInstance(){
		return project;
	}

	public static final void main(String[] args) {
		/*
		//File f = new File("/home/lxw/Documents/");
		File f = new File("/home/lxw/Documents/demoFile.lxw");
		System.out.println(f.getAbsolutePath());
		System.out.println(f.getAbsoluteFile());
		System.out.println(f.getName());
		System.out.println(f.getParent());
		System.out.println(f.getParentFile());
		System.out.println(f.isAbsolute());
		*/
		System.out.println(new Date().getTime());
	}

	/*
	 * jsonStr: the JSON String from the frontend. It may look like as follows:
	 * { "projectName": "Project Name from frontend", "savedPath":
	 * "Saved path from frontend", "author": "author of the project", "date":
	 * "date of the creation", "comments": "comments of the project"
	 * */
	public int createProject(String jsonStr) {
		// TODO: When create a new project, we must ask the user if it is ok to
		// close current project.

		// 创建json解析器
		JsonParser parser = new JsonParser();
		// 使用解析器解析json数据，返回值是JsonElement，强制转化为其子类JsonObject类型
		JsonObject object = (JsonObject) parser.parse(jsonStr);

		// 使用JsonObject的get(String memeberName)方法返回JsonElement，再使用JsonElement的getAs*方法得到真实类型
		project.projectName = object.get("projectName").getAsString();
		project.savedPath = object.get("savedPath").getAsString();
		project.author = object.get("author").getAsString();
		SimpleDateFormat df = new SimpleDateFormat("yyyy.MM.dd");
		try{
			project.date = df.parse(object.get("date").getAsString());
		}
		catch(ParseException e){
			log.warning(e.getMessage());
		}
		project.comments = object.get("comments").getAsString();
		
		/*
		//the following block are debug code. DELETE them.
		{
			//Debug
			File f = new File("/home/lxw/DWL.log");
			project.reports.add(new Report(f));
			project.reports.add(new Report(f));
			project.results.add(new Result(f));
			project.results.add(new Result(f));
			project.scenes.add(new Scene(f));
			project.scenes.add(new Scene(f));
			project.scripts.add(new Script(f));
			project.scripts.add(new Script(f));
		}*/
		
		// 1. Write data into .proj file.
		this.writeXMLProjFile();
		// 2. Create 4 dirs
		this.mkFourDirs();
		
		this.updateOpenedProjs();
		return 0;

	}
	public void writeXMLProjFile(){
		//TODO: 把判断用户输入的数据是否合法的任务交给前端来做
		try {
			XStream xstream = new XStream(new StaxDriver());
			File projDir = new File(project.savedPath);
			if(!projDir.exists()){
				projDir.mkdirs();
			}
			File projFile = new File(project.savedPath + File.separator + ".project");
			//if(!projFile.isFile()){}	//这种判断应该尽可能地放到前端，减少前后端交互的次数。而且提高效率。
			OutputStream out = new BufferedOutputStream(new FileOutputStream(projFile));
			//自动清空文件
			out.write("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n".getBytes());
			//xstream.toXML(project, out);	//this method's output is ugly, and no "newline" can be found.
			//自动清空文件
			xstream.marshal(project, new PrettyPrintWriter(new OutputStreamWriter(out)));
		} catch (Exception e) {
			//e.printStackTrace();
			log.warning(e.getMessage());
		}
	}

	public void readXMLProjFile(File projFile){
		//initialize the value of data members in Project
		try {
			XStream xstream = new XStream(new StaxDriver());
			Project projTemp = (Project)xstream.fromXML(projFile);
			project.projectName = projTemp.projectName;
			/*//This comment block is equal to the following one line.
			if(!projTemp.savedPath.equals(projFile.getParent())){
				project.savedPath = projFile.getParent();
			}
			else{
				project.savedPath = projFile.getParent();
				//必须为project.savedPath重新赋值，这个else是必须的。防止上次打开的项目对本项目的干扰。
			}*/
			project.savedPath = projFile.getParent();
			project.author = projTemp.author; 
			project.date = projTemp.date;
			project.comments = projTemp.comments;
			/*
			project.reports = projTemp.reports;
			project.results = projTemp.results;
			project.scenes = projTemp.scenes;
			project.scripts = projTemp.scripts;
			*/
		} catch (Exception e) {
			log.warning(e.getMessage());
		}
	}
	
	public void mkFourDirs() {
		try {
			String prefix = project.savedPath + File.separator;
			
			File projDir = new File(prefix + "script");
			if (!projDir.isDirectory()) {
				projDir.mkdirs();
			}
			projDir = new File(prefix + "scene");
			if (!projDir.isDirectory()) {
				projDir.mkdirs();
			}
			projDir = new File(prefix + "result");
			if (!projDir.isDirectory()) {
				projDir.mkdirs();
			}
			projDir = new File(prefix + "report");
			if (!projDir.isDirectory()) {
				projDir.mkdirs();
			}
		} catch (Exception e) {
			//e.printStackTrace();
			log.warning(e.getMessage());
		}
	}
	
	public void importFourDirs(String projPath){
		//TODO: No need to import Four Dirs in the backend, right?
	}
	
	/*
	projPath: "/home/lxw/DWLProj"
	*/
	public int openProject(String projPath) {
		// TODO: When open a project, we must ask the user if it is ok to close the current project.
		return importProject(projPath);
	}

	/*
	projPath: "/home/lxw/MovedDWLProj"
	*/
	public int importProject(String projPath) {
		// TODO: When import a project, we must ask the user if it is ok to close the current project.
		File projDir = new File(projPath);
		if(!projDir.isDirectory()){
			return -1;	//Error
		}
		File projFile = new File(projPath + File.separator + ".project");
		if(!projFile.isFile()){
			return -1;	//Error
		}
		clearPrevProject();
		readXMLProjFile(projFile);
		
		//加载四个文件夹及文件夹中的内容
		//importFourDirs(projPath);
		
		updateOpenedProjs();
		
		showProject();
		return 0;
	}
	
	public void updateOpenedProjs(){
		//修改openedProjs: 把当前项目添加到最近访问的项目列表中，但不能直接添加，如果已经添加过了，需要修改其中的最近访问时间戳
		//openedProjs.add(new OpenedProject(project.projectName, project.savedPath, new Date().getTime()));
		if(openedProjs.isEmpty()){
			openedProjs.add(new OpenedProject(project.projectName, project.savedPath, new Date().getTime()));
		}
		else {
			List<OpenedProject> opList = new LinkedList<OpenedProject>(openedProjs);
			boolean accessAgain = false;
			for(OpenedProject op : opList){
				if (op.savedPath.equals(project.savedPath)) {
					op.timestamp = new Date().getTime();
					accessAgain = true;
				}
			}
			if(!accessAgain){
				openedProjs.add(new OpenedProject(project.projectName, project.savedPath, new Date().getTime()));
			}
			else{
				//System.out.println("Access Again");
				openedProjs.clear();
				//System.out.println("openedProjs.size(): " + openedProjs.size());	//0
				for(OpenedProject op : opList){
					openedProjs.add(op);
				}
			}
			/*
			//Method 1: NO: "java.util.ConcurrentModificationException"
			//Modify the value during the cycle.
			Iterator<OpenedProject> opIter = openedProjs.iterator();
			while(opIter.hasNext()){
				OpenedProject op = opIter.next();
				if (op.savedPath.equals(project.savedPath)) {
					op.timestamp = new Date().getTime();
				}
				else{
					openedProjs.add(new OpenedProject(project.projectName, project.savedPath, new Date().getTime()));
				}
			}*/
			/*
			//Method 2: NO: "java.util.ConcurrentModificationException"
			//Modify the value during the cycle.
			for (OpenedProject op : openedProjs) {
				if (op.savedPath.equals(project.savedPath)) {
					op.timestamp = new Date().getTime();
				}
				else{
					openedProjs.add(new OpenedProject(project.projectName, project.savedPath, new Date().getTime()));
				}
			}*/
		}
	}
	
	public void editProject() {

	}

	public void closeProject() {
		//关闭项目之前先要保存项目
		saveProject();
		//TODO: 关闭项目后跳转到哪个页面？
	}
	
	//保存当前项目
	public int saveProject(){
		//TODO: 1. 保存各个目录下的文件 
		//... ...
		
		//2. 保存xml .project (包括更新其中的四个子目录的信息)  
		File projFile = new File(project.savedPath + File.separator + ".project");
		if(!projFile.isFile()){
			return -1;	//Error
		}
		
		try{
			XStream xstream = new XStream(new StaxDriver());
			OutputStream out = new BufferedOutputStream(new FileOutputStream(projFile));
			//自动清空文件
			out.write("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n".getBytes());
			//xstream.toXML(project, out);	//this method's output is ugly, and no "newline" can be found.
			//自动清空文件
			xstream.marshal(project, new PrettyPrintWriter(new OutputStreamWriter(out)));
		} catch (Exception e) {
			//e.printStackTrace();
			log.warning(e.getMessage());
		}
		
		return 0;
	}
	
	public int addResources(String src, String dest){
		/*
		//TODO:
		这个工作建议还是放到前端去做,原因有以下几点：
		1. 增加资源（文件／文件夹），后端的.project XML文件没有必要记录这些文件，因此无需通知后端
		2. ＊ 如果拷贝文件的操作在后端执行，拷贝操作（写操作）和前端的写操作可能发生冲突 
		*/
		
		//src & dest: Dir/File. Must be the absolute Path.
		File srcPath = new File(src);
		File destPath = new File(dest);
		if(srcPath.isFile()){
			//导入单个文件
		}
		else if(srcPath.isDirectory()){
			//导入整个目录
		}
		else{
			return -1;
		}
		return 0;
	}
	
	public int removeResources(String resource){
		return 0;
	}
	
	//return a json string.
	public String getOpenedProjects(){
	    JsonObject object = new JsonObject();  // 创建一个json对象
	    for(OpenedProject op : openedProjs){
	    	//NOTE: 不能以名称作为主键，否则无法添加重名的项目
	    	//object.addProperty(op.projectName, op.savedPath);
	    	object.addProperty(op.savedPath, op.projectName);	//按照timestamp的由大到小的顺序排序
	    	//object.addProperty(op.savedPath, op.timestamp);
	    }
	    String jsonStr = object.toString();   // 将json对象转化成json字符串
		return jsonStr;
	}
	
	//项目切换时，由于系统中只有一个项目对象，因此需要将旧的项目的信息清空一下
	//需要单独的clear吗？直接在import和open中操作就可以吧？
	public void clearPrevProject(){
		//TODO: clear the previous project info.
		//注意：只修改内存中的数据(Project类)，不能修改硬盘上(上一个项目存储位置)的数据
	}
	
	//The following are Debug Codes:
	public void showProject(){
		System.out.println("Project Name: " + project.projectName);
		System.out.println("Saved Path: " + project.savedPath);
		System.out.println("Author: " + project.author);
		System.out.println("Date: " + project.date);
		System.out.println("Comments: " + project.comments);
		System.out.println("Opened Projects:" + openedProjs);
		System.out.println();
	}
}