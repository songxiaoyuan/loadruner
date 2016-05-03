var reportli ={
    //用来产生报告菜单
    initialize:function(){     
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
}