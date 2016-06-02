var java = require('java');

//lxw: 1. classpath.push is essential here, to find the specific/customized class(src.Hello).
//     2. class.push() statements MUST be put in front of all the "import()" and "newInstance()" statements.
//lxw: NOTE here, the current working directory is the directory of file(aka. index.html) calling project.js instead of the directory of "project.js".
//java.classpath.push("../../bin")	//NO   cannot find the class Project.
java.classpath.push("bin");
//push jar files into classpath.
//lxw NOTE: must restrict to the jar file, intead of the directory.
java.classpath.push("bin/thirdPartyJARs/gson-2.3.1.jar");

console.log("Start importing.");
var Project = java.import('Project');
console.log("End importing.");

var project = new Project();

//Create Project.
//TODO: the jsonString should be from the frontend.

var projectJson = {}
projectJson.projectName = "Project1"
projectJson.savedPath = "/home/sxy/tmp/"
projectJson.author = "author of the project"
projectJson.date = "date of the creation"
projectJson.comments = "comments of the project"

var projectJsonString = JSON.stringify(projectJson)

project.createProjectSync(projectJsonString);
console.log("Project is created.");

