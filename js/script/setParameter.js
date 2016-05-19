//这个文件就是用来管理脚中点击设置参数之后反应的函数.
var setParameter={
	//此函数的作用是用来产生点击创建脚本时产生modal。
	setParameterOnClick:function(){
		var scriptTab2ScriptContent = scriptInformation.getActiveScriptDiv();
		console.log(scriptTab2ScriptContent.attr('class'));
		if(scriptTab2ScriptContent.attr('class') && scriptTab2ScriptContent.attr('class').indexOf('activ') >0){
			if(scriptTab2ScriptContent.children('.parameterListDiv') > 0){
				console.log('the list div is also appended!!');
			}
			else{
				var parameterListDiv = setParameter.createParameterListDiv();
				scriptTab2ScriptContent.append(parameterListDiv);
				console.log('the list div is new append');
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
			'text':'hello world'
		});

		return ret;
	},
}