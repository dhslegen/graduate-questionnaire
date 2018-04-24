$(function() {
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
					+ '	name="question_title" style="width:200px;height:66px;">' + '</p>'
					+ '<p class="input_question_description">' + '问题描述： <input class="easyui-textbox" multiline="true"'
					+ '	name="question_description" style="width:200px;height:66px;">' + '</p>'

					+ '<div class="interval_space"></div>'

					+ '<p class="question_option_opt">' + '<a href="#" name="add_option" class="easyui-linkbutton"'
					+ 'data-options="iconCls:\'icon-add\'">添加选项</a><a href="#"'
					+ 'name="delete_option" class="easyui-linkbutton"'
					+ 'data-options="iconCls:\'icon-remove\'" style="margin: 0 0 0 250px;">删除选项</a>' + '</p>'

					+ '<div class="interval_space"></div>'

					+ '<p class="input_question_opA">'
					+ '选 项 A ：<input type="text" name="question_opA" class="textbox"' + 'style="width:200px;">'
					+ '</p>' + '<p class="input_question_opB">'
					+ '选 项 B ：<input type="text" name="question_opB" class="textbox"' + '	style="width:200px;">'
					+ '</p>'

					+ '<div class="interval_space"></div>'

					+ '<p class="input_question_opC">'
					+ '	选 项 C ：<input type="text" name="question_opC" class="textbox"' + 'style="width:200px;">'
					+ '</p>' + '<p class="input_question_opD">'
					+ '选 项 D ：<input type="text" name="question_opD" class="textbox"' + 'style="width:200px;">'
					+ '</p>'

					+ '<div class="interval_space"></div>'

					+ '<p class="input_question_opE">'
					+ '选 项 E ：<input type="text" name="question_opE" class="textbox"' + 'style="width:200px;">'
					+ '</p>' + '<p class="input_question_opF">'
					+ '选 项 F ：<input type="text" name="question_opF" class="textbox"' + 'style="width:200px;">'
					+ '</p>'

					+ '<div class="interval_space"></div>'

					+ '<p class="input_question_opG">'
					+ '选 项 G ：<input type="text" name="question_opG" class="textbox"' + 'style="width:200px;">'
					+ '</p>' + '<p class="input_question_opH">'
					+ '选 项 H ：<input type="text" name="question_opH" class="textbox"' + 'style="width:200px;">'
					+ '</p>'

					+ '<div class="interval_space"></div>'

					+ '<p class="input_question_opI">' + '	选 项 I ：<input type="text" name=question_opI class="textbox"'
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
					+ '	name="question_title" style="width:200px;height:66px;">' + '</p>'
					+ '<p class="input_question_description">' + '问题描述： <input class="easyui-textbox" multiline="true"'
					+ '	name="question_description" style="width:200px;height:66px;">' + '</p>'

					+ '<div class="interval_space"></div>'

					+ '<p class="question_option_opt">' + '<a href="#" name="add_option" class="easyui-linkbutton"'
					+ 'data-options="iconCls:\'icon-add\'">添加选项</a><a href="#"'
					+ 'name="delete_option" class="easyui-linkbutton"'
					+ 'data-options="iconCls:\'icon-remove\'" style="margin: 0 0 0 250px;">删除选项</a>' + '</p>'

					+ '<div class="interval_space"></div>'

					+ '<p class="input_question_opA">'
					+ '选 项 A ：<input type="text" name="question_opA" class="textbox"' + 'style="width:200px;">'
					+ '</p>' + '<p class="input_question_opB">'
					+ '选 项 B ：<input type="text" name="question_opB" class="textbox"' + '	style="width:200px;">'
					+ '</p>'

					+ '<div class="interval_space"></div>'

					+ '<p class="input_question_opC">'
					+ '	选 项 C ：<input type="text" name="question_opC" class="textbox"' + 'style="width:200px;">'
					+ '</p>' + '<p class="input_question_opD">'
					+ '选 项 D ：<input type="text" name="question_opD" class="textbox"' + 'style="width:200px;">'
					+ '</p>'

					+ '<div class="interval_space"></div>'

					+ '<p class="input_question_opE">'
					+ '选 项 E ：<input type="text" name="question_opE" class="textbox"' + 'style="width:200px;">'
					+ '</p>' + '<p class="input_question_opF">'
					+ '选 项 F ：<input type="text" name="question_opF" class="textbox"' + 'style="width:200px;">'
					+ '</p>'

					+ '<div class="interval_space"></div>'

					+ '<p class="input_question_opG">'
					+ '选 项 G ：<input type="text" name="question_opG" class="textbox"' + 'style="width:200px;">'
					+ '</p>' + '<p class="input_question_opH">'
					+ '选 项 H ：<input type="text" name="question_opH" class="textbox"' + 'style="width:200px;">'
					+ '</p>'

					+ '<div class="interval_space"></div>'

					+ '<p class="input_question_opI">' + '	选 项 I ：<input type="text" name=question_opI class="textbox"'
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
					+ '	name="question_title" style="width:200px;height:66px;">' + '</p>'
					+ '<p class="input_question_description">' + '问题描述： <input class="easyui-textbox" multiline="true"'
					+ '	name="question_description" style="width:200px;height:66px;">' + '</p>'

					+ '<div class="interval_space"></div>'

					+ '<p class="question_option_opt">' + '<a href="#" name="add_option" class="easyui-linkbutton"'
					+ 'data-options="iconCls:\'icon-add\'">添加选项</a><a href="#"'
					+ 'name="delete_option" class="easyui-linkbutton"'
					+ 'data-options="iconCls:\'icon-remove\'" style="margin: 0 0 0 250px;">删除选项</a>' + '</p>'

					+ '<div class="interval_space"></div>'

					+ '<p class="input_question_opA">'
					+ '选 项 A ：<input type="text" name="question_opA" class="textbox"' + 'style="width:200px;">'
					+ '</p>' + '<p class="input_question_opB">'
					+ '选 项 B ：<input type="text" name="question_opB" class="textbox"' + '	style="width:200px;">'
					+ '</p>'

					+ '<div class="interval_space"></div>'

					+ '<p class="input_question_opC">'
					+ '	选 项 C ：<input type="text" name="question_opC" class="textbox"' + 'style="width:200px;">'
					+ '</p>' + '<p class="input_question_opD">'
					+ '选 项 D ：<input type="text" name="question_opD" class="textbox"' + 'style="width:200px;">'
					+ '</p>'

					+ '<div class="interval_space"></div>'

					+ '<p class="input_question_opE">'
					+ '选 项 E ：<input type="text" name="question_opE" class="textbox"' + 'style="width:200px;">'
					+ '</p>' + '<p class="input_question_opF">'
					+ '选 项 F ：<input type="text" name="question_opF" class="textbox"' + 'style="width:200px;">'
					+ '</p>'

					+ '<div class="interval_space"></div>'

					+ '<p class="input_question_opG">'
					+ '选 项 G ：<input type="text" name="question_opG" class="textbox"' + 'style="width:200px;">'
					+ '</p>' + '<p class="input_question_opH">'
					+ '选 项 H ：<input type="text" name="question_opH" class="textbox"' + 'style="width:200px;">'
					+ '</p>'

					+ '<div class="interval_space"></div>'

					+ '<p class="input_question_opI">' + '	选 项 I ：<input type="text" name=question_opI class="textbox"'
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
					+ '	name="question_title" style="width:200px;height:66px;">' + '</p>'
					+ '<p class="input_question_description">' + '问题描述： <input class="easyui-textbox" multiline="true"'
					+ '	name="question_description" style="width:200px;height:66px;">' + '</p>'

					+ '<div class="interval_space"></div>'

					+ '<p class="question_option_opt">' + '<a href="#" name="add_option" class="easyui-linkbutton"'
					+ 'data-options="iconCls:\'icon-add\'">添加选项</a><a href="#"'
					+ 'name="delete_option" class="easyui-linkbutton"'
					+ 'data-options="iconCls:\'icon-remove\'" style="margin: 0 0 0 250px;">删除选项</a>' + '</p>'

					+ '<div class="interval_space"></div>'

					+ '<p class="input_question_opA">'
					+ '选 项 A ：<input type="text" name="question_opA" class="textbox"' + 'style="width:200px;">'
					+ '</p>' + '<p class="input_question_opB">'
					+ '选 项 B ：<input type="text" name="question_opB" class="textbox"' + '	style="width:200px;">'
					+ '</p>'

					+ '<div class="interval_space"></div>'

					+ '<p class="input_question_opC">'
					+ '	选 项 C ：<input type="text" name="question_opC" class="textbox"' + 'style="width:200px;">'
					+ '</p>' + '<p class="input_question_opD">'
					+ '选 项 D ：<input type="text" name="question_opD" class="textbox"' + 'style="width:200px;">'
					+ '</p>'

					+ '<div class="interval_space"></div>'

					+ '<p class="input_question_opE">'
					+ '选 项 E ：<input type="text" name="question_opE" class="textbox"' + 'style="width:200px;">'
					+ '</p>' + '<p class="input_question_opF">'
					+ '选 项 F ：<input type="text" name="question_opF" class="textbox"' + 'style="width:200px;">'
					+ '</p>'

					+ '<div class="interval_space"></div>'

					+ '<p class="input_question_opG">'
					+ '选 项 G ：<input type="text" name="question_opG" class="textbox"' + 'style="width:200px;">'
					+ '</p>' + '<p class="input_question_opH">'
					+ '选 项 H ：<input type="text" name="question_opH" class="textbox"' + 'style="width:200px;">'
					+ '</p>'

					+ '<div class="interval_space"></div>'

					+ '<p class="input_question_opI">' + '	选 项 I ：<input type="text" name=question_opI class="textbox"'
					+ '	style="width:200px;">' + '</p>' + '</div>';
			$("a[name='btn_add_radio']").click(function() {
				var obj = $(question_radio).appendTo("div.css_question_container");
				$(".css_survey_question").last().find(".question_option_opt").css("display", "inline");
				$("select[name='question_type']").change(function(e) {

					var type = $(this).val();
					/* 单选或多选显示增减选项按钮，并将所有选项输入框置空； */
					if (type == "多选" || type == "单选") {
						$(this).parent().nextAll(".question_option_opt").css("display", "inline");
						$(this).parent().nextAll().filter("p").children("input").val("");
						$.parser.parse();
					} else {
						/* 填空和问答只显示一部分； */
						if (type == "填空") {
							$(this).parents("div.css_survey_question").find("input[textboxname='question_title']")
									.textbox('setValue', "#");
						}
						$(this).parent().nextAll()
								.not(".question_delete,.input_question_title,.input_question_description,div").css(
										"display", "none").filter("p").children("input").val("");
					}

				});
				$(".css_survey_question").last().find("input[name='question_title']").focus();
				auto_change_num();
				$.parser.parse(obj);
			});
			$("a[name='btn_add_check']").click(function() {
				var obj = $(question_check).appendTo("div.css_question_container");
				$(".css_survey_question").last().find(".question_option_opt").css("display", "inline");
				$(".css_survey_question").last().find("input[name='question_title']").focus();
				auto_change_num();
				$("select[name='question_type']").change(function(e) {

					var type = $(this).val();
					/* 单选或多选显示增减选项按钮，并将所有选项输入框置空； */
					if (type == "多选" || type == "单选") {
						$(this).parent().nextAll(".question_option_opt").css("display", "inline");
						$(this).parent().nextAll().filter("p").children("input").val("");
						$.parser.parse();
					} else {
						/* 填空和问答只显示一部分； */
						if (type == "填空") {
							$(this).parents("div.css_survey_question").find("input[textboxname='question_title']")
									.textbox('setValue', "#");
						}
						$(this).parent().nextAll()
								.not(".question_delete,.input_question_title,.input_question_description,div").css(
										"display", "none").filter("p").children("input").val("");
					}

				});
				$.parser.parse(obj);
			});
			$("a[name='btn_add_qa']").click(function() {
				var obj = $(question_qa).appendTo("div.css_question_container");
				$("select[name='question_type']").change(function(e) {

					var type = $(this).val();
					/* 单选或多选显示增减选项按钮，并将所有选项输入框置空； */
					if (type == "多选" || type == "单选") {
						$(this).parent().nextAll(".question_option_opt").css("display", "inline");
						$(this).parent().nextAll().filter("p").children("input").val("");
						$.parser.parse();
					} else {
						/* 填空和问答只显示一部分； */
						if (type == "填空") {
							$(this).parents("div.css_survey_question").find("input[textboxname='question_title']")
									.textbox('setValue', "#");
						}
						$(this).parent().nextAll()
								.not(".question_delete,.input_question_title,.input_question_description,div").css(
										"display", "none").filter("p").children("input").val("");
					}

				});
				$(".css_survey_question").last().find("input[name='question_title']").focus();
				auto_change_num();
				$.parser.parse(obj);
			});
			$("a[name='btn_add_ftb']").click(function() {
				var obj = $(question_ftb).appendTo("div.css_question_container");
				$("select[name='question_type']").change(function(e) {

					var type = $(this).val();
					/* 单选或多选显示增减选项按钮，并将所有选项输入框置空； */
					if (type == "多选" || type == "单选") {
						$(this).parent().nextAll(".question_option_opt").css("display", "inline");
						$(this).parent().nextAll().filter("p").children("input").val("");
						$.parser.parse();
					} else {
						/* 填空和问答只显示一部分； */
						if (type == "填空") {
							$(this).parents("div.css_survey_question").find("input[textboxname='question_title']")
									.textbox('setValue', "#");
						}
						$(this).parent().nextAll()
								.not(".question_delete,.input_question_title,.input_question_description,div").css(
										"display", "none").filter("p").children("input").val("");
					}

				});
				$(".css_survey_question").last().find("input[name='question_title']").val("#").focus();
				auto_change_num();
				$.parser.parse(obj);
			});
		

			$("#btn_cancel").click(function() {
						$('#tabs').tabs('close', "问卷设计详情")
					});

		});
