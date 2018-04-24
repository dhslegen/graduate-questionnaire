$(function() {
			// 表格自动生成
			$('#analysis').datagrid({
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
						toolbar : '#analysis_tool',
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

			analysis_tool = {
				reload : function() {
					$('#analysis').datagrid('reload');
				},
				redo : function() {
					$('#analysis').datagrid('unselectAll');
				},
				search : function() {
					$('#analysis').datagrid('load', {
								title : $('input[name="analysisname"]').val(),
								date_from : $('input[name="analysis_date_from"]').val(),
								date_to : $('input[name="analysis_date_to"]').val()
							});
				},
				details : function() {
					var rows = $('#analysis').datagrid('getSelections');
					if (rows.length > 1) {
						$.messager.alert('警告操作！', '查看记录只能选定一条数据！', 'warning');
					} else if (rows.length == 1) {
						if ($('#tabs').tabs('exists', "查看统计详情")) {

							if ($("input[name='analysissurveyid']").val() == rows[0].id
									&& $("input[name='analysissurveyid']").val() == rows[0].userid) {
							} else {
								$.messager.alert('警告操作！', '页面占用，请先关闭查看统计详情标签页', 'warning');
							}
							$('#tabs').tabs('select', "查看统计详情");
						} else {
							$('#tabs').tabs('add', {
										title : '查看统计详情',
										iconCls : 'icon-surveyscan',
										closable : true,
										href : 'analysispreview.jsp' + '?id=' + rows[0].id
									});
						}

					} else if (rows.length == 0) {
						$.messager.alert('警告操作！', '查看记录至少选定一条数据！', 'warning');
					}
				}
			};

		});