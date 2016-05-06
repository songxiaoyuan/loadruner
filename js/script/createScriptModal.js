var createScriptModal = {
	initialize:function() {
		if($('#createScriptModal').length>0){
			$("#createScriptModal").modal("show");
		}
		else{
			var scriptModal = this.createScriptModal();
			$('#container').append(scriptModal);
			$("#createScriptModal").modal("show");
		}
	},
	//创建modal的主要部分
	createScriptModal:function(){
		var createScriptModal = $('<div>',{
			'class':'modal',
			'id':'createScriptModal'
		});
		var modalDialog = $('<div>',{
			'class':'modal-dialog'
		});
		var modalContent = $('<div>',{
			'class':'modal-content'
		});
		var modalHeader = this.createScriptModalHeader();
		var modalBody = this.createScriptModalBody();
		var ModalFooter = this.createScriptModalFooter();

		modalContent.append(modalHeader);
		modalContent.append(modalBody);
		modalContent.append(ModalFooter);

		modalDialog.append(modalContent);
		createScriptModal.append(modalDialog);

		return createScriptModal;
	},
	createScriptModalHeader:function(){
		var modalHeader = $('<div>',{
			'class':'modal-header',
			'id':'createScriptModalHeader',
			'text':'选择协议'
		});
		return modalHeader;
	},
	createScriptModalBody:function(){
		var modalBody = $('<div>',{
			'class':'modal-body',
			'id':'createScriptModalBody'
		});
		//注意，在里面添加具体内容，还是要加入div来添加
		var createScriptModalBody1=this.createScriptModalBody1();
		modalBody.append(createScriptModalBody1);

		return modalBody;
	},
	createScriptModalFooter:function(){
		var modalFooter = $('<div>',{
			'class':'modal-footer',
			'id':'createScriptModalFooter'
		});
		var createScriptModalFooter1 = $('<div>',{
			'class':'modal-footer',
			'id':'createScriptModalFooter1'
		});
		var closeButton = $('<button>',{
			'class':'btn btn-default',
			'data-dismiss':'modal',
			'id':'createScriptModalFooter1CloseButton',
			'onclick':'createScriptModal.removeCreateScriptModal()',
			'text':'退出'     //注意，关闭之后就要把这个整体的model在container中删除
		});
		var nextButton = $('<button>',{
			'class':'btn btn-default',
			'id':'createScriptModalFooter1NextButton',
			'onclick':'createScriptModal.createScriptModalFooter1NextButtonOnClick()',
			'text':'下一步'
		});

		createScriptModalFooter1.append(closeButton);
		createScriptModalFooter1.append(nextButton);

		modalFooter.append(createScriptModalFooter1);
		return modalFooter;
	},

	//此函数的作用是用来产生创建脚本时的modal的body部分的第一个界面
	createScriptModalBody1:function(){
		var ret = $('<div>',{
			'class':'createScriptModalBody1',
			'id':'createScriptModalBody1'
		});

		var createScriptModalBody1SelectProtocolTypeDiv = $('<div>',{
		});
		var createScriptModalBody1SelectProtocolType = $('<select>',{
			'class':'createScriptModalBody1SelectProtocolType'
		});

		var selectProtocolType= ['全部协议','Web(Http/Html)','Web Service','SMTP','FTP','数据库'];
		for(var i=0;i<selectProtocolType.length;i++){
			var option = $('<option>',{
				'value':selectProtocolType[i],
				'text':selectProtocolType[i]
			});
			createScriptModalBody1SelectProtocolType.append(option);
		}
		createScriptModalBody1SelectProtocolTypeDiv.append(createScriptModalBody1SelectProtocolType)
    	
    	//TODO : 此处应该是有对应的选择那个类型协议，下面的东西应该筛选的功能。此处还没有实现。
    	var createScriptModalBody1SelectProtocolDiv = $('<div>',{
    	});
		var createScriptModalBody1SelectProtocol = $('<select>',{
			'class':'createScriptModalBody1SelectProtocol',
			'multiple':'multiple'
		});

		var selectProtocol= ['Http请求','FTP请求','SMTP','SOAP/XML-RPC Request','TCP取样器','JDBC Request','MongDB Script'];
		for(var i=0;i<selectProtocol.length;i++){
			var option = $('<option>',{
				'value':selectProtocol[i],
				'text':selectProtocol[i]
			});
			createScriptModalBody1SelectProtocol.append(option);
		}
		createScriptModalBody1SelectProtocolDiv.append(createScriptModalBody1SelectProtocol);

		ret.append(createScriptModalBody1SelectProtocolTypeDiv);
		ret.append(createScriptModalBody1SelectProtocolDiv);
		return ret;
	},

	//此函数的作用是用来产生创建脚本时的modal的body部分点击下一步产生的页面
	createScriptModalBody2:function(){
		var ret = $('<div>',{
			'class':'createScriptModalBody2',
			'id':'createScriptModalBody2'
		});

		var selectBrowserDiv = $('<div>',{
		});
		var selectBrowserText = $('<div>',{
			'class':'selectBrowserText',
			'text':'选择浏览器'
		});
		var selectBrowserInput = $('<input>',{
			'type':'text',
			'placeholder':'Mozilla FireFox'
		});
		var selectBrowserButton = $('<input>',{
			'type':'file',
			'text':'浏览',   //TODO注意此处应该是浏览之后，然后选择默认的浏览器，然后点击开始录制之后会自动的打开浏览器！！
		});
		selectBrowserDiv.append(selectBrowserText);
		selectBrowserDiv.append(selectBrowserInput);
		selectBrowserDiv.append(selectBrowserButton);

		var URLPathDiv = $('<div>',{
		});
		var URLPathText = $('<div>',{
			'class':'URLPathText',
			'text':'RRL地址'
		});
		var URLPathInput = $('<input>',{
			'type':'text',
			'placeholder':'http://www.baidu.com'
		});
		URLPathDiv.append(URLPathText);
		URLPathDiv.append(URLPathInput);

		var recordLocationDiv = $('<div>',{
		});
		var recordLocationText = $('<div>',{
			'class':'recordLocationText',
			'text':'录制位置选择'
		});
		var recordLocationSelect = $('<select>',{
			'class':'recordLocationSelect'
		});
		var selectRecordLocation= ['初始化','事件','结束'];
		for(var i=0;i<selectRecordLocation.length;i++){
			var option = $('<option>',{
				'value':selectRecordLocation[i],
				'text':selectRecordLocation[i]
			});
			recordLocationSelect.append(option);
		}

		recordLocationDiv.append(recordLocationText);
		recordLocationDiv.append(recordLocationSelect);

		var saveSnapShootDiv = $('<div>',{
		});
		var saveSnapShootInput = '<input type="radio">保存页面快照</input>';
		saveSnapShootDiv.append(saveSnapShootInput);

		var characterSupportDiv = $('<div>',{
		});
		var characterSupportInput = '<input type="radio" checked="true">字符支持</input>';
		var characterSupport1 = '<input type="radio" name="characterSupport" value="UTF-8" checked="true">UTF-8</input>';
		var characterSupport2 = '<input type="radio" name="characterSupport" value="GBK">GBK</input>';
		var characterSupport3 = '<input type="radio" name="characterSupport" value="GB18030">GB18030</input>';
		characterSupportDiv.append(characterSupportInput);
		characterSupportDiv.append(characterSupport1);
		characterSupportDiv.append(characterSupport2);
		characterSupportDiv.append(characterSupport3);

		ret.append(selectBrowserDiv);
		ret.append(URLPathDiv);
		ret.append(recordLocationDiv);
		ret.append(saveSnapShootDiv);
		ret.append(characterSupportDiv);
		return ret;
	},

	createScriptModalFooter2:function(){
		var createScriptModalFooter2 = $('<div>',{
			'class':'modal-footer',
			'id':'createScriptModalFooter2'
		});
		var backButton = $('<button>',{
			'class':'btn btn-default',
			'id':'createScriptModalFooter1NextButton',
			'onclick':'createScriptModal.createScriptModalFooter2BackButtonOnClick()',
			'text':'上一步'
		});
		var startRecordButton = $('<button>',{
			'class':'btn btn-default',
			'id':'createScriptModalFooter1NextButton',
			'data-dismiss':'modal',
			'onclick':'createScriptModal.createScriptModalFooter2startRecordButtonOnClick()',
			'text':'开始录制'
		});
		var closeButton = $('<button>',{
			'class':'btn btn-default',
			'data-dismiss':'modal',
			'id':'createScriptModalFooter1CloseButton',
			'onclick':'createScriptModal.removeCreateScriptModal()',
			'text':'取消'     //注意，关闭之后就要把这个整体的model在container中删除
		});

		createScriptModalFooter2.append(backButton);
		createScriptModalFooter2.append(startRecordButton);
		createScriptModalFooter2.append(closeButton);

		return createScriptModalFooter2;
	},

	//此函数的作用是用来产生点击下一步所发生的操作，包括将以前的 div隐藏
	createScriptModalFooter1NextButtonOnClick:function(){

		//隐藏以前div，
		$('#createScriptModalBody1').hide();
		$('#createScriptModalFooter1').hide();
		$('#createScriptModalHeader').text('录制设置');

		//添加显示现在div 如果有，表示是点击过上一步，直接显示就可以了
		if($('#createScriptModalBody2').length>0){
			$('#createScriptModalBody2').show();
			$('#createScriptModalFooter2').show();
		}
		else{
			var createScriptModalBody= createScriptModal.createScriptModalBody2();
			var createScriptModalFooter = createScriptModal.createScriptModalFooter2();
			$('#createScriptModalBody').append(createScriptModalBody);
			$('#createScriptModalFooter').append(createScriptModalFooter);
		}

	},

	createScriptModalFooter2BackButtonOnClick:function(){

		//隐藏以前div，
		$('#createScriptModalBody2').hide();
		$('#createScriptModalFooter2').hide();
		$('#createScriptModalHeader').text('选择协议');

		$('#createScriptModalBody1').show();
		$('#createScriptModalFooter1').show();
	},

	createScriptModalFooter2startRecordButtonOnClick:function(){

		//TODO:首先开始的是进入录制的界面，然后有开发浏览器，输入URL

		//最后取消现在的modal.
		createScriptModal.removeCreateScriptModal();

	},

	//creatProjectModalFooterCancel按钮click时的操作。也就是删除整个modal，这个可以公用。
	removeCreateScriptModal:function(){
		$("#createScriptModal").on('hidden.bs.modal',function(){
			$('#createScriptModal').remove();
		});
	},

}