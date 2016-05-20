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

		var downDiv = $('<div>',{
			'class':'ScriptParameterizationModalBodyContentRightDownDiv'
		});

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
			'text':'数据更新方式'
		});
		var getValueWayInput = $('<select>',{
			'class':'getValueWayInput'
		});
		var getValueWayType= [' ','随机数','从文件读取','从数据库中读取','自定义','正则表达式'];
		for(var i=0;i<getValueWayType.length;i++){
			var option = $('<option>',{
				'value':getValueWayType[i],
				'text':getValueWayType[i]
			});
			getValueWayInput.append(option);
		}
		getValueWay.append(getValueWayLabel);
		getValueWay.append(getValueWayInput);

		var beyondBorder = $('<div>',{
			'class':'form-group'
		});
		var beyondBorderLabel = $('<label>',{
			'for':'beyondBorderLabel',
			'text':'数据更新方式'
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




	//createScriptParameterizationModalFooterCloseButton按钮click时的操作。也就是删除整个modal，这个可以公用。
	removeCreateScriptParameterizationModal:function(){
		$("#createScriptParameterizationModal").on('hidden.bs.modal',function(){
			$('#createScriptParameterizationModal').remove();
		});
	},

}