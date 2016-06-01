import com.google.gson.*;

public class Project {

  public static final void main(String[] args) {
      System.out.println("lxw");
  }

  /*
  jsonStr: the JSON String from the frontend. It may look like as follows:
  {
	  "projectName": "Project Name from frontend",
	  "savedPath": "Saved path from frontend",
	  "author": "author of the project",
	  "date": "date of the creation",
	  "comments": "comments of the project"
  
  */
  public void createProject(String jsonStr) {
      //TODO: When create a new project, we must ask the user if it is ok to close current project.
      // 创建json解析器
      JsonParser parser = new JsonParser();
      // 使用解析器解析json数据，返回值是JsonElement，强制转化为其子类JsonObject类型
      JsonObject object = (JsonObject) parser.parse(jsonStr);

      // 使用JsonObject的get(String memeberName)方法返回JsonElement，再使用JsonElement的getAsXXX方法得到真实类型
      System.out.println("projectName = " + object.get("projectName").getAsString());
      System.out.println("savedPath = " + object.get("savedPath").getAsString());
      System.out.println("author = " + object.get("author").getAsString());
      System.out.println("date = " + object.get("date").getAsString());
      System.out.println("comments = " + object.get("comments").getAsString());

      
      /*
      // 遍历JSON数组
      JsonArray languages = object.getAsJsonArray("languages");
      for (JsonElement jsonElement : languages) {
          JsonObject language = jsonElement.getAsJsonObject();
          System.out.println(
                  "id = " + language.get("id").getAsInt() +
                          ",ide = " + language.get("ide").getAsString() +
                          ",name = " + language.get("name").getAsString()
          );
      }
      */
  }

  public void openProject() {
      //TODO: When open a project, we must ask the user if it is ok to close current project.
  }

  public void loadProject() {

  }

  public void editProject() {

  }

  public void closeProject() {

  }
}