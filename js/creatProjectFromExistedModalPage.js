//这个文件就是用来产生点击从已有项目中创建所产生的所有页面
var creatProjectFromExistedModalPage = {
	//此函数的作用是产生点击从已有项目创建时产生的modal的header部分。因为body部分和点击创建项目后面的一样，
	//所以可以重复使用。
	creatProjectFromExistedHeader:function(){
		var creatProjectFromExistedHeader = $('<div>',{
			'id':'creatProjectFromExistedHeader',
			'text':'从已有项目中创建'
		});
		return creatProjectFromExistedHeader;
	},

	//此函数的作用是用来产生点击从已有项目创建时的第一个页面的body部分，整体是一个div
	creatProjectFromExistedBody1:function(){
		var ret = $('<div>',{
			'class':'creatProjectFromExistedBody1',
			'id':'creatProjectFromExistedBody1'
		});
		
		var existedProjects = $('<div>',{
			'class':'existedProjects',
			'text':'已有项目'
		});

		var existedProjectsList = $('<div>',{
			'class':'existedProjectsList'
		});
		//这就是最近打开的项目的列表，里面显示的也就是现在已有项目
		var currentOpenProjectSelect = newProjectModal.currentOpenProjectSelect();
		existedProjectsList.append(currentOpenProjectSelect);

		var openProjectButton = $('<button>',{
			'class':'openProjectButton',
			'text':'打开项目',
		});

		ret.append(existedProjects);
		ret.append(existedProjectsList);
		ret.append(openProjectButton);
		return ret;
	},

	//此函数的作用是用来产生点击从已有项目创建时的第一个页面的footer部分，整体是一个div，里面有两个button
	creatProjectFromExistedFooter1:function(){
		var ret = $('<div>',{
			'class':'creatProjectFromExistedFooter1',
			'id':'creatProjectFromExistedFooter1'
		});
		
		var creatProjectFromExistedFooter1Next = $('<button>',{
			'class':'btn btn-default',
			'text':'下一步',
		});

		var creatProjectFromExistedFooter1Cancel = $('<button>',{
			'class':'btn btn-default',
			'data-dismiss':'modal',
			'id':'creatProjectFromExistedFooter1Cancel',
			'onclick':'newProjectModal.removeNewprojectModal()',
			'text':'取消'
		});

		ret.append(creatProjectFromExistedFooter1Next);
		ret.append(creatProjectFromExistedFooter1Cancel);
		return ret;
	},
} 