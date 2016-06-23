var java = require('java');

//sxy: 1. classpath.push is essential here, to find the specific/customized class(src.Hello).
//     2. class.push() statements MUST be put in front of all the "import()" and "newInstance()" statements.
//sxy: NOTE here, the current working directory is the directory of file(aka. index.html) calling project.js instead of the directory of "project.js".
//java.classpath.push("../../bin")	//NO   cannot find the class Project.
java.classpath.push("bin");
//push jar files into classpath.
//sxy NOTE: must restrict to the jar file, intead of the directory.
java.classpath.push("javaSrc/thirdPartyJARs/gson-2.3.1.jar");
java.classpath.push("javaSrc/thirdPartyJARs/xstream-1.4.9.jar");

var Project = java.import('Project');

//var project = new Project();
var project = Project.getInstanceSync();


//1. Create Project.
//TODO: the jsonString should be from the frontend.
var jsonString = "{\"projectName\": \"DWL\", " + 
				 "\"savedPath\": \"/home/sxy/DWLProj\", " + 
				 "\"author\": \"sxy\", " + 
				 "\"date\": \"2016.06.02\", " + 
				 "\"comments\": \"No comments\"}";
var result = project.createProjectSync(jsonString);
if(result == 0)
	console.log(result + " Project is created successfully.");
else
	console.log(result + " [Error] Creating Errors")


//2. Import Project.
result = project.importProjectSync("/home/sxy/TmpProj");
if(result == 0)
	console.log(result + " /home/sxy/TmpProj is imported successfully.\n");
else
	console.log(result + " [Error] Importing Errors")

//4. Save Project.
result = project.saveProjectSync();
if(result == 0)
	console.log(result + " /home/sxy/TmpDWLProj is saved successfully.");
else
	console.log(result + " [Error] Save Errors");

//3. Open Project.
result = project.openProjectSync("/home/sxy/DWLProj");
if(result == 0)
	console.log(result + " /home/sxy/DWLProj is opened successfully.\n");
else
	console.log(result + " [Error] Open Errors");

//4. Save Project.
result = project.saveProjectSync();
if(result == 0)
	console.log(result + " /home/sxy/DWLProj is saved successfully.");
else
	console.log(result + " [Error] Save Errors");

//2. Import Project.
result = project.importProjectSync("/home/sxy/TmpProj");
if(result == 0)
	console.log(result + " /home/sxy/TmpProj is imported successfully.\n");
else
	console.log(result + " [Error] Importing Errors")

//4. Save Project.
result = project.saveProjectSync();
if(result == 0)
	console.log(result + " /home/sxy/TmpProj is saved successfully.");
else
	console.log(result + " [Error] Save Errors");

//3. Open Project.
result = project.openProjectSync("/home/sxy/DWLProj");
if(result == 0)
	console.log(result + " /home/sxy/DWLProj is opened successfully.\n");
else
	console.log(result + " [Error] Open Errors");

//4. Save Project.
result = project.saveProjectSync();
if(result == 0)
	console.log(result + " /home/sxy/DWLProj is saved successfully.");
else
	console.log(result + " [Error] Save Errors");

//5. Close Project.
project.closeProjectSync();
console.log("/home/sxy/DWLProj is closed successfully.");

//Show the opened Projects.
console.log("The opened Projects are as follows: ");
console.log(project.getOpenedProjectsSync());


console.log("Project Name: " + project.getProjectNameSync());
console.log("Saved Path: " + project.getSavedPathSync());
console.log("Author: " + project.getAuthorSync());
console.log("Date: " + project.getDateSync());
console.log("Comments: " + project.getCommentsSync());
