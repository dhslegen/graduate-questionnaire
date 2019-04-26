function auto_change_num() {
	$(".css_survey_question").each(function(index, element) {
				$(element).find("strong").text(index + 1);
			});
}
$(function() {
	// 表格自动生成
	$('#surveydesign').datagrid({
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
				toolbar : '#surveydesign_tool',
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

	surveydesign_tool = {
		reload : function() {
			$('#surveydesign').datagrid('reload');
		},
		redo : function() {
			$('#surveydesign').datagrid('unselectAll');
		},
		search : function() {
			$('#surveydesign').datagrid('load', {
						title : $('input[name="survey_design_title"]').val(),
						date_from : $('input[name="survey_design_date_from"]').val(),
						date_to : $('input[name="survey_design_date_to"]').val()
					});
		},
		design : function() {
			var rows = $('#surveydesign').datagrid('getSelections');
			if (rows.length > 1) {
				$.messager.alert('警告操作！', '设计问卷只能选定一条数据！', 'warning');
			} else if (rows.length == 1) {
				if ($('#tabs').tabs('exists', "问卷设计详情")) {
					if ($("input[name='input_survey_id']").val() == rows[0].id) {
					} else {
						$.messager.alert('警告操作！', '页面占用，请先保存或关闭问卷设计详情标签页', 'warning');
					}
					$('#tabs').tabs('select', "问卷设计详情");
				} else {
					$('#tabs').tabs('add', {
						title : '问卷设计详情',
						iconCls : 'icon-survey-tool-design',
						closable : true,
						href : 'surveydesigner.html',
						onLoad : function() {
							$(".css_survey_title h1").text(rows[0].title);
							$(".css_survey_description h4").text(rows[0].description);
							$("input[name='input_survey_id']").val(rows[0].id);
							$.ajax({
								url : '/getquestions',
								type : 'post',
								data : {
									surveyid : $("input[name='input_survey_id']").val()
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
													$(".css_survey_question").eq(index).find(".question_option_opt")
															.css("display", "inline");
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
																	.val(item.opA).parent().css("display", "inline");
														} else {
															break;
														}
														if (item.opB != "") {
															$(".css_survey_question").eq(index)
																	.find("input[name='question_opB']")
																	.addClass("easyui-validatebox").attr(
																			"data-options", "required:true")
																	.val(item.opB).parent().css("display", "inline");
														} else {
															break;
														}
														if (item.opC != "") {
															$(".css_survey_question").eq(index)
																	.find("input[name='question_opC']")
																	.addClass("easyui-validatebox").attr(
																			"data-options", "required:true")
																	.val(item.opC).parent().css("display", "inline");
														} else {
															break;
														}
														if (item.opD != "") {
															$(".css_survey_question").eq(index)
																	.find("input[name='question_opD']")
																	.addClass("easyui-validatebox").attr(
																			"data-options", "required:true")
																	.val(item.opD).parent().css("display", "inline");
														} else {
															break;
														}
														if (item.opE != "") {
															$(".css_survey_question").eq(index)
																	.find("input[name='question_opE']")
																	.addClass("easyui-validatebox").attr(
																			"data-options", "required:true")
																	.val(item.opE).parent().css("display", "inline");
														} else {
															break;
														}
														if (item.opF != "") {
															$(".css_survey_question").eq(index)
																	.find("input[name='question_opF']")
																	.addClass("easyui-validatebox").attr(
																			"data-options", "required:true")
																	.val(item.opF).parent().css("display", "inline");
														} else {
															break;
														}
														if (item.opG != "") {
															$(".css_survey_question").eq(index)
																	.find("input[name='question_opG']")
																	.addClass("easyui-validatebox").attr(
																			"data-options", "required:true")
																	.val(item.opG).parent().css("display", "inline");
														} else {
															break;
														}
														if (item.opH != "") {
															$(".css_survey_question").eq(index)
																	.find("input[name='question_opH']")
																	.addClass("easyui-validatebox").attr(
																			"data-options", "required:true")
																	.val(item.opH).parent().css("display", "inline");
														} else {
															break;
														}
														if (item.opI != "") {
															$(".css_survey_question").eq(index)
																	.find("input[name='question_opI']")
																	.addClass("easyui-validatebox").attr(
																			"data-options", "required:true")
																	.val(item.opI).parent().css("display", "inline");
														} else {
															break;
														}
													}
												}
												if (item.type == "单选") {
													$(question_radio).appendTo("div.css_question_container");
													$(".css_survey_question").eq(index).find(".question_option_opt")
															.css("display", "inline");
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
																	.val(item.opA).parent().css("display", "inline");
														} else {
															break;
														}
														if (item.opB != "") {
															$(".css_survey_question").eq(index)
																	.find("input[name='question_opB']")
																	.addClass("easyui-validatebox").attr(
																			"data-options", "required:true")
																	.val(item.opB).parent().css("display", "inline");
														} else {
															break;
														}
														if (item.opC != "") {
															$(".css_survey_question").eq(index)
																	.find("input[name='question_opC']")
																	.addClass("easyui-validatebox").attr(
																			"data-options", "required:true")
																	.val(item.opC).parent().css("display", "inline");
														} else {
															break;
														}
														if (item.opD != "") {
															$(".css_survey_question").eq(index)
																	.find("input[name='question_opD']")
																	.addClass("easyui-validatebox").attr(
																			"data-options", "required:true")
																	.val(item.opD).parent().css("display", "inline");
														} else {
															break;
														}
														if (item.opE != "") {
															$(".css_survey_question").eq(index)
																	.find("input[name='question_opE']")
																	.addClass("easyui-validatebox").attr(
																			"data-options", "required:true")
																	.val(item.opE).parent().css("display", "inline");
														} else {
															break;
														}
														if (item.opF != "") {
															$(".css_survey_question").eq(index)
																	.find("input[name='question_opF']")
																	.addClass("easyui-validatebox").attr(
																			"data-options", "required:true")
																	.val(item.opF).parent().css("display", "inline");
														} else {
															break;
														}
														if (item.opG != "") {
															$(".css_survey_question").eq(index)
																	.find("input[name='question_opG']")
																	.addClass("easyui-validatebox").attr(
																			"data-options", "required:true")
																	.val(item.opG).parent().css("display", "inline");
														} else {
															break;
														}
														if (item.opH != "") {
															$(".css_survey_question").eq(index)
																	.find("input[name='question_opH']")
																	.addClass("easyui-validatebox").attr(
																			"data-options", "required:true")
																	.val(item.opH).parent().css("display", "inline");
														} else {
															break;
														}
														if (item.opI != "") {
															$(".css_survey_question").eq(index)
																	.find("input[name='question_opI']")
																	.addClass("easyui-validatebox").attr(
																			"data-options", "required:true")
																	.val(item.opI).parent().css("display", "inline");
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
									 * var ops = $(this).parent().nextAll("p");
									 * for (i = 0; i < ops.length; i++) { if
									 * (ops.eq(i).css("display") == "inline") { }
									 * else {
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
														ops.eq(i).find("input").addClass("easyui-validatebox").attr(
																"data-options", "required:true").parent().css(
																"display", "inline");
														$.parser.parse();
														break;
													}
												}
											});
									/*
									 * $("a[name='delete_option']").click(function() {
									 * var ops = $(this).parent().nextAll("p");
									 * for (i = 0; i <= ops.length; i++) { if
									 * (ops.eq(i).css("display") == "inline") { }
									 * else if (i > 0) { ops .eq(i - 1)
									 * .find("input")
									 * .removeClass("easyui-validatebox
									 * validatebox-text validatebox-invalid")
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

								}
							});

						}
					});

				}
			} else if (rows.length == 0) {
				$.messager.alert('警告操作！', '设计问卷至少选定一条数据！', 'warning');
			}
		}
	};

});