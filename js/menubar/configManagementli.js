var configManagementli ={
    //用来产生配置管理菜单
    initialize:function(){     
    	var configManagementli = $('<li>',{
    		'class':'dropdown'
    	});
    	var configManagementa = $('<a>',{
    		'href':'#',
    		'class':'dropdown-toggle',
    		'data-toggle':'dropdown',
    		'role':'button',
    		'aria-haspopup':'true',
    		'aria-expanded':'false',
    		'text':'配置管理'
    	});
    	var span = $('<span>',{
    		'class':'caret'
    	});
    	configManagementa.append(span);
    	var configManagementul = $('<ul>',{
    		'class':'dropdown-menu'
    	});
    	var configli = $('<li>');
    	var configa = $('<a>',{
    		'href':'#',
    		'text':'配置管理'
    	});
    	configli.append(configa);

    	configManagementul.append(configli);

    	configManagementli.append(configManagementa);
    	configManagementli.append(configManagementul);

    	return configManagementli;
    },	
}