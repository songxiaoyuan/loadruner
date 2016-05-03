var editli ={	
    //这是用来生产编辑菜单
    initialize:function(){   
    	var editli = $('<li>',{
    		'class':'dropdown'
    	});
    	var edita = $('<a>',{
    		'href':'#',
    		'class':'dropdown-toggle',
    		'data-toggle':'dropdown',
    		'role':'button',
    		'aria-haspopup':'true',
    		'aria-expanded':'false',
    		'text':'编辑'
    	});
    	var span = $('<span>',{   //这个span是用来生成那个小三角的下拉图标
    		'class':'caret'
    	});
    	edita.append(span);
    	var editul = $('<ul>',{
    		'class':'dropdown-menu'
    	});
    	var undoOperationli = $('<li>');
    	var undoOperationa = $('<a>',{
    		'href':'#',
    		'text':'撤销操作 Ctrl+Z'
    	});
    	undoOperationli.append(undoOperationa);
    	var redoli = $('<li>');
    	var redoa = $('<a>',{
    		'href':'#',
    		'text':'重复操作  Ctrl+R'
    	});
    	redoli.append(redoa);
    	var findli = $('<li>');
    	var finda = $('<a>',{
    		'href':'#',
    		'text':'查找  Ctrl+F'
    	});
    	findli.append(finda);
    	var findNextli = $('<li>');
    	var findNexta = $('<a>',{
    		'href':'#',
    		'text':'查找下一个'
    	});
    	findNextli.append(findNexta);
    	var replaceli = $('<li>');
    	var replacea = $('<a>',{
    		'href':'#',
    		'text':'替换 Ctrl+E'
    	});
    	replaceli.append(replacea);
    	var cutli = $('<li>');
    	var cuta = $('<a>',{
    		'href':'#',
    		'text':'剪切 Ctrl+X'
    	});
    	cutli.append(cuta);
    	var copyli = $('<li>');
    	var copya = $('<a>',{
    		'href':'#',
    		'text':'复制  Ctrl+C'
    	});
    	copyli.append(copya);
    	var pasteli = $('<li>');
    	var pastea = $('<a>',{
    		'href':'#',
    		'text':'粘贴  Ctrl+V'
    	});
    	pasteli.append(pastea);
    	var selectAllli = $('<li>');
    	var selectAlla = $('<a>',{
    		'href':'#',
    		'text':'全选  Ctrl+A'
    	});
    	selectAllli.append(selectAlla);

    	editul.append(undoOperationli);
    	editul.append(redoli);
    	editul.append(findli);
    	editul.append(findNextli);
    	editul.append(replaceli);
    	editul.append(replaceli);
    	editul.append(cutli);
    	editul.append(copyli);
    	editul.append(pasteli);
    	editul.append(selectAllli);

    	editli.append(edita);
    	editli.append(editul);

    	return editli;
    },	
}