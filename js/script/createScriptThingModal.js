var createScriptThingModal = {
	initializeStartThing:function() {
		if($('#createScriptThingModalStart').length>0){
			$("#createScriptThingModalStart").modal("show");
		}
		else{
			var scriptModal = this.createScriptThingModal('Start');
			$('#container').append(scriptModal);
			$("#createScriptThingModalStart").modal("show");
		}
	},
	initializeEndThing:function() {
		if($('#createScriptThingModalEnd').length>0){
			$("#createScriptThingModalEnd").modal("show");
		}
		else{
			var scriptModal = this.createScriptThingModal('End');
			$('#container').append(scriptModal);
			$("#createScriptThingModalEnd").modal("show");
		}
	},
	//创建modal的主要部分
	createScriptThingModal:function(type){
		var createScriptModal = $('<div>',{
			'class':'modal',
			'id':'createScriptThingModal'+type
		});
		var modalDialog = $('<div>',{
			'class':'modal-dialog'
		});
		var modalContent = $('<div>',{
			'class':'modal-content'
		});
		var modalHeader = this.createScriptThingModalHeader(type);
		var modalBody = this.createScriptThingModalBody(type);
		var ModalFooter = this.createScriptThingModalFooter(type);

		modalContent.append(modalHeader);
		modalContent.append(modalBody);
		modalContent.append(ModalFooter);

		modalDialog.append(modalContent);
		createScriptModal.append(modalDialog);

		return createScriptModal;
	},
	createScriptThingModalHeader:function(type){
		var modalHeader = $('<div>',{
			'class':'modal-header',
			'text':'添加事物'
		});
		return modalHeader;
	},
	createScriptThingModalBody:function(type){
		var modalBody = $('<div>',{
			'class':'modal-body',
		});
		//注意，在里面添加具体内容，还是要加入div来添加
		var tingName = $('<div>',{
			'text':'事物名称'
		});
		var tingNameInput = $('<input>',{
			'type':'text',
			'id':'createScriptThingModalBodyInput'
		});
		modalBody.append(tingName);
		modalBody.append(tingNameInput);

		return modalBody;
	},
	createScriptThingModalFooter:function(type){
		var modalFooter = $('<div>',{
			'class':'modal-footer',
		});
		if(type =='Start'){
			var ConfirmButton = $('<button>',{
				'class':'btn btn-default',
				'id':'createScriptThingModalFooterStartConfirm',
				'data-dismiss':'modal',
				'onclick':'createScriptThingModal.createScriptThingModalFooterStartConfirmOnClick()',
				'text':'确定'
			});
			var closeButton = $('<button>',{
				'class':'btn btn-default',
				'data-dismiss':'modal',
				'id':'createScriptThingModalFooterStartQuit',
				'onclick':'createScriptThingModal.removeCreateScriptThingModalStart()',
				'text':'取消'     //注意，关闭之后就要把这个整体的model在container中删除
			});
		}
		else{
			var ConfirmButton = $('<button>',{
				'class':'btn btn-default',
				'id':'createScriptThingModalFooterStartConfirm',
				'data-dismiss':'modal',
				'onclick':'createScriptThingModal.createScriptThingModalFooterEndConfirmOnClick()',
				'text':'确定'
			});
			var closeButton = $('<button>',{
				'class':'btn btn-default',
				'data-dismiss':'modal',
				'id':'createScriptThingModalFooterStartQuit',
				'onclick':'createScriptThingModal.removeCreateScriptThingModalEnd()',
				'text':'取消'     //注意，关闭之后就要把这个整体的model在container中删除
			});
		}

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
	createScriptThingModalFooterStartConfirmOnClick:function(){
		
		var insertStr = '\nStart_transaction("事物1")\nsnapshot="t1"\nReferencePage:"http://www.baidu.com"\n';
		createScriptThingModal.insertTextarea(insertStr);
		createScriptThingModal.removeCreateScriptThingModalStart();
	},

	createScriptThingModalFooterEndConfirmOnClick:function(){
		var insertStr = 'End_transaction("事物1")';
		createScriptThingModal.insertTextarea(insertStr);
		createScriptThingModal.removeCreateScriptThingModalStart();
	},

	//删除整个modal，这个可以公用。
	removeCreateScriptThingModalStart:function(){
		$('#createScriptThingModalStart').on('hidden.bs.modal',function(){
			$('#createScriptThingModalStart').remove();
		});
	},
	//删除整个modal，这个可以公用。
	removeCreateScriptThingModalEnd:function(){
		$('#createScriptThingModalEnd').on('hidden.bs.modal',function(){
			$('#createScriptThingModalEnd').remove();
		});
	},

}