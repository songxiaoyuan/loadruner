//这个文件就是用来管理脚本具体信息部分的函数.
var scriptInformation={
	initialize:function(){
		//首先隐藏以前的project等div。
		if($('#scriptInformationDiv').length ==0){
			$('#Description > div').hide();
			var scriptInformationDiv = $('<div>',{
				'id':'scriptInformationDiv'
			});
			var scriptInformationTabsDiv = scriptInformation.createScriptInformationDiv();

			var scriptToolBar  = scriptInformation.scriptToolBar();
			scriptInformationDiv.append(scriptToolBar);
			scriptInformationDiv.append(scriptInformationTabsDiv);
			$('#Description').append(scriptInformationDiv);
		}
		else if($('#scriptInformationDiv').is(':hidden')){
			$('#Description > div').hide();
			$('#scriptInformationDiv').show();
		}
		else{
			//现在就在显示
		}
		//然后显示有关script的div。
	},

	//添加有关脚本的工具栏,返回是一个div.
	scriptToolBar:function(){
		var scriptToolBar = $('<div>',{
			'id':'scriptToolBar'
		});

		var recordScriptDiv = $('<div>',{
			'class':'buttonInLine'
		});
		var recordScriptIcon = $('<div>',{
			'id':'scriptToolBarRecordScriptIcon',
			'class':'buttonInLine'
		});
		var recordScriptButton = $('<button>',{
			'text':'录制脚本',
			'class':'buttonInLine',
			'onclick':''
		});
		recordScriptDiv.append(recordScriptIcon);
		recordScriptDiv.append(recordScriptButton);

		var playBackDiv = $('<div>',{
			'class':'buttonInLine'
		});
		var playBackIcon = $('<div>',{
			'id':'scriptToolBarplayBackIcon',
			'class':'buttonInLine'
		});
		var playBackButton = $('<button>',{
			'text':'回放',
			'class':'buttonInLine',
			'onclick':''
		});
		playBackDiv.append(playBackIcon);
		playBackDiv.append(playBackButton);

		var suspendDiv = $('<div>',{
			'class':'buttonInLine'
		});
		var suspendIcon = $('<div>',{
			'id':'scriptToolBarsuspendIcon',
			'class':'buttonInLine',
		});
		var suspendButton = $('<button>',{
			'text':'暂停',
			'class':'buttonInLine',
			'onclick':''
		});
		suspendDiv.append(suspendIcon);
		suspendDiv.append(suspendButton);

		var stopDiv = $('<div>',{
			'class':'buttonInLine'
		});
		var stopIcon = $('<div>',{
			'id':'scriptToolBarstopIcon',
			'class':'buttonInLine'
		});
		var stopButton = $('<button>',{
			'text':'停止',
			'class':'buttonInLine',
			'onclick':''
		});
		stopDiv.append(stopIcon);
		stopDiv.append(stopButton);

		var beginThingDiv = $('<div>',{
			'class':'buttonInLine'
		});
		var beginThingIcon = $('<div>',{
			'id':'scriptToolBarbeginThingIcon',
			'class':'buttonInLine',
		});
		var beginThingButton = $('<button>',{
			'text':'事物开始',
			'class':'buttonInLine',
			'onclick':''
		});
		beginThingDiv.append(beginThingIcon);
		beginThingDiv.append(beginThingButton);

		var stopThingDiv = $('<div>',{
			'class':'buttonInLine'
		});
		var stopThingIcon = $('<div>',{
			'id':'scriptToolBarstopThingIcon',
			'class':'buttonInLine',
		});
		var stopThingButton = $('<button>',{
			'text':'事物结束',
			'class':'buttonInLine',
			'onclick':''
		});
		stopThingDiv.append(stopThingIcon);
		stopThingDiv.append(stopThingButton);

		var addRallyPointDiv = $('<div>',{
			'class':'buttonInLine'
		});
		var addRallyPointIcon = $('<div>',{
			'id':'scriptToolBaraddRallyPointIcon',
			'class':'buttonInLine',
		});
		var addRallyPointButton = $('<button>',{
			'text':'添加集合点',
			'class':'buttonInLine',
			'onclick':''
		});
		addRallyPointDiv.append(addRallyPointIcon);
		addRallyPointDiv.append(addRallyPointButton);

		var parameterizationDiv = $('<div>',{
			'class':'buttonInLine'
		});
		var parameterizationIcon = $('<div>',{
			'id':'scriptToolBarparameterizationIcon',
			'class':'buttonInLine',
		});
		var parameterizationButton = $('<button>',{
			'text':'参数化',
			'class':'buttonInLine',
			'onclick':''
		});
		parameterizationDiv.append(parameterizationIcon);
		parameterizationDiv.append(parameterizationButton);

		var correlationDiv = $('<div>',{
			'class':'buttonInLine'
		});
		var correlationIcon = $('<div>',{
			'id':'scriptToolBarcorrelationIcon',
			'class':'buttonInLine',
		});
		var correlationButton = $('<button>',{
			'text':'关联',
			'class':'buttonInLine',
			'onclick':''
		});
		correlationDiv.append(correlationIcon);
		correlationDiv.append(correlationButton);

		var runtimeSettingDiv = $('<div>',{
			'class':'buttonInLine'
		});
		var runtimeSettingIcon = $('<div>',{
			'id':'scriptToolBarruntimeSettingIcon',
			'class':'buttonInLine',
		});
		var runtimeSettingButton = $('<button>',{
			'text':'运行时设置',
			'class':'buttonInLine',
			'onclick':''
		});
		runtimeSettingDiv.append(runtimeSettingIcon);
		runtimeSettingDiv.append(runtimeSettingButton);

		var runInSceneDiv = $('<div>',{
			'class':'buttonInLine'
		});
		var runInSceneIcon = $('<div>',{
			'id':'scriptToolBarrunInSceneIcon',
			'class':'buttonInLine',
		});
		var runInSceneButton = $('<button>',{
			'text':'在场景中运行',
			'class':'buttonInLine',
			'onclick':''
		});
		runInSceneDiv.append(runtimeSettingIcon);
		runInSceneDiv.append(runInSceneButton);

		scriptToolBar.append(recordScriptDiv);
		scriptToolBar.append(playBackDiv);
		scriptToolBar.append(suspendDiv);
		scriptToolBar.append(stopDiv);
		scriptToolBar.append(beginThingDiv);
		scriptToolBar.append(stopThingDiv);
		scriptToolBar.append(addRallyPointDiv);
		scriptToolBar.append(parameterizationDiv);
		scriptToolBar.append(correlationDiv);
		scriptToolBar.append(runtimeSettingDiv);
		scriptToolBar.append(runInSceneDiv);

		return scriptToolBar;
	},

	//此函数是用来产生脚本信息的div。
	createScriptInformationDiv:function(){
		var ret = $('<div>',{
			'class':'ScriptInformationDeatilsDiv col-md-12'
		});

		var scriptTabs = $('<div>',{
			'id':'scriptTabs'
		});
		var scriptTabsUl = $('<ul>',{
			'class':'nav nav-tabs',
			'role':'tablist'
		});
		var scriptTabsContent = $('<div>',{
			'class':'tab-content'
		});
		scriptTabs.append(scriptTabsUl);
		scriptTabs.append(scriptTabsContent);

		ret.append(scriptTabs);
		return ret;
	},

	//此函数是用来产生脚本具体细节的div，包括初始化，事件，结果等信息，传入的是脚本节点的id。不同的脚本会创建不同的div.此函数是由addtab插件调用的。
	createScriptInformationDeatilsDiv:function(scriptNodeId){
		var ret = $('<div>',{
			'class':'createScriptInformationDeatilsDiv'
		});
		var scriptTabsContent = scriptInformation.createScriptTabsContentDiv(scriptNodeId);
		var logText = $('<div>',{
			'class':'logText',
			'text':'日志'
		});
		var logDetails = $('<textarea>',{
			'class':'logDetails'
		});

		ret.append(scriptTabsContent);
		ret.append(logText);
		ret.append(logDetails);
		return ret;
	},

    //此函数是用来产生每一个脚本对应的tab页面主要是左边的部分，传入的参数是脚本节点的ID。
	createScriptTabsContentDiv:function(scriptNodeId){
		var ret = $('<div>',{
			'class':'ScriptTabsContentDiv'
		});
		var ScriptTabsContentDivLeft = $('<div>',{
			'class':'ScriptTabsContentDivLeft'
		});
		var ScriptTabsContentDivRight = $('<div>',{
			'class':'ScriptTabsContentDivRight tab-content'
		});
		var ScriptInitializeTabsContentDiv = scriptInformation.createScriptInitializeTabsContentDiv(scriptNodeId);
		var ScriptThingTabsContentDiv = scriptInformation.createScriptThingTabsContentDiv(scriptNodeId);
		var ScriptEndTabsContentDiv = scriptInformation.createScriptEndTabsContentDiv(scriptNodeId);

		ScriptTabsContentDivRight.append(ScriptInitializeTabsContentDiv);
		ScriptTabsContentDivRight.append(ScriptThingTabsContentDiv);
		ScriptTabsContentDivRight.append(ScriptEndTabsContentDiv);

		var scriptTabsContentUl = $('<ul>',{
		});

		var scriptInitializeli = $('<li>',{
		});
		var scriptInitializea = $('<a>',{
			'href':'#ScriptInitializeTabsContentDiv'+scriptNodeId,
			'data-toggle':'tab',
			'text':'初始化'
		});
		scriptInitializeli.append(scriptInitializea);

		var scriptThingli = $('<li>',{
		});
		var scriptThinga = $('<a>',{
			'href':'#ScriptThingTabsContentDiv'+scriptNodeId,
			'data-toggle':'tab',
			'text':'事件'
		});
		scriptThingli.append(scriptThinga);

		var  scriptEndli = $('<li>',{
		});
		var scriptEnda = $('<a>',{
			'href':'#ScriptEndTabsContentDiv'+scriptNodeId,
			'data-toggle':'tab',
			'text':'结束'
		});
		scriptEndli.append(scriptEnda);

		scriptTabsContentUl.append(scriptInitializeli);
		scriptTabsContentUl.append(scriptThingli);
		scriptTabsContentUl.append(scriptEndli);
		ScriptTabsContentDivLeft.append(scriptTabsContentUl);


		ret.append(ScriptTabsContentDivLeft);
		ret.append(ScriptTabsContentDivRight);
		return ret;
	},

	//此函数是用来产生每一个脚本对应的tab页面右边的点击初始化的内容，传入的参数是脚本节点的ID。
	createScriptInitializeTabsContentDiv:function(scriptNodeId){
		var ret = $('<div>',{
			'class':'ScriptTabsContentTabContent tab-pane fade in active',
			'id':'ScriptInitializeTabsContentDiv'+scriptNodeId,
		});

		var scriptInitializeTabsContentDivUl = $('<ul>',{
			'class':'scriptTabsContentDivTab'
		});
		var scriptInitializeTabsContentScriptli = $('<li>',{
			'class':'scriptTabsContentli'
		});
		var scriptInitializeTabsContentScripta = $('<a>',{
			'href':'#ScriptInitializeTabsContentScriptTabContentDiv'+scriptNodeId,
			'data-toggle':'tab',
			'text':'脚本'
		});
		scriptInitializeTabsContentScriptli.append(scriptInitializeTabsContentScripta);

		var  scriptInitializeTabsContentRequestli = $('<li>',{
			'class':'scriptTabsContentli'
		});
		var scriptInitializeTabsContentRequesta = $('<a>',{
			'href':'#ScriptInitializeTabsContentRequestTabContentDiv'+scriptNodeId,
			'data-toggle':'tab',
			'text':'请求'
		});
		scriptInitializeTabsContentRequestli.append(scriptInitializeTabsContentRequesta);

		scriptInitializeTabsContentDivUl.append(scriptInitializeTabsContentScriptli);
		scriptInitializeTabsContentDivUl.append(scriptInitializeTabsContentRequestli);


		var scriptInitializeTabsContentDivTabContent = $('<div>',{
			'class':'scriptTabsContentDivSecondTabContent tab-content'
		});
		var ScriptInitializeTabsContentScriptTabContentDiv = scriptInformation.createScriptInitializeTabsContentScriptTabContent(scriptNodeId);
		var ScriptInitializeTabsContentRequestTabContentDiv = scriptInformation.createScriptInitializeTabsContentRequestTabContent(scriptNodeId);
		scriptInitializeTabsContentDivTabContent.append(ScriptInitializeTabsContentScriptTabContentDiv);
		scriptInitializeTabsContentDivTabContent.append(ScriptInitializeTabsContentRequestTabContentDiv);

		ret.append(scriptInitializeTabsContentDivUl);
		ret.append(scriptInitializeTabsContentDivTabContent);
		return ret;
	},

	//次函数是用来产生在脚本中脚本tab的主要内容，传入的是脚本节点id，因为，在脚本中，初始化，事件和结束的部分，右边tab的内容个一样。
	//所以在这里用一个函数来生成，主要的任务就是对应div的id一定要区分清楚！！
	createScriptInitializeTabsContentScriptTabContent:function(scriptNodeId){
		var ret = $('<div>',{
			'class':'scriptTab2Content tab-pane fade in active',
			'id':'ScriptInitializeTabsContentScriptTabContentDiv'+scriptNodeId,
		});
		var scriptTextarea = $('<textarea>',{
			'class':'scriptTextarea',
			'text':'this is script tab content'
		});
		ret.append(scriptTextarea);
		return ret;
	},

	createScriptInitializeTabsContentRequestTabContent:function(scriptNodeId){
		var ret = $('<div>',{
			'class':'scriptTab2Content tab-pane fade',
			'id':'ScriptInitializeTabsContentRequestTabContentDiv'+scriptNodeId,
			'text':'test'
		});
		
		return ret;
	},

	//此函数是用来产生每一个脚本对应的tab页面右边的点击事件的内容，传入的参数是脚本节点的ID。
	createScriptThingTabsContentDiv:function(scriptNodeId){
		var ret = $('<div>',{
			'class':'ScriptTabsContentTabContent tab-pane fade',
			'id':'ScriptThingTabsContentDiv'+scriptNodeId,
			'text':'Thing'+scriptNodeId
		});

		// var scriptTabsContentRightTab = $('<div>',{
		// 	'class':'scriptTabsContentRightTab'
		// });

		// var scriptTabsContentRightTabContent = $('<div>',{
		// });
		// var scriptInitializea = $('<a>',{
		// 	'href':'#',
		// 	'data-toggle':'tab',
		// 	'text':'初始化'
		// });
		// scriptInitializeli.append(scriptInitializea);

		// var scriptThingli = $('<li>',{
		// });
		// var scriptThinga = $('<a>',{
		// 	'href':'#',
		// 	'data-toggle':'tab',
		// 	'text':'事件'
		// });
		// scriptThingli.append(scriptThinga);

		// var  scriptEndli = $('<li>',{
		// });
		// var scriptEnda = $('<a>',{
		// 	'href':'#',
		// 	'data-toggle':'tab',
		// 	'text':'结束'
		// });
		// scriptEndli.append(scriptEnda);

		// scriptTabsContentUl.append(scriptInitializeli);
		// scriptTabsContentUl.append(scriptThingli);
		// scriptTabsContentUl.append(scriptEndli);
		// ScriptTabsContentDivLeft.append(scriptTabsContentUl);


		// ret.append(ScriptTabsContentDivLeft);
		// ret.append(ScriptTabsContentDivRight);
		return ret;
	},

	//此函数是用来产生每一个脚本对应的tab页面右边的点击结束的内容，传入的参数是脚本节点的ID。
	createScriptEndTabsContentDiv:function(scriptNodeId){
		var ret = $('<div>',{
			'class':'ScriptTabsContentTabContent tab-pane fade',
			'id':'ScriptEndTabsContentDiv'+scriptNodeId,
			'text':'end'+scriptNodeId
		});

		// var scriptTabsContentRightTab = $('<div>',{
		// 	'class':'scriptTabsContentRightTab'
		// });

		// var scriptTabsContentRightTabContent = $('<div>',{
		// });
		// var scriptInitializea = $('<a>',{
		// 	'href':'#',
		// 	'data-toggle':'tab',
		// 	'text':'初始化'
		// });
		// scriptInitializeli.append(scriptInitializea);

		// var scriptThingli = $('<li>',{
		// });
		// var scriptThinga = $('<a>',{
		// 	'href':'#',
		// 	'data-toggle':'tab',
		// 	'text':'事件'
		// });
		// scriptThingli.append(scriptThinga);

		// var  scriptEndli = $('<li>',{
		// });
		// var scriptEnda = $('<a>',{
		// 	'href':'#',
		// 	'data-toggle':'tab',
		// 	'text':'结束'
		// });
		// scriptEndli.append(scriptEnda);

		// scriptTabsContentUl.append(scriptInitializeli);
		// scriptTabsContentUl.append(scriptThingli);
		// scriptTabsContentUl.append(scriptEndli);
		// ScriptTabsContentDivLeft.append(scriptTabsContentUl);


		// ret.append(ScriptTabsContentDivLeft);
		// ret.append(ScriptTabsContentDivRight);
		return ret;
	},

}