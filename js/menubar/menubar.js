var menubar ={
	test:12,
	initialize:function() {
  	  this.initNavBar();
    },
    initNavBar:function(){
    	var nav = $('<nav>',{
    		'class':'navbar navbar-default'
    	});
    	var navbar = $('<div>',{
    		'class':'navbar-collapse collapse'
    	});
    	var navul = $('<ul>',{
    		'class':'nav navbar-nav'
    	});

    	//添加菜单栏中的文件下拉菜单
    	var fileliDropDown = fileli.initialize();
    	navul.append(fileliDropDown); 

    	//添加菜单栏中编辑下拉菜单
    	var editliDropDown = editli.initialize();
    	navul.append(editliDropDown); 

    	//添加菜单栏中项目下拉菜单
    	var projectliDropDown = projectli.initialize();
    	navul.append(projectliDropDown); 

    	//添加菜单栏中视图下拉菜单
    	var viewliDropDown = viewli.initialize();
    	navul.append(viewliDropDown); 

    	//添加菜单栏中脚本下拉菜单
    	var scriptliDropDown = scriptli.initialize();
    	navul.append(scriptliDropDown); 

    	//添加菜单栏中场景及运行结果下拉菜单
    	var sceneResultliDropDown = sceneResultli.initialize();
    	navul.append(sceneResultliDropDown); 

    	//添加菜单栏中报告下拉菜单
    	var reportliDropDown = reportli.initialize();
    	navul.append(reportliDropDown); 

    	//添加菜单栏中配置管理下拉菜单
    	var configManagementliDropDown = configManagementli.initialize();
    	navul.append(configManagementliDropDown); 

    	//添加菜单栏中帮助下拉菜单
    	var helpliDropDown = helpli.initialize();
    	navul.append(helpliDropDown); 

    	navbar.append(navul);
    	nav.append(navbar);
    	$('#menubar').append(nav);

    },
}