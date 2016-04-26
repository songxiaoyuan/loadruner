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

		var creatProjectFromExistedFooter1Back = $('<button>',{
			'class':'btn btn-default',
			'id':'creatProjectFromExistedFooter1Back',
			'onclick':'creatProjectFromExistedModalPage.creatProjectFromExistedFooter1BackOnClick()',
			'text':'上一步',
		});
		
		var creatProjectFromExistedFooter1Next = $('<button>',{
			'class':'btn btn-default',
			'id':'creatProjectFromExistedFooter1Next',
			'onclick':'creatProjectFromExistedModalPage.creatProjectFromExistedFooter1NextOnClick()',
			'text':'下一步',
		});

		var creatProjectFromExistedFooter1Cancel = $('<button>',{
			'class':'btn btn-default',
			'data-dismiss':'modal',
			'id':'creatProjectFromExistedFooter1Cancel',
			'onclick':'newProjectModal.removeNewprojectModal()',
			'text':'取消'
		});

		ret.append(creatProjectFromExistedFooter1Back);
		ret.append(creatProjectFromExistedFooter1Next);
		ret.append(creatProjectFromExistedFooter1Cancel);
		return ret;
	},

	//此函数的作用是用来产生点击下一步时产生的的body部分，整体是一个div，利用createProjectModalPage.js中的内容，
	//因为产生的页面是一样的，但是问题就是需要修改一下ID。
	creatProjectFromExistedBody2:function(){
		var ret = createProjectModalPage.createProjectModalBody();
		ret.attr('id','creatProjectFromExistedBody2');

		var selectDateInput=ret.find('#selectDate');
		var selectSpanButton=ret.find('#selectDateButton');
		selectDateInput.attr('id','creatProjectFromExistedBody2SelectDate');
		selectSpanButton.attr('id','creatProjectFromExistedBody2SelectDateButton');
		return  ret;
	},

	//此函数的作用是用来产生点击从已有项目创建时的第二个页面的footer部分，整体是一个div
	creatProjectFromExistedFooter2:function(){
		var ret = $('<div>',{
			'class':'creatProjectFromExistedFooter2',
			'id':'creatProjectFromExistedFooter2'
		});

		var creatProjectFromExistedFooter2Back = $('<button>',{
			'class':'btn btn-default',
			'id':'creatProjectFromExistedFooter2Back',
			'onclick':'creatProjectFromExistedModalPage.creatProjectFromExistedFooter2BackOnClick()',
			'text':'上一步',
		});
		
		var creatProjectFromExistedFooter2Next = $('<button>',{
			'class':'btn btn-default',
			'id':'creatProjectFromExistedFooter2Next',
			'onclick':'creatProjectFromExistedModalPage.creatProjectFromExistedFooter2NextOnClick()',
			'text':'下一步',
		});

		var creatProjectFromExistedFooter2Cancel = $('<button>',{
			'class':'btn btn-default',
			'data-dismiss':'modal',
			'id':'creatProjectFromExistedFooter2Cancel',
			'onclick':'newProjectModal.removeNewprojectModal()',
			'text':'取消'
		});

		ret.append(creatProjectFromExistedFooter2Back);
		ret.append(creatProjectFromExistedFooter2Next);
		ret.append(creatProjectFromExistedFooter2Cancel);
		return ret;
	},

	//此函数的作用是用来产生点击下一步时产生的的body3部分，整体是一个div.
	creatProjectFromExistedBody3:function(){
		var ret = $('<div>',{
			'class':'creatProjectFromExistedBody3',
			'id':'creatProjectFromExistedBody3'
		});
		
		var creatProjectFromExistedBody3Left = $('<div>',{
			'class':'creatProjectFromExistedBody3Left'
		});

		var creatProjectFromExistedBody3Middle = $('<div>',{
			'class':'creatProjectFromExistedBody3Middle'
		});

		var creatProjectFromExistedBody3Right = $('<div>',{
			'class':'creatProjectFromExistedBody3Right'
		});
		//TODO:查看里面到底应该是输入什么内容，有什么应该输入的。
		var currentOpenProjectSelect1 = newProjectModal.currentOpenProjectSelect();
		var currentOpenProjectSelect = newProjectModal.currentOpenProjectSelect();
		creatProjectFromExistedBody3Left.append(currentOpenProjectSelect1);
		creatProjectFromExistedBody3Right.append(currentOpenProjectSelect);

		var creatProjectFromExistedBody3AddButton = $('<button>',{
			'class':'creatProjectFromExistedBody3AddButton',
			'text':'添加>>',
		});

		var creatProjectFromExistedBody3RemoveButton = $('<button>',{
			'class':'creatProjectFromExistedBody3RemoveButton',
			'text':'<<移除',
		});
		creatProjectFromExistedBody3Middle.append(creatProjectFromExistedBody3AddButton);
		creatProjectFromExistedBody3Middle.append(creatProjectFromExistedBody3RemoveButton);

		ret.append(creatProjectFromExistedBody3Left);
		ret.append(creatProjectFromExistedBody3Middle);
		ret.append(creatProjectFromExistedBody3Right);
		return ret;
	},

	//此函数的作用是用来产生第三个页面的footer部分，整体是一个div，里面有两个button
	creatProjectFromExistedFooter3:function(){
		var ret = $('<div>',{
			'class':'creatProjectFromExistedFooter3',
			'id':'creatProjectFromExistedFooter3'
		});

		var creatProjectFromExistedFooter3Back = $('<button>',{
			'class':'btn btn-default',
			'id':'creatProjectFromExistedFooter3Back',
			'onclick':'creatProjectFromExistedModalPage.creatProjectFromExistedFooter3BackOnClick()',
			'text':'上一步',
		});
		
		var creatProjectFromExistedFooter3Done = $('<button>',{
			'class':'btn btn-default',
			'data-dismiss':'modal',
			'id':'creatProjectFromExistedFooter3Done',
			'onclick':'creatProjectFromExistedModalPage.creatProjectFromExistedFooter3DoneOnClick()',
			'text':'完成',
		});

		var creatProjectFromExistedFooter3Cancel = $('<button>',{
			'class':'btn btn-default',
			'data-dismiss':'modal',
			'id':'creatProjectFromExistedFooter3Cancel',
			'onclick':'newProjectModal.removeNewprojectModal()',
			'text':'取消'
		});

		ret.append(creatProjectFromExistedFooter3Back);
		ret.append(creatProjectFromExistedFooter3Done);
		ret.append(creatProjectFromExistedFooter3Cancel);
		return ret;
	},

	creatProjectFromExistedFooter1BackOnClick:function(){
		$('#creatProjectFromExistedBody1').hide();
		$('#creatProjectFromExistedHeader').hide();
		$('#creatProjectFromExistedFooter1').hide();

		$('#startProjectModalBody').show();
		$('#projectModalFooterQuit').show();
	},

	//点击第一个页面，下一步的操作
	creatProjectFromExistedFooter1NextOnClick:function(){
		//依次修改head、bady、footer
		$('#creatProjectFromExistedHeader').text('从已有项目中创建-项目信息编辑');
		$('#creatProjectFromExistedBody1').hide();
		$('#creatProjectFromExistedFooter1').hide();
		if($('#creatProjectFromExistedBody2').length>0){
			$('#creatProjectFromExistedBody2').show();
			$('#creatProjectFromExistedFooter2').show();
		}
		else{
			var creatProjectFromExistedBody2 = creatProjectFromExistedModalPage.creatProjectFromExistedBody2();
			var creatProjectFromExistedFooter2 = creatProjectFromExistedModalPage.creatProjectFromExistedFooter2();
			$('#projectModalBody').append(creatProjectFromExistedBody2);
			$('#projectModalFooter').append(creatProjectFromExistedFooter2);
		}
		//用来绑定时间的插件，不然的话不能选择时间。
		creatProjectFromExistedModalPage.buddleDataTimePicker();
	},

	creatProjectFromExistedFooter2BackOnClick:function(){
		$('#creatProjectFromExistedHeader').text('从已有项目中创建');
		$('#creatProjectFromExistedBody2').hide();
		$('#creatProjectFromExistedFooter2').hide();

		$('#creatProjectFromExistedBody1').show();
		$('#creatProjectFromExistedFooter1').show();
	},

	creatProjectFromExistedFooter2NextOnClick:function(){
		//依次修改head、bady、footer
		$('#creatProjectFromExistedHeader').text('从已有项目中创建-导入文件');
		$('#creatProjectFromExistedBody2').hide();
		$('#creatProjectFromExistedFooter2').hide();
		if($('#creatProjectFromExistedBody3').length>0){
			$('#creatProjectFromExistedBody3').show();
			$('#creatProjectFromExistedFooter3').show();
		}
		else{
			var creatProjectFromExistedBody3 = creatProjectFromExistedModalPage.creatProjectFromExistedBody3();
			var creatProjectFromExistedFooter3 = creatProjectFromExistedModalPage.creatProjectFromExistedFooter3();
			$('#projectModalBody').append(creatProjectFromExistedBody3);
			$('#projectModalFooter').append(creatProjectFromExistedFooter3);
		}
	},

	creatProjectFromExistedFooter3BackOnClick:function(){
		$('#creatProjectFromExistedHeader').text('从已有项目中创建-项目信息编辑');
		$('#creatProjectFromExistedBody3').hide();
		$('#creatProjectFromExistedFooter3').hide();

		$('#creatProjectFromExistedBody2').show();
		$('#creatProjectFromExistedFooter2').show();
	},

	creatProjectFromExistedFooter3DoneOnClick:function(){
		//TODO 此处应该有一些保存工作，然后创建项目的page页面。
		//TODO


		//最后才是把那个modal关掉。
		newProjectModal.removeNewprojectModal();
	},

	buddleDataTimePicker:function(){
		$('#creatProjectFromExistedBody2SelectDateButton').datepicker().on('changeDate',function(ev) {
		  var selectDate = $('#creatProjectFromExistedBody2SelectDateButton').data('date');
		  $('#creatProjectFromExistedBody2SelectDate')[0].value=selectDate;
		  $('#creatProjectFromExistedBody2SelectDateButton').datepicker('hide');
		});
	},
} 