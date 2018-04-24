$(function() {
	var num = $("input[name='answersurveyid']").val();
	var num1 = $("input[name='answeruserid']").val();
	$.ajax({
		url : '/QOG/getquestions',
		type : 'post',
		data : {
			surveyid : num
		},
		success : function(result, response, status) {

			var checkHtml = '<div class="div_question">'
					+ '<div class="div_question_title">'
					+ '<p>'
					+ '<label type="多选" name="question_title_1"><strong>1. </strong>问题标题<sup>[多选]</sup></label>'
					+ '</p>'
					+ '</div>'
					+ '<div class="div_question_content type_check">'
					+ '<p>'
					+ '<label class="checkbox-inline"> <input type="checkbox" name="answer_question_content_1"'
					+ 'value="opA"> 选项 1'
					+ '</label> <label class="checkbox-inline"> <input type="checkbox" name="answer_question_content_1"'
					+ 'value="opB"> 选项 2'
					+ '</label> <label class="checkbox-inline"> <input type="checkbox" name="answer_question_content_1"'
					+ 'value="opC"> 选项 3' + '</label>' + '</p>' + '</div>' + '</div>';
			var radiokHtml = '<div class="div_question">' + '<div class="div_question_title">' + '<p>'
					+ '<label type="单选" name="question_title_2"><strong>2. </strong>问题标题<sup>[单选]</sup></label>'
					+ '</p>' + '</div>' + '<div class="div_question_content type_radio">' + '<p>'
					+ '<label class="checkbox-inline"> <input type="radio" name="answer_question_content_2"'
					+ 'value="opA">选项 1'
					+ '</label> <label class="checkbox-inline"> <input type="radio" name="answer_question_content_2"'
					+ 'value="opB">选项 2'
					+ '</label> <label class="checkbox-inline"> <input type="radio" name="answer_question_content_2"'
					+ 'value="opC">选项 3' + '</label>' + '</p>' + '</div>' + '</div>';
			var qaHtml = '<div class="div_question">' + '<div class="div_question_title">' + '<p>'
					+ '<label type="问答" name="question_title_3"><strong>3. </strong>问题标题<sup>[问答]</sup></label>'
					+ '</p>' + '</div>' + '<div class="div_question_content type_qa">' + '<p>'
					+ '<textarea class="form-control" rows="3" name="answer_question_content_3"></textarea>' + '</p>'
					+ '</div>' + '</div>';

			var ftbHtml = '<div class="div_question">'
					+ '<div class="div_question_title type_ftb">'
					+ '<p>'
					+ '<label type="填空" name="question_title_4"><strong>4. </strong>问题<input class="ftb_input" type="text" name="answer_question_content_4" value="">标题<sup>[填空]</sup></label>'
					+ '</p>' + '</div>' + '</div>';
			var result = eval("(" + result + ")");
			$.each(result.data, function(index, item) {
				/* console.log(item); */
				if (item.type == "多选") {
					var ops = '';
					for (i = 0; i < 9; i++) {

						if (item.opA != "") {
							ops = ops
									+ '<label class="checkbox-inline"> <input type="checkbox" name="answer_question_content_'
									+ item.number + '"' + 'value="opA">' + item.opA + '' + '</label>';
						} else {
							break;
						}
						if (item.opB != "") {
							ops = ops
									+ '<label class="checkbox-inline"> <input type="checkbox" name="answer_question_content_'
									+ item.number + '"' + 'value="opB">' + item.opB + '' + '</label>';
						} else {
							break;
						}
						if (item.opC != "") {
							ops = ops
									+ '<label class="checkbox-inline"> <input type="checkbox" name="answer_question_content_'
									+ item.number + '"' + 'value="opC">' + item.opC + '' + '</label>';
						} else {
							break;
						}
						if (item.opD != "") {
							ops = ops
									+ '<label class="checkbox-inline"> <input type="checkbox" name="answer_question_content_'
									+ item.number + '"' + 'value="opD">' + item.opD + '' + '</label>';
						} else {
							break;
						}
						if (item.opE != "") {
							ops = ops
									+ '<label class="checkbox-inline"> <input type="checkbox" name="answer_question_content_'
									+ item.number + '"' + 'value="opE">' + item.opE + '' + '</label>';
						} else {
							break;
						}
						if (item.opF != "") {
							ops = ops
									+ '<label class="checkbox-inline"> <input type="checkbox" name="answer_question_content_'
									+ item.number + '"' + 'value="opF">' + item.opF + '' + '</label>';
						} else {
							break;
						}
						if (item.opG != "") {
							ops = ops
									+ '<label class="checkbox-inline"> <input type="checkbox" name="answer_question_content_'
									+ item.number + '"' + 'value="opG">' + item.opG + '' + '</label>';
						} else {
							break;
						}
						if (item.opH != "") {
							ops = ops
									+ '<label class="checkbox-inline"> <input type="checkbox" name="answer_question_content_'
									+ item.number + '"' + 'value="opH">' + item.opH + '' + '</label>';
						} else {
							break;
						}
						if (item.opI != "") {
							ops = ops
									+ '<label class="checkbox-inline"> <input type="checkbox" name="answer_question_content_'
									+ item.number + '"' + 'value="opI">' + item.opI + '' + '</label>';
						} else {
							break;
						}
						break;
					}
					var checkHtml = '<div class="div_question">' + '<div class="div_question_title">' + '<p>'
							+ '<label type="多选" name="question_title_1"><strong>' + item.number + '. </strong>'
							+ item.title + '<sup>[多选]</sup></label>' + '</p>' + '</div>'
							+ '<div class="div_question_content type_check">' + '<p>' + ops + '</p>' + '</div>'
							+ '</div>';
					$(checkHtml).appendTo("div.answer_survey_content");
				} else if (item.type == "单选") {
					var ops = '';
					for (i = 0; i < 9; i++) {

						if (item.opA != "") {
							ops = ops
									+ '<label class="checkbox-inline"> <input type="radio" name="answer_question_content_'
									+ item.number + '"' + 'value="opA">' + item.opA + '' + '</label>';
						} else {
							break;
						}
						if (item.opB != "") {
							ops = ops
									+ '<label class="checkbox-inline"> <input type="radio" name="answer_question_content_'
									+ item.number + '"' + 'value="opB">' + item.opB + '' + '</label>';
						} else {
							break;
						}
						if (item.opC != "") {
							ops = ops
									+ '<label class="checkbox-inline"> <input type="radio" name="answer_question_content_'
									+ item.number + '"' + 'value="opC">' + item.opC + '' + '</label>';
						} else {
							break;
						}
						if (item.opD != "") {
							ops = ops
									+ '<label class="checkbox-inline"> <input type="radio" name="answer_question_content_'
									+ item.number + '"' + 'value="opD">' + item.opD + '' + '</label>';
						} else {
							break;
						}
						if (item.opE != "") {
							ops = ops
									+ '<label class="checkbox-inline"> <input type="radio" name="answer_question_content_'
									+ item.number + '"' + 'value="opE">' + item.opE + '' + '</label>';
						} else {
							break;
						}
						if (item.opF != "") {
							ops = ops
									+ '<label class="checkbox-inline"> <input type="radio" name="answer_question_content_'
									+ item.number + '"' + 'value="opF">' + item.opF + '' + '</label>';
						} else {
							break;
						}
						if (item.opG != "") {
							ops = ops
									+ '<label class="checkbox-inline"> <input type="radio" name="answer_question_content_'
									+ item.number + '"' + 'value="opG">' + item.opG + '' + '</label>';
						} else {
							break;
						}
						if (item.opH != "") {
							ops = ops
									+ '<label class="checkbox-inline"> <input type="radio" name="answer_question_content_'
									+ item.number + '"' + 'value="opH">' + item.opH + '' + '</label>';
						} else {
							break;
						}
						if (item.opI != "") {
							ops = ops
									+ '<label class="checkbox-inline"> <input type="radio" name="answer_question_content_'
									+ item.number + '"' + 'value="opI">' + item.opI + '' + '</label>';
						} else {
							break;
						}
						break;
					}
					var radiokHtml = '<div class="div_question">' + '<div class="div_question_title">' + '<p>'
							+ '<label type="单选" name="question_title_' + item.number + '"><strong>' + item.number
							+ '. </strong>' + item.title + '<sup>[单选]</sup></label>' + '</p>' + '</div>'
							+ '<div class="div_question_content type_radio">' + '<p>' + ops + '</p>' + '</div>'
							+ '</div>';
					$(radiokHtml).appendTo("div.answer_survey_content");
				} else if (item.type == "问答") {
					var qaHtml = '<div class="div_question">' + '<div class="div_question_title">' + '<p>'
							+ '<label type="问答" name="question_title_' + item.number + '"><strong>' + item.number
							+ '. </strong>' + item.title + '<sup>[问答]</sup></label>' + '</p>' + '</div>'
							+ '<div class="div_question_content type_qa">' + '<p>'
							+ '<textarea class="form-control" rows="3" name="answer_question_content_' + item.number
							+ '"></textarea>' + '</p>' + '</div>' + '</div>';
					$(qaHtml).appendTo("div.answer_survey_content");
				} else if (item.type == "填空") {
					var content = item.title.replace("#",
							'<input class="ftb_input" type="text" name="answer_question_content_' + item.number
									+ '" value="">');
					var ftbHtml = '<div class="div_question">' + '<div class="div_question_title type_ftb">' + '<p>'
							+ '<label type="填空" name="question_title_' + item.number + '"><strong>' + item.number
							+ '. </strong>' + content + '<sup>[填空]</sup></label>' + '</p>' + '</div>' + '</div>';
					$(ftbHtml).appendTo("div.answer_survey_content");
				}

			});
			$.ajax({
				url : '/QOG/getanswers',
				type : 'post',
				data : {
					surveyid : num,
					userid : num1
				},
				success : function(result, response, status) {
					var result = eval("(" + result + ")");
					$.each(result, function(index, item) {
								if (item.type == "check") {
									if (item.content != "") {
										var ops = item.content.split(",");
										$.each(ops, function(index, ite) {
													var name = "answer_question_content_" + item.number;
													$("input[name='" + name + "'][value='" + ite + "']").attr(
															"checked", true);
												});
									}
								} else if (item.type == "radio") {
									var name = "answer_question_content_" + item.number;
									$("input[name='" + name + "'][value='" + item.content + "']").attr("checked", true);
								} else if (item.type == "qa") {
									var name = "answer_question_content_" + item.number;
									$("textarea[name='" + name + "']").text(item.content);
								} else if (item.type == "ftb") {
									var name = "answer_question_content_" + item.number;
									$("input[name='" + name + "']").val(item.content);
								}
							});
				}
			});
		}
	});
	$.ajax({
				url : '/QOG/getsurvey',
				type : 'post',
				data : {
					id : num
				},
				success : function(result, response, status) {
					var result = eval("(" + result + ")");
					console.log(result);
					$("p.p_servey_title").text(result.title);
					$("p.p_servey_description").text(result.description);
					$("input[name='surveyid']").val(result.id);
				}
			});

});