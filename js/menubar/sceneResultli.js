var sceneResultli ={
    //这是用来产生场景及运行结果菜单
    initialize:function(){   
    	var sceneResultli = $('<li>',{
    		'class':'dropdown'
    	});
    	var sceneResulta = $('<a>',{
    		'href':'#',
    		'class':'dropdown-toggle',
    		'data-toggle':'dropdown',
    		'role':'button',
    		'aria-haspopup':'true',
    		'aria-expanded':'false',
    		'text':'场景及运行结果'
    	});
    	var span = $('<span>',{   //这个span是用来生成那个小三角的下拉图标
    		'class':'caret'
    	});
    	sceneResulta.append(span);
    	var sceneResultul = $('<ul>',{
    		'class':'dropdown-menu'
    	});
    	var runSceneli = $('<li>');
    	var runScenea = $('<a>',{
    		'href':'#',
    		'text':'运行场景'
    	});
    	runSceneli.append(runScenea);
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
    	var setli = $('<li>');
    	var seta = $('<a>',{
    		'href':'#',
    		'text':'设置'
    	});
    	setli.append(seta);
    	var monitorli = $('<li>');
    	var monitora = $('<a>',{
    		'href':'#',
    		'text':'监听器'
    	});
    	monitorli.append(monitora);
    	var distributeRunli = $('<li>');
    	var distributeRuna = $('<a>',{
    		'href':'#',
    		'text':'分布式运行'
    	});
    	distributeRunli.append(distributeRuna);
    	var seeResultli = $('<li>');
    	var seeResulta = $('<a>',{
    		'href':'#',
    		'text':'查看运行结果'
    	});
    	seeResultli.append(seeResulta);
    	var editResultli = $('<li>');
    	var editResulta = $('<a>',{
    		'href':'#',
    		'text':'编辑运行结果'
    	});
    	editResultli.append(editResulta);

    	sceneResultul.append(runSceneli);
    	sceneResultul.append(pauseli);
    	sceneResultul.append(stopli);
    	sceneResultul.append(setli);
    	sceneResultul.append(monitorli);
    	sceneResultul.append(distributeRunli);
    	sceneResultul.append(seeResultli);
    	sceneResultul.append(editResultli);

    	sceneResultli.append(sceneResulta);
    	sceneResultli.append(sceneResultul);

    	return sceneResultli;
    },	
}