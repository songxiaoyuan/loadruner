import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import com.google.gson.*;

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
		this.projectName = object.get("projectName").getAsString();
		this.savedPath = object.get("savedPath").getAsString();
		this.author = object.get("author").getAsString();
		SimpleDateFormat df = new SimpleDateFormat("yyyy.MM.dd");
		try{
			this.date = df.parse(object.get("date").getAsString());
			System.out.print(this.date);
		}
		catch(ParseException e){
			e.printStackTrace();
		}
		this.comments = object.get("comments").getAsString();
		
		// 1. Write data into .proj file.
		this.genXMLProjFile();
		// 2. Create 4 dirs
		this.mkFourDirs();

		/*
		 * // 遍历JSON数组 JsonArray languages = object.getAsJsonArray("languages");
		 * for (JsonElement jsonElement : languages) { JsonObject language =
		 * jsonElement.getAsJsonObject(); System.out.println( "id = " +
		 * language.get("id").getAsInt() + ",ide = " +
		 * language.get("ide").getAsString() + ",name = " +
		 * language.get("name").getAsString() ); }
		 */
	}
	public void genXMLProjFile(){
		
	}
	public void mkFourDirs(){
		
	}

	public void openProject() {
		// TODO: When open a project, we must ask the user if it is ok to close
		// current project.
	}

	public void loadProject() {

	}

	public void editProject() {

	}

	public void closeProject() {

	}
}