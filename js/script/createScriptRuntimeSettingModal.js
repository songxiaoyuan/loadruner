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
			'onclick':'createScriptRuntimeSettingModal.stepTabContentRadioOnClick()',
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
			'onclick':'createScriptRuntimeSettingModal.stepTabContentRadioOnClick()',
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
			'onclick':'createScriptRuntimeSettingModal.stepTabContentRadioOnClick()',
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

	stepTabContentRadioOnClick:function() {
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
		});

		var recordLogDiv = $('<div>',{
			'class':'recordLogDiv'
		});
		var recordLogCheckbox = $('<input>',{
			'type':'checkbox',
			'onclick':'createScriptRuntimeSettingModal.logTabContentCheckBoxOnClick()',
			'checked':'true'
		});
		var recordLogCheckboxLable=$('<label>',{
			'text':'记录日志'
		});
		recordLogDiv.append(recordLogCheckbox);
		recordLogDiv.append(recordLogCheckboxLable);

		var onlyRecordWrongMessageDiv = $('<div>',{
			'class':'onlyRecordWrongMessage'
		});
		var onlyRecordWrongMessageRadio = $('<input>',{
			'type':'radio',
			'name':'recordWhatLogMessage',
			'value':'1',
			'checked':'true'
		});
		var onlyRecordWrongMessageLable=$('<label>',{
			'text':'仅记录错误信息'
		});
		onlyRecordWrongMessageDiv.append(onlyRecordWrongMessageRadio);
		onlyRecordWrongMessageDiv.append(onlyRecordWrongMessageLable);

		var recordWrongMessageAndParameterDiv = $('<div>',{
			'class':'recordWrongMessageAndParameter'
		});
		var recordWrongMessageAndParameterRadio = $('<input>',{
			'type':'radio',
			'name':'recordWhatLogMessage',
			'value':'2',
		});
		var recordWrongMessageAndParameterLable=$('<label>',{
			'text':'记录错误信息和参数值'
		});
		recordWrongMessageAndParameterDiv.append(recordWrongMessageAndParameterRadio);
		recordWrongMessageAndParameterDiv.append(recordWrongMessageAndParameterLable);

		var recordAllRunMessageDiv = $('<div>',{
			'class':'lastEndStartNow'
		});
		var recordAllRunMessageRadio = $('<input>',{
			'type':'radio',
			'name':'recordWhatLogMessage',
			'value':'3',
		});
		var recordAllRunMessageLable=$('<label>',{
			'text':'记录运行中的全部信息'
		});
		recordAllRunMessageDiv.append(recordAllRunMessageRadio);
		recordAllRunMessageDiv.append(recordAllRunMessageLable);

		ret.append(recordLogDiv);
		ret.append(onlyRecordWrongMessageDiv);
		ret.append(recordWrongMessageAndParameterDiv);
		ret.append(recordAllRunMessageDiv);

		return ret;
	},

	logTabContentCheckBoxOnClick:function() {
		if ($('#ScriptRuntimeSettingModalBodyContentRightLogTabContent').find('input[type="checkbox"]').is(':checked')) {
			$('#ScriptRuntimeSettingModalBodyContentRightLogTabContent').find('input[name="recordWhatLogMessage"]').attr('disabled',false);
		}
		else{
			$('#ScriptRuntimeSettingModalBodyContentRightLogTabContent').find('input[name="recordWhatLogMessage"]').attr('disabled',true);
		}
	},

	createRightThinkTimeTabContent:function() {
		var ret = $('<div>',{
			'class':'rightTabContentDiv tab-pane fade',
			'id':'ScriptRuntimeSettingModalBodyContentRightThinkTimeTabContent',
		});

		var ignoreThinkTimeDiv = $('<div>',{
			'class':'ignoreThinkTimeDiv'
		});
		var ignoreThinkTimeRadio = $('<input>',{
			'type':'radio',
			'onclick':'createScriptRuntimeSettingModal.thinkTimeTabContentRadioOnClick()',
			'value':'1',
			'name':'thinkTimeType'
		});
		var ignoreThinkTimeLable=$('<label>',{
			'text':'忽略思考时间'
		});
		ignoreThinkTimeDiv.append(ignoreThinkTimeRadio);
		ignoreThinkTimeDiv.append(ignoreThinkTimeLable);

		var useThinkTimeDiv = $('<div>',{
			'class':'useThinkTimeDiv'
		});
		var useThinkTimeRadio = $('<input>',{
			'type':'radio',
			'onclick':'createScriptRuntimeSettingModal.thinkTimeTabContentRadioOnClick()',
			'name':'thinkTimeType',
			'value':'2',
			'checked':'true'
		});
		var useThinkTimeLable=$('<label>',{
			'text':'使用思考时间'
		});
		useThinkTimeDiv.append(useThinkTimeRadio);
		useThinkTimeDiv.append(useThinkTimeLable);

		var useThinkTimeDownDiv = $('<div>',{
			'class':'useThinkTimeDownDiv'
		});

		var accordTimerDiv = $('<div>',{
			'class':'accordTimerDiv'
		});
		var accordTimerRadio = $('<input>',{
			'type':'radio',
			'name':'useThinkTimeType',
			'checked':'true'
		});
		var accordTimerLable=$('<label>',{
			'text':'与计数器一致'
		});
		accordTimerDiv.append(accordTimerRadio);
		accordTimerDiv.append(accordTimerLable);

		var fixedValueTimeDiv = $('<div>',{
			'class':'fixedValueTimeDiv'
		});
		var fixedValueTimeRadio = $('<input>',{
			'type':'radio',
			'name':'useThinkTimeType',
		});
		var fixedValueTimeLable=$('<label>',{
			'text':'固定值'
		});
		var fixedValueTimeInput=$('<input>',{
			'type':'text'
		});
		var fixedValueTimeLable2=$('<label>',{
			'text':'秒'
		});
		fixedValueTimeDiv.append(fixedValueTimeRadio);
		fixedValueTimeDiv.append(fixedValueTimeLable);
		fixedValueTimeDiv.append(fixedValueTimeInput);
		fixedValueTimeDiv.append(fixedValueTimeLable2);

		var accordTimerPercentDiv = $('<div>',{
			'class':'accordTimerPercentDiv'
		});
		var accordTimerPercentRadio = $('<input>',{
			'type':'radio',
			'name':'useThinkTimeType',
		});
		var accordTimerPercentLable=$('<label>',{
			'text':'使用思考时间'
		});

		var accordTimerPercentInputDiv=$('<div>',{
			'class':'accordTimerPercentInputDiv'
		});
		var accordTimerPercentInputInput1=$('<input>',{
			'type':'text'
		});
		var accordTimerPercentInputLabel1=$('<label>',{
			'text':'% 至'
		});
		var accordTimerPercentInputInput2=$('<input>',{
			'type':'text'
		});
		var accordTimerPercentInputLabel2=$('<label>',{
			'text':'%'
		});
		accordTimerPercentInputDiv.append(accordTimerPercentInputInput1);
		accordTimerPercentInputDiv.append(accordTimerPercentInputLabel1);
		accordTimerPercentInputDiv.append(accordTimerPercentInputInput2);
		accordTimerPercentInputDiv.append(accordTimerPercentInputLabel2);

		accordTimerPercentDiv.append(accordTimerPercentRadio);
		accordTimerPercentDiv.append(accordTimerPercentLable);
		accordTimerPercentDiv.append(accordTimerPercentInputDiv);

		useThinkTimeDownDiv.append(accordTimerDiv);
		useThinkTimeDownDiv.append(fixedValueTimeDiv);
		useThinkTimeDownDiv.append(accordTimerPercentDiv);


		ret.append(ignoreThinkTimeDiv);
		ret.append(useThinkTimeDiv);
		ret.append(useThinkTimeDownDiv);
		return ret;
	},

	thinkTimeTabContentRadioOnClick:function() {
		var selectRadio = $('#ScriptRuntimeSettingModalBodyContentRightThinkTimeTabContent input:radio:checked').val();
		var operationDiv = $('#ScriptRuntimeSettingModalBodyContentRightThinkTimeTabContent > .useThinkTimeDownDiv');
		if (selectRadio == '1') {
			//表示点击的是忽略思考时间，将里面的select和input变得可以不能编辑
			operationDiv.find('select').attr('disabled',true);
			operationDiv.find('input').attr('disabled',true);
		}
		else{
			operationDiv.find('select').attr('disabled',false);
			operationDiv.find('input').attr('disabled',false);
		}
	},

	createRightErrorHandingTabContent:function() {
		var ret = $('<div>',{
			'class':'rightTabContentDiv tab-pane fade',
			'id':'ScriptRuntimeSettingModalBodyContentRightErrorHandingTabContent',
		});

		var runOccurError = $('<div>',{
			'class':'runOccurError',
			'text':'运行发生错误时'
		});

		var continueRunDiv = $('<div>',{
			'class':'continueRunDiv'
		});
		var continueRunCheckbox = $('<input>',{
			'type':'checkbox',
		});
		var continueRunLable=$('<label>',{
			'text':'继续运行'
		});
		continueRunDiv.append(continueRunCheckbox);
		continueRunDiv.append(continueRunLable);

		var stopAndRecordLogDiv = $('<div>',{
			'class':'stopAndRecordLogDiv'
		});
		var stopAndRecordLogCheckbox = $('<input>',{
			'type':'checkbox',
		});
		var stopAndRecordLogLable=$('<label>',{
			'text':'终止并记录日志'
		});
		stopAndRecordLogDiv.append(stopAndRecordLogCheckbox);
		stopAndRecordLogDiv.append(stopAndRecordLogLable);

		var savePageSnapShootDiv = $('<div>',{
			'class':'continueRunDiv'
		});
		var savePageSnapShootCheckbox = $('<input>',{
			'type':'checkbox',
		});
		var savePageSnapShootLable=$('<label>',{
			'text':'保存页面快照'
		});
		savePageSnapShootDiv.append(savePageSnapShootCheckbox);
		savePageSnapShootDiv.append(savePageSnapShootLable);

		ret.append(runOccurError);
		ret.append(continueRunDiv);
		ret.append(stopAndRecordLogDiv);
		ret.append(savePageSnapShootDiv);
		return ret;
	},
	createRightProxySettingTabContent:function() {
		var ret = $('<div>',{
			'class':'rightTabContentDiv tab-pane fade',
			'id':'ScriptRuntimeSettingModalBodyContentRightProxySettingTabContent',
		});

		var dontUseProxyDiv = $('<div>',{
			'class':'proxySettingTabContentRadioDiv'
		});
		var dontUseProxyRadio = $('<input>',{
			'type':'radio',
			'value':'1',
			'name':'proxySettingTabContentUseType'
		});
		var dontUseProxyLable=$('<label>',{
			'text':'不使用代理'
		});
		dontUseProxyDiv.append(dontUseProxyRadio);
		dontUseProxyDiv.append(dontUseProxyLable);

		var automaticTestingProxyDiv = $('<div>',{
			'class':'proxySettingTabContentRadioDiv'
		});
		var automaticTestingProxyRadio = $('<input>',{
			'type':'radio',
			'value':'2',
			'name':'proxySettingTabContentUseType'
		});
		var automaticTestingProxyLable=$('<label>',{
			'text':'自动检测代理'
		});
		automaticTestingProxyDiv.append(automaticTestingProxyRadio);
		automaticTestingProxyDiv.append(automaticTestingProxyLable);

		var useSystemProxySettingDiv = $('<div>',{
			'class':'proxySettingTabContentRadioDiv'
		});
		var useSystemProxySettingRadio = $('<input>',{
			'type':'radio',
			'value':'3',
			'name':'proxySettingTabContentUseType'
		});
		var useSystemProxySettingLable=$('<label>',{
			'text':'使用系统代理设置'
		});
		useSystemProxySettingDiv.append(useSystemProxySettingRadio);
		useSystemProxySettingDiv.append(useSystemProxySettingLable);

		var manualSettingProxyDiv = $('<div>',{
			'class':'proxySettingTabContentRadioDiv'
		});
		var manualSettingProxyRadio = $('<input>',{
			'type':'radio',
			'value':'4',
			'name':'proxySettingTabContentUseType'
		});
		var manualSettingProxyLable=$('<label>',{
			'text':'手动配置代理'
		});
		manualSettingProxyDiv.append(manualSettingProxyRadio);
		manualSettingProxyDiv.append(manualSettingProxyLable);

		var proxySettingDownDiv = $('<div>',{
			'class':'proxySettingDownDiv'
		});

		for (var i = 0; i <4; i++) {
			var linDiv =$('<div>',{
				'class':'proxySettingInputLineDiv'
			});
			var label1 = $('<label>',{
				'text':'HTTP代理'
			});
			var input1 = $('<input>',{
				'type':'text'
			});
			var label2 = $('<label>',{
				'text':'端口'
			});
			var input2 = $('<input>',{
				'type':'text'
			});
			switch(i){
				case 0:
					label1[0].innerText='HTTP代理';
					break;
				case 1:
					label1[0].innerText='SSL代理';
					break;
				case 2:
					label1[0].innerText='FTP代理';
					break;
				case 3:
					label1[0].innerText='Socks代理';
					break;
				default:
				    break;

			}
			linDiv.append(label1);
			linDiv.append(input1);
			linDiv.append(label2);
			linDiv.append(input2);

			proxySettingDownDiv.append(linDiv);
		}

		var proxyCheckBoxDiv = $('<div>',{
		});
		var proxyCheckBox = $('<input>',{
			'type':'checkbox',
		});
		var proxyCheckBoxLable=$('<label>',{
			'text':'为所有协议使用相同的代理'
		});
		proxyCheckBoxDiv.append(proxyCheckBox);
		proxyCheckBoxDiv.append(proxyCheckBoxLable);
		proxySettingDownDiv.append(proxyCheckBoxDiv);

		ret.append(dontUseProxyDiv);
		ret.append(automaticTestingProxyDiv);
		ret.append(useSystemProxySettingDiv);
		ret.append(manualSettingProxyDiv);
		ret.append(proxySettingDownDiv);
		return ret;
	},
	createRightBrowserCacheTabContent:function() {
		var ret = $('<div>',{
			'class':'rightTabContentDiv tab-pane fade',
			'id':'ScriptRuntimeSettingModalBodyContentRightBrowserCacheTabContent',
		});

		var clearCacheEveryTimeDiv = $('<div>',{
			'class':'browserCacheTabContentRadioDiv'
		});
		var clearCacheEveryTimeRadio = $('<input>',{
			'type':'radio',
			'value':'1',
			'name':'browserCacheTabContentUseType'
		});
		var clearCacheEveryTimeLable=$('<label>',{
			'text':'每次迭代时清除缓存'
		});
		clearCacheEveryTimeDiv.append(clearCacheEveryTimeRadio);
		clearCacheEveryTimeDiv.append(clearCacheEveryTimeLable);

		var useBrowserCacheDiv = $('<div>',{
			'class':'browserCacheTabContentRadioDiv'
		});
		var useBrowserCacheRadio = $('<input>',{
			'type':'radio',
			'value':'2',
			'name':'browserCacheTabContentUseType'
		});
		var useBrowserCacheLable=$('<label>',{
			'text':'使用已有缓存'
		});
		useBrowserCacheDiv.append(useBrowserCacheRadio);
		useBrowserCacheDiv.append(useBrowserCacheLable);


		var browserCacheDownDiv = $('<div>',{
			'class':'browserCacheDownDiv'
		});

		var saveNotHTMLToCacheDiv = $('<div>',{
			'class':'saveNotHTMLToCacheDiv'
		});
		var saveNotHTMLToCacheCheckbox = $('<input>',{
			'type':'checkbox',
		});
		var saveNotHTMLToCacheLable=$('<label>',{
			'text':'将非HTML元素保存至缓存'
		});
		saveNotHTMLToCacheDiv.append(saveNotHTMLToCacheCheckbox);
		saveNotHTMLToCacheDiv.append(saveNotHTMLToCacheLable);

		var updatePageCacheDiv = $('<div>',{
			'class':'updatePageCacheDiv'
		});
		var updatePageCacheCheckbox = $('<input>',{
			'type':'checkbox',
		});
		var updatePageCacheLable=$('<label>',{
			'text':'每次用户访问时更新页面缓存'
		});
		updatePageCacheDiv.append(updatePageCacheCheckbox);
		updatePageCacheDiv.append(updatePageCacheLable);

		browserCacheDownDiv.append(saveNotHTMLToCacheDiv);
		browserCacheDownDiv.append(updatePageCacheDiv);


		ret.append(clearCacheEveryTimeDiv);
		ret.append(useBrowserCacheDiv);
		ret.append(browserCacheDownDiv);
		return ret;
	},
	createRightTimeOutTabContent:function() {
		var ret = $('<div>',{
			'class':'rightTabContentDiv tab-pane fade',
			'id':'ScriptRuntimeSettingModalBodyContentRightTimeOutTabContent',
		});

		for (var i = 0; i <4; i++) {
			var linDiv =$('<div>',{
				'class':'timeOutInputLineDiv'
			});
			var label1 = $('<label>',{
				'text':'HTTP-request connect timeout(sec)'
			});
			var input1 = $('<input>',{
				'type':'text'
			});
			switch(i){
				case 0:
					label1[0].innerText='HTTP-request connect timeout(sec)';
					break;
				case 1:
					label1[0].innerText='HTTP-request receive timeout(sec)';
					break;
				case 2:
					label1[0].innerText='HTTP Keep-Alive timeout(sec)';
					break;
				case 3:
					label1[0].innerText='step download timeout(sec)';
					break;
				default:
				    break;

			}
			linDiv.append(label1);
			linDiv.append(input1);

			ret.append(linDiv);
		} 

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