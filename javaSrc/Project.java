import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.logging.Logger;

import com.google.gson.*;
import com.thoughtworks.xstream.XStream;
import com.thoughtworks.xstream.io.xml.PrettyPrintWriter;
import com.thoughtworks.xstream.io.xml.StaxDriver;

public class Project {
	private String projectName;
	private String savedPath;
	private String author;
	private Date date;
	private String comments;
	private List<Report> reports;
	private List<Result> results;
	private List<Scene> scenes;
	private List<Script> scripts;
	
	//Singleton	//系统中永远只有一个项目(处于使用中的项目)
	private Project(){}
	private static final Project project = new Project();
	private static final Logger log = MyLogger.getInstance();
	public static Project getInstance(){
		return project;
	}

	public static final void main(String[] args) {
		System.out.println("lxw");
	}

	/*
	 * jsonStr: the JSON String from the frontend. It may look like as follows:
	 * { "projectName": "Project Name from frontend", "savedPath":
	 * "Saved path from frontend", "author": "author of the project", "date":
	 * "date of the creation", "comments": "comments of the project"
	 * */
	public void createProject(String jsonStr) {
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
			//System.out.print(this.date);
		}
		catch(ParseException e){
			log.warning(e.getMessage());
		}
		project.comments = object.get("comments").getAsString();
		
		// 1. Write data into .proj file.
		this.writeXMLProjFile();
		// 2. Create 4 dirs
		this.mkFourDirs();

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

	public int readXMLProjFile(String projPath){
		//initialize the value of data members in Project
		File projDir = new File(projPath);
		File projFile = new File(projPath + File.separator + ".project");
		if(!projDir.isDirectory() || !projFile.isFile()){
			return -1;	//Error
		}
		
		try {
			XStream xstream = new XStream(new StaxDriver());
			Project projTemp = (Project)xstream.fromXML(projFile);
			showProject(projTemp);
		} catch (Exception e) {
			log.warning(e.getMessage());
		}
		return 0;	//Correct
	}
	
	public void mkFourDirs() {
		try {
			String prefix = project.savedPath + File.separator;
			
			File projDir = new File(prefix + "script");
			if (!projDir.exists()) {
				projDir.mkdirs();
			}
			projDir = new File(prefix + "scene");
			if (!projDir.exists()) {
				projDir.mkdirs();
			}
			projDir = new File(prefix + "result");
			if (!projDir.exists()) {
				projDir.mkdirs();
			}
			projDir = new File(prefix + "report");
			if (!projDir.exists()) {
				projDir.mkdirs();
			}
		} catch (Exception e) {
			//e.printStackTrace();
			log.warning(e.getMessage());
		}
	}
	
	public void importFourDirs(String projPath){
		
	}
	
	public void openProject() {
		// TODO: When open a project, we must ask the user if it is ok to close the current project.
	}

	public void importProject(String projPath) {
		// TODO: When open a project, we must ask the user if it is ok to close the current project.
		clearPrevProject();
		readXMLProjFile(projPath);
		//加载四个文件夹及文件夹中的内容
		importFourDirs(projPath);
	}
	
	public void editProject() {

	}

	public void closeProject() {
		//关闭项目之前先要保存项目
		saveProject();
		//TODO: 关闭项目后跳转到哪个页面？
	}
	
	public void saveProject(){
		//保存当前项目
		//1. 保存各个目录下的文件 2. 保存xml .project (更新其中的四个子目录的信息)  
	}
	
	//项目切换时，由于系统中只有一个项目对象，因此需要将旧的项目的信息清空一下
	//需要单独的clear吗？直接在import和open中操作就可以吧？
	public void clearPrevProject(){
		//TODO: clear the previous project info.
		//注意：只修改内存中的数据(Project类)，不能修改硬盘上(上一个项目存储位置)的数据
	}
	
	//The following are Debug Codes:
	public void showProject(Project project){
		System.out.println("Project Name: " + project.projectName);
		System.out.println("Saved Path: " + project.savedPath);
		System.out.println("Author: " + project.author);
		System.out.println("Date: " + project.date);
		System.out.println("Comments: " + project.comments);
	}
}