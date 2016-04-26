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
			'id':'projectModalHeader'
		});
		return modalHeader;
	},
	projectModalBody:function(){
		var modalBody = $('<div>',{
			'class':'modal-body',
			'id':'projectModalBody'
		});
		//注意，在里面添加具体内容，还是要加入div来添加
		var startProjectModalBody=this.startProjectModalBody();
		modalBody.append(startProjectModalBody);

		return modalBody;
	},
	projectModalFooter:function(){
		var modalFooter = $('<div>',{
			'class':'projectModalFooter modal-footer',
			'id':'projectModalFooter'
		});
		var closeButton = $('<button>',{
			'class':'btn btn-default',
			'data-dismiss':'modal',
			'id':'projectModalFooterQuit',
			'onclick':'newProjectModal.removeNewprojectModal()',
			'text':'退出'     //注意，关闭之后就要把这个整体的model在container中删除
		});

		modalFooter.append(closeButton);
		return modalFooter;
	},

	//此函数的作用是用来产生项目刚启动时产生的modal的body部分
	startProjectModalBody:function(){
		var ret = $('<div>',{
			'class':'startProjectModalBody',
			'id':'startProjectModalBody'
		});
		currentOpenProject =  this.currentOpenProjectBody();
		var creatNewProject = $('<div>',{
			'class':'creatNewProject'
		});
		var creatNewProjectHeader = $('<div>',{
			'class':'creatNewProjectHeader',
			'text':'创建新项目'
		});
		var creatProjectButton = $('<button>',{
			'class':'creatProjectButton',
			'id':'creatProjectButton',
			'onclick':'newProjectModal.createProjectButtonOnClick()',
			'text':'创建项目'
		});
		var creatProjectFromExistedButton = $('<button>',{
			'class':'creatProjectFromExistedButton',
			'id':'creatProjectFromExistedButton',
			'onclick':'newProjectModal.creatProjectFromExistedButtonOnClick()',
			'text':'从已有项目中创建'
		});

		creatNewProject.append(creatNewProjectHeader);
		creatNewProject.append(creatProjectButton);
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
  
    //用来产生最近打开项目的可选项.
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

	//此函数的作用是用来产生点击创建项目函数所发生的操作，包括将以前的startProjectModalBody div隐藏
	//然后将creatProjectFromExistedBody1 div显示，加上修改modal-footer的部分，添加取消，确定，和上一步的button。
	createProjectButtonOnClick:function(){

		//隐藏以前div，
		$('#startProjectModalBody').hide();
		$('#projectModalFooterQuit').hide();

		//添加显示现在div 如果有，表示是点击过上一步，直接显示就可以了
		if($('#createProjectModalBody').length>0){
			$('#createProjectModalBody').show();
			$('#createProjectModalHeader').show();
			$('#creatProjectModalFooter').show();
		}
		else{
			var createProjectModalBody = createProjectModalPage.createProjectModalBody();
			var createProjectModalHeader = createProjectModalPage.createProjectModalHeader();
			var creatProjectModalFooter = createProjectModalPage.creatProjectModalFooter();
			$('#projectModalBody').append(createProjectModalBody);
			$('#projectModalHeader').append(createProjectModalHeader);
			$('#projectModalFooter').append(creatProjectModalFooter);
		}
		newProjectModal.buddleDataTimePicker();

	},

	//此函数的作用是用来产生点击从已有项目中创建所发生的操作，包括将以前的startProjectModalBody div隐藏
	//然后将newProjectModalBody div显示，加上修改modal-footer的部分，添加取消，确定，和上一步的button。
	creatProjectFromExistedButtonOnClick:function(){
		//TODO:

		//隐藏以前div，
		$('#startProjectModalBody').hide();
		$('#projectModalFooterQuit').hide();

		//添加显示现在div 如果有，表示是点击过上一步，直接显示就可以了
		if($('#creatProjectFromExistedBody1').length>0){
			$('#creatProjectFromExistedBody1').show();
			$('#creatProjectFromExistedHeader').show();
			$('#creatProjectFromExistedFooter1').show();
		}
		else{
			var creatProjectFromExistedBody1 = creatProjectFromExistedModalPage.creatProjectFromExistedBody1();
			var creatProjectFromExistedHeader = creatProjectFromExistedModalPage.creatProjectFromExistedHeader();
			var creatProjectFromExistedFooter1 = creatProjectFromExistedModalPage.creatProjectFromExistedFooter1();
			$('#projectModalBody').append(creatProjectFromExistedBody1);
			$('#projectModalHeader').append(creatProjectFromExistedHeader);
			$('#projectModalFooter').append(creatProjectFromExistedFooter1);
		}

	},

	//creatProjectModalFooterCancel按钮click时的操作。也就是删除整个modal，这个可以公用。
	removeNewprojectModal:function(){
		$("#newprojectModal").on('hidden.bs.modal',function(){
			$('#newprojectModal').remove();
		});
	},
	//这是用来产生时间的控件
	buddleDataTimePicker:function(){
		$('#selectDateButton').datepicker().on('changeDate',function(ev) {
		  var selectDate = $('#selectDateButton').data('date');
		  $('#selectDate')[0].value=selectDate;
		  $('#selectDateButton').datepicker('hide');
		});
	},

}