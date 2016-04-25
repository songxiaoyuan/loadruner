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
			'id':'projectModalBody'
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
			'id':'projectModalFooter'
		});
		var closeButton = $('<button>',{
			'class':'btn btn-default',
			'data-dismiss':'modal',
			'id':'projectModalFooterQuit',
			'onclick':'newProjectModal.removeNewprojectModal()',
			'text':'退出'     //注意，关闭之后就要把这个整体的model在container中删除
		});
		// var saveButton = $('<button>',{
		// 	'class':'btn btn-primary',
		// 	'text':'保存'
		// });

		modalFooter.append(closeButton);
		// modalFooter.append(saveButton);
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
		var creatNewProjectButton = $('<button>',{
			'class':'creatNewProjectButton',
			'id':'creatNewProjectButton',
			'onclick':'newProjectModal.createNewProjectButtonOnClick()',
			'text':'创建项目'
		});
		var creatProjectFromExistedButton = $('<button>',{
			'class':'creatProjectFromExistedButton',
			'id':'creatProjectFromExistedButton',
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
			'id':'newProjectModalBody'
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
			'placeholder':'/home/user/project1'  //注意这个是用来提示输入的，真正的值应该是value！！！
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
			'class':'projectCreateDate'
		});
		var projectCreateDateLabel = $('<label>',{
			'for':'projectNameLabel',
			'text':'创建日期'
		});
		var projectCreateDateInput = $('<input>',{
			'id':'selectDate',
			'type':'text',
		});
		var selectSpan = $('<button>',{
		  'text':'选择',
		  'id':'selectDateButton',
		  'data-date':'2016.04.22',
		  'data-date-format':'yyyy.mm.dd'
		});
		projectCreateDate.append(projectCreateDateLabel);
		projectCreateDate.append(projectCreateDateInput);
		projectCreateDate.append(selectSpan);

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

	//此函数的作用是用来产生点击创建项目函数所发生的操作，包括将以前的startProjectModalBody div隐藏
	//然后将newProjectModalBody div显示，加上修改modal-footer的部分，添加取消，确定，和上一步的button。
	createNewProjectButtonOnClick:function(){

		//隐藏以前div，
		$('#startProjectModalBody').hide();

		//添加显示现在div 如果有，表示是点击过上一步，直接显示就可以了
		if($('#newProjectModalBody').length>0){
			$('#newProjectModalBody').show();
		}
		else{
			var newProjectModalBody = newProjectModal.newProjectModalBody();
			$('#projectModalBody').append(newProjectModalBody);
		}

		//添加modal-footer
		$('#projectModalFooterQuit').hide();
		if($('#creatNewProjectFooterButtons').length > 0){
			$('#creatNewProjectFooterButtons').show();
		}
		else{
			var creatNewProjectFooterButtons = newProjectModal.creatNewProjectFooterButtons();
			$('#projectModalFooter').append(creatNewProjectFooterButtons);
		}
		newProjectModal.buddleDataTimePicker();

	},

	//次函数的作用是用来产生创建新项目页面的modal角标的3个button，返回一个div。
	creatNewProjectFooterButtons:function(){
		var ret = $('<div>',{
			'class':'creatNewProjectFooterButtons',
			'id':'creatNewProjectFooterButtons'
		});
		var creatNewProjectFooterButtonsBack = $('<button>',{
			'class':'creatNewProjectFooterButtonsBack btn btn-default',
			'id':'creatNewProjectFooterButtonsBack',
			'onclick':'newProjectModal.creatNewProjectFooterButtonsBackOnClick()',
			'text':'上一步'
		});
		var creatNewProjectFooterButtonsConfirm = $('<button>',{
			'class':'creatNewProjectFooterButtonsConfirm btn btn-default',
			'data-dismiss':'modal',
			'id':'creatNewProjectFooterButtonsConfirm',
			'onclick':'newProjectModal.creatNewProjectFooterButtonsConfirmOnClick()',
			'text':'确定'
		});
		var creatNewProjectFooterButtonsCancel = $('<button>',{
			'class':'creatNewProjectFooterButtonsCancel btn btn-default',
			'data-dismiss':'modal',
			'id':'creatNewProjectFooterButtonsCancel',
			'onclick':'newProjectModal.removeNewprojectModal()',
			'text':'取消'
		});

		ret.append(creatNewProjectFooterButtonsBack);
		ret.append(creatNewProjectFooterButtonsConfirm);
		ret.append(creatNewProjectFooterButtonsCancel);
		return ret;
	},

	//creatNewProjectFooterButtonsBack按钮click时的操作，就是回到上一个页面
	creatNewProjectFooterButtonsBackOnClick:function(){
		//处理footer部分.
		$('#creatNewProjectFooterButtons').hide();
		$('#projectModalFooterQuit').show();

		//处理body部分
		$('#newProjectModalBody').hide();
		$('#startProjectModalBody').show();
	},

	//creatNewProjectFooterButtonsConfirm按钮click时的操作。保存一些路径信息，删除整个modal，然后显示整个背景项目等div！！
	creatNewProjectFooterButtonsConfirmOnClick:function(){
		//TODO 保存信息到本地，然后创建背景的所有div.
		$("#newprojectModal").on('hidden.bs.modal',function(){
			$('#newprojectModal').remove();
		});
	},

	//creatNewProjectFooterButtonsCancel按钮click时的操作。也就是删除整个modal，这个可以公用。
	removeNewprojectModal:function(){
		$("#newprojectModal").on('hidden.bs.modal',function(){
			$('#newprojectModal').remove();
		});
	},
	//这是用来产生时间的控件
	buddleDataTimePicker:function(){
		$('#selectDateButton').datepicker().on('changeDate',function(ev) {
		  var selectDate = $('#selectDateButton').data('date')
		  $('#selectDate')[0].value=selectDate;
		  $('#selectDateButton').datepicker('hide');
		});
	},

}