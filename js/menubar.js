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
    	var fileli = this.fileDropDown();
    	navul.append(fileli); 

    	//添加菜单栏中编辑下拉菜单
    	var editli = this.editDropDown();
    	navul.append(editli); 

    	//添加菜单栏中项目下拉菜单
    	var projectli = this.projectDropDown();
    	navul.append(projectli); 

    	//添加菜单栏中视图下拉菜单
    	var viewli = this.viewDropDown();
    	navul.append(viewli); 

    	//添加菜单栏中脚本下拉菜单
    	var scriptli = this.scriptDropDown();
    	navul.append(scriptli); 

    	//添加菜单栏中场景及运行结果下拉菜单
    	var sceneResultli = this.sceneResultDropDown();
    	navul.append(sceneResultli); 

    	//添加菜单栏中报告下拉菜单
    	var reportli = this.reportDropDown();
    	navul.append(reportli); 

    	//添加菜单栏中配置管理下拉菜单
    	var configManagementli = this.configManagementDropDown();
    	navul.append(configManagementli); 

    	//添加菜单栏中帮助下拉菜单
    	var helpli = this.helpDropDown();
    	navul.append(helpli); 

    	navbar.append(navul);
    	nav.append(navbar);
    	$('#menubar').append(nav);

    },
    fileDropDown:function(){      //这是用来创建菜单栏中文件的下拉菜单
    	var fileli = $('<li>',{
    		'class':'dropdown'
    	});
    	var filea = $('<a>',{
    		'href':'#',
    		'class':'dropdown-toggle',
    		'data-toggle':'dropdown',
    		'role':'button',
    		'aria-haspopup':'true',
    		'aria-expanded':'false',
    		'text':'文件'
    	});
    	var span = $('<span>',{
    		'class':'caret'
    	});
    	filea.append(span);
    	var fileul = $('<ul>',{
    		'class':'dropdown-menu'
    	});
    	var newli = $('<li>');
    	var newa = $('<a>',{
    		'href':'#',
    		'text':'新建... Ctrl+N'
    	});
    	newli.append(newa);
    	var openli = $('<li>');
    	var opena = $('<a>',{
    		'href':'#',
    		'text':'打开  Ctrl+O'
    	});
    	openli.append(opena);
    	var closeli = $('<li>');
    	var closea = $('<a>',{
    		'href':'#',
    		'text':'关闭  Ctrl+C'
    	});
    	closeli.append(closea);
    	var saveli = $('<li>');
    	var savea = $('<a>',{
    		'href':'#',
    		'text':'保存  Ctrl+S'
    	});
    	saveli.append(savea);
    	var saveAsli = $('<li>');
    	var saveAsa = $('<a>',{
    		'href':'#',
    		'text':'另存为 Ctrl+A'
    	});
    	saveAsli.append(saveAsa);
    	var projectli = $('<li>');
    	var projecta = $('<a>',{
    		'href':'#',
    		'text':'项目1'
    	});
    	projectli.append(projecta);
    	var exitli = $('<li>');
    	var exita = $('<a>',{
    		'href':'#',
    		'text':'退出  Ctrl+E'
    	});
    	exitli.append(exita);

    	fileul.append(newli);
    	fileul.append(openli);
    	fileul.append(closeli);
    	fileul.append(saveli);
    	fileul.append(saveAsli);
    	fileul.append(projectli);
    	fileul.append(exitli);

    	fileli.append(filea);
    	fileli.append(fileul);

    	return fileli;
    },	

    //这是用来生产编辑菜单
    editDropDown:function(){   
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

    //用来产生视图菜单
    viewDropDown:function(){     
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

    //用来产生项目菜单
    projectDropDown:function(){     
    	var projectli = $('<li>',{
    		'class':'dropdown'
    	});
    	var projecta = $('<a>',{
    		'href':'#',
    		'class':'dropdown-toggle',
    		'data-toggle':'dropdown',
    		'role':'button',
    		'aria-haspopup':'true',
    		'aria-expanded':'false',
    		'text':'文件'
    	});
    	var span = $('<span>',{
    		'class':'caret'
    	});
    	projecta.append(span);
    	var projectul = $('<ul>',{
    		'class':'dropdown-menu'
    	});
    	var newProjectli = $('<li>');
    	var newProjecta = $('<a>',{
    		'href':'#',
    		'text':'新建项目'
    	});
    	newProjectli.append(newProjecta);
    	var openProjectli = $('<li>');
    	var openProjecta = $('<a>',{
    		'href':'#',
    		'text':'打开项目'
    	});
    	openProjectli.append(openProjecta);
    	var importProjectli = $('<li>');
    	var importProjecta = $('<a>',{
    		'href':'#',
    		'text':'导入项目'
    	});
    	importProjectli.append(importProjecta);
    	var editProjectli = $('<li>');
    	var editProjecta = $('<a>',{
    		'href':'#',
    		'text':'编辑项目'
    	});
    	editProjectli.append(editProjecta);
    	var addResourcesli = $('<li>');
    	var addResourcesa = $('<a>',{
    		'href':'#',
    		'text':'添加资源'
    	});
    	addResourcesli.append(addResourcesa);
    	var removeResourcesli = $('<li>');
    	var removeResourcesa = $('<a>',{
    		'href':'#',
    		'text':'移除资源'
    	});
    	removeResourcesli.append(removeResourcesa);
    	var closeCurrentProjectli = $('<li>');
    	var closeCurrentProjecta = $('<a>',{
    		'href':'#',
    		'text':'关闭当前项目'
    	});
    	closeCurrentProjectli.append(closeCurrentProjecta);

    	projectul.append(newProjectli);
    	projectul.append(openProjectli);
    	projectul.append(importProjectli);
    	projectul.append(editProjectli);
    	projectul.append(addResourcesli);
    	projectul.append(removeResourcesli);
    	projectul.append(closeCurrentProjectli);

    	projectli.append(projecta);
    	projectli.append(projectul);

    	return projectli;
    },	

    //这是用来产生脚本菜单
    scriptDropDown:function(){   
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
    		'text':'开始录制'
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
    		'text':'事物'
    	});
    	thingli.append(thinga);
    	var setParametersli = $('<li>');
    	var setParametersa = $('<a>',{
    		'href':'#',
    		'text':'设置参数'
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

    //这是用来产生场景及运行结果菜单
    sceneResultDropDown:function(){   
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

    //用来产生报告菜单
    reportDropDown:function(){     
    	var reportli = $('<li>',{
    		'class':'dropdown'
    	});
    	var reporta = $('<a>',{
    		'href':'#',
    		'class':'dropdown-toggle',
    		'data-toggle':'dropdown',
    		'role':'button',
    		'aria-haspopup':'true',
    		'aria-expanded':'false',
    		'text':'报告'
    	});
    	var span = $('<span>',{
    		'class':'caret'
    	});
    	reporta.append(span);
    	var reportul = $('<ul>',{
    		'class':'dropdown-menu'
    	});
    	var generateReportli = $('<li>');
    	var generateReporta = $('<a>',{
    		'href':'#',
    		'text':'生成报告'
    	});
    	generateReportli.append(generateReporta);
    	var previewReportli = $('<li>');
    	var previewReporta = $('<a>',{
    		'href':'#',
    		'text':'预览报告'
    	});
    	previewReportli.append(previewReporta);

    	reportul.append(generateReportli);
    	reportul.append(previewReportli);

    	reportli.append(reporta);
    	reportli.append(reportul);

    	return reportli;
    },	

    //用来产生配置管理菜单
    configManagementDropDown:function(){     
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

    //用来产生帮助菜单
    helpDropDown:function(){     
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