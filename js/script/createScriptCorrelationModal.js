//用来产生点击关联时产生的modal
//TODO：具体的操作之后的内容还是没有做呢。
var createScriptCorrelationModal = {
	initialize:function() {
		if($('#createScriptCorrelationModal').length>0){
			$("#createScriptCorrelationModal").modal("show");
		}
		else{
			var scriptCorrelationModal = this.createScriptCorrelationModal();
			$('#container').append(scriptCorrelationModal);
			$("#createScriptCorrelationModal").modal("show");
		}
	},
	//创建modal的主要部分
	createScriptCorrelationModal:function(){
		var createScriptCorrelationModal = $('<div>',{
			'class':'modal',
			'id':'createScriptCorrelationModal'
		});
		var modalDialog = $('<div>',{
			'class':'modal-dialog'
		});
		var modalContent = $('<div>',{
			'class':'modal-content'
		});
		var modalHeader = this.createScriptCorrelationModalHeader();
		var modalBody = this.createScriptCorrelationModalBody();
		var ModalFooter = this.createScriptCorrelationModalFooter();

		modalContent.append(modalHeader);
		modalContent.append(modalBody);
		modalContent.append(ModalFooter);

		modalDialog.append(modalContent);
		createScriptCorrelationModal.append(modalDialog);

		return createScriptCorrelationModal;
	},
	createScriptCorrelationModalHeader:function(){
		var modalHeader = $('<div>',{
			'class':'modal-header',
			'id':'createScriptCorrelationModalHeader',
			'text':'关联'
		});
		return modalHeader;
	},
	createScriptCorrelationModalBody:function(){
		var modalBody = $('<div>',{
			'class':'modal-body',
			'id':'createScriptCorrelationModalBody'
		});
		//注意，在里面添加具体内容，还是要加入div来添加
		var createScriptCorrelationModalBody=this.createScriptCorrelationModalBodyContent();
		modalBody.append(createScriptCorrelationModalBody);

		return modalBody;
	},
	createScriptCorrelationModalFooter:function(){
		var modalFooter = $('<div>',{
			'class':'modal-footer',
			'id':'createScriptCorrelationModalFooter'
		});
		var closeButton = $('<button>',{
			'class':'btn btn-default',
			'data-dismiss':'modal',
			'id':'createScriptCorrelationModalFooterCloseButton',
			'onclick':'createScriptCorrelationModal.removeCreateScriptCorrelationModal()',
			'text':'关闭'     //注意，关闭之后就要把这个整体的model在container中删除
		});


		modalFooter.append(closeButton);
		return modalFooter;
	},

	//此函数的作用是用来产生点击关联时的modal的body部分的界面
	createScriptCorrelationModalBodyContent:function(){
		var ret = $('<form>',{
			'class':'createScriptCorrelationModalBodyContent',
		});

		var variableName = $('<div>',{
			'class':'form-group'
		});

		var variableNameLabel = $('<label>',{
			'for':'variableNameLabel',
			'text':'变量名称'
		});
		var variableNameInput = $('<input>',{
			'type':'text',
			'placeholder':'cor1'
		});
		variableName.append(variableNameLabel);
		variableName.append(variableNameInput);

		var leftBorder = $('<div>',{
			'class':'form-group'
		});

		var leftBorderLabel = $('<label>',{
			'for':'leftBorderLabel',
			'text':'左边界'
		});
		var leftBorderInput = $('<input>',{
			'type':'text',
			'placeholder':'sessionid="'
		});
		leftBorder.append(leftBorderLabel);
		leftBorder.append(leftBorderInput);

		var rightBorder = $('<div>',{
			'class':'form-group'
		});

		var rightBorderLabel = $('<label>',{
			'for':'rightBorderLabel',
			'text':'右边界'
		});
		var rightBorderInput = $('<input>',{
			'type':'text',
			'placeholder':'sessionid="'
		});
		rightBorder.append(rightBorderLabel);
		rightBorder.append(rightBorderInput);

		var variableValueLocation = $('<div>',{
			'class':'form-group'
		});

		var variableValueLocationLabel = $('<label>',{
			'for':'variableValueLocationLabel',
			'text':'变量取值位置'
		});
		var variableValueLocationInput = $('<select>',{
			'class':'variableValueLocationInput'
		});
		var selectLocationType= ['主体','Body','信息头','Request Headers','URL'];
		for(var i=0;i<selectLocationType.length;i++){
			var option = $('<option>',{
				'value':selectLocationType[i],
				'text':selectLocationType[i]
			});
			variableValueLocationInput.append(option);
		}

		variableValueLocation.append(variableValueLocationLabel);
		variableValueLocation.append(variableValueLocationInput);

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

		var matchingNumber = $('<div>',{
			'class':'form-group'
		});

		var matchingNumberLabel = $('<label>',{
			'for':'matchingNumberLabel',
			'text':'匹配数字'
		});
		var matchingNumberInput = $('<input>',{
			'type':'text',
			'placeholder':'0'
		});
		matchingNumber.append(matchingNumberLabel);
		matchingNumber.append(matchingNumberInput);

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


		ret.append(variableName);
		ret.append(leftBorder);
		ret.append(rightBorder);
		ret.append(variableValueLocation);
		ret.append(template);
		ret.append(matchingNumber);
		ret.append(defaultValue);

		return ret;
	},


	//createScriptCorrelationModalFooterCloseButton按钮click时的操作。也就是删除整个modal，这个可以公用。
	removeCreateScriptCorrelationModal:function(){
		$("#createScriptCorrelationModal").on('hidden.bs.modal',function(){
			$('#createScriptCorrelationModal').remove();
		});
	},

}