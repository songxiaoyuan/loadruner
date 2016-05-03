var projectli ={
    //用来产生项目菜单
    initialize:function(){     
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
    		'text':'项目'
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

}