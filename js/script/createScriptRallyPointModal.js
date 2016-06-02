var createScriptRallyPointModal = {
	initialize:function() {
		if($('#createScriptRallyPointModal').length>0){
			$("#createScriptRallyPointModal").modal("show");
		}
		else{
			var scriptModal = this.createScriptRallyPointModal();
			$('#container').append(scriptModal);
			$("#createScriptRallyPointModal").modal("show");
		}
	},
	//创建modal的主要部分
	createScriptRallyPointModal:function(){
		var createScriptModal = $('<div>',{
			'class':'modal',
			'id':'createScriptRallyPointModal'
		});
		var modalDialog = $('<div>',{
			'class':'modal-dialog'
		});
		var modalContent = $('<div>',{
			'class':'modal-content'
		});
		var modalHeader = this.createScriptRallyPointModalHeader();
		var modalBody = this.createScriptRallyPointModalBody();
		var ModalFooter = this.createScriptRallyPointModalFooter();

		modalContent.append(modalHeader);
		modalContent.append(modalBody);
		modalContent.append(ModalFooter);

		modalDialog.append(modalContent);
		createScriptModal.append(modalDialog);

		return createScriptModal;
	},
	createScriptRallyPointModalHeader:function(){
		var modalHeader = $('<div>',{
			'class':'modal-header',
			'text':'添加集合点'
		});
		return modalHeader;
	},
	createScriptRallyPointModalBody:function(){
		var modalBody = $('<div>',{
			'class':'modal-body',
		});
		//注意，在里面添加具体内容，还是要加入div来添加
		var tingName = $('<div>',{
			'text':'集合点名称'
		});
		var tingNameInput = $('<input>',{
			'type':'text',
			'id':'createScriptRallyPointModalBodyInput'
		});
		modalBody.append(tingName);
		modalBody.append(tingNameInput);

		return modalBody;
	},
	createScriptRallyPointModalFooter:function(){
		var modalFooter = $('<div>',{
			'class':'modal-footer',
		});
		var ConfirmButton = $('<button>',{
			'class':'btn btn-default',
			'id':'createScriptRallyPointModalFooterConfirm',
			'data-dismiss':'modal',
			'onclick':'createScriptRallyPointModal.createScriptRallyPointModalFooterConfirmOnClick()',
			'text':'确定'
		});
		var closeButton = $('<button>',{
			'class':'btn btn-default',
			'data-dismiss':'modal',
			'id':'createScriptThingModalFooterQuit',
			'onclick':'createScriptRallyPointModal.removeCreateScriptRallyPointModal()',
			'text':'取消'     //注意，关闭之后就要把这个整体的model在container中删除
		});

		modalFooter.append(ConfirmButton);
		modalFooter.append(closeButton);
		
		return modalFooter;
	},

	insertTextarea:function(insertValue) {
		var activeDiv = $('.allScriptTabsContent > .active > .createScriptInformationDeatilsDiv');
		var ScriptTabsContentDiv=activeDiv.children('.ScriptTabsContentDiv');
		var ScriptTabsContentTabContent = ScriptTabsContentDiv.children('.ScriptTabsContentDivRight').children('.active');
		var scriptTab2ScriptContent = ScriptTabsContentTabContent.children('.scriptTabsContentDivSecondTabContent').children('.scriptTab2ScriptContent');
		if(scriptTab2ScriptContent.attr('class') && scriptTab2ScriptContent.attr('class').indexOf('activ') >0){
			var scriptTextarea = scriptTab2ScriptContent.children('textarea,.scriptTextarea');
			var textarea = scriptTextarea[0];
			if (textarea.selectionStart || textarea.selectionStart =='0') {
				var startPos = textarea.selectionStart;
				var endPos = textarea.selectionEnd;
				var scrollTop = textarea.scrollTop;
				textarea.value = textarea.value.substring(0, startPos) + insertValue + textarea.value.substring(endPos, textarea.value.length);
				scriptTextarea.focus();
				textarea.selectionStart = startPos + insertValue.length;
				textarea.selectionEnd = startPos + insertValue.length;
				textarea.scrollTop = scrollTop;
			}
		}
		else{
			window.alert('can not find the scriptTab2ScriptContent and children textarea');
		}
	},

	//此函数的作用是用来产生点击确定所发生的操作，包括在textarea里面插入文字。
	createScriptRallyPointModalFooterConfirmOnClick:function(){
		
		//TODO：能够获取到名字，先获取着，看以后怎么做。
		var name = $('#createScriptRallyPointModalBodyInput')[0].value;
		var insertStr = '\ntRendvious("事物1")\n';
		createScriptRallyPointModal.insertTextarea(insertStr);
		createScriptRallyPointModal.removeCreateScriptRallyPointModal();
	},


	//删除整个modal，这个可以公用。
	removeCreateScriptRallyPointModal:function(){
		$('#createScriptRallyPointModal').on('hidden.bs.modal',function(){
			$('#createScriptRallyPointModal').remove();
		});
	},

}