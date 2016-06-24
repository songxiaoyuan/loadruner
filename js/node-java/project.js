var projectOperation = {
	//所有的操作都是通过这个project来操作的。
	project:null,
	initialize:function(){
		var java = require('java');
		java.classpath.push("bin");
		java.classpath.push("javaSrc/thirdPartyJARs/gson-2.3.1.jar");
		java.classpath.push("javaSrc/thirdPartyJARs/xstream-1.4.9.jar");
		var Project = java.import('Project');

		projectOperation.project = Project.getInstanceSync();
	},
	//创建一个项目
	createProject:function(projectJsonString_){
		// var projectJson = {};
		// projectJson.projectName = "Project1";
		// projectJson.savedPath = "/home/sxy/Project";
		// projectJson.author = "sxy";
		// projectJson.date = "2016.06.22";
		// projectJson.comments = "comments of the project";

		// var projectJsonString = JSON.stringify(projectJson);

		var result = projectOperation.project.createProjectSync(projectJsonString_);
		if(result == 0)
			console.log(result + " Project is created successfully.");
		else
			console.log(result + " [Error] Creating Errors");
	},
	//导入一个项目
	importProject:function(){
		var importPath = "/home/sxy/tmp/Project1";
		var result = projectOperation.project.importProjectSync(importPath);

		if(result == 0)
			console.log(result + " /home/sxy/tmp/Project1 is imported successfully.\n");
		else
			console.log(result + " [Error] Importing Errors")

	},
	openProject:function(){
		var projectPath = "/home/sxy/tmp/Project1";

		var result = projectOperation.project.openProjectSync(projectPath);
		if(result == 0)
			console.log(result + " /home/sxy/tmp/Project1 is opened successfully.\n");
		else
			console.log(result + " [Error] Open Errors");
	},
	saveProject:function(projectJsonString_){
		var result = projectOperation.project.saveProjectSync();
		if(result == 0)
			console.log(result + " /home/sxy/TmpDWLProj is saved successfully.");
		else
			console.log(result + " [Error] Save Errors");
	},

	getProjectName:function(){
		return projectOperation.project.getProjectNameSync();
	},

	getProjectSavePath:function(){
		return projectOperation.project.getSavedPathSync();
	},

	getProjectAuthor:function(){
		return projectOperation.project.getAuthorSync();
	},

	getProjectCreateDate:function(){
		return projectOperation.project.getDateSync();
	},

	getProjectComments:function(){
		return projectOperation.project.getCommentsSync();
	},

}

