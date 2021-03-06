var newProjectModal = {
	initialize:function(option_){
		if($('#newProjectModal').length>0){
			$("#newprojectModal").modal("show");
		}
		else{
			var projectModal = this.projectModal(option_);
			$('#container').append(projectModal);
			$("#newprojectModal").modal("show");			
		}

		// //TODO:快速进入脚本页面,不用了之后要删去。
		// $('#creatProjectButton').click();
		// $('#creatProjectModalFooterConfirm').click();
	},
	//创建modal的主要部分
	projectModal:function(option_){
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
		if(option_){ //此处表示是从文件点击创建项目时产生的modal，只有创建和从已有项目中创建两项。
			var modalHeader = this.projectModalHeader1();
			var modalBody = this.projectModalBody1();
			var ModalFooter = this.projectModalFooter1();
		}
		else{
			var modalHeader = this.projectModalHeader();
			var modalBody = this.projectModalBody();
			var ModalFooter = this.projectModalFooter();
		}

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
			'id':'projectModalHeader',
		});
		var modalHeaderCreate = $('<div>',{
			'id':'projectModalHeaderCreate',
		});
		modalHeader.append(modalHeaderCreate);
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
		var modalFooterCreate = $('<div>',{
			'id':'modalFooterCreate'
		});
		var closeButton = $('<button>',{
			'class':'btn btn-default',
			'data-dismiss':'modal',
			'id':'projectModalFooterQuit',
			'onclick':'newProjectModal.removeNewprojectModal()',
			'text':'退出'     //注意，关闭之后就要把这个整体的model在container中删除
		});

		modalFooterCreate.append(closeButton);
		modalFooter.append(modalFooterCreate);
		return modalFooter;
	},

	projectModalHeader1:function(){
		var modalHeader = $('<div>',{
			'class':'modal-header',
			'id':'projectModalHeader'	
		});
		var modalHeaderCreate = $('<div>',{
			'id':'projectModalHeaderCreate',
			'text':'创建新项目'
		});
		modalHeader.append(modalHeaderCreate);
		return modalHeader;
	},
	projectModalBody1:function(){
		var modalBody = $('<div>',{
			'class':'modal-body',
			'id':'projectModalBody'
		});
		//注意，在里面添加具体内容，还是要加入div来添加
		var startProjectModalBody = $('<div>',{
			'class':'startProjectModalBody',
			'id':'startProjectModalBody'
		});
		
		var creatNewProject = $('<div>',{
			'class':'creatNewProject'
		});
		var creatProjectInput = '<input type="radio" name="optionsRadios" value="1" checked="true">创建新项目</input>'

		var creatNewProjectFromExisted = $('<div>',{
			'class':'creatNewProjectFromExisted'
		});
		var creatNewProjectFromExistedInput = '<input type="radio" name="optionsRadios" value="2">从已有项目中创建</input>'


		creatNewProject.append(creatProjectInput);
		creatNewProjectFromExisted.append(creatNewProjectFromExistedInput);
		startProjectModalBody.append(creatNewProject);
		startProjectModalBody.append(creatNewProjectFromExisted);
		modalBody.append(startProjectModalBody);

		return modalBody;
	},
	projectModalFooter1:function(){
		var modalFooter = $('<div>',{
			'class':'projectModalFooter modal-footer',
			'id':'projectModalFooter'
		});
		var modalFooterCreate = $('<div>',{
			'class':'modalFooterCreate',
			'id':'modalFooterCreate'
		});
		var nextButton = $('<button>',{
			'class':'btn btn-default',
			'id':'newProjectModalFooter1nextButton',
			'onclick':'newProjectModal.newProjectModalFooter1nextButtonOnClick()',
			'text':'下一步'     //注意，关闭之后就要把这个整体的model在container中删除
		});
		var closeButton = $('<button>',{
			'class':'btn btn-default',
			'data-dismiss':'modal',
			'id':'newProjectModalFooter1closeButton',
			'onclick':'newProjectModal.removeNewprojectModal()',
			'text':'退出'     //注意，关闭之后就要把这个整体的model在container中删除
		});

		modalFooterCreate.append(nextButton)
		modalFooterCreate.append(closeButton);
		modalFooter.append(modalFooterCreate);
		return modalFooter;
	},

	//此函数的作用是用来产生项目刚启动时产生的modal的body部分
	startProjectModalBody:function(){
		var ret = $('<div>',{
			'class':'startProjectModalBody',
			'id':'startProjectModalBody'
		});
		
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

		currentOpenProject =  this.currentOpenProjectBody();
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
		$('#projectModalHeaderCreate').hide();
		$('#startProjectModalBody').hide();
		$('#modalFooterCreate').hide();

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
		$('#projectModalHeaderCreate').hide();
		$('#startProjectModalBody').hide();
		$('#modalFooterCreate').hide();

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

	newProjectModalFooter1nextButtonOnClick:function(){
		var selectProject = $('#startProjectModalBody input:radio:checked').val();
		if (selectProject=='1') {
		   //是点击的创建新项目
		   newProjectModal.createProjectButtonOnClick();
		}
		else{
			//是点击的从已有项目中创建。
			newProjectModal.creatProjectFromExistedButtonOnClick()
		}
	},

}