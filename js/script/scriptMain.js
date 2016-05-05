//这个文件就是用来管理脚本部分的函数.
var scriptMain={
	//此函数的作用是用来产生点击创建项目会产生的head部分，整体是一个div
	createProjectModalHeader:function(){
		var createProjectModalHeader = $('<div>',{
			'id':'createProjectModalHeader',
			'text':'创建新项目'
		});
		return createProjectModalHeader;
	},

	//此函数的作用是用来产生点击创建项目会产生的body部分，整体是一个div
	createProjectModalBody:function(){
		var ret = $('<div>',{
			'class':'createProjectModalBody',
			'id':'createProjectModalBody'
		});
		var createProjectModalBodyContent = $('<form>',{
			'class':'createProjectModalBodyContent'
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


		createProjectModalBodyContent.append(projectName);
		createProjectModalBodyContent.append(savePath);
		createProjectModalBodyContent.append(projectFounder);
		createProjectModalBodyContent.append(projectCreateDate);
		createProjectModalBodyContent.append(remarkInfo);

		ret.append(createProjectModalBodyContent);
		return ret;
	},

	//次函数的作用是用来产生创建新项目页面的modal角标的3个button，返回一个div。
	creatProjectModalFooter:function(){
		var ret = $('<div>',{
			'class':'creatProjectModalFooter',
			'id':'creatProjectModalFooter'
		});
		var creatProjectModalFooterBack = $('<button>',{
			'class':'btn btn-default',
			'id':'creatProjectModalFooterBack',
			'onclick':'createProjectModalPage.creatProjectModalFooterBackOnClick()',
			'text':'上一步'
		});
		var creatProjectModalFooterConfirm = $('<button>',{
			'class':'btn btn-default',
			'data-dismiss':'modal',
			'id':'creatProjectModalFooterConfirm',
			'onclick':'createProjectModalPage.creatProjectModalFooterConfirmOnClick()',
			'text':'确定'
		});
		var creatProjectModalFooterCancel = $('<button>',{
			'class':'btn btn-default',
			'data-dismiss':'modal',
			'id':'creatProjectModalFooterCancel',
			'onclick':'newProjectModal.removeNewprojectModal()',
			'text':'取消'
		});

		ret.append(creatProjectModalFooterBack);
		ret.append(creatProjectModalFooterConfirm);
		ret.append(creatProjectModalFooterCancel);
		return ret;
	},

	//creatProjectModalFooterBack按钮click时的操作，就是回到上一个页面
	creatProjectModalFooterBackOnClick:function(){
		//处理head部分
		$('#createProjectModalHeader').hide();
		//处理body部分
		$('#createProjectModalBody').hide();
		$('#startProjectModalBody').show();
		//处理footer部分.
		$('#creatProjectModalFooter').hide();
		$('#projectModalFooterQuit').show();
	},
	//creatProjectModalFooterConfirm按钮click时的操作。保存一些路径信息，删除整个modal，然后显示整个背景项目等div！！
	creatProjectModalFooterConfirmOnClick:function(){
		//TODO 保存信息到本地，

		//创建背景的所有div.
		projectDescription.initialize();
		$("#newprojectModal").on('hidden.bs.modal',function(){
			$('#newprojectModal').remove();
		});
	},

}
