function auto_change_num() {
	$(".css_survey_question").each(function(index, element) {
				$(element).find("strong").text(index + 1);
			});
}
$(function() {
	// 表格自动生成
	$('#survey').datagrid({
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
				toolbar : '#survey_tool',
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
	// 问卷添加对话框
	$('#survey_add').dialog({
		width : 370,
		height : 300,
		title : '问卷新增',
		modal : true,
		closed : true,
		iconCls : 'icon-survey-add',
		buttons : [{
			text : '下一步',
			iconCls : 'icon-next',
			handler : function() {
				if ($('#survey_add').form('validate')) {
					var formData = new FormData();
					formData.append("type", $('select[name="type_add"]').val());
					formData.append("title", $('input[name="title_add"]').val());
					formData.append("description", $('input[name="description_add"]').val());
					if ($('input[name="cover_add"]').val()) {
						formData.append("image", $('input[name="cover_add"]').get(0).files[0]);
					}
					var title = $('input[name="title_add"]').val();
					var description = $('input[name="description_add"]').val();
					$('#survey_add').dialog('close').form('reset');
					if ($('#tabs').tabs('exists', "问卷设计详情")) {
						$.messager.alert('警告！', '页面占用，请先关闭！', 'warning');
						$('#tabs').tabs('select', "问卷设计详情");
					} else {
						$('#tabs').tabs('add', {
							title : '问卷设计详情',
							iconCls : 'icon-survey-tool-design',
							closable : true,
							href : 'surveydesigner.html',
							onLoad : function() {
								$(".css_survey_title h1").text(title);
								$(".css_survey_description h4").text(description);
								auto_change_num();
								$("div.css_question_container").delegate("a[name='question_delete']", "click",
										function(e) {
											$(e.target).parents("div.css_survey_question").remove();
											auto_change_num();
										});
								$("div.css_question_container").delegate("a[name='add_option']", "click", function(e) {
									var ops = $(e.target).closest("p").nextAll("p");
									for (i = 0; i < ops.length; i++) {
										if (ops.eq(i).css("display") == "inline") {
										} else {
											ops.eq(i).find("input").addClass("easyui-validatebox").attr("data-options",
													"required:true").parent().css("display", "inline");
											$.parser.parse();
											break;
										}
									}
								});
								$("div.css_question_container").delegate("a[name='delete_option']", "click",
										function(e) {
											var ops = $(e.target).closest("p").nextAll("p");
											for (i = 0; i <= ops.length; i++) {
												if (ops.eq(i).css("display") == "inline") {
												} else if (i > 0) {
													ops
															.eq(i - 1)
															.find("input")
															.removeClass("easyui-validatebox validatebox-text validatebox-invalid")
															.removeAttr("data-options").val("").parent().css("display",
																	"none");
													break;
												}
											}
										});
								$("select[name='question_type']").change(function(e) {

									var type = $(this).val();
									/* 单选或多选显示增减选项按钮，并将所有选项输入框置空； */
									if (type == "多选" || type == "单选") {
										$(this).parent().nextAll(".question_option_opt").css("display", "inline");
										$(this).parent().nextAll().filter("p").children("input").val("");
										$.parser.parse();
									} else {
										/* 填空和问答只显示一部分； */
										$(this)
												.parent()
												.nextAll()
												.not(".question_delete,.input_question_title,.input_question_description,div")
												.css("display", "none").filter("p").children("input").val("");
									}

								});

								$("#btn_ok").click(function() {

									if ($("div.css_question_container .validatebox-invalid").not(".easyui-textbox").length != 0) {

										$("div.css_question_container .validatebox-invalid").not(".easyui-textbox")
												.first().focus();

									} else {
										$.messager.confirm('确定操作', '您确定要保存编辑的内容吗？', function(flag) {
											if (flag) {
												var questions = [];

												$("div.css_survey_question").each(function(index, element) {
													var question = {
														title : "",
														description : "",
														number : 0,
														type : "",
														opA : "",
														opB : "",
														opC : "",
														opD : "",
														opE : "",
														opF : "",
														opG : "",
														opH : "",
														opI : ""
													};

													question.title = $(element).find("input[name='question_title']")
															.val();
													question.description = $(element)
															.find("input[name='question_description']").val();
													question.number = index + 1;
													question.type = $(element).find("select[name='question_type']")
															.val();
													question.opA = $(element).find("input[name='question_opA']").val();
													question.opB = $(element).find("input[name='question_opB']").val();
													question.opC = $(element).find("input[name='question_opC']").val();
													question.opD = $(element).find("input[name='question_opD']").val();
													question.opE = $(element).find("input[name='question_opE']").val();
													question.opF = $(element).find("input[name='question_opF']").val();
													question.opG = $(element).find("input[name='question_opG']").val();
													question.opH = $(element).find("input[name='question_opH']").val();
													question.opI = $(element).find("input[name='question_opI']").val();
													questions.push(question);
												});
												formData.append("questions", JSON.stringify(questions));
												$.ajax({
													url : '/addsurvey',
													type : 'post',
													data : formData,
													cache : false,
													processData : false,
													contentType : false,
													beforeSend : function() {
														$.messager.progress({
																	text : '正在修改中...'
																});
													},
													success : function(result, response, status) {
														$.messager.progress('close');
														var result = eval("(" + result + ")");
														if (result.data[0] == '1') {
															$.messager.show({
																		width : 350,
																		height : 200,
																		timeout : 10000,
																		title : '提示',
																		msg : '<h3>问卷新增:成功,<br><br><br>封面状态:'
																				+ result.data[1]
																				+ "<br><br><br>(封面为可选,失败或未选择,则启用默认封面)</h3>"
																	});
															$('#survey_edit').dialog('close').form('reset');
															$('#survey').datagrid('reload');
														} else if (result.data[0] == '100') {
															$.messager.alert('新增失败！', '数据库进程度错误，请重试！', 'warning');
															$('#survey').datagrid('reload');
														}
													}
												});
												$('#tabs').tabs('close', '问卷设计详情');
											}
										});
									}

								});
							}
						});
					}

				}
			}

		}, {
			text : '取   消',
			iconCls : 'icon-redo',
			handler : function() {
				$('#survey_add').dialog('close').form('reset');
			}
		}]
	});

	$('#survey_edit').dialog({
		width : 370,
		height : 420,
		title : '修改问卷',
		modal : true,
		closed : true,
		iconCls : 'icon-survey-edit',
		buttons : [{
			text : '下一步',
			iconCls : 'icon-next',
			handler : function() {
				if ($('#survey_edit').form('validate')) {
					var formData = new FormData();
					formData.append("surveyid", $('input[name="id_edit"]').val());
					formData.append("type", $('select[name="type_edit"]').val());
					formData.append("title", $('input[name="title_edit"]').val());
					formData.append("description", $('input[name="description_edit"]').val());
					if ($('input[name="cover_edit"]').val()) {
						formData.append("image", $('input[name="cover_edit"]').get(0).files[0]);
					}
					var surveyid = $('input[name="id_edit"]').val();
					var title = $('input[name="title_edit"]').val();
					var description = $('input[name="description_edit"]').val();
					$('#survey_edit').dialog('close').form('reset');
					if ($('#tabs').tabs('exists', "问卷设计详情")) {
						$.messager.alert('警告！', '页面占用，请先关闭！', 'warning');
						$('#tabs').tabs('select', "问卷设计详情");
					} else {
						$('#tabs').tabs('add', {
							title : '问卷设计详情',
							iconCls : 'icon-survey-tool-design',
							closable : true,
							href : 'surveydesigner.html',
							onLoad : function() {
								$(".css_survey_title h1").text(title);
								$(".css_survey_description h4").text(description);
								$.ajax({
									url : '/getquestions',
									type : 'post',
									data : {
										surveyid : surveyid
									},
									beforeSend : function() {
										$.messager.progress({
													text : '正在获取中...'
												});
									},
									success : function(result, response, status) {
										$.messager.progress('close');
										var result = eval("(" + result + ")");

										var question_radio = '<div class="css_survey_question">'
												+ '<p class="question_number">'
												+ '第 <strong>1</strong> 题.'
												+ '</p>'
												+ '<p class="input_question_type">'
												+ '问题类型：<select name="question_type" class="textbox"'
												+ 'style="width:200px">'
												+ '<option value="单选" selected="selected">单选</option>'
												+ '<option value="多选">多选</option>'
												+ '<option value="问答">问答</option>'
												+ '<option value="填空">填空</option>'
												+ '</select>'
												+ '</p>'
												+ '<p class="question_delete">'
												+ '<a href="#" name="question_delete" class="easyui-linkbutton"'
												+ 'data-options="iconCls:\'icon-no\'">删除问题</a>'
												+ '</p>'

												+ '<div class="interval_space"></div>'

												+ '<p class="input_question_title">'
												+ '问题标题：<input class="easyui-textbox easyui-validatebox" data-options="required:true" multiline="true"'
												+ '	name="question_title" style="width:200px;height:66px;">'
												+ '</p>'
												+ '<p class="input_question_description">'
												+ '问题描述： <input class="easyui-textbox" multiline="true"'
												+ '	name="question_description" style="width:200px;height:66px;">'
												+ '</p>'

												+ '<div class="interval_space"></div>'

												+ '<p class="question_option_opt">'
												+ '<a href="#" name="add_option" class="easyui-linkbutton"'
												+ 'data-options="iconCls:\'icon-add\'">添加选项</a><a href="#"'
												+ 'name="delete_option" class="easyui-linkbutton"'
												+ 'data-options="iconCls:\'icon-remove\'" style="margin: 0 0 0 250px;">删除选项</a>'
												+ '</p>'

												+ '<div class="interval_space"></div>'

												+ '<p class="input_question_opA">'
												+ '选 项 A ：<input type="text" name="question_opA" class="textbox"'
												+ 'style="width:200px;">' + '</p>' + '<p class="input_question_opB">'
												+ '选 项 B ：<input type="text" name="question_opB" class="textbox"'
												+ '	style="width:200px;">' + '</p>'

												+ '<div class="interval_space"></div>'

												+ '<p class="input_question_opC">'
												+ '	选 项 C ：<input type="text" name="question_opC" class="textbox"'
												+ 'style="width:200px;">' + '</p>' + '<p class="input_question_opD">'
												+ '选 项 D ：<input type="text" name="question_opD" class="textbox"'
												+ 'style="width:200px;">' + '</p>'

												+ '<div class="interval_space"></div>'

												+ '<p class="input_question_opE">'
												+ '选 项 E ：<input type="text" name="question_opE" class="textbox"'
												+ 'style="width:200px;">' + '</p>' + '<p class="input_question_opF">'
												+ '选 项 F ：<input type="text" name="question_opF" class="textbox"'
												+ 'style="width:200px;">' + '</p>'

												+ '<div class="interval_space"></div>'

												+ '<p class="input_question_opG">'
												+ '选 项 G ：<input type="text" name="question_opG" class="textbox"'
												+ 'style="width:200px;">' + '</p>' + '<p class="input_question_opH">'
												+ '选 项 H ：<input type="text" name="question_opH" class="textbox"'
												+ 'style="width:200px;">' + '</p>'

												+ '<div class="interval_space"></div>'

												+ '<p class="input_question_opI">'
												+ '	选 项 I ：<input type="text" name=question_opI class="textbox"'
												+ '	style="width:200px;">' + '</p>' + '</div>';
										var question_check = '<div class="css_survey_question">'
												+ '<p class="question_number">'
												+ '第 <strong>1</strong> 题.'
												+ '</p>'
												+ '<p class="input_question_type">'
												+ '问题类型：<select name="question_type" class="textbox"'
												+ 'style="width:200px">'
												+ '<option value="单选">单选</option>'
												+ '<option value="多选" selected="selected">多选</option>'
												+ '<option value="问答">问答</option>'
												+ '<option value="填空">填空</option>'
												+ '</select>'
												+ '</p>'
												+ '<p class="question_delete">'
												+ '<a href="#" name="question_delete" class="easyui-linkbutton"'
												+ 'data-options="iconCls:\'icon-no\'">删除问题</a>'
												+ '</p>'

												+ '<div class="interval_space"></div>'

												+ '<p class="input_question_title">'
												+ '问题标题：<input class="easyui-textbox easyui-validatebox" data-options="required:true" multiline="true"'
												+ '	name="question_title" style="width:200px;height:66px;">'
												+ '</p>'
												+ '<p class="input_question_description">'
												+ '问题描述： <input class="easyui-textbox" multiline="true"'
												+ '	name="question_description" style="width:200px;height:66px;">'
												+ '</p>'

												+ '<div class="interval_space"></div>'

												+ '<p class="question_option_opt">'
												+ '<a href="#" name="add_option" class="easyui-linkbutton"'
												+ 'data-options="iconCls:\'icon-add\'">添加选项</a><a href="#"'
												+ 'name="delete_option" class="easyui-linkbutton"'
												+ 'data-options="iconCls:\'icon-remove\'" style="margin: 0 0 0 250px;">删除选项</a>'
												+ '</p>'

												+ '<div class="interval_space"></div>'

												+ '<p class="input_question_opA">'
												+ '选 项 A ：<input type="text" name="question_opA" class="textbox"'
												+ 'style="width:200px;">' + '</p>' + '<p class="input_question_opB">'
												+ '选 项 B ：<input type="text" name="question_opB" class="textbox"'
												+ '	style="width:200px;">' + '</p>'

												+ '<div class="interval_space"></div>'

												+ '<p class="input_question_opC">'
												+ '	选 项 C ：<input type="text" name="question_opC" class="textbox"'
												+ 'style="width:200px;">' + '</p>' + '<p class="input_question_opD">'
												+ '选 项 D ：<input type="text" name="question_opD" class="textbox"'
												+ 'style="width:200px;">' + '</p>'

												+ '<div class="interval_space"></div>'

												+ '<p class="input_question_opE">'
												+ '选 项 E ：<input type="text" name="question_opE" class="textbox"'
												+ 'style="width:200px;">' + '</p>' + '<p class="input_question_opF">'
												+ '选 项 F ：<input type="text" name="question_opF" class="textbox"'
												+ 'style="width:200px;">' + '</p>'

												+ '<div class="interval_space"></div>'

												+ '<p class="input_question_opG">'
												+ '选 项 G ：<input type="text" name="question_opG" class="textbox"'
												+ 'style="width:200px;">' + '</p>' + '<p class="input_question_opH">'
												+ '选 项 H ：<input type="text" name="question_opH" class="textbox"'
												+ 'style="width:200px;">' + '</p>'

												+ '<div class="interval_space"></div>'

												+ '<p class="input_question_opI">'
												+ '	选 项 I ：<input type="text" name=question_opI class="textbox"'
												+ '	style="width:200px;">' + '</p>' + '</div>';
										var question_qa = '<div class="css_survey_question">'
												+ '<p class="question_number">'
												+ '第 <strong>1</strong> 题.'
												+ '</p>'
												+ '<p class="input_question_type">'
												+ '问题类型：<select name="question_type" class="textbox"'
												+ 'style="width:200px">'
												+ '<option value="单选">单选</option>'
												+ '<option value="多选">多选</option>'
												+ '<option value="问答" selected="selected">问答</option>'
												+ '<option value="填空">填空</option>'
												+ '</select>'
												+ '</p>'
												+ '<p class="question_delete">'
												+ '<a href="#" name="question_delete" class="easyui-linkbutton"'
												+ 'data-options="iconCls:\'icon-no\'">删除问题</a>'
												+ '</p>'

												+ '<div class="interval_space"></div>'

												+ '<p class="input_question_title">'
												+ '问题标题：<input class="easyui-textbox easyui-validatebox" data-options="required:true" multiline="true"'
												+ '	name="question_title" style="width:200px;height:66px;">'
												+ '</p>'
												+ '<p class="input_question_description">'
												+ '问题描述： <input class="easyui-textbox" multiline="true"'
												+ '	name="question_description" style="width:200px;height:66px;">'
												+ '</p>'

												+ '<div class="interval_space"></div>'

												+ '<p class="question_option_opt">'
												+ '<a href="#" name="add_option" class="easyui-linkbutton"'
												+ 'data-options="iconCls:\'icon-add\'">添加选项</a><a href="#"'
												+ 'name="delete_option" class="easyui-linkbutton"'
												+ 'data-options="iconCls:\'icon-remove\'" style="margin: 0 0 0 250px;">删除选项</a>'
												+ '</p>'

												+ '<div class="interval_space"></div>'

												+ '<p class="input_question_opA">'
												+ '选 项 A ：<input type="text" name="question_opA" class="textbox"'
												+ 'style="width:200px;">' + '</p>' + '<p class="input_question_opB">'
												+ '选 项 B ：<input type="text" name="question_opB" class="textbox"'
												+ '	style="width:200px;">' + '</p>'

												+ '<div class="interval_space"></div>'

												+ '<p class="input_question_opC">'
												+ '	选 项 C ：<input type="text" name="question_opC" class="textbox"'
												+ 'style="width:200px;">' + '</p>' + '<p class="input_question_opD">'
												+ '选 项 D ：<input type="text" name="question_opD" class="textbox"'
												+ 'style="width:200px;">' + '</p>'

												+ '<div class="interval_space"></div>'

												+ '<p class="input_question_opE">'
												+ '选 项 E ：<input type="text" name="question_opE" class="textbox"'
												+ 'style="width:200px;">' + '</p>' + '<p class="input_question_opF">'
												+ '选 项 F ：<input type="text" name="question_opF" class="textbox"'
												+ 'style="width:200px;">' + '</p>'

												+ '<div class="interval_space"></div>'

												+ '<p class="input_question_opG">'
												+ '选 项 G ：<input type="text" name="question_opG" class="textbox"'
												+ 'style="width:200px;">' + '</p>' + '<p class="input_question_opH">'
												+ '选 项 H ：<input type="text" name="question_opH" class="textbox"'
												+ 'style="width:200px;">' + '</p>'

												+ '<div class="interval_space"></div>'

												+ '<p class="input_question_opI">'
												+ '	选 项 I ：<input type="text" name=question_opI class="textbox"'
												+ '	style="width:200px;">' + '</p>' + '</div>';
										var question_ftb = '<div class="css_survey_question">'
												+ '<p class="question_number">'
												+ '第 <strong>1</strong> 题.'
												+ '</p>'
												+ '<p class="input_question_type">'
												+ '问题类型：<select name="question_type" class="textbox"'
												+ 'style="width:200px">'
												+ '<option value="单选">单选</option>'
												+ '<option value="多选">多选</option>'
												+ '<option value="问答">问答</option>'
												+ '<option value="填空" selected="selected">填空</option>'
												+ '</select>'
												+ '</p>'
												+ '<p class="question_delete">'
												+ '<a href="#" name="question_delete" class="easyui-linkbutton"'
												+ 'data-options="iconCls:\'icon-no\'">删除问题</a>'
												+ '</p>'

												+ '<div class="interval_space"></div>'

												+ '<p class="input_question_title">'
												+ '问题标题：<input class="easyui-textbox easyui-validatebox" data-options="required:true" multiline="true"'
												+ '	name="question_title" style="width:200px;height:66px;">'
												+ '</p>'
												+ '<p class="input_question_description">'
												+ '问题描述： <input class="easyui-textbox" multiline="true"'
												+ '	name="question_description" style="width:200px;height:66px;">'
												+ '</p>'

												+ '<div class="interval_space"></div>'

												+ '<p class="question_option_opt">'
												+ '<a href="#" name="add_option" class="easyui-linkbutton"'
												+ 'data-options="iconCls:\'icon-add\'">添加选项</a><a href="#"'
												+ 'name="delete_option" class="easyui-linkbutton"'
												+ 'data-options="iconCls:\'icon-remove\'" style="margin: 0 0 0 250px;">删除选项</a>'
												+ '</p>'

												+ '<div class="interval_space"></div>'

												+ '<p class="input_question_opA">'
												+ '选 项 A ：<input type="text" name="question_opA" class="textbox"'
												+ 'style="width:200px;">' + '</p>' + '<p class="input_question_opB">'
												+ '选 项 B ：<input type="text" name="question_opB" class="textbox"'
												+ '	style="width:200px;">' + '</p>'

												+ '<div class="interval_space"></div>'

												+ '<p class="input_question_opC">'
												+ '	选 项 C ：<input type="text" name="question_opC" class="textbox"'
												+ 'style="width:200px;">' + '</p>' + '<p class="input_question_opD">'
												+ '选 项 D ：<input type="text" name="question_opD" class="textbox"'
												+ 'style="width:200px;">' + '</p>'

												+ '<div class="interval_space"></div>'

												+ '<p class="input_question_opE">'
												+ '选 项 E ：<input type="text" name="question_opE" class="textbox"'
												+ 'style="width:200px;">' + '</p>' + '<p class="input_question_opF">'
												+ '选 项 F ：<input type="text" name="question_opF" class="textbox"'
												+ 'style="width:200px;">' + '</p>'

												+ '<div class="interval_space"></div>'

												+ '<p class="input_question_opG">'
												+ '选 项 G ：<input type="text" name="question_opG" class="textbox"'
												+ 'style="width:200px;">' + '</p>' + '<p class="input_question_opH">'
												+ '选 项 H ：<input type="text" name="question_opH" class="textbox"'
												+ 'style="width:200px;">' + '</p>'

												+ '<div class="interval_space"></div>'

												+ '<p class="input_question_opI">'
												+ '	选 项 I ：<input type="text" name=question_opI class="textbox"'
												+ '	style="width:200px;">' + '</p>' + '</div>';

										$.each(result.data, function(index, item) {
													if (item.type == "多选") {
														$(question_check).appendTo("div.css_question_container");
														$(".css_survey_question").eq(index)
																.find(".question_option_opt").css("display", "inline");
														$(".css_survey_question").eq(index)
																.find("input[name='question_title']").val(item.title);
														$(".css_survey_question").eq(index)
																.find("input[name='question_description']")
																.val(item.description);
														for (i = 0; i < 9; i++) {
															if (item.opA != "") {
																$(".css_survey_question").eq(index)
																		.find("input[name='question_opA']")
																		.addClass("easyui-validatebox").attr(
																				"data-options", "required:true")
																		.val(item.opA).parent()
																		.css("display", "inline");
															} else {
																break;
															}
															if (item.opB != "") {
																$(".css_survey_question").eq(index)
																		.find("input[name='question_opB']")
																		.addClass("easyui-validatebox").attr(
																				"data-options", "required:true")
																		.val(item.opB).parent()
																		.css("display", "inline");
															} else {
																break;
															}
															if (item.opC != "") {
																$(".css_survey_question").eq(index)
																		.find("input[name='question_opC']")
																		.addClass("easyui-validatebox").attr(
																				"data-options", "required:true")
																		.val(item.opC).parent()
																		.css("display", "inline");
															} else {
																break;
															}
															if (item.opD != "") {
																$(".css_survey_question").eq(index)
																		.find("input[name='question_opD']")
																		.addClass("easyui-validatebox").attr(
																				"data-options", "required:true")
																		.val(item.opD).parent()
																		.css("display", "inline");
															} else {
																break;
															}
															if (item.opE != "") {
																$(".css_survey_question").eq(index)
																		.find("input[name='question_opE']")
																		.addClass("easyui-validatebox").attr(
																				"data-options", "required:true")
																		.val(item.opE).parent()
																		.css("display", "inline");
															} else {
																break;
															}
															if (item.opF != "") {
																$(".css_survey_question").eq(index)
																		.find("input[name='question_opF']")
																		.addClass("easyui-validatebox").attr(
																				"data-options", "required:true")
																		.val(item.opF).parent()
																		.css("display", "inline");
															} else {
																break;
															}
															if (item.opG != "") {
																$(".css_survey_question").eq(index)
																		.find("input[name='question_opG']")
																		.addClass("easyui-validatebox").attr(
																				"data-options", "required:true")
																		.val(item.opG).parent()
																		.css("display", "inline");
															} else {
																break;
															}
															if (item.opH != "") {
																$(".css_survey_question").eq(index)
																		.find("input[name='question_opH']")
																		.addClass("easyui-validatebox").attr(
																				"data-options", "required:true")
																		.val(item.opH).parent()
																		.css("display", "inline");
															} else {
																break;
															}
															if (item.opI != "") {
																$(".css_survey_question").eq(index)
																		.find("input[name='question_opI']")
																		.addClass("easyui-validatebox").attr(
																				"data-options", "required:true")
																		.val(item.opI).parent()
																		.css("display", "inline");
															} else {
																break;
															}
														}
													}
													if (item.type == "单选") {
														$(question_radio).appendTo("div.css_question_container");
														$(".css_survey_question").eq(index)
																.find(".question_option_opt").css("display", "inline");
														$(".css_survey_question").eq(index)
																.find("input[name='question_title']").val(item.title);
														$(".css_survey_question").eq(index)
																.find("input[name='question_description']")
																.val(item.description);
														for (i = 0; i < 9; i++) {
															if (item.opA != "") {
																$(".css_survey_question").eq(index)
																		.find("input[name='question_opA']")
																		.addClass("easyui-validatebox").attr(
																				"data-options", "required:true")
																		.val(item.opA).parent()
																		.css("display", "inline");
															} else {
																break;
															}
															if (item.opB != "") {
																$(".css_survey_question").eq(index)
																		.find("input[name='question_opB']")
																		.addClass("easyui-validatebox").attr(
																				"data-options", "required:true")
																		.val(item.opB).parent()
																		.css("display", "inline");
															} else {
																break;
															}
															if (item.opC != "") {
																$(".css_survey_question").eq(index)
																		.find("input[name='question_opC']")
																		.addClass("easyui-validatebox").attr(
																				"data-options", "required:true")
																		.val(item.opC).parent()
																		.css("display", "inline");
															} else {
																break;
															}
															if (item.opD != "") {
																$(".css_survey_question").eq(index)
																		.find("input[name='question_opD']")
																		.addClass("easyui-validatebox").attr(
																				"data-options", "required:true")
																		.val(item.opD).parent()
																		.css("display", "inline");
															} else {
																break;
															}
															if (item.opE != "") {
																$(".css_survey_question").eq(index)
																		.find("input[name='question_opE']")
																		.addClass("easyui-validatebox").attr(
																				"data-options", "required:true")
																		.val(item.opE).parent()
																		.css("display", "inline");
															} else {
																break;
															}
															if (item.opF != "") {
																$(".css_survey_question").eq(index)
																		.find("input[name='question_opF']")
																		.addClass("easyui-validatebox").attr(
																				"data-options", "required:true")
																		.val(item.opF).parent()
																		.css("display", "inline");
															} else {
																break;
															}
															if (item.opG != "") {
																$(".css_survey_question").eq(index)
																		.find("input[name='question_opG']")
																		.addClass("easyui-validatebox").attr(
																				"data-options", "required:true")
																		.val(item.opG).parent()
																		.css("display", "inline");
															} else {
																break;
															}
															if (item.opH != "") {
																$(".css_survey_question").eq(index)
																		.find("input[name='question_opH']")
																		.addClass("easyui-validatebox").attr(
																				"data-options", "required:true")
																		.val(item.opH).parent()
																		.css("display", "inline");
															} else {
																break;
															}
															if (item.opI != "") {
																$(".css_survey_question").eq(index)
																		.find("input[name='question_opI']")
																		.addClass("easyui-validatebox").attr(
																				"data-options", "required:true")
																		.val(item.opI).parent()
																		.css("display", "inline");
															} else {
																break;
															}
														}
													}
													if (item.type == "问答") {
														$(question_qa).appendTo("div.css_question_container");
														$(".css_survey_question").eq(index)
																.find("input[name='question_title']").val(item.title);
														$(".css_survey_question").eq(index)
																.find("input[name='question_description']")
																.val(item.description);
													}
													if (item.type == "填空") {
														$(question_ftb).appendTo("div.css_question_container");
														$(".css_survey_question").eq(index)
																.find("input[name='question_title']").val(item.title);
														$(".css_survey_question").eq(index)
																.find("input[name='question_description']")
																.val(item.description);
													}
													$.parser.parse($(".css_survey_question").eq(index));
												});
										auto_change_num();
										/*
										 * $("a[name='question_delete']").click(function() {
										 * $(this).parents("div.css_survey_question").remove();
										 * auto_change_num(); });
										 */
										$("div.css_question_container").delegate("a[name='question_delete']", "click",
												function(e) {
													$(e.target).parents("div.css_survey_question").remove();
													auto_change_num();
												});
										/*
										 * $("a[name='add_option']").click(function() {
										 * var ops =
										 * $(this).parent().nextAll("p"); for (i =
										 * 0; i < ops.length; i++) { if
										 * (ops.eq(i).css("display") ==
										 * "inline") { } else {
										 * ops.eq(i).find("input").addClass("easyui-validatebox").attr(
										 * "data-options",
										 * "required:true").parent().css("display",
										 * "inline"); $.parser.parse(); break; } }
										 * });
										 */
										$("div.css_question_container").delegate("a[name='add_option']", "click",
												function(e) {
													var ops = $(e.target).closest("p").nextAll("p");
													for (i = 0; i < ops.length; i++) {
														if (ops.eq(i).css("display") == "inline") {
														} else {
															ops.eq(i).find("input").addClass("easyui-validatebox")
																	.attr("data-options", "required:true").parent()
																	.css("display", "inline");
															$.parser.parse();
															break;
														}
													}
												});
										/*
										 * $("a[name='delete_option']").click(function() {
										 * var ops =
										 * $(this).parent().nextAll("p"); for (i =
										 * 0; i <= ops.length; i++) { if
										 * (ops.eq(i).css("display") ==
										 * "inline") { } else if (i > 0) { ops
										 * .eq(i - 1) .find("input")
										 * .removeClass("easyui-validatebox
										 * validatebox-text
										 * validatebox-invalid")
										 * .removeAttr("data-options").val("").parent().css("display",
										 * "none"); break; } } });
										 */
										$("div.css_question_container").delegate("a[name='delete_option']", "click",
												function(e) {
													var ops = $(e.target).closest("p").nextAll("p");
													for (i = 0; i <= ops.length; i++) {
														if (ops.eq(i).css("display") == "inline") {
														} else if (i > 0) {
															ops
																	.eq(i - 1)
																	.find("input")
																	.removeClass("easyui-validatebox validatebox-text validatebox-invalid")
																	.removeAttr("data-options").val("").parent().css(
																			"display", "none");
															break;
														}
													}
												});
										$("select[name='question_type']").change(function(e) {

											var type = $(this).val();
											/* 单选或多选显示增减选项按钮，并将所有选项输入框置空； */
											if (type == "多选" || type == "单选") {
												$(this).parent().nextAll(".question_option_opt").css("display",
														"inline");
												$(this).parent().nextAll().filter("p").children("input").val("");
												$.parser.parse();
											} else {
												/* 填空和问答只显示一部分； */
												$(this)
														.parent()
														.nextAll()
														.not(".question_delete,.input_question_title,.input_question_description,div")
														.css("display", "none").filter("p").children("input").val("");
											}

										});

									}
								});
								auto_change_num();
								$("div.css_question_container").delegate("a[name='question_delete']", "click",
										function(e) {
											$(e.target).parents("div.css_survey_question").remove();
											auto_change_num();
										});
								$("div.css_question_container").delegate("a[name='add_option']", "click", function(e) {
									var ops = $(e.target).closest("p").nextAll("p");
									for (i = 0; i < ops.length; i++) {
										if (ops.eq(i).css("display") == "inline") {
										} else {
											ops.eq(i).find("input").addClass("easyui-validatebox").attr("data-options",
													"required:true").parent().css("display", "inline");
											$.parser.parse();
											break;
										}
									}
								});
								$("div.css_question_container").delegate("a[name='delete_option']", "click",
										function(e) {
											var ops = $(e.target).closest("p").nextAll("p");
											for (i = 0; i <= ops.length; i++) {
												if (ops.eq(i).css("display") == "inline") {
												} else if (i > 0) {
													ops
															.eq(i - 1)
															.find("input")
															.removeClass("easyui-validatebox validatebox-text validatebox-invalid")
															.removeAttr("data-options").val("").parent().css("display",
																	"none");
													break;
												}
											}
										});
								$("select[name='question_type']").change(function(e) {

									var type = $(this).val();
									/* 单选或多选显示增减选项按钮，并将所有选项输入框置空； */
									if (type == "多选" || type == "单选") {
										$(this).parent().nextAll(".question_option_opt").css("display", "inline");
										$(this).parent().nextAll().filter("p").children("input").val("");
										$.parser.parse();
									} else {
										/* 填空和问答只显示一部分； */
										$(this)
												.parent()
												.nextAll()
												.not(".question_delete,.input_question_title,.input_question_description,div")
												.css("display", "none").filter("p").children("input").val("");
									}

								});

								$("#btn_ok").click(function() {
									if ($("div.css_question_container .validatebox-invalid").not(".easyui-textbox").length != 0) {

										$("div.css_question_container .validatebox-invalid").not(".easyui-textbox")
												.first().focus();

									} else {
										$.messager.confirm('确定操作', '您确定要保存编辑的内容吗？', function(flag) {
											if (flag) {

												var questions = [];

												$("div.css_survey_question").each(function(index, element) {
													var question = {
														title : "",
														description : "",
														number : 0,
														type : "",
														opA : "",
														opB : "",
														opC : "",
														opD : "",
														opE : "",
														opF : "",
														opG : "",
														opH : "",
														opI : ""
													};

													question.title = $(element).find("input[name='question_title']")
															.val();
													question.description = $(element)
															.find("input[name='question_description']").val();
													question.number = index + 1;
													question.type = $(element).find("select[name='question_type']")
															.val();
													question.opA = $(element).find("input[name='question_opA']").val();
													question.opB = $(element).find("input[name='question_opB']").val();
													question.opC = $(element).find("input[name='question_opC']").val();
													question.opD = $(element).find("input[name='question_opD']").val();
													question.opE = $(element).find("input[name='question_opE']").val();
													question.opF = $(element).find("input[name='question_opF']").val();
													question.opG = $(element).find("input[name='question_opG']").val();
													question.opH = $(element).find("input[name='question_opH']").val();
													question.opI = $(element).find("input[name='question_opI']").val();
													questions.push(question);
												});
												formData.append("questions", JSON.stringify(questions));
												$.ajax({
													url : '/editsurvey',
													type : 'post',
													data : formData,
													cache : false,
													processData : false,
													contentType : false,
													beforeSend : function() {
														$.messager.progress({
																	text : '正在修改中...'
																});
													},
													success : function(result, response, status) {
														$.messager.progress('close');
														var result = eval("(" + result + ")");
														if (result.data[0] == '1') {
															$.messager.show({
																		width : 350,
																		height : 200,
																		timeout : 10000,
																		title : '提示',
																		msg : '<h3>问卷修改:成功,<br><br><br>封面状态:'
																				+ result.data[1]
																				+ "<br><br><br>(封面为可选,失败或未选择,则启用先前封面)</h3>"
																	});
															$('#survey_edit').dialog('close').form('reset');
															$('#survey').datagrid('reload');
														} else if (result.data[0] == '100') {
															$.messager.alert('修改失败！', '数据库进程度错误，请重试！', 'warning');
															$('#survey').datagrid('reload');
														}
													}
												});
												$('#tabs').tabs('close', '问卷设计详情');
											}
										});
									}
								});
							}
						});
					}
				}
			}
		}, {
			text : '取消',
			iconCls : 'icon-redo',
			handler : function() {
				$('#survey_edit').dialog('close').form('reset');
			}
		}]
	});
	// 添加标题的验证
	$('input[name="title_add"]').validatebox({
				required : true,
				validType : 'length[2,500]',
				missingMessage : '请输入标题',
				invalidMessage : '标题少2位'
			});
	// 添加描述的验证
	$('input[name="description_add"]').validatebox({
				required : true,
				validType : 'length[2,500]',
				missingMessage : '请输入标题',
				invalidMessage : '标题少2位'
			});

	// 修改标题的验证
	$('input[name="title_edit"]').validatebox({
				required : true,
				validType : 'length[2,500]',
				missingMessage : '请输入标题',
				invalidMessage : '标题少2位'
			});
	// 修改描述的验证
	$('input[name="description_edit"]').validatebox({
				required : true,
				validType : 'length[2,500]',
				missingMessage : '请输入标题',
				invalidMessage : '标题少2位'
			});

	survey_tool = {
		reload : function() {
			$('#survey').datagrid('reload');
		},
		redo : function() {
			$('#survey').datagrid('unselectAll');
		},
		add : function() {
			$('#survey_add').dialog('open');
			$('input[name="survey"]').focus();
		},
		search : function() {
			$('#survey').datagrid('load', {
						title : $('input[name="title"]').val(),
						date_from : $('input[name="date_from"]').val(),
						date_to : $('input[name="date_to"]').val()
					});
		},
		remove : function() {
			var rows = $('#survey').datagrid('getSelections');
			if (rows.length > 0) {
				$.messager.confirm('确定操作', '您确定要删除所选的记录吗？', function(flag) {
							if (flag) {
								var ids = [];
								for (var i = 0; i < rows.length; i++) {
									ids.push(rows[i].id);
								}
								// console.log(ids.join(','));
								$.ajax({
											type : 'POST',
											url : '/deletesurvey',
											data : {
												ids : '(' + ids.join(',') + ')'
											},
											beforeSend : function() {
												$('#survey').datagrid('loading');
											},
											success : function(data) {
												if (data) {
													$('#survey').datagrid('loaded');
													$('#survey').datagrid('load');
													$('#survey').datagrid('unselectAll');
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
		scan : function() {
			var rows = $('#survey').datagrid('getSelections');
			if (rows.length > 1) {
				$.messager.alert('警告操作！', '查看问卷只能选定一条数据！', 'warning');
			} else if (rows.length == 1) {
				if ($('#tabs').tabs('exists', "查看问卷详情")) {
					if ($("input[name='surveyid']").val() == rows[0].id) {
					} else {
						$.messager.alert('警告操作！', '页面占用，请先关闭查看问卷详情标签页', 'warning');
					}
					$('#tabs').tabs('select', "查看问卷详情");
				} else {
					$('#tabs').tabs('add', {
								title : '查看问卷详情',
								iconCls : 'icon-surveyscan',
								closable : true,
								href : 'testpreview.jsp' + '?id=' + rows[0].id
							});
				}

			} else if (rows.length == 0) {
				$.messager.alert('警告操作！', '查看问卷至少选定一条数据！', 'warning');
			}

		},
		edit : function() {
			var rows = $('#survey').datagrid('getSelections');
			if (rows.length > 1) {
				$.messager.alert('警告操作！', '编辑记录只能选定一条数据！', 'warning');
			} else if (rows.length == 1) {
				if (rows[0].publish != "可编辑") {
					$.messager.alert('警告操作！', rows[0].publish + '的问卷不可修改！', 'warning');
				} else {
					$.ajax({
								url : '/getsurvey',
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
										var image = '../cover/' + obj.image;
										$('#cover').attr('src', image);
										$('#survey_edit').form('load', {
													id_edit : obj.id,
													type_edit : obj.type,
													title_edit : obj.title,
													description_edit : obj.description
												}).dialog('open');

									} else {
										$.messager.alert('获取失败！', '未知错误导致失败，请重试！', 'warning');
									}
								}
							});
				}
			} else if (rows.length == 0) {
				$.messager.alert('警告操作！', '编辑记录至少选定一条数据！', 'warning');
			}
		}
	};

});