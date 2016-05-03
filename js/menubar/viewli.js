var viewli ={
    //用来产生视图菜单
    initialize:function(){     
    	var viewli = $('<li>',{
    		'class':'dropdown'
    	});
    	var viewa = $('<a>',{
    		'href':'#',
    		'class':'dropdown-toggle',
    		'data-toggle':'dropdown',
    		'role':'button',
    		'aria-haspopup':'true',
    		'aria-expanded':'false',
    		'text':'视图'
    	});
    	var span = $('<span>',{
    		'class':'caret'
    	});
    	viewa.append(span);
    	var viewul = $('<ul>',{
    		'class':'dropdown-menu'
    	});
    	var toolBarli = $('<li>');
    	var toolBara = $('<a>',{
    		'href':'#',
    		'text':'工具条'
    	});
    	toolBarli.append(toolBara);
    	var runTimeSettingli = $('<li>');
    	var runTimeSettinga = $('<a>',{
    		'href':'#',
    		'text':'运行时设置'
    	});
    	runTimeSettingli.append(runTimeSettinga);
    	var scriptListli = $('<li>');
    	var scriptLista = $('<a>',{
    		'href':'#',
    		'text':'脚本列表'
    	});
    	scriptListli.append(scriptLista);
    	var runlogli = $('<li>');
    	var runloga = $('<a>',{
    		'href':'#',
    		'text':'运行日志'
    	});
    	runlogli.append(runloga);
    	var resultViewli = $('<li>');
    	var resultViewa = $('<a>',{
    		'href':'#',
    		'text':'结果视图'
    	});
    	resultViewli.append(resultViewa);
    	var documentOutlineli = $('<li>');
    	var documentOutlinea = $('<a>',{
    		'href':'#',
    		'text':'文档大纲'
    	});
    	documentOutlineli.append(documentOutlinea);

    	viewul.append(toolBarli);
    	viewul.append(runTimeSettingli);
    	viewul.append(scriptListli);
    	viewul.append(runlogli);
    	viewul.append(resultViewli);
    	viewul.append(documentOutlineli);

    	viewli.append(viewa);
    	viewli.append(viewul);

    	return viewli;
    },	
}