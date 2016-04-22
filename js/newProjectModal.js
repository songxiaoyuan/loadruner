var newProjectModal = {
	initialize:function() {
		var projectModal = this.projectModal();
		$('#container').append(projectModal);
		$("#newprojectModal").modal("show");
	},
	//创建modal的主要部分
	projectModal:function(){
		var newprojectModal = $('<div>',{
			'class':'modal',
			'id':'newprojectModal'
		});
		var modalDialog = $('<div>',{
			'class':'modal-dialog'
		});
		var modalContent = $('<div>',{
			'class':'modal-content'
		});
		var modalHeader = this.projectModalHeader();
		var modalBody = this.projectModalBody();
		var ModalFooter = this.projectModalFooter();

		modalContent.append(modalHeader);
		modalContent.append(modalBody);
		modalContent.append(ModalFooter);

		modalDialog.append(modalContent);
		newprojectModal.append(modalDialog);

		return newprojectModal;
	},
	projectModalHeader:function(){
		var modalHeader = $('<div>',{
			'class':'modal-header',
			'text':'标题'
		});
		return modalHeader;
	},
	projectModalBody:function(){
		var modalBody = $('<div>',{
			'class':'modal-body',
		});
		//注意，在里面添加具体内容，还是要加入div来添加
		var startProjectModalBody=this.startProjectModalBody();
		modalBody.append(startProjectModalBody);
		
		// var newProjectModalBody = this.newProjectModalBody();
		// modalBody.append(newProjectModalBody);
		return modalBody;
	},
	projectModalFooter:function(){
		var modalFooter = $('<div>',{
			'class':'projectModalFooter modal-footer',
		});
		var closeButton = $('<button>',{
			'class':'btn btn-default',
			'data-dismiss':'modal',
			'text':'关闭'     //注意，关闭之后就要把这个整体的model在container中删除
		});
		var saveButton = $('<button>',{
			'class':'btn btn-primary',
			'text':'保存'
		});

		modalFooter.append(closeButton);
		modalFooter.append(saveButton);
		return modalFooter;
	},

	//此函数的作用是用来产生项目刚启动时产生的modal的body部分
	startProjectModalBody:function(){
		var ret = $('<div>',{
			'class':'startProjectModalBody',
		});
		currentOpenProject =  this.currentOpenProjectBody();
		var creatNewProject = $('<div>',{
			'class':'creatNewProject'
		});
		var creatNewProjectHeader = $('<div>',{
			'class':'creatNewProjectHeader',
			'text':'创建新项目'
		});
		var creatNewProjectButton = $('<button>',{
			'class':'creatNewProjectButton',
			'text':'创建项目'
		});
		var creatProjectFromExistedButton = $('<button>',{
			'class':'creatProjectFromExistedButton',
			'text':'从已有项目中创建'
		});

		creatNewProject.append(creatNewProjectHeader);
		creatNewProject.append(creatNewProjectButton);
		creatNewProject.append(creatProjectFromExistedButton);

		ret.append(currentOpenProject);
		ret.append(creatNewProject);
		return ret;
	},

	//此函数的作用是用来产生项目刚启动时产生的modal的body部分中左侧的部分，也就是最近打开的项目的div
	currentOpenProjectBody:function(){
		var ret = $('<div>',{
			'class':'currentOpenProject',
		});
		var currentProjectHeader = $('<div>',{
			'class':'currentProjectHeader',
			'text':'最近打开的项目'
		});
		var currentProjectBody = $('<div>',{
			'class':'currentProjectBody',
		});
		var currentProjectBodySelect = this.currentOpenProjectSelect();
		currentProjectBody.append(currentProjectBodySelect);

		var currentProjectFooter = $('<div>',{
			'class':'currentProjectFooter',
		});
		var openProjectButton = $('<button>',{
			'class':'openProjectButton',
			'text':'打开项目',
		});
		currentProjectFooter.append(openProjectButton);

		ret.append(currentProjectHeader);
		ret.append(currentProjectBody);
		ret.append(currentProjectFooter);
		return ret;
	},
  
    //用来产生最近打开项目的可选项
	currentOpenProjectSelect:function(){
		var ret = $('<select>',{
			'class':'currentOpenProjectSelect',
			'multiple':'multiple'
		});

		var currentOpenProjects= ['project1','project2','project3'];
		for(var i=0;i<currentOpenProjects.length;i++){
			var option = $('<option>',{
				'text':currentOpenProjects[i]
			});
			ret.append(option);
		}
		return ret;
	},

	//此函数的作用是用来产生点击创建项目会产生的body部分，整体是一个div
	newProjectModalBody:function(){
		var ret = $('<div>',{
			'class':'newProjectModalBody',
		});
		
		var newProjectModalBodyHeader = $('<div>',{
			'class':'newProjectModalBodyHeader',
			'text':'创建新项目'
		});
		var newProjectModalBodyContent = $('<form>',{
			'class':'newProjectModalBodyContent'
		});

		var projectName = $('<div>',{
			'class':'form-group'
		});

		var projectNameLabel = $('<label>',{
			'for':'projectNameLabel',
			'text':'项目名称'
		});
		var projectNameInput = $('<input>',{
			'type':'text',
			'placeholder':'project1'
		});
		projectName.append(projectNameLabel);
		projectName.append(projectNameInput);

		var savePath = $('<div>',{
			'class':'form-group'
		});
		var savePathLabel = $('<label>',{
			'for':'savePathLabel',
			'text':'保存路径'
		});
		var savePathInput = $('<input>',{
			'type':'text',
			'placeholder':'/home/user/project1'
		});
		var savePathBrowse = $('<input>',{
			'type':'file',
			'text':'浏览',   //TODO注意此处应该是浏览之后，在savePathInput内放入路径的！！
		});
		savePath.append(savePathLabel);
		savePath.append(savePathInput);
		savePath.append(savePathBrowse);

		var projectFounder = $('<div>',{
			'class':'form-group'
		});
		var projectFounderLabel = $('<label>',{
			'for':'projectFounderLabel',
			'text':'创建人'
		});
		var projectFounderInput = $('<input>',{
			'type':'text',
			'placeholder':'陈光'
		});
		projectFounder.append(projectFounderLabel);
		projectFounder.append(projectFounderInput);

		var projectCreateDate = $('<div>',{
			'class':'form-group'
		});
		var projectCreateDateLabel = $('<label>',{
			'for':'projectNameLabel',
			'text':'创建日期'
		});
		var projectCreateDateInput = $('<input>',{
			'type':'text',
			'placeholder':'2016.04.22'
		});
		var projectCreateDateSelect = $('<input>',{
			'type':'file',
			'text':'选择',   //TODO注意此处应该是选择之后，在projectCreateDateInput内放入时间的！！
		});
		projectCreateDate.append(projectCreateDateLabel);
		projectCreateDate.append(projectCreateDateInput);
		projectCreateDate.append(projectCreateDateSelect);

		var remarkInfo = $('<div>',{
			'class':'form-group'
		});
		var remarkInfoLabel = $('<label>',{
			'for':'remarkInfoLabel',
			'text':'备注信息'
		});
		var remarkInfoInput = $('<input>',{
			'type':'text',
			'placeholder':'测试项目'
		});
		remarkInfo.append(remarkInfoLabel);
		remarkInfo.append(remarkInfoInput);


		newProjectModalBodyContent.append(projectName);
		newProjectModalBodyContent.append(savePath);
		newProjectModalBodyContent.append(projectFounder);
		newProjectModalBodyContent.append(projectCreateDate);
		newProjectModalBodyContent.append(remarkInfo);

		ret.append(newProjectModalBodyHeader);
		ret.append(newProjectModalBodyContent);
		return ret;
	},

}