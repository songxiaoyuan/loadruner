//用来产生显示项目的主要内容信息。
var projectDescription = {
	initialize:function(){
		//首先删除以前存在的div
		//TODO:如果需要提示保存现有信息，我觉得应该保存现有项目的信息。
		$('#projectInformationFun').remove();
		$('#projectResourceFun').remove();
		$('#projectDetails').remove();
		
		var projectDetails = this.projectDetails();
		$('#Description').append(projectDetails);

		var projectInformation = this.projectInformation();
		$('#projectInformation').append(projectInformation);

		var projectResource = this.projectResource();
		$('#projectResource').append(projectResource);
	},

	//用来产生左边的项目信息,返回是一个di。
	projectInformation:function(){
		var ret = $('<div>',{
			'class':'projectInformation',
			'id':'projectInformationFun'
		});
		var projectInformationHeader = $('<div>',{
			'class':'projectInformationHeader',
			'id':'projectInformationHeader',
			'text':'项目信息'
		});
		var projectDetailsContent = $('<div>',{
			'class':'projectDetailsContent'
		});

		var projectName = $('<div>',{
		});

		var projectNameLabel = $('<div>',{
			'text':'project1'
		});
		projectName.append(projectNameLabel);

		var projectPrincipal = $('<div>',{
		});
		var projectPrincipalLabel = $('<div>',{
			'text':'项目负责人:'
		});
		var projectPrincipalInput = $('<div>',{
			'text':'张一山'
		});
		projectPrincipal.append(projectPrincipalLabel);
		projectPrincipal.append(projectPrincipalInput);

		var projectParticipation = $('<div>',{
		});
		var projectParticipationLabel = $('<div>',{
			'text':'参与人:'
		});
		var projectParticipationInput = $('<div>',{
			'text':'张一山、李小龙'
		});
		projectParticipation.append(projectParticipationLabel);
		projectParticipation.append(projectParticipationInput);

		var projectExecutionTime = $('<div>',{
		});
		var projectExecutionTimeLabel = $('<div>',{
			'text':'执行时间:'
		});
		var projectExecutionTimeInput = $('<div>',{
			'text':'2016.02.22-2016.03.20'
		});
		projectExecutionTime.append(projectExecutionTimeLabel);
		projectExecutionTime.append(projectExecutionTimeInput);


		projectDetailsContent.append(projectName);
		projectDetailsContent.append(projectPrincipal);
		projectDetailsContent.append(projectParticipation);
		projectDetailsContent.append(projectExecutionTime);


		ret.append(projectDetailsHeader);
		ret.append(projectDetailsContent);
		return ret;
	},

	//用来产生左边的项目资源,返回是一个div。
	projectResource:function(){
		var ret = $('<div>',{
			'class':'projectResource',
			'id':'projectResourceFun'
		});
		var projectResourceHeader = $('<div>',{
			'class':'projectResourceHeader',
			'id':'projectResourceHeader',
			'text':'项目资源'
		});
		var projectResourceContent = $('<div>',{
			'class':'projectResourceContent',
			'id':'projectResourceContent'
		});

		var projectResourceData = appData.projectResourceData;

		projectResourceContent.treeview({
		  showBorder: false,
		  data: projectResourceData
		});


		ret.append(projectResourceHeader);
		ret.append(projectResourceContent);
		return ret;
	},

	//用来产生右边的详细信息,返回是一个div，包括header，body和footer。
	projectDetails:function(){
		var ret = $('<div>',{
			'class':'projectDetails',
			'id':'projectDetails'
		});
		var projectDetailsHeader = $('<div>',{
			'class':'projectDetailsHeader',
			'id':'projectDetailsHeader',
			'text':'项目信息'
		});
		var projectDetailsContent = $('<form>',{
			'class':'projectDetailsContent'
		});
		var projectDetailsFooter = $('<div>',{
			'class':'projectDetailsFooter'
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

		var projectNumber = $('<div>',{
			'class':'form-group'
		});

		var projectNumberLabel = $('<label>',{
			'for':'projectNumberLabel',
			'text':'项目编号'
		});
		var projectNumberInput = $('<input>',{
			'type':'text',
			'placeholder':'xxxxxxxx'
		});
		projectNumber.append(projectNumberLabel);
		projectNumber.append(projectNumberInput);

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
		savePath.append(savePathLabel);
		savePath.append(savePathInput);

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
			'id':'projectDetailsSelectDate',
			'type':'text',
		});
		projectCreateDate.append(projectCreateDateLabel);
		projectCreateDate.append(projectCreateDateInput);

		var projectPrincipal = $('<div>',{
			'class':'form-group'
		});
		var projectPrincipalLabel = $('<label>',{
			'for':'remarkInfoLabel',
			'text':'项目负责人'
		});
		var projectPrincipalInput = $('<input>',{
			'type':'text',
			'placeholder':'张一山'
		});
		projectPrincipal.append(projectPrincipalLabel);
		projectPrincipal.append(projectPrincipalInput);

		var projectParticipation = $('<div>',{
			'class':'form-group'
		});
		var projectParticipationLabel = $('<label>',{
			'for':'remarkInfoLabel',
			'text':'参与人'
		});
		var projectParticipationInput = $('<input>',{
			'type':'text',
			'placeholder':'张一山、李小龙'
		});
		projectParticipation.append(projectParticipationLabel);
		projectParticipation.append(projectParticipationInput);

		var projectExecutionTime = $('<div>',{
			'class':'form-group'
		});
		var projectExecutionTimeLabel = $('<label>',{
			'for':'remarkInfoLabel',
			'text':'执行时间'
		});
		var projectExecutionTimeInput = $('<input>',{
			'type':'text',
			'placeholder':'2016.02.22-2016.03.20'
		});
		projectExecutionTime.append(projectExecutionTimeLabel);
		projectExecutionTime.append(projectExecutionTimeInput);

		var remarkInfo = $('<div>',{
			'class':'form-group'
		});
		var remarkInfoLabel = $('<label>',{
			'for':'remarkInfoLabel',
			'text':'备注信息'
		});
		var remarkInfoInput = $('<input>',{
			'type':'text',
			'placeholder':''
		});
		remarkInfo.append(remarkInfoLabel);
		remarkInfo.append(remarkInfoInput);


		projectDetailsContent.append(projectName);
		projectDetailsContent.append(projectNumber);
		projectDetailsContent.append(savePath);
		projectDetailsContent.append(projectFounder);
		projectDetailsContent.append(projectCreateDate);
		projectDetailsContent.append(projectPrincipal);
		projectDetailsContent.append(projectParticipation);
		projectDetailsContent.append(projectExecutionTime);
		projectDetailsContent.append(remarkInfo);

		var projectDetailsSaveButton = $('<button>',{
			'class':'btn btn-default',
			'id':'projectDetailsSaveButton',
			'onclick':'projectDescription.projectDetailsSaveButtonOnClick()',
			'text':'保存'
		});

		projectDetailsFooter.append(projectDetailsSaveButton);

		ret.append(projectDetailsHeader);
		ret.append(projectDetailsContent);
		ret.append(projectDetailsFooter);
		return ret;
	},

	projectDetailsSaveButtonOnClick:function(){
		window.alert('projectDetailsSaveButtonOnClick');
	},
}