function auto_change_num() {
	$(".css_survey_question").each(function(index, element) {
				$(element).find("strong").text(index + 1);
			});
}
$(function() {
			// 表格自动生成
			$('#surveycheck').datagrid({
						url : '/surveydatagrid',
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
						toolbar : '#surveycheck_tool',
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
								}]]
					});

			surveycheck_tool = {
				reload : function() {
					$('#surveycheck').datagrid('reload');
				},
				redo : function() {
					$('#surveycheck').datagrid('unselectAll');
				},
				search : function() {
					$('#surveycheck').datagrid('load', {
								title : $('input[name="survey_check_title"]').val(),
								date_from : $('input[name="survey_check_date_from"]').val(),
								date_to : $('input[name="survey_check_date_to"]').val()
							});
				},
				unable : function() {
					var rows = $('#surveycheck').datagrid('getSelections');
					if (rows.length > 0) {
						$.messager.confirm('确定操作', '您确定禁用这些问卷吗？', function(flag) {
									if (flag) {
										var ids = [];
										for (var i = 0; i < rows.length; i++) {
											ids.push(rows[i].id);
										}
										// console.log(ids.join(','));
										$.ajax({
													type : 'POST',
													url : '/checksurvey',
													data : {
														target : "禁用",
														ids : '(' + ids.join(',') + ')'
													},
													beforeSend : function() {
														$('#surveycheck').datagrid('loading');
													},
													success : function(data) {
														if (data) {
															$('#surveycheck').datagrid('loaded');
															$('#surveycheck').datagrid('load');
															$('#surveycheck').datagrid('unselectAll');
															$.messager.show({
																		title : '提示',
																		msg : data + '个问卷被禁用成功！'
																	});
														}
													}
												});
									}
								});
					} else {
						$.messager.alert('提示', '请选择要禁用的问卷！', 'info');
					}
				},
				enable : function() {
					var rows = $('#surveycheck').datagrid('getSelections');
					if (rows.length > 0) {
						$.messager.confirm('确定操作', '您确定启用这些问卷吗？', function(flag) {
									if (flag) {
										var ids = [];
										for (var i = 0; i < rows.length; i++) {
											ids.push(rows[i].id);
										}
										// console.log(ids.join(','));
										$.ajax({
													type : 'POST',
													url : '/checksurvey',
													data : {
														target : "启用",
														ids : '(' + ids.join(',') + ')'
													},
													beforeSend : function() {
														$('#surveycheck').datagrid('loading');
													},
													success : function(data) {
														if (data) {
															$('#surveycheck').datagrid('loaded');
															$('#surveycheck').datagrid('load');
															$('#surveycheck').datagrid('unselectAll');
															$.messager.show({
																		title : '提示',
																		msg : data + '个问卷被启用成功！'
																	});
														}
													}
												});
									}
								});
					} else {
						$.messager.alert('提示', '请选择要启用的问卷！', 'info');
					}
				}
			};

		});