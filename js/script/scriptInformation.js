//这个文件就是用来管理脚本具体信息部分的函数.
var scriptInformation={
	initialize:function(){
		//首先隐藏以前的project等div。
		if($('#scriptInformationDiv').length ==0){
			console.log('nooooooooooooooooooooo');
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

}