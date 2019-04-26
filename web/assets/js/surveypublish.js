function auto_change_num() {
	$(".css_survey_question").each(function(index, element) {
				$(element).find("strong").text(index + 1);
			});
}
$(function() {
	// 表格自动生成
	$('#surveypublish').datagrid({
				url : '/QOG/surveydatagrid',
				fit : true,
				fitColumns : true,
				striped : true,
				rownumbers : true,
				border : false,
				pagination : true,
				pageSize : 15,
				pageList : [10, 15, 20, 25, 30],
				pageNumber : 1,
				sortName : 'createtime',
				sortOrder : 'desc',
				toolbar : '#surveypublish_tool',
				columns : [[{
							field : 'id',
							title : '自动编号',
							width : 100,
							checkbox : true
						}, {
							field : 'type',
							title : '问卷类型',
							width : 70
						}, {
							field : 'title',
							title : '问卷标题',
							width : 100,
							sortable : true
						}, {
							field : 'description',
							title : '问卷备注',
							width : 100
						}, {
							field : 'name',
							title : '创建用户',
							width : 70,
							sortable : true
						}, {
							field : 'createtime',
							title : '创建时间',
							width : 70,
							sortable : true
						}, {
							field : 'isable',
							title : '启用状态',
							width : 70
						}, {
							field : 'publish',
							title : '发布状态',
							width : 70
						}]]
			});

	surveypublish_tool = {
		reload : function() {
			$('#surveypublish').datagrid('reload');
		},
		redo : function() {
			$('#surveypublish').datagrid('unselectAll');
		},
		search : function() {
			$('#surveypublish').datagrid('load', {
						title : $('input[name="survey_publish_title"]').val(),
						date_from : $('input[name="survey_publish_date_from"]').val(),
						date_to : $('input[name="survey_publish_date_to"]').val()
					});
		},
		publish : function() {
			var rows = $('#surveypublish').datagrid('getSelections');
			if (rows.length > 0) {
				$.messager
						.confirm(
								'确定操作',
								'您确定发布这些问卷吗？<br><br><h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;发布后的问卷将不允许修改！</h3>',
								function(flag) {
									if (flag) {
										var ids = [];
										for (var i = 0; i < rows.length; i++) {
											ids.push(rows[i].id);
										}
										// console.log(ids.join(','));
										$.ajax({
													type : 'POST',
													url : '/QOG/checksurvey',
													data : {
														target : "发布",
														ids : '(' + ids.join(',') + ')'
													},
													beforeSend : function() {
														$('#surveypublish').datagrid('loading');
													},
													success : function(data) {
														if (data) {
															$('#surveypublish').datagrid('loaded');
															$('#surveypublish').datagrid('load');
															$('#surveypublish').datagrid('unselectAll');
															$.messager.show({
																		title : '提示',
																		msg : data + '个问卷被发布成功！'
																	});
														}
													}
												});
									}
								});
			} else {
				$.messager.alert('提示', '请选择要发布的问卷！', 'info');
			}
		},
		recycle : function() {
			var rows = $('#surveypublish').datagrid('getSelections');
			if (rows.length > 0) {
				$.messager
						.confirm(
								'确定操作',
								'您确定回收这些问卷吗？<br><br><h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;回收后的问卷将不允许作答！</h3>',
								function(flag) {
									if (flag) {
										var ids = [];
										for (var i = 0; i < rows.length; i++) {
											ids.push(rows[i].id);
										}
										// console.log(ids.join(','));
										$.ajax({
													type : 'POST',
													url : '/QOG/checksurvey',
													data : {
														target : "回收",
														ids : '(' + ids.join(',') + ')'
													},
													beforeSend : function() {
														$('#surveypublish').datagrid('loading');
													},
													success : function(data) {
														if (data) {
															$('#surveypublish').datagrid('loaded');
															$('#surveypublish').datagrid('load');
															$('#surveypublish').datagrid('unselectAll');
															$.messager.show({
																		title : '提示',
																		msg : data + '个问卷被回收成功！'
																	});
														}
													}
												});
									}
								});
			} else {
				$.messager.alert('提示', '请选择要回收的问卷！', 'info');
			}
		},
		reset : function() {
			var rows = $('#surveypublish').datagrid('getSelections');
			if (rows.length > 0) {
				$.messager.confirm('确定操作',
						'您确定重置这些问卷吗？<br><br><h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;重置后的问卷将清除所有统计信息！</h3>',
						function(flag) {
							if (flag) {
								var ids = [];
								for (var i = 0; i < rows.length; i++) {
									ids.push(rows[i].id);
								}
								// console.log(ids.join(','));
								$.ajax({
											type : 'POST',
											url : '/QOG/checksurvey',
											data : {
												target : "重置",
												ids : '(' + ids.join(',') + ')'
											},
											beforeSend : function() {
												$('#surveypublish').datagrid('loading');
											},
											success : function(data) {
												if (data) {
													$('#surveypublish').datagrid('loaded');
													$('#surveypublish').datagrid('load');
													$('#surveypublish').datagrid('unselectAll');
													$.messager.show({
																title : '提示',
																msg : data + '个问卷被重置成功！'
															});
												}
											}
										});
							}
						});
			} else {
				$.messager.alert('提示', '请选择要重置的问卷！', 'info');
			}
		}
	};

});