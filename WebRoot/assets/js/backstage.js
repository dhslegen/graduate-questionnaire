$(function() {
	$('#nav').tree({
		url: '/QOG/navmade',
		lines: true,
		onLoadSuccess: function(node, data) {
			if (data) {
				$(data).each(function(index, value) {
					if (this.state == 'closed') {
						$('#nav').tree('expandAll');
					}
				});
			}
		},
		onClick: function(node) {
			console.log(node);
			if (node.url) {
				if ($('#tabs').tabs('exists', node.text)) {
					$('#tabs').tabs('select', node.text);
				} else {
					$('#tabs').tabs('add', {
						title: node.text,
						iconCls: node.iconCls,
						closable: true,
						href: node.url + '.html'
					});
				}
			}
		}
	});

	$('#tabs').tabs({
		fit: true,
		border: false,
	});
	$.ajax({
		url: '/QOG/checklogin',
		type: 'post',
		data: {
			target: 'getname',
		},
		beforeSend: function() {},
		success: function(data, response, status) {
			var result = eval("(" + data + ")");
			if (typeof(result.data) == "undefined") {
				location.href("login.html");
			} else {
				$('.logout').prepend("你好：" + result.data);
			}
		}
	});
});