var createScriptRuntimeSettingModal = {
	initialize:function() {
		if($('#createScriptRuntimeSettingModal').length>0){
			$("#createScriptRuntimeSettingModal").modal("show");
		}
		else{
			var scriptModal = this.createScriptRuntimeSettingModal();
			$('#container').append(scriptModal);
			$("#createScriptRuntimeSettingModal").modal("show");
		}
	},
	//创建modal的主要部分
	createScriptRuntimeSettingModal:function(){
		var createScriptModal = $('<div>',{
			'class':'modal',
			'id':'createScriptRuntimeSettingModal'
		});
		var modalDialog = $('<div>',{
			'class':'modal-dialog'
		});
		var modalContent = $('<div>',{
			'class':'scriptRuntimeSettingModalContent modal-content'
		});
		var modalHeader = this.createScriptRuntimeSettingModalHeader();
		var modalBody = this.createScriptRuntimeSettingModalBody();
		var ModalFooter = this.createScriptRuntimeSettingModalFooter();

		modalContent.append(modalHeader);
		modalContent.append(modalBody);
		modalContent.append(ModalFooter);

		modalDialog.append(modalContent);
		createScriptModal.append(modalDialog);

		return createScriptModal;
	},
	createScriptRuntimeSettingModalHeader:function(){
		var modalHeader = $('<div>',{
			'class':'modal-header',
			'text':'设置项'
		});
		return modalHeader;
	},
	createScriptRuntimeSettingModalBody:function(){
		var modalBody = $('<div>',{
			'class':'modal-body',
			'id':'scriptRuntimeSettingModalBody'
		});
		
		var bodyContent = createScriptRuntimeSettingModal.createScriptRuntimeSettingModalBodyContent();
		modalBody.append(bodyContent);

		return modalBody;
	},

	//用来产生body内容的具体部分
	createScriptRuntimeSettingModalBodyContent:function() {
		var ret = $('<div>',{
			'class':'createScriptRuntimeSettingModalBodyContent',
		});

		var leftDiv = $('<div>',{
			'class':'createScriptRuntimeSettingModalBodyContentLeft'
		});
		var rightDiv = $('<div>',{
			'class':'createScriptRuntimeSettingModalBodyContentRight tab-content'
		});

		var runLogicTabContentDiv = createScriptRuntimeSettingModal.createRightRunLogicTabContent();
		var stepTabContentDiv = createScriptRuntimeSettingModal.createRightStepTabContent();
		var logTabContentDiv = createScriptRuntimeSettingModal.createRightLogTabContent();
		var thinkTimeTabContentDiv = createScriptRuntimeSettingModal.createRightThinkTimeTabContent();
		var errorHandingTabContentDiv = createScriptRuntimeSettingModal.createRightErrorHandingTabContent();
		var proxySettingTabContentDiv = createScriptRuntimeSettingModal.createRightProxySettingTabContent();
		var browserCacheTabContentDiv = createScriptRuntimeSettingModal.createRightBrowserCacheTabContent();
		var timeOutTabContentDiv = createScriptRuntimeSettingModal.createRightTimeOutTabContent();
		
		rightDiv.append(runLogicTabContentDiv);
		rightDiv.append(stepTabContentDiv);
		rightDiv.append(logTabContentDiv);
		rightDiv.append(thinkTimeTabContentDiv);
		rightDiv.append(errorHandingTabContentDiv);
		rightDiv.append(proxySettingTabContentDiv);
		rightDiv.append(browserCacheTabContentDiv);
		rightDiv.append(timeOutTabContentDiv);

		//产生左边的参数列表
		var settingListUl = $('<ul>',{
		});

		var runLogicli = $('<li>',{
		});
		var runLogica = $('<a>',{
			'href':'#ScriptRuntimeSettingModalBodyContentRightRunLogicTabContent',
			'data-toggle':'tab',
			'text':'运行逻辑'
		});
		runLogicli.append(runLogica);

		var stepli = $('<li>',{
		});
		var stepa = $('<a>',{
			'href':'#ScriptRuntimeSettingModalBodyContentRightStepTabContent',
			'data-toggle':'tab',
			'text':'步调'
		});
		stepli.append(stepa);

		var logli = $('<li>',{
		});
		var loga = $('<a>',{
			'href':'#ScriptRuntimeSettingModalBodyContentRightLogTabContent',
			'data-toggle':'tab',
			'text':'日志'
		});
		logli.append(loga);

		var thinkTimeli = $('<li>',{
		});
		var thinkTimea = $('<a>',{
			'href':'#ScriptRuntimeSettingModalBodyContentRightThinkTimeTabContent',
			'data-toggle':'tab',
			'text':'思考时间'
		});
		thinkTimeli.append(thinkTimea);

		var errorHandingli = $('<li>',{
		});
		var errorHandinga = $('<a>',{
			'href':'#ScriptRuntimeSettingModalBodyContentRightErrorHandingTabContent',
			'data-toggle':'tab',
			'text':'错误处理'
		});
		errorHandingli.append(errorHandinga);

		var proxySettingli = $('<li>',{
		});
		var proxySettinga = $('<a>',{
			'href':'#ScriptRuntimeSettingModalBodyContentRightProxySettingTabContent',
			'data-toggle':'tab',
			'text':'代理设置'
		});
		proxySettingli.append(proxySettinga);

		var browserCacheli = $('<li>',{
		});
		var browserCachea = $('<a>',{
			'href':'#ScriptRuntimeSettingModalBodyContentRightBrowserCacheTabContent',
			'data-toggle':'tab',
			'text':'浏览器缓存'
		});
		browserCacheli.append(browserCachea);

		var timeOutli = $('<li>',{
		});
		var timeOuta = $('<a>',{
			'href':'#ScriptRuntimeSettingModalBodyContentRightTimeOutTabContent',
			'data-toggle':'tab',
			'text':'超时时间'
		});
		timeOutli.append(timeOuta);

		settingListUl.append(runLogicli);
		settingListUl.append(stepli);
		settingListUl.append(logli);
		settingListUl.append(thinkTimeli);
		settingListUl.append(errorHandingli);
		settingListUl.append(proxySettingli);
		settingListUl.append(browserCacheli);
		settingListUl.append(timeOutli);
		leftDiv.append(settingListUl);


		ret.append(leftDiv);
		ret.append(rightDiv);
		return ret;
	},

	//用来产生运行逻辑的内容div,以下几个函数分别是步调，日志等div产生的函数。
	createRightRunLogicTabContent:function() {
		var ret = $('<div>',{
			'class':'rightTabContentDiv tab-pane fade in active',
			'id':'ScriptRuntimeSettingModalBodyContentRightRunLogicTabContent',
			'text':'ScriptRuntimeSettingModalBodyContentRightRunLogicTabContent'
		});

		return ret;
	},

	createRightStepTabContent:function() {
		var ret = $('<div>',{
			'class':'rightTabContentDiv tab-pane fade',
			'id':'ScriptRuntimeSettingModalBodyContentRightStepTabContent',
			'text':'ScriptRuntimeSettingModalBodyContentRightStepTabContent'
		});

		return ret;
	},
	createRightLogTabContent:function() {
		var ret = $('<div>',{
			'class':'rightTabContentDiv tab-pane fade',
			'id':'ScriptRuntimeSettingModalBodyContentRightLogTabContent',
			'text':'ScriptRuntimeSettingModalBodyContentRightLogTabContent'
		});

		return ret;
	},
	createRightThinkTimeTabContent:function() {
		var ret = $('<div>',{
			'class':'rightTabContentDiv tab-pane fade',
			'id':'ScriptRuntimeSettingModalBodyContentRightThinkTimeTabContent',
			'text':'ScriptRuntimeSettingModalBodyContentRightThinkTimeTabContent'
		});

		return ret;
	},
	createRightErrorHandingTabContent:function() {
		var ret = $('<div>',{
			'class':'rightTabContentDiv tab-pane fade',
			'id':'ScriptRuntimeSettingModalBodyContentRightErrorHandingTabContent',
			'text':'ScriptRuntimeSettingModalBodyContentRightErrorHandingTabContent'
		});

		return ret;
	},
	createRightProxySettingTabContent:function() {
		var ret = $('<div>',{
			'class':'rightTabContentDiv tab-pane fade',
			'id':'ScriptRuntimeSettingModalBodyContentRightProxySettingTabContent',
			'text':'ScriptRuntimeSettingModalBodyContentRightProxySettingTabContent'
		});

		return ret;
	},
	createRightBrowserCacheTabContent:function() {
		var ret = $('<div>',{
			'class':'rightTabContentDiv tab-pane fade',
			'id':'ScriptRuntimeSettingModalBodyContentRightBrowserCacheTabContent',
			'text':'ScriptRuntimeSettingModalBodyContentRightBrowserCacheTabContent'
		});

		return ret;
	},
	createRightTimeOutTabContent:function() {
		var ret = $('<div>',{
			'class':'rightTabContentDiv tab-pane fade',
			'id':'ScriptRuntimeSettingModalBodyContentRightTimeOutTabContent',
			'text':'timeout'
		});

		return ret;
	},

	createScriptRuntimeSettingModalFooter:function(){
		var modalFooter = $('<div>',{
			'class':'modal-footer',
		});
		var defaultButton = $('<button>',{
			'class':'btn btn-default',
			'data-dismiss':'modal',
			'onclick':'createScriptRuntimeSettingModal.createScriptRuntimeSettingModalFooterDefaultOnClick()',
			'text':'使用默认值'
		});
		var ConfirmButton = $('<button>',{
			'class':'btn btn-default',
			'data-dismiss':'modal',
			'onclick':'createScriptRuntimeSettingModal.createScriptRuntimeSettingModalFooterConfirmOnClick()',
			'text':'确定'
		});
		var closeButton = $('<button>',{
			'class':'btn btn-default',
			'data-dismiss':'modal',
			'onclick':'createScriptRuntimeSettingModal.removeCreateScriptRuntimeSettingModal()',
			'text':'取消'     //注意，关闭之后就要把这个整体的model在container中删除
		});

		modalFooter.append(defaultButton);
		modalFooter.append(ConfirmButton);
		modalFooter.append(closeButton);
		
		return modalFooter;
	},

	createScriptRuntimeSettingModalFooterDefaultOnClick:function(){
		
		//TODO：使用默认值进行一些操作。
		createScriptRuntimeSettingModal.removeCreateScriptRuntimeSettingModal();
	},

	createScriptRuntimeSettingModalFooterConfirmOnClick:function(){
		
		//TODO：点击确定之后应该获取到所有的数据，然后形成一个jason，传递给后端。。
		createScriptRuntimeSettingModal.removeCreateScriptRuntimeSettingModal();
	},


	//删除整个modal，这个可以公用。
	removeCreateScriptRuntimeSettingModal:function(){
		$('#createScriptRuntimeSettingModal').on('hidden.bs.modal',function(){
			$('#createScriptRuntimeSettingModal').remove();
		});
	},

}