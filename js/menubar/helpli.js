var helpli ={
    //用来产生帮助菜单
    initialize:function(){     
    	var helpli = $('<li>',{
    		'class':'dropdown'
    	});
    	var helpa = $('<a>',{
    		'href':'#',
    		'class':'dropdown-toggle',
    		'data-toggle':'dropdown',
    		'role':'button',
    		'aria-haspopup':'true',
    		'aria-expanded':'false',
    		'text':'帮助'
    	});
    	var span = $('<span>',{
    		'class':'caret'
    	});
    	helpa.append(span);
    	var helpul = $('<ul>',{
    		'class':'dropdown-menu'
    	});
    	var helpDocumentli = $('<li>');
    	var helpDocumenta = $('<a>',{
    		'href':'#',
    		'text':'帮助文档'
    	});
    	helpDocumentli.append(helpDocumenta);
    	var functionHelpli = $('<li>');
    	var functionHelpa = $('<a>',{
    		'href':'#',
    		'text':'函数帮助'
    	});
    	functionHelpli.append(functionHelpa);
    	var onlineHelpli = $('<li>');
    	var onlineHelpa = $('<a>',{
    		'href':'#',
    		'text':'在线帮助'
    	});
    	onlineHelpli.append(onlineHelpa);
    	var aboutli = $('<li>');
    	var abouta = $('<a>',{
    		'href':'#',
    		'text':'关于'
    	});
    	aboutli.append(abouta);

    	helpul.append(helpDocumentli);
    	helpul.append(functionHelpli);
    	helpul.append(onlineHelpli);
    	helpul.append(aboutli);

    	helpli.append(helpa);
    	helpli.append(helpul);

    	return helpli;
    },	
}