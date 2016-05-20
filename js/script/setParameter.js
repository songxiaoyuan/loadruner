//这个文件就是用来管理脚中点击设置参数之后反应的函数.
var setParameter={
	//此函数的作用是用来产生点击创建脚本时产生modal。
	setParameterOnClick:function(){
		var scriptTab2ScriptContent = scriptInformation.getActiveScriptDiv();
		if(scriptTab2ScriptContent.attr('class') && scriptTab2ScriptContent.attr('class').indexOf('activ') >0){
			if(scriptTab2ScriptContent.children('.parameterListDiv') > 0){
			}
			else{
				var parameterListDiv = setParameter.createParameterListDiv();
				scriptTab2ScriptContent.append(parameterListDiv);
			}
			var scriptTextarea = scriptTab2ScriptContent.children('textarea,.scriptTextarea');
			scriptTextarea.css({'height':'70%'});

		}
		else{
			window.alert('can not find the scriptTab2ScriptContent and children textarea');
		}
	},

	createParameterListDiv:function(){
		var ret = $('<div>',{
			'class':'parameterListDiv',
		});

		var parameterListDivHead = $('<div>',{
			'class':'parameterListDivHead',
		});

		var parameterListDivHeadText = $('<div>',{
			'class':'parameterListDivHeadText',
			'text':'参数列表'
		});
		var parameterListDivHeadParameterizationButton = $('<button>',{
			'class':'parameterListDivHeadParameterizationButton',
			'text':'参数化',
			'onclick':'createScriptParameterizationModal.initialize()'
		});
		var parameterListDivHeadCorrelationButton = $('<button>',{
			'class':'parameterListDivHeadParameterizationButton',
			'text':'关联',
			'onclick':'createScriptCorrelationModal.initialize()'
		});
		parameterListDivHead.append(parameterListDivHeadText);
		parameterListDivHead.append(parameterListDivHeadCorrelationButton);
		parameterListDivHead.append(parameterListDivHeadParameterizationButton);

		//这个就是用来装table的.
		var parameterListDivTableDiv = $('<div>',{
			'class':'parameterListDivTableDiv',
		});
		var parameterListTable = setParameter.createParameterListTable();
		parameterListDivTableDiv.append(parameterListTable);

		ret.append(parameterListDivHead);
		ret.append(parameterListDivTableDiv);
		return ret;
	},
	createParameterListTable:function(){
		var ret = $('<table>',{
			'class':'createParameterListTable',
			'border':'1',
			'cellspacing':'0',
			'cellpadding':'5'
		});

		var trHead = $('<tr>',{
		});
		var tdHead1 = $('<td>',{
			'text':'参数名'
		});
		var tdHead2 = $('<td>',{
			'text':'参数值'
		});
		trHead.append(tdHead1);
		trHead.append(tdHead2);

		var trContent1 = $('<tr>',{
		});
		var tdContent11 = $('<td>',{
			'text':'LoginName'
		});
		var tdContent12 = $('<td>',{
			'text':'test0001'
		});
		trContent1.append(tdContent11);
		trContent1.append(tdContent12);

		var trContent2 = $('<tr>',{
		});
		var tdContent21 = $('<td>',{
			'text':'PassWord'
		});
		var tdContent22 = $('<td>',{
			'text':'test0001'
		});
		trContent2.append(tdContent21);
		trContent2.append(tdContent22);

		ret.append(trHead);
		ret.append(trContent1);
		ret.append(trContent2);
		return ret;
	},
}