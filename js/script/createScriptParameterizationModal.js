//用来产生点击参数化时产生的modal
//TODO：具体的操作之后的内容还是没有做呢。
var createScriptParameterizationModal = {
	initialize:function() {
		if($('#createScriptParameterizationModal').length>0){
			$("#createScriptParameterizationModal").modal("show");
		}
		else{
			var scriptParameterizationModal = this.createScriptParameterizationModal();
			$('#container').append(scriptParameterizationModal);
			$("#createScriptParameterizationModal").modal("show");
		}
	},
	//创建modal的主要部分
	createScriptParameterizationModal:function(){
		var createScriptParameterizationModal = $('<div>',{
			'class':'modal',
			'id':'createScriptParameterizationModal'
		});
		var modalDialog = $('<div>',{
			'class':'modal-dialog'
		});
		var modalContent = $('<div>',{
			'class':'scriptParameterizationModalContent modal-content'
		});
		var modalHeader = this.createScriptParameterizationModalHeader();
		var modalBody = this.createScriptParameterizationModalBody();
		var modalFooter = this.createScriptParameterizationModalFooter();

		modalContent.append(modalHeader);
		modalContent.append(modalBody);
		modalContent.append(modalFooter);

		modalDialog.append(modalContent);
		createScriptParameterizationModal.append(modalDialog);

		return createScriptParameterizationModal;
	},
	createScriptParameterizationModalHeader:function(){
		var modalHeader = $('<div>',{
			'class':'modal-header',
			'id':'createScriptParameterizationModalHeader',
			'text':'参数化'
		});
		return modalHeader;
	},
	createScriptParameterizationModalBody:function(){
		var modalBody = $('<div>',{
			'class':'modal-body',
			'id':'createScriptParameterizationModalBody'
		});
		//注意，在里面添加具体内容，还是要加入div来添加
		var createScriptParameterizationModalBody=this.createScriptParameterizationModalBodyContent();
		modalBody.append(createScriptParameterizationModalBody);

		return modalBody;
	},
	createScriptParameterizationModalFooter:function(){
		var modalFooter = $('<div>',{
			'class':'modal-footer',
			'id':'createScriptParameterizationModalFooter'
		});
		var closeButton = $('<button>',{
			'class':'btn btn-default',
			'data-dismiss':'modal',
			'id':'createScriptParameterizationModalFooterCloseButton',
			'onclick':'createScriptParameterizationModal.removeCreateScriptParameterizationModal()',
			'text':'关闭'     //注意，关闭之后就要把这个整体的model在container中删除
		});


		modalFooter.append(closeButton);
		return modalFooter;
	},

	//此函数的作用是用来产生点击参数化时的modal的body部分的界面
	createScriptParameterizationModalBodyContent:function(){
		var ret = $('<div>',{
			'class':'createScriptParameterizationModalBodyContent',
		});

		var leftDiv = $('<div>',{
			'class':'createScriptParameterizationModalBodyContentLeft'
		});
		var rightDiv = $('<div>',{
			'class':'createScriptParameterizationModalBodyContentRight tab-content'
		});

		var loginNameTabContentDiv = createScriptParameterizationModal.createScriptParameterizationModalBodyContentRightTabContent('LoginName',1);
		var passWordTabContentDiv = createScriptParameterizationModal.createScriptParameterizationModalBodyContentRightTabContent('PassWord');
		rightDiv.append(loginNameTabContentDiv);
		rightDiv.append(passWordTabContentDiv);

		//产生左边的参数列表
		var parameterListUl = $('<ul>',{
		});
		var LoginNameli = $('<li>',{
		});
		var LoginNamea = $('<a>',{
			'href':'#ScriptParameterizationModalBodyContentRightLoginNameTabContent',
			'data-toggle':'tab',
			'text':'LoginName'
		});
		LoginNameli.append(LoginNamea);

		var PassWordli = $('<li>',{
		});
		var PassWorda = $('<a>',{
			'href':'#ScriptParameterizationModalBodyContentRightPassWordTabContent',
			'data-toggle':'tab',
			'text':'PassWord'
		});
		PassWordli.append(PassWorda);

		parameterListUl.append(LoginNameli);
		parameterListUl.append(PassWordli);
		leftDiv.append(parameterListUl);


		ret.append(leftDiv);
		ret.append(rightDiv);
		return ret;
	},

	//此函数的作用是用来产生点击参数化时的modal的body部分的界面的Tab内容部分
	createScriptParameterizationModalBodyContentRightTabContent:function(tabName,index){
		var ret = $('<div>',{
			'class':'rightTabContentDiv tab-pane fade',
			'id':'ScriptParameterizationModalBodyContentRight'+tabName+'TabContent',
		});
		if(index && index==1){
			ret.addClass('in active');
		}

		var upDiv = createScriptParameterizationModal.createScriptParameterizationModalBodyContentRightUpDiv(tabName);

		var downDiv = createScriptParameterizationModal.createScriptParameterizationModalBodyContentRightDownDiv(tabName);

		ret.append(upDiv);
		ret.append(downDiv);

		return ret;
	},

	//此函数的作用是用来产生点击参数化时的modal的body部分的界面的tab内容部分的上部div
	createScriptParameterizationModalBodyContentRightUpDiv:function(tabName){
		var ret = $('<div>',{
			'class':'ScriptParameterizationModalBodyContentRightUpDiv'
		});

		var divInLine1 = $('<div>',{
			'class':'divInLine'
		});
		var divInLine2 = $('<div>',{
			'class':'divInLine'
		});
		var divInLine3 = $('<div>',{
			'class':'divInLine'
		});

		var parameterName = $('<div>',{
			'class':'form-group'
		});
		var parameterNameLabel = $('<label>',{
			'for':'parameterNameLabel',
			'text':'参数名称'
		});
		var parameterNameInput = $('<input>',{
			'type':'text',
			'placeholder':tabName
		});
		parameterName.append(parameterNameLabel);
		parameterName.append(parameterNameInput);

		var dataDistributionWay = $('<div>',{
			'class':'form-group'
		});
		var dataDistributionWayLabel = $('<label>',{
			'for':'dataDistributionWayLabel',
			'text':'数据分配方式'
		});
		var dataDistributionWayInput = $('<select>',{
			'class':'dataDistributionWayInput'
		});
		var dataDistributionWayType= ['随机','顺序','唯一'];
		for(var i=0;i<dataDistributionWayType.length;i++){
			var option = $('<option>',{
				'value':dataDistributionWayType[i],
				'text':dataDistributionWayType[i]
			});
			dataDistributionWayInput.append(option);
		}
		dataDistributionWay.append(dataDistributionWayLabel);
		dataDistributionWay.append(dataDistributionWayInput);

		divInLine1.append(parameterName);
		divInLine1.append(dataDistributionWay);

		var defaultValue = $('<div>',{
			'class':'form-group'
		});
		var defaultValueLabel = $('<label>',{
			'for':'defaultValueLabel',
			'text':'默认值'
		});
		var defaultValueInput = $('<input>',{
			'type':'text',
			'placeholder':'test001'
		});
		defaultValue.append(defaultValueLabel);
		defaultValue.append(defaultValueInput);

		var dataUpdateWay = $('<div>',{
			'class':'form-group'
		});
		var dataUpdateWayLabel = $('<label>',{
			'for':'dataUpdateWayLabel',
			'text':'数据更新方式'
		});
		var dataUpdateWayInput = $('<select>',{
			'class':'dataUpdateWayInput'
		});
		var dataUpdateWayType= ['每次迭代','每次出现','仅一次'];
		for(var i=0;i<dataUpdateWayType.length;i++){
			var option = $('<option>',{
				'value':dataUpdateWayType[i],
				'text':dataUpdateWayType[i]
			});
			dataUpdateWayInput.append(option);
		}
		dataUpdateWay.append(dataUpdateWayLabel);
		dataUpdateWay.append(dataUpdateWayInput);

		divInLine2.append(defaultValue);
		divInLine2.append(dataUpdateWay);

		var getValueWay = $('<div>',{
			'class':'form-group'
		});
		var getValueWayLabel = $('<label>',{
			'for':'getValueWayLabel',
			'text':'取值方式'
		});
		var getValueWayInput = $('<select>',{
			'class':'getValueWayInput'
		});
		var getValueWayType= ['随机数','从文件读取','从数据库中读取','自定义','正则表达式'];
		var getValueWayClass= ['randomNumberClass','readFromFileClass','readFromDataBaseClass','userDefinedClass','regularExpressionClass'];
		for(var i=0;i<getValueWayType.length;i++){
			var option = $('<option>',{
				'value':getValueWayClass[i],
				'text':getValueWayType[i]
			});
			getValueWayInput.append(option);
		}
		getValueWay.append(getValueWayLabel);
		getValueWay.append(getValueWayInput);
		//绑定事件，及选择取值方式之后，下方的div会根据选择不同的值而发生变化。
		getValueWayInput.change(function() {
			//window.alert($(this).children('option:selected').val());
			var tabContentId = 'ScriptParameterizationModalBodyContentRight'+tabName+'TabContent';
			var contentRightDownDiv = $('#'+tabContentId+' > .ScriptParameterizationModalBodyContentRightDownDiv');
			var classType = $(this).children('option:selected').val();
			// $('.ScriptParameterizationModalBodyContentRightDownDiv').children('div').hide();
			contentRightDownDiv.children('div').hide();	
			// $('.ScriptParameterizationModalBodyContentRightDownDiv').children('.'+classTypea).show();
			contentRightDownDiv.children('.'+classType).show();
		});

		var beyondBorder = $('<div>',{
			'class':'form-group'
		});
		var beyondBorderLabel = $('<label>',{
			'for':'beyondBorderLabel',
			'text':'超出边界时'
		});
		var beyondBorderInput = $('<select>',{
			'class':'beyondBorderInput'
		});
		var beyondBorderType= ['从列表起始位置重新读取','在列表中随机读取','不取值'];
		for(var i=0;i<beyondBorderType.length;i++){
			var option = $('<option>',{
				'value':beyondBorderType[i],
				'text':beyondBorderType[i]
			});
			beyondBorderInput.append(option);
		}
		beyondBorder.append(beyondBorderLabel);
		beyondBorder.append(beyondBorderInput);

		divInLine3.append(getValueWay);
		divInLine3.append(beyondBorder);

		ret.append(divInLine1);
		ret.append(divInLine2);
		ret.append(divInLine3);

		return ret;
	},

	//此函数的作用是用来产生点击参数化时的modal的body部分的界面的tab内容部分的下部div
	createScriptParameterizationModalBodyContentRightDownDiv:function(tabName){
		var ret = $('<div>',{
			'class':'ScriptParameterizationModalBodyContentRightDownDiv'
		});

		var randomNumberClass = createScriptParameterizationModal.createRandomNumberClassDiv(tabName);
		var readFromFileClass = createScriptParameterizationModal.createReadFromFileClassDiv(tabName);
		var readFromDataBaseClass = createScriptParameterizationModal.createReadFromDataBaseClassDiv(tabName);
		var userDefinedClass = createScriptParameterizationModal.createUserDefinedClassDiv(tabName);
		var regularExpressionClass = createScriptParameterizationModal.createRegularExpressionClassDiv(tabName);

		ret.append(randomNumberClass);
		ret.append(readFromFileClass);
		ret.append(readFromDataBaseClass);
		ret.append(userDefinedClass);
		ret.append(regularExpressionClass);

		ret.children('div').hide();
		ret.children('.randomNumberClass').show();

		return ret;
	},

	//此函数的作用是用来产生点击参数化时的modal的body部分的界面的tab内容部分的下部div中点击随机数的部分
	createRandomNumberClassDiv:function(tabName){
		var ret = $('<div>',{
			'class':'randomNumberClass'
		});


		var randomNumberClassDivLeft = $('<div>',{
			'class':'randomNumberClassDivLeft'
		});
		var randomNumberClassDivRight = $('<div>',{
			'class':'randomNumberClassDivRight'
		});

		var getValueWay = $('<div>',{
			'class':'form-group',
			'text':'取值方式'
		});

		var replaceValue = $('<div>',{
			'class':'form-group'
		});
		var replaceValueLabel = $('<label>',{
			'for':'replaceValueLabel',
			'text':'替换值'
		});
		var replaceValueInput = $('<input>',{
			'type':'text',
			'placeholder':1
		});
		replaceValue.append(replaceValueLabel);
		replaceValue.append(replaceValueInput);

		var downLine = $('<div>',{
			'class':'form-group'
		});
		var downLineLabel = $('<label>',{
			'for':'downLineLabel',
			'text':'下线'
		});
		var downLineInput = $('<input>',{
			'type':'text',
			'placeholder':1
		});
		downLine.append(downLineLabel);
		downLine.append(downLineInput);

		var upLine = $('<div>',{
			'class':'form-group'
		});
		var upLineLabel = $('<label>',{
			'for':'upLineLabel',
			'text':'上线'
		});
		var upLineInput = $('<input>',{
			'type':'text',
			'placeholder':6
		});
		upLine.append(upLineLabel);
		upLine.append(upLineInput);

		randomNumberClassDivLeft.append(getValueWay);
		randomNumberClassDivLeft.append(replaceValue);
		randomNumberClassDivLeft.append(downLine);
		randomNumberClassDivLeft.append(upLine);

		var parameterValue = $('<div>',{
			'class':'parameterValueDiv',
			'text':'参数值'
		});
		var parameterValueTableDiv = $('<div>',{
			'class':'parameterValueTableDiv',
		});
		var parameterValueTable = $('<table>',{
			'class':'createParameterListTable',
			'border':'1',
			'cellspacing':'0',
			'cellpadding':'5'
		});
		for (var i = 1; i <=6 ; i++) {
			var tr = $('<tr>',{});
			var td1 = $('<td>',{
				'text':i
			});
			var td2 = $('<td>',{});
			var td3 = $('<td>',{});
			tr.append(td1);
			tr.append(td2);
			tr.append(td3);
			parameterValueTable.append(tr);
		}
		parameterValueTableDiv.append(parameterValueTable);

		randomNumberClassDivRight.append(parameterValue);
		randomNumberClassDivRight.append(parameterValueTableDiv);

		ret.append(randomNumberClassDivLeft);
		ret.append(randomNumberClassDivRight);

		return ret;
	},

	//此函数的作用是用来产生点击参数化时的modal的body部分的界面的tab内容部分的下部div中点击从文件中读取的部分
	createReadFromFileClassDiv:function(tabName){
		var ret = $('<div>',{
			'class':'readFromFileClass'
		});


		var parameterValueDiv = $('<div>',{
			'class':'parameterValueDiv',
			'text':'参数值'
		});
		var readFromFileClassDivDown = $('<div>',{
			'class':'readFromFileClassDivDown'
		});
		var readFromFileClassDivDownLeft = $('<div>',{
			'class':'readFromFileClassDivDownLeft'
		});
		var readFromFileClassDivDownRight = $('<div>',{
			'class':'readFromFileClassDivDownRight'
		});


		var selectFile = $('<div>',{
			'class':'form-group'
		});
		var selectFileLabel = $('<label>',{
			'for':'selectFileLabel',
			'text':'选择文件'
		});
		var selectFileInput = $('<input>',{
			'type':'text',
			'placeholder':'/home/user/project1'
		});
		selectFile.append(selectFileLabel);
		selectFile.append(selectFileInput);

		var selectFileButton = $('<div>',{
			'class':'form-group'
		});
		var selectFileInput = $('<input>',{
			'type':'file',
			'class':'selectFileInputButton',
			'text':'浏览'
		});
		selectFileButton.append(selectFileInput);

		var appointNumberLocation = $('<div>',{
			'class':'form-group'
		});
		var appointNumberLocationLabel = $('<label>',{
			'for':'appointNumberLocationLabel',
			'text':'制定数据位置'
		});
		var appointNumberLocationInput = $('<input>',{
			'type':'text',
			'placeholder':1
		});
		appointNumberLocation.append(appointNumberLocationLabel);
		appointNumberLocation.append(appointNumberLocationInput);

		var appointNumberLocationDiv = $('<div>',{
			'class':'form-group'
		});
		var appointNumberLocationDivText = $('<div>',{
			'class':'appointNumberLocationDivText',
			'text':'(默认从第1序列开始)'
		});
		appointNumberLocationDiv.append(appointNumberLocationDivText);

		readFromFileClassDivDownLeft.append(selectFile);
		readFromFileClassDivDownLeft.append(selectFileButton);
		readFromFileClassDivDownLeft.append(appointNumberLocation);
		readFromFileClassDivDownLeft.append(appointNumberLocationDiv);

		var parameterValueTable = $('<table>',{
			'class':'parameterValueListTable',
			'border':'1',
			'cellspacing':'0',
			'cellpadding':'5'
		});
		for (var i = 1; i <=6 ; i++) {
			var tr = $('<tr>',{});
			var td1 = $('<td>',{
				'text':i
			});
			var td2 = $('<td>',{});
			var td3 = $('<td>',{});
			tr.append(td1);
			tr.append(td2);
			tr.append(td3);
			parameterValueTable.append(tr);
		}
		readFromFileClassDivDownRight.append(parameterValueTable);

		readFromFileClassDivDown.append(readFromFileClassDivDownLeft);
		readFromFileClassDivDown.append(readFromFileClassDivDownRight);

		ret.append(parameterValueDiv);
		ret.append(readFromFileClassDivDown);

		return ret;
	},

	//此函数的作用是用来产生点击参数化时的modal的body部分的界面的tab内容部分的下部div中点击从数据库中获取的部分
	createReadFromDataBaseClassDiv:function(tabName){
		var ret = $('<div>',{
			'class':'readFromDataBaseClass'
		});


		var readFromDataBaseClassUpDiv = $('<div>',{
			'class':'readFromDataBaseClassUpDiv'
		});
		var readFromDataBaseClassDownDiv = $('<div>',{
			'class':'readFromDataBaseClassDownDiv'
		});
		var readFromDataBaseClassUpDivLeft = $('<div>',{
			'class':'readFromDataBaseClassUpDivLeft'
		});
		var readFromDataBaseClassUpDivRight = $('<div>',{
			'class':'readFromDataBaseClassUpDivRight'
		});

		var dataBaseUrl = $('<div>',{
			'class':'form-group'
		});
		var dataBaseUrlLabel = $('<label>',{
			'for':'dataBaseUrlLabel',
			'text':'Database URL'
		});
		var dataBaseUrlInput = $('<input>',{
			'type':'text',
			'placeholder':'jdbc:mysqil/127.0.0.1:'
		});
		dataBaseUrl.append(dataBaseUrlLabel);
		dataBaseUrl.append(dataBaseUrlInput);

		var JDBCDriverClass = $('<div>',{
			'class':'form-group'
		});
		var JDBCDriverClassLabel = $('<label>',{
			'for':'JDBCDriverClassLabel',
			'text':'JDBC Driver Class'
		});
		var JDBCDriverClassInput = $('<input>',{
			'type':'text',
			'placeholder':'com.mysqi.jdbc.driver'
		});
		JDBCDriverClass.append(JDBCDriverClassLabel);
		JDBCDriverClass.append(JDBCDriverClassInput);

		var userName = $('<div>',{
			'class':'form-group'
		});
		var userNameLabel = $('<label>',{
			'for':'userNameLabel',
			'text':'userName'
		});
		var userNameInput = $('<input>',{
			'type':'text',
			'placeholder':'root'
		});
		userName.append(userNameLabel);
		userName.append(userNameInput);

		var passWord = $('<div>',{
			'class':'form-group'
		});
		var passWordLabel = $('<label>',{
			'for':'passWordLabel',
			'text':'PassWord'
		});
		var passWordInput = $('<input>',{
			'type':'text',
			'placeholder':'******'
		});
		passWord.append(passWordLabel);
		passWord.append(passWordInput);

		readFromDataBaseClassUpDivLeft.append(dataBaseUrl);
		readFromDataBaseClassUpDivLeft.append(JDBCDriverClass);
		readFromDataBaseClassUpDivLeft.append(userName);
		readFromDataBaseClassUpDivLeft.append(passWord);

		var SQLQuery = $('<div>',{
			'class':'readFromDataBaseClassUpDivRightUpDiv',
			'text':'SQL Query'
		});
		var SQLQueryTextarea = $('<textarea>',{
			'class':'readFromDataBaseClassUpDivRightDownDiv',
			'text':'select column from table where definiton'
		})

		readFromDataBaseClassUpDivRight.append(SQLQuery);
		readFromDataBaseClassUpDivRight.append(SQLQueryTextarea);

		readFromDataBaseClassUpDiv.append(readFromDataBaseClassUpDivLeft);
		readFromDataBaseClassUpDiv.append(readFromDataBaseClassUpDivRight);

		var testLinkButton = $('<button>',{
			'class':'readFromDataBaseClassDownDivButton',
			'text':'测试链接',
			'onclick':''
		});
		var queryButton = $('<button>',{
			'class':'readFromDataBaseClassDownDivButton',
			'text':'查询',
			'onclick':''
		});
		readFromDataBaseClassDownDiv.append(queryButton);
		readFromDataBaseClassDownDiv.append(testLinkButton);

		ret.append(readFromDataBaseClassUpDiv);
		ret.append(readFromDataBaseClassDownDiv);

		return ret;
	},
	//此函数的作用是用来产生点击参数化时的modal的body部分的界面的tab内容部分的下部div中点击自定义的部分
	createUserDefinedClassDiv:function(tabName){
		var ret = $('<div>',{
			'class':'userDefinedClass'
		});

		var userDefinedClassUpDiv = $('<div>',{
			'class':'userDefinedClassUpDiv'
		});
		var userDefinedClassDownDiv = $('<div>',{
			'class':'userDefinedClassDownDiv'
		});

		var userDefinedClassTable = $('<table>',{
			'class':'userDefinedClassTable',
			'border':'1',
			'cellspacing':'0',
			'cellpadding':'5'
		});
		for (var i = 1; i <=6 ; i++) {
			var tr = $('<tr>',{});
			var td1 = $('<td>',{
				'text':i
			});
			tr.append(td1);
			userDefinedClassTable.append(tr);
		}
		userDefinedClassUpDiv.append(userDefinedClassTable);


		var editInTextButton = $('<button>',{
			'class':'userDefinedClassDownDivButton',
			'text':'在记事本中编辑',
			'onclick':''
		});
		userDefinedClassDownDiv.append(editInTextButton);

		ret.append(userDefinedClassUpDiv);
		ret.append(userDefinedClassDownDiv);

		return ret;
	},

	//此函数的作用是用来产生点击参数化时的modal的body部分的界面的tab内容部分的下部div中点击正则表达式的部分
	createRegularExpressionClassDiv:function(tabName){
		var ret = $('<div>',{
			'class':'regularExpressionClass'
		});

		var quoteName = $('<div>',{
			'class':'form-group'
		});
		var quoteNameLabel = $('<label>',{
			'for':'quoteNameLabel',
			'text':'引用名称'
		});
		var quoteNameInput = $('<input>',{
			'type':'text',
			'placeholder':tabName
		});
		quoteName.append(quoteNameLabel);
		quoteName.append(quoteNameInput);

		var matchNumber = $('<div>',{
			'class':'form-group'
		});
		var matchNumberLabel = $('<label>',{
			'for':'matchNumberLabel',
			'text':'匹配数字'
		});
		var matchNumberInput = $('<input>',{
			'type':'text',
			'placeholder':0
		});
		matchNumber.append(matchNumberLabel);
		matchNumber.append(matchNumberInput);

		var regularExpression = $('<div>',{
			'class':'form-group'
		});
		var regularExpressionLabel = $('<label>',{
			'for':'regularExpressionLabel',
			'text':'正则表达式'
		});
		var regularExpressionInput = $('<input>',{
			'type':'text',
			'placeholder':tabName
		});
		regularExpression.append(regularExpressionLabel);
		regularExpression.append(regularExpressionInput);

		var defaultValue = $('<div>',{
			'class':'form-group'
		});
		var defaultValueLabel = $('<label>',{
			'for':'defaultValueLabel',
			'text':'缺省值'
		});
		var defaultValueInput = $('<input>',{
			'type':'text',
			'placeholder':'null'
		});
		defaultValue.append(defaultValueLabel);
		defaultValue.append(defaultValueInput);

		var template = $('<div>',{
			'class':'form-group'
		});
		var templateLabel = $('<label>',{
			'for':'templateLabel',
			'text':'模板'
		});
		var templateInput = $('<input>',{
			'type':'text',
			'placeholder':'$1$'
		});
		template.append(templateLabel);
		template.append(templateInput);

		ret.append(quoteName);
		ret.append(matchNumber);
		ret.append(regularExpression);
		ret.append(defaultValue);
		ret.append(template);

		return ret;
	},




	//createScriptParameterizationModalFooterCloseButton按钮click时的操作。也就是删除整个modal，这个可以公用。
	removeCreateScriptParameterizationModal:function(){
		$("#createScriptParameterizationModal").on('hidden.bs.modal',function(){
			$('#createScriptParameterizationModal').remove();
		});
	},

}