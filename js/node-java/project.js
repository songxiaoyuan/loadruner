var java = require('java');

//lxw: 1. classpath.push is essential here, to find the specific/customized class(src.Hello).
//     2. class.push() statements MUST be put in front of all the "import()" and "newInstance()" statements.
//lxw: NOTE here, the current working directory is the directory of file(aka. index.html) calling project.js instead of the directory of "project.js".
//java.classpath.push("../../bin")	//NO   cannot find the class Project.
java.classpath.push("bin");
//push jar files into classpath.
//lxw NOTE: must restrict to the jar file, intead of the directory.
java.classpath.push("javaSrc/thirdPartyJARs/gson-2.3.1.jar");
java.classpath.push("javaSrc/thirdPartyJARs/xstream-1.4.9.jar");

var Project = java.import('Project');

//var project = new Project();
var project = Project.getInstanceSync();


//1. Create Project.
//TODO: the jsonString should be from the frontend.
var jsonString = "{\"projectName\": \"DWL\", " + 
				 "\"savedPath\": \"/home/lxw/DWLProj\", " + 
				 "\"author\": \"lxw\", " + 
				 "\"date\": \"2016.06.02\", " + 
				 "\"comments\": \"No comments\"}";
var result = project.createProjectSync(jsonString);
if(result == 0)
	console.log(result + " Project is created successfully.");
else
	console.log(result + " [Error] Creating Errors")
/*	*/

//2. Import Project.
result = project.importProjectSync("/home/lxw/MovedDWLProj");
if(result == 0)
	console.log(result + " /home/lxw/MovedDWLProj is imported successfully.\n");
else
	console.log(result + " [Error] Importing Errors")

//4. Save Project.
result = project.saveProjectSync();
if(result == 0)
	console.log(result + " /home/lxw/MovedDWLProj is saved successfully.");
else
	console.log(result + " [Error] Save Errors");

//3. Open Project.
result = project.openProjectSync("/home/lxw/DWLProj");
if(result == 0)
	console.log(result + " /home/lxw/DWLProj is opened successfully.\n");
else
	console.log(result + " [Error] Open Errors");

//4. Save Project.
result = project.saveProjectSync();
if(result == 0)
	console.log(result + " /home/lxw/DWLProj is saved successfully.");
else
	console.log(result + " [Error] Save Errors");

//5. Close Project.
project.closeProjectSync();
console.log("/home/lxw/DWLProj is closed successfully.");

/*
*/