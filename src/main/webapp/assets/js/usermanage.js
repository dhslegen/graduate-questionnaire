$(function() {
			$.extend($.fn.validatebox.defaults.rules, {
						number : {
							validator : function(value) {
								return /^\+?[1-9][0-9]*$/.test(value);
							},
							message : '请输入整数'
						},
						excel : {
							validator : function(value) {
								return /(\.xls)$/.test(value);
							},
							message : '请选择excel文件！'
						}
					});
			// 表格自动生成
			$('#user').datagrid({
						url : '/userdatagrid',
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
						sortName : 'registertime',
						sortOrder : 'desc',
						toolbar : '#user_tool',
						columns : [[{
									field : 'id',
									title : '自动编号',
									width : 70,
									checkbox : true
								}, {
									field : 'sex',
									title : '用户性别',
									width : 30
								}, {
									field : 'studentid',
									title : '用户学号',
									width : 30,
									sortable : true
								}, {
									field : 'name',
									title : '用户名称',
									width : 30,
									sortable : true
								}, {
									field : 'password',
									title : '用户密码',
									width : 30
								}, {
									field : 'registertime',
									title : '注册时间',
									width : 80,
									sortable : true
								}, {
									field : 'auth',
									title : '用户权限',
									width : 160
								}, {
									field : 'tel',
									title : '用户电话',
									width : 70
								}, {
									field : 'email',
									title : '用户邮箱',
									width : 70
								}]]
					});
			// 问卷添加对话框
			$('#user_add').dialog({
						width : 335,
						height : 360,
						title : '用户新增',
						modal : true,
						closed : true,
						iconCls : 'icon-user-add',
						buttons : [{
									text : '提交',
									iconCls : 'icon-add-new',
									handler : function() {
										if ($('#user_add').form('validate')) {
											$.ajax({
														url : '/adduser',
														type : 'post',
														data : {
															studentid : $('input[name="studentid_add"]').val(),
															name : $('input[name="name_add"]').val(),
															sex : $('input[name="sex_add"]:checked').val(),
															password : $('input[name="password_add"]').val(),
															auth : $('#auth_add').combotree('getText'),
															tel : $('input[name="tel_add"]').val(),
															email : $('input[name="email_add"]').val()
														},
														beforeSend : function() {
															$.messager.progress({
																		text : '正在新增中...'
																	});
														},
														success : function(result, response, status) {
															$.messager.progress('close');
															var result = eval("(" + result + ")");
															if (result.statusCode > -1) {
																$.messager.show({
																			title : '提示',
																			msg : '用户新增:成功'
																		});
																$('#user_add').dialog('close').form('reset');
																$('#user').datagrid('reload');
															} else if (result.statusCode == -1) {
																$.messager.alert('新增失败!', ' 有重复姓名，请重试！', 'warning');
															} else if (result.statusCode == -2) {
																$.messager.alert('新增失败！', '有重复学号，请重试！', 'warning');
															} else {
																$.messager.alert('新增失败！', '未知错误，请重试！', 'warning');
															}
														}
													});
										}
									}
								}, {
									text : '取消',
									iconCls : 'icon-redo',
									handler : function() {
										$('#user_add').dialog('close').form('reset');
									}
								}]
					});
			// 用户导入对话框
			$('#user_import').dialog({
						width : 335,
						height : 250,
						title : '批量导入',
						modal : true,
						closed : true,
						iconCls : 'icon-user-add',
						buttons : [{
									text : '确定',
									iconCls : 'icon-ok',
									handler : function() {
										if ($('#user_import').form('validate')) {
											var formData = new FormData();
											if ($('input[name="user_import"]').val()) {
												formData
														.append("excel", $('input[name="user_import"]').get(0).files[0]);
											}
											$.ajax({
														url : '/addusers',
														type : 'post',
														data : formData,
														cache : false,
														processData : false,
														contentType : false,
														beforeSend : function() {
															$.messager.progress({
																		text : '正在新增中...'
																	});
														},
														success : function(result, response, status) {
															$.messager.progress('close');
															var result = eval("(" + result + ")");

															$.messager.alert('执行结果：', result.data, 'warning');
															$('#user_import').dialog('close').form('reset');
															$('#user').datagrid('reload');
														}
													});
										}
									}
								}, {
									text : '取消',
									iconCls : 'icon-redo',
									handler : function() {
										$('#user_import').dialog('close').form('reset');
									}
								}]
					});

			$('#user_edit').dialog({
						width : 335,
						height : 360,
						title : '用户信息修改',
						modal : true,
						closed : true,
						iconCls : 'icon-user-edit',
						buttons : [{
									text : '提交',
									iconCls : 'icon-edit-new',
									handler : function() {
										if ($('#user_edit').form('validate')) {
											if ($('input[name="cover_edit"]').val()) {
												formData.append("image", $('input[name="cover_edit"]').get(0).files[0]);
											}
											$.ajax({
														url : '/edituser',
														type : 'post',
														data : {
															id : $('input[name="user_id_edit"]').val(),
															name : $('input[name="name_edit"]').val(),
															sex : $('input[name="sex_edit"]:checked').val(),
															password : $('input[name="password_edit"]').val(),
															auth : $('#auth_edit').combotree('getText'),
															tel : $('input[name="tel_edit"]').val(),
															email : $('input[name="email_edit"]').val()
														},
														beforeSend : function() {
															$.messager.progress({
																		text : '正在修改中...'
																	});
														},
														success : function(result, response, status) {
															$.messager.progress('close');
															var result = eval("(" + result + ")");
															if (result.statusCode > 0) {
																$.messager.show({
																			title : '提示',
																			msg : '用户修改:成功'
																		});
																$('#user_edit').dialog('close').form('reset');
																$('#user').datagrid('reload');
															} else if (result.statusCode == -1) {
																$.messager.alert('修改失败!', ' 有重复姓名，请重试！', 'warning');
															} else {
																$.messager.alert('修改失败！', '未知错误导致失败，请重试！', 'warning');
															}
														}
													});
										}
									}
								}, {
									text : '取消',
									iconCls : 'icon-redo',
									handler : function() {
										$('#user_edit').dialog('close').form('reset');
									}
								}]
					});
			// 添加姓名的验证
			$('input[name="studentid_add"]').validatebox({
						required : true,
						validType : ['number', 'length[8,8]'],
						missingMessage : '请输入学号',
						invalidMessage : '学号只能是8位数字'
					});
			// 添加姓名的验证
			$('input[name="name_add"]').validatebox({
						required : true,
						validType : 'length[2,10]',
						missingMessage : '请输入姓名',
						invalidMessage : '姓名最少2位最多10位'
					});
			// 添加文件的验证
			$('input[name="user_import"]').validatebox({
						required : true,
						validType : 'excel',
						missingMessage : '请选择文件',
						invalidMessage : '请选择excel文件！'
					});
			// 添加密码的验证
			$('input[name="password_add"]').validatebox({
						required : true,
						validType : 'length[6,10]',
						missingMessage : '请输入密码',
						invalidMessage : '密码为6-10位'
					});
			/*
			 * // 添加电话的验证 $('input[name="tel_add"]').validatebox({ required :
			 * true, validType : 'length[11,11]', missingMessage : '请输入手机号码',
			 * invalidMessage : '手机号码为13位' }); // 添加邮箱的验证
			 * $('input[name="email_add"]').validatebox({ required : true,
			 * validType : 'email', missingMessage : '请输入邮箱', invalidMessage :
			 * '请输入正确的邮箱格式' });
			 */
			// 添加性别的验证
			$('input[name="sex_add"]').validatebox({
						required : true,
						missingMessage : '请选择'
					});

			// 修改姓名的验证
			$('input[name="name_edit"]').validatebox({
						required : true,
						validType : 'length[2,10]',
						missingMessage : '请输入姓名',
						invalidMessage : '姓名最少2位最多10位'
					});
			// 修改密码的验证
			$('input[name="password_edit"]').validatebox({
						required : true,
						validType : 'length[6,10]',
						missingMessage : '请输入密码',
						invalidMessage : '密码为6-10位'
					});
			/*
			 * // 修改电话的验证 $('input[name="tel_edit"]').validatebox({ required :
			 * true, validType : 'length[11,11]', missingMessage : '请输入手机号码',
			 * invalidMessage : '手机号码为13位' }); // 修改邮箱的验证
			 * $('input[name="email_edit"]').validatebox({ required : true,
			 * validType : 'email', missingMessage : '请输入邮箱', invalidMessage :
			 * '请输入正确的邮箱格式' });
			 */
			// 修改性别的验证
			$('input[name="sex_edit"]').validatebox({
						required : true,
						missingMessage : '请选择'
					});
			// 分配权限
			$('#auth_add').combotree({
						url : '/nav',
						required : false,
						lines : true,
						multiple : true,
						valueField : 'text',
						checkbox : true,
						onlyLeafCheck : true,
						onLoadSuccess : function(node, data) {
							var _this = this;
							if (data) {
								$(data).each(function(index, value) {
											if (this.state == 'closed') {
												$(_this).tree('expandAll');
											}
										});
							}
						}
					});

			user_tool = {
				reload : function() {
					$('#user').datagrid('reload');
				},
				redo : function() {
					$('#user').datagrid('unselectAll');
				},
				add : function() {
					$('#user_add').dialog('open');
					$('input[name="user"]').focus();
				},
				importuser : function() {
					$('#user_import').dialog('open');
					$('input[name="user_import"]').focus();
				},
				search : function() {
					$('#user').datagrid('load', {
								title : $('input[name="username"]').val(),
								date_from : $('input[name="user_date_from"]').val(),
								date_to : $('input[name="user_date_to"]').val()
							});
				},
				remove : function() {
					var rows = $('#user').datagrid('getSelections');
					if (rows.length > 0) {
						$.messager.confirm('确定操作', '您正在要删除所选的记录吗？', function(flag) {
									if (flag) {
										var ids = [];
										for (var i = 0; i < rows.length; i++) {
											ids.push(rows[i].id);
										}
										// console.log(ids.join(','));
										$.ajax({
													type : 'POST',
													url : '/deleteuser',
													data : {
														ids : '(' + ids.join(',') + ')'
													},
													beforeSend : function() {
														$('#user').datagrid('loading');
													},
													success : function(data) {
														if (data) {
															$('#user').datagrid('loaded');
															$('#user').datagrid('load');
															$('#user').datagrid('unselectAll');
															$.messager.show({
																		title : '提示',
																		msg : data + '个用户被删除成功！'
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
				edit : function() {
					var rows = $('#user').datagrid('getSelections');
					if (rows.length > 1) {
						$.messager.alert('警告操作！', '编辑记录只能选定一条数据！', 'warning');
					} else if (rows.length == 1) {
						$.ajax({
									url : '/getuser',
									type : 'post',
									data : {
										id : rows[0].id
									},
									beforeSend : function() {
										$.messager.progress({
													text : '正在获取中...'
												});
									},
									success : function(data, response, status) {
										$.messager.progress('close');

										if (data) {

											var obj = $.parseJSON(data);
											var auth = obj.auth.split(',');
											var ids = [];
											$('#user_edit').form('load', {
														user_id_edit : obj.id,
														studentid_edit : obj.studentid,
														name_edit : obj.name,
														sex_edit : obj.sex,
														password_edit : obj.password,
														tel_edit : obj.tel,
														email_edit : obj.email
													}).dialog('open');
											// 分配权限
											$('#auth_edit').combotree({
														url : '/nav',
														required : false,
														lines : true,
														multiple : true,
														checkbox : true,
														onlyLeafCheck : true,
														onLoadSuccess : function(node, data) {
															var _this = this;
															if (data) {
																$(data).each(function(index, value) {

																			if ($.inArray(value.text, auth) != -1) {
																				if (value.id > 4) {
																					ids.push(value.id);
																				}
																			}
																			if (this.state == 'closed') {
																				$(_this).tree('expandAll');
																			}
																		});
															}
															$('#auth_edit').combotree('setValues', ids);
														}
													});

										} else {
											$.messager.alert('获取失败！', '未知错误导致失败，请重试！', 'warning');
										}
									}
								});
					} else if (rows.length == 0) {
						$.messager.alert('警告操作！', '编辑记录至少选定一条数据！', 'warning');
					}
				}
			};

		});