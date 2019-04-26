$(function() {
			// 表格自动生成
			$('#answer').datagrid({
						url : '/QOG/answerdatagrid',
						fit : true,
						fitColumns : true,
						striped : true,
						rownumbers : true,
						border : false,
						pagination : true,
						nowrap : false,
						pageSize : 15,
						pageList : [10, 15, 20, 25, 30],
						pageNumber : 1,
						sortName : 'answertime',
						sortOrder : 'desc',
						toolbar : '#answer_tool',
						columns : [[{
									field : 'id',
									title : '自动编号',
									width : 70,
									checkbox : true
								}, {
									field : 'username',
									title : '用户名称',
									width : 30,
									sortable : true
								}, {
									field : 'surveytitle',
									title : '问卷标题',
									width : 30,
									sortable : true
								}, {
									field : 'answertime',
									title : '填写时间',
									width : 30,
									sortable : true
								}]]
					});

			answer_tool = {
				reload : function() {
					$('#answer').datagrid('reload');
				},
				redo : function() {
					$('#answer').datagrid('unselectAll');
				},
				search : function() {
					$('#answer').datagrid('load', {
								title : $('input[name="answername"]').val(),
								date_from : $('input[name="answer_date_from"]').val(),
								date_to : $('input[name="answer_date_to"]').val()
							});
				},
				remove : function() {
					var rows = $('#answer').datagrid('getSelections');
					if (rows.length > 0) {
						$.messager.confirm('确定操作', '您正在要删除所选的记录吗？', function(flag) {
									if (flag) {
										var ids = [];
										for (var i = 0; i < rows.length; i++) {
											ids.push(rows[i].surveyid + "," + rows[i].userid);
										}
										// console.log(ids.join(','));
										$.ajax({
													type : 'POST',
													url : '/QOG/deleteanswer',
													data : {
														ids : ids.join("|")
													},
													beforeSend : function() {
														$('#answer').datagrid('loading');
													},
													success : function(data) {
														if (data) {
															$('#answer').datagrid('loaded');
															$('#answer').datagrid('load');
															$('#answer').datagrid('unselectAll');
															$.messager.show({
																		title : '提示',
																		msg : data + '个问卷被删除成功！'
																	});
														}
													}
												});
									}
								});
					} else {
						$.messager.alert('提示', '请选择要删除的记录！', 'info');
					}
				},
				details : function() {
					var rows = $('#answer').datagrid('getSelections');
					if (rows.length > 1) {
						$.messager.alert('警告操作！', '查看记录只能选定一条数据！', 'warning');
					} else if (rows.length == 1) {
						if ($('#tabs').tabs('exists', "查看答卷详情")) {

							if ($("input[name='answersurveyid']").val() == rows[0].surveyid
									&& $("input[name='answersurveyid']").val() == rows[0].userid) {
							} else {
								$.messager.alert('警告操作！', '页面占用，请先关闭查看答卷详情标签页', 'warning');
							}
							$('#tabs').tabs('select', "查看答卷详情");
						} else {
							$('#tabs').tabs('add', {
										title : '查看答卷详情',
										iconCls : 'icon-surveyscan',
										closable : true,
										href : 'answerpreview.jsp' + '?id=' + rows[0].surveyid + '&userid='
												+ rows[0].userid
									});
						}

					} else if (rows.length == 0) {
						$.messager.alert('警告操作！', '查看记录至少选定一条数据！', 'warning');
					}
				}
			};

		});