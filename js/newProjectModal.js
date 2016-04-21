var newProjectModal = {
	initialize:function() {
		var projectModal = this.projectModal();
		$('#container').append(projectModal);
		$("#newprojectModal").modal("show");
	},
	//创建modal的主要部分
	projectModal:function(){
		var newprojectModal = $('<div>',{
			'class':'modal',
			'id':'newprojectModal'
		});
		var modalDialog = $('<div>',{
			'class':'modal-dialog'
		});
		var modalContent = $('<div>',{
			'class':'modal-content'
		});
		var modalHeader = this.projectModalHeader();
		var modalBody = this.projectModalBody();
		var ModalFooter = this.projectModalFooter();

		modalContent.append(modalHeader);
		modalContent.append(modalBody);
		modalContent.append(ModalFooter);

		modalDialog.append(modalContent);
		newprojectModal.append(modalDialog);

		return newprojectModal;
	},
	projectModalHeader:function(){
		var modalHeader = $('<div>',{
			'class':'modal-header',
			'text':'标题'
		});
		return modalHeader;
	},
	projectModalBody:function(){
		var modalBody = $('<div>',{
			'class':'modal-body',
			'text':'这是内容'
		});
		//注意，在里面添加具体内容，还是要加入div来添加
		return modalBody;
	},
	projectModalFooter:function(){
		var modalFooter = $('<div>',{
			'class':'modal-footer',
			'text':'下标'
		});
		var closeButton = $('<button>',{
			'class':'btn btn-default',
			'data-dismiss':'modal',
			'text':'关闭'     //注意，关闭之后就要把这个整体的model在container中删除
		});
		var saveButton = $('<button>',{
			'class':'btn btn-primary',
			'text':'保存'
		});

		modalFooter.append(closeButton);
		modalFooter.append(saveButton);
		return modalFooter;
	},

}