var scriptli ={

    //这是用来产生脚本菜单
    initialize:function(){   
    	var scriptli = $('<li>',{
    		'class':'dropdown'
    	});
    	var scripta = $('<a>',{
    		'href':'#',
    		'class':'dropdown-toggle',
    		'data-toggle':'dropdown',
    		'role':'button',
    		'aria-haspopup':'true',
    		'aria-expanded':'false',
    		'text':'脚本'
    	});
    	var span = $('<span>',{   //这个span是用来生成那个小三角的下拉图标
    		'class':'caret'
    	});
    	scripta.append(span);
    	var scriptul = $('<ul>',{
    		'class':'dropdown-menu'
    	});
    	var startRecordli = $('<li>');
    	var startRecorda = $('<a>',{
    		'href':'#',
    		'text':'开始录制',
            'onclick':'scriptli.startRecordaOnClick()'
    	});
    	startRecordli.append(startRecorda);
    	var playBackli = $('<li>');
    	var playBacka = $('<a>',{
    		'href':'#',
    		'text':'回放'
    	});
    	playBackli.append(playBacka);
    	var pauseli = $('<li>');
    	var pausea = $('<a>',{
    		'href':'#',
    		'text':'暂停'
    	});
    	pauseli.append(pausea);
    	var stopli = $('<li>');
    	var stopa = $('<a>',{
    		'href':'#',
    		'text':'停止'
    	});
    	stopli.append(stopa);
    	var incidentli = $('<li>');
    	var incidenta = $('<a>',{
    		'href':'#',
    		'text':'事件'
    	});
    	incidentli.append(incidenta);
    	var thingli = $('<li>');
    	var thinga = $('<a>',{
    		'href':'#',
    		'text':'事务'
    	});
    	thingli.append(thinga);
    	var setParametersli = $('<li>');
    	var setParametersa = $('<a>',{
    		'href':'#',
    		'text':'设置参数',
            'onclick':'scriptli.setParameterOnClick()'
    	});
    	setParametersli.append(setParametersa);
    	var addCorrelationli = $('<li>');
    	var addCorrelationa = $('<a>',{
    		'href':'#',
    		'text':'创建关联'
    	});
    	addCorrelationli.append(addCorrelationa);
    	var rallyPointli = $('<li>');
    	var rallyPointa = $('<a>',{
    		'href':'#',
    		'text':'集合点'
    	});
    	rallyPointli.append(rallyPointa);
    	var addFunctionli = $('<li>');
    	var addFunctiona = $('<a>',{
    		'href':'#',
    		'text':'添加函数'
    	});
    	addFunctionli.append(addFunctiona);

    	scriptul.append(startRecordli);
    	scriptul.append(playBackli);
    	scriptul.append(pauseli);
    	scriptul.append(stopli);
    	scriptul.append(incidentli);
    	scriptul.append(thingli);
    	scriptul.append(setParametersli);
    	scriptul.append(addCorrelationli);
    	scriptul.append(rallyPointli);
    	scriptul.append(addFunctionli);

    	scriptli.append(scripta);
    	scriptli.append(scriptul);

    	return scriptli;
    },

    startRecordaOnClick:function(){
        //此函数就是用来创建一个新的脚本。
        scriptMain.createScriptModal();
    },

    setParameterOnClick:function(){
        //此函数就是用来创建一个新的脚本。
        scriptMain.setParameterOnClick();
    },
}