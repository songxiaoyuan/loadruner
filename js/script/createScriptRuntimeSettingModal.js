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
		});
		var runLogicContentUp = $('<div>',{
			'class':'runLogicContentUp form-group'
		});
		var runLogicContentDown = $('<div>',{
			'class':'runLogicContentDown'
		});

		var runLogicLable = $('<label>',{
			'for':'runLogicLable',
			'text':'迭代次数'
		});
		var runLogicInput = $('<input>',{
			'class':'runLogicInput',
			'type':'text',
			'placeholder':'2'
		})
		runLogicContentUp.append(runLogicLable);
		runLogicContentUp.append(runLogicInput);

		var scriptDiv = $('<div>',{
			'text':'脚本1'
		});
		var scriptInitializeDiv = $('<div>',{
			'text':'初始化'
		});
		var scriptThingDiv = $('<div>',{
			'text':'事件（x2）'
		});
		var scriptEndDiv = $('<div>',{
			'text':'结束'
		});
		runLogicContentDown.append(scriptDiv);
		runLogicContentDown.append(scriptInitializeDiv);
		runLogicContentDown.append(scriptThingDiv);
		runLogicContentDown.append(scriptEndDiv);


		ret.append(runLogicContentUp);
		ret.append(runLogicContentDown);
		return ret;
	},

	createRightStepTabContent:function() {
		var ret = $('<div>',{
			'class':'rightTabContentDiv tab-pane fade',
			'id':'ScriptRuntimeSettingModalBodyContentRightStepTabContent'
		});


		var lastEndStartNowDiv = $('<div>',{
			'class':'lastEndStartNow'
		});
		var lastEndStartNowRadio = $('<input>',{
			'type':'radio',
			'name':'StepTabContentRadio',
			'onclick':'createScriptRuntimeSettingModal.radioOnClick()',
			'value':'1',
			'checked':'true'
		});
		var lastEndStartNowLable=$('<label>',{
			'text':'上一次循环结束后立即开始'
		});
		lastEndStartNowDiv.append(lastEndStartNowRadio);
		lastEndStartNowDiv.append(lastEndStartNowLable);

		var lastEnd = $('<div>',{
			'class':'lastEnd everySelectRadio'
		});
		var lastEndRadio = $('<input>',{
			'type':'radio',
			'name':'StepTabContentRadio',
			'onclick':'createScriptRuntimeSettingModal.radioOnClick()',
			'value':'2',
		});
		var lastEndLable=$('<label>',{
			'text':'上一次循环结束后'
		});
		var selectEnd = createScriptRuntimeSettingModal.createStepTabContentSelectDiv();
		selectEnd.addClass('stepTabContentDivSelectLastEndShowDiv');
		lastEnd.append(lastEndRadio);
		lastEnd.append(lastEndLable);
		lastEnd.append(selectEnd);

		var lastStart = $('<div>',{
			'class':'lastStart everySelectRadio'
		});
		var lastStartRadio = $('<input>',{
			'type':'radio',
			'name':'StepTabContentRadio',
			'onclick':'createScriptRuntimeSettingModal.radioOnClick()',
			'value':'3',
		});
		var lastStartLable=$('<label>',{
			'text':'上一次循环开始后'
		});
		var selectStart = createScriptRuntimeSettingModal.createStepTabContentSelectDiv();
		selectStart.addClass('stepTabContentDivSelectLastStartShowDiv');
		lastStart.append(lastStartRadio);
		lastStart.append(lastStartLable);
		lastStart.append(selectStart);

		ret.append(lastEndStartNowDiv);
		ret.append(lastEnd);
		ret.append(lastStart);
		return ret;
	},

	radioOnClick:function() {
		var selectRadio = $('#ScriptRuntimeSettingModalBodyContentRightStepTabContent input:radio:checked').val();
		if (selectRadio == '2') {
			//表示点击的是上一次循环结束后，将里面的select和input变得可以编辑，别的select和input不能编辑
			var showDiv = $('.stepTabContentDivSelectLastEndShowDiv');
			showDiv.find('select').attr('disabled',false);
			showDiv.find('input').attr('disabled',false);
			var disableDiv = $('.stepTabContentDivSelectLastStartShowDiv');
			disableDiv.find('select').attr('disabled',true);
			disableDiv.find('input').attr('disabled',true);
		}
		else if (selectRadio == '3') {
			//表示点击的是上一次循环开始后，将里面的select和input变得可以编辑，别的select和input不能编辑
			var showDiv = $('.stepTabContentDivSelectLastStartShowDiv');
			showDiv.find('select').attr('disabled',false);
			showDiv.find('input').attr('disabled',false);
			var disableDiv = $('.stepTabContentDivSelectLastEndShowDiv');
			disableDiv.find('select').attr('disabled',true);
			disableDiv.find('input').attr('disabled',true);
		}
		else{
			//表示点击的是上一次循环结束后立即开始，所有的select和input都不能编辑
			var showDiv = $('.stepTabContentSelectOptionDiv');
			showDiv.find('select').attr('disabled',false);
			showDiv.find('input').attr('disabled',false);
		}
	},

	createStepTabContentSelectDiv:function() {
	    var ret = $('<div>',{
	    	'class':'stepTabContentSelectOptionDiv',
	    });

	    var selectTimeType = $('<select>',{
	    	'class':'selectTimeType',
	    	'disabled':'true',
	    });
	    var optionFix = $('<option>',{
	    	'value':'stepTabContentSelectOptionShowFixDiv',
	    	'text':'固定'
	    });
	    var optionRandom = $('<option>',{
	    	'value':'stepTabContentSelectOptionShowRandomDiv',
	    	'text':'随机'
	    });
	    selectTimeType.append(optionFix);
	    selectTimeType.append(optionRandom);

	    var showDiv = $('<div>',{
	    	'class':'stepTabContentSelectOptionShow'
	    });
	    var showDivFixDiv = $('<div>',{
	    	'class':'stepTabContentSelectOptionShowFixDiv'
	    });
	    var showDivFixDivIntervalLable = $('<label>',{
	    	'text':'间隔'
	    });
	    var showDivFixDivInput = $('<input>',{
	    	'type':'text',
	    	'disabled':'true',
	    });
	    var showDivFixDivSecondLable = $('<label>',{
	    	'text':'秒'
	    });
	    showDivFixDiv.append(showDivFixDivIntervalLable);
	    showDivFixDiv.append(showDivFixDivInput);
	    showDivFixDiv.append(showDivFixDivSecondLable);

	    var showDivRandomDiv = $('<div>',{
	    	'class':'stepTabContentSelectOptionShowRandomDiv'
	    });
	    var showDivRandomDivIntervalLable = $('<label>',{
	    	'text':'间隔'
	    });
	    var showDivRandomDivInput = $('<input>',{
	    	'type':'text',
	    	'disabled':'true',
	    });
	    var showDivRanomDivSecondToLable = $('<label>',{
	    	'text':'秒至'
	    });
	    var showDivRandomDivSecondInput = $('<input>',{
	    	'type':'text',
	    	'disabled':'true',
	    });
	    var showDivRanomDivSecondLable = $('<label>',{
	    	'text':'秒'
	    });
	    showDivRandomDiv.append(showDivRandomDivIntervalLable);
	    showDivRandomDiv.append(showDivRandomDivInput);
	    showDivRandomDiv.append(showDivRanomDivSecondToLable);
	    showDivRandomDiv.append(showDivRandomDivSecondInput);
	    showDivRandomDiv.append(showDivRanomDivSecondLable);

	    showDiv.append(showDivFixDiv);
	    showDiv.append(showDivRandomDiv);
	    showDiv.children('div').hide();
	    showDiv.children('.stepTabContentSelectOptionShowFixDiv').show();

	    //绑定事件，及选择取值方式之后，下方的div会根据选择不同的值而发生变化。
	    selectTimeType.change(function() {
	    	var classType = $(this).children('option:selected').val();
	    	showDiv.children('div').hide();	
	    	showDiv.children('.'+classType).show();
	    });

	    ret.append(selectTimeType);
	    ret.append(showDiv);
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