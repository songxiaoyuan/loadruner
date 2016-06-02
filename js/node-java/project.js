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

//Create Project.
//TODO: the jsonString should be from the frontend.
var jsonString = "{\"projectName\": \"DWL\", " + 
				 "\"savedPath\": \"/home/lxw/DWLProj\", " + 
				 "\"author\": \"lxw\", " + 
				 "\"date\": \"2016.06.02\", " + 
				 "\"comments\": \"No comments\"}";
project.createProjectSync(jsonString);
console.log("Project is created.");
