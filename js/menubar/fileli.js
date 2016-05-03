var fileli ={
	initialize:function(){      //这是用来创建菜单栏中文件的下拉菜单
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
        
        var newli = this.fileNewSubmenu();
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

    //用来创建文件菜单中新建的下一级菜单
    fileNewSubmenu:function(){
    	var newli = $('<li>',{
    		'class':'dropdown-submenu'
    	});
    	var newa = $('<a>',{
    		'href':'#',
    		'text':'新建... Ctrl+N'
    	});
    	var newul = $('<ul>',{
    		'class':'dropdown-menu'
    	});
    	var newsubmenu = ['创建新项目','创建脚本','创建场景'];
    	for(var i=0;i<newsubmenu.length;i++){
    		var tmpa=$('<a>',{
    			'href':'#',
    			'text':newsubmenu[i],
    		});
            switch (i){
                case 0:
                  tmpa.click(function(){
                      fileli.createProjectonClick();
                  });
                  break;
                case 1:
                  tmpa.click(function(){
                    fileli.createScriptClick();
                  });
                  break;
                case 2:
                  tmpa.click(function(){
                    fileli.createSceneClick();
                  });
                  break;
                default:
                  break;
            }
            
    		var submenuli = $('<li>');
    		submenuli.append(tmpa);
    		newul.append(submenuli);
    	}
    	newli.append(newa);
    	newli.append(newul);
    	return newli;
    },	
    createProjectonClick:function(){
       newProjectModal.initialize();
    },
    createScriptClick:function(){
        window.alert('createScriptClick!');
    },
    createSceneClick:function(){
        window.alert('createSceneClick!');
    },
}