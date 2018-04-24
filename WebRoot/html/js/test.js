$(function() {
	var sSource = String(window.document.location);
	var num = sSource.substr(sSource.indexOf('?') + 1, sSource.length - sSource.indexOf('?') - 1);
	$.ajax({
		url : '/QOG/checksurvey',
		type : 'post',
		data : {
			target : "检查发布",
			surveyid : num
		},
		success : function(result, response, status) {
			var result = eval("(" + result + ")");
			if (result.statusCode == 1) {

				$.ajax({
							url : '/QOG/getsurvey',
							type : 'post',
							data : {
								id : num
							},
							success : function(result, response, status) {
								var result = eval("(" + result + ")");
								$("p.p_servey_title").text(result.title);
								$("p.p_servey_description").text(result.description);
								$("input[name='surveyid']").val(result.id);
							}
						});
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
								+ '<label class="checkbox-inline"> <input type="checkbox" name="question_content_1"'
								+ 'value="opA"> 选项 1'
								+ '</label> <label class="checkbox-inline"> <input type="checkbox" name="question_content_1"'
								+ 'value="opB"> 选项 2'
								+ '</label> <label class="checkbox-inline"> <input type="checkbox" name="question_content_1"'
								+ 'value="opC"> 选项 3' + '</label>' + '</p>' + '</div>' + '</div>';
						var radiokHtml = '<div class="div_question">'
								+ '<div class="div_question_title">'
								+ '<p>'
								+ '<label type="单选" name="question_title_2"><strong>2. </strong>问题标题<sup>[单选]</sup></label>'
								+ '</p>'
								+ '</div>'
								+ '<div class="div_question_content type_radio">'
								+ '<p>'
								+ '<label class="checkbox-inline"> <input type="radio" name="question_content_2"'
								+ 'value="opA">选项 1'
								+ '</label> <label class="checkbox-inline"> <input type="radio" name="question_content_2"'
								+ 'value="opB">选项 2'
								+ '</label> <label class="checkbox-inline"> <input type="radio" name="question_content_2"'
								+ 'value="opC">选项 3' + '</label>' + '</p>' + '</div>' + '</div>';
						var qaHtml = '<div class="div_question">'
								+ '<div class="div_question_title">'
								+ '<p>'
								+ '<label type="问答" name="question_title_3"><strong>3. </strong>问题标题<sup>[问答]</sup></label>'
								+ '</p>' + '</div>' + '<div class="div_question_content type_qa">' + '<p>'
								+ '<textarea class="form-control" rows="3" name="question_content_3"></textarea>'
								+ '</p>' + '</div>' + '</div>';

						var ftbHtml = '<div class="div_question">'
								+ '<div class="div_question_title type_ftb">'
								+ '<p>'
								+ '<label type="填空" name="question_title_4"><strong>4. </strong>问题<input class="ftb_input" type="text" name="question_content_4" value="">标题<sup>[填空]</sup></label>'
								+ '</p>' + '</div>' + '</div>';
						var result = eval("(" + result + ")");
						$.each(result.data, function(index, item) {
							/* console.log(item); */
							if (item.type == "多选") {
								var ops = '';
								for (i = 0; i < 9; i++) {

									if (item.opA != "") {
										ops = ops
												+ '<label class="checkbox-inline"> <input type="checkbox" name="question_content_'
												+ item.number + '"' + 'value="opA">' + item.opA + '' + '</label>';
									} else {
										break;
									}
									if (item.opB != "") {
										ops = ops
												+ '<label class="checkbox-inline"> <input type="checkbox" name="question_content_'
												+ item.number + '"' + 'value="opB">' + item.opB + '' + '</label>';
									} else {
										break;
									}
									if (item.opC != "") {
										ops = ops
												+ '<label class="checkbox-inline"> <input type="checkbox" name="question_content_'
												+ item.number + '"' + 'value="opC">' + item.opC + '' + '</label>';
									} else {
										break;
									}
									if (item.opD != "") {
										ops = ops
												+ '<label class="checkbox-inline"> <input type="checkbox" name="question_content_'
												+ item.number + '"' + 'value="opD">' + item.opD + '' + '</label>';
									} else {
										break;
									}
									if (item.opE != "") {
										ops = ops
												+ '<label class="checkbox-inline"> <input type="checkbox" name="question_content_'
												+ item.number + '"' + 'value="opE">' + item.opE + '' + '</label>';
									} else {
										break;
									}
									if (item.opF != "") {
										ops = ops
												+ '<label class="checkbox-inline"> <input type="checkbox" name="question_content_'
												+ item.number + '"' + 'value="opF">' + item.opF + '' + '</label>';
									} else {
										break;
									}
									if (item.opG != "") {
										ops = ops
												+ '<label class="checkbox-inline"> <input type="checkbox" name="question_content_'
												+ item.number + '"' + 'value="opG">' + item.opG + '' + '</label>';
									} else {
										break;
									}
									if (item.opH != "") {
										ops = ops
												+ '<label class="checkbox-inline"> <input type="checkbox" name="question_content_'
												+ item.number + '"' + 'value="opH">' + item.opH + '' + '</label>';
									} else {
										break;
									}
									if (item.opI != "") {
										ops = ops
												+ '<label class="checkbox-inline"> <input type="checkbox" name="question_content_'
												+ item.number + '"' + 'value="opI">' + item.opI + '' + '</label>';
									} else {
										break;
									}
									break;

								}
								var checkHtml = '<div class="div_question">' + '<div class="div_question_title">'
										+ '<p>' + '<label type="多选" name="question_title_1"><strong>' + item.number
										+ '. </strong>' + item.title + '<sup>[多选]</sup></label>' + '</p>' + '</div>'
										+ '<div name="check" class="div_question_content type_check">' + '<p>' + ops
										+ '</p>' + '</div>' + '</div>';
								$(checkHtml).appendTo("div.survey_content");
							} else if (item.type == "单选") {
								var ops = '';
								for (i = 0; i < 9; i++) {

									if (item.opA != "") {
										ops = ops
												+ '<label class="checkbox-inline"> <input type="radio" name="question_content_'
												+ item.number + '"' + 'value="opA">' + item.opA + '' + '</label>';
									} else {
										break;
									}
									if (item.opB != "") {
										ops = ops
												+ '<label class="checkbox-inline"> <input type="radio" name="question_content_'
												+ item.number + '"' + 'value="opB">' + item.opB + '' + '</label>';
									} else {
										break;
									}
									if (item.opC != "") {
										ops = ops
												+ '<label class="checkbox-inline"> <input type="radio" name="question_content_'
												+ item.number + '"' + 'value="opC">' + item.opC + '' + '</label>';
									} else {
										break;
									}
									if (item.opD != "") {
										ops = ops
												+ '<label class="checkbox-inline"> <input type="radio" name="question_content_'
												+ item.number + '"' + 'value="opD">' + item.opD + '' + '</label>';
									} else {
										break;
									}
									if (item.opE != "") {
										ops = ops
												+ '<label class="checkbox-inline"> <input type="radio" name="question_content_'
												+ item.number + '"' + 'value="opE">' + item.opE + '' + '</label>';
									} else {
										break;
									}
									if (item.opF != "") {
										ops = ops
												+ '<label class="checkbox-inline"> <input type="radio" name="question_content_'
												+ item.number + '"' + 'value="opF">' + item.opF + '' + '</label>';
									} else {
										break;
									}
									if (item.opG != "") {
										ops = ops
												+ '<label class="checkbox-inline"> <input type="radio" name="question_content_'
												+ item.number + '"' + 'value="opG">' + item.opG + '' + '</label>';
									} else {
										break;
									}
									if (item.opH != "") {
										ops = ops
												+ '<label class="checkbox-inline"> <input type="radio" name="question_content_'
												+ item.number + '"' + 'value="opH">' + item.opH + '' + '</label>';
									} else {
										break;
									}
									if (item.opI != "") {
										ops = ops
												+ '<label class="checkbox-inline"> <input type="radio" name="question_content_'
												+ item.number + '"' + 'value="opI">' + item.opI + '' + '</label>';
									} else {
										break;
									}
									break;

								}
								var radiokHtml = '<div class="div_question">' + '<div class="div_question_title">'
										+ '<p>' + '<label type="单选" name="question_title_' + item.number + '"><strong>'
										+ item.number + '. </strong>' + item.title + '<sup>[单选]</sup></label>' + '</p>'
										+ '</div>' + '<div name="radio" class="div_question_content type_radio">'
										+ '<p>' + ops + '</p>' + '</div>' + '</div>';
								$(radiokHtml).appendTo("div.survey_content");
							} else if (item.type == "问答") {
								var qaHtml = '<div class="div_question">' + '<div class="div_question_title">' + '<p>'
										+ '<label type="问答" name="question_title_' + item.number + '"><strong>'
										+ item.number + '. </strong>' + item.title + '<sup>[问答]</sup></label>' + '</p>'
										+ '</div>' + '<div name="qa" class="div_question_content type_qa">' + '<p>'
										+ '<textarea class="form-control" rows="3" name="question_content_'
										+ item.number + '"></textarea>' + '</p>' + '</div>' + '</div>';
								$(qaHtml).appendTo("div.survey_content");
							} else if (item.type == "填空") {
								var content = item.title.replace("#",
										'<input class="ftb_input" type="text" name="question_content_' + item.number
												+ '" value="">');
								var ftbHtml = '<div class="div_question">'
										+ '<div class="div_question_title type_ftb">' + '<p>'
										+ '<label type="填空" name="question_title_' + item.number + '"><strong>'
										+ item.number + '. </strong>' + content + '<sup>[填空]</sup></label>' + '</p>'
										+ '</div>' + '<div name="ftb" class="div_question_content"></div>' + '</div>';
								$(ftbHtml).appendTo("div.survey_content");
							}

						});
					}
				});
				$("#submit").click(function() {
					var flg = true;
					$("div.div_question_content").each(function(index, element) {
						var answer = {
							surveyid : 0,
							number : 0,
							type : "",
							content : ""
						};
						var typename = $(element).attr("name");
						if (typename == "check") {
							index = index + 1;
							var chk_value = [];
							$(element).find('input[name^="question_content_"]:checked').each(function() {
										chk_value.push($(this).val());
									});
							if (chk_value.length == 0) {
								flg = false;
								s = "<span class='text-danger'><i class='ace-icon fa fa-times red'></i>第" + index
										+ "题未填写，请填写后重试</span>";
								className = "btn-sm btn-danger";
								bootbox.dialog({
											message : "<h4 style='font-family: 微软雅黑'>" + s + "</h4>",
											buttons : {
												"success" : {
													"label" : "关 闭",
													"className" : className
												}
											}
										});
								return false;
							}

						} else if (typename == "radio") {
							index = index + 1;
							answer.content = $(element).find('input[name^="question_content_"]:checked').length > 0
									? $(element).find('input[name^="question_content_"]:checked').val()
									: "";
							if (answer.content == "") {
								flg = false;
								s = "<span class='text-danger'><i class='ace-icon fa fa-times red'></i>第" + index
										+ "题未填写，请填写后重试</span>";
								className = "btn-sm btn-danger";
								bootbox.dialog({
											message : "<h4 style='font-family: 微软雅黑'>" + s + "</h4>",
											buttons : {
												"success" : {
													"label" : "关 闭",
													"className" : className
												}
											}
										});
								return false;
							}
						} else if (typename == "qa") {
							index = index + 1;
							answer.content = $(element).find('textarea[name^="question_content_"]').val();
							if (answer.content == "") {
								flg = false;
								s = "<span class='text-danger'><i class='ace-icon fa fa-times red'></i>第" + index
										+ "题未填写，请填写后重试</span>";
								className = "btn-sm btn-danger";
								bootbox.dialog({
											message : "<h4 style='font-family: 微软雅黑'>" + s + "</h4>",
											buttons : {
												"success" : {
													"label" : "关 闭",
													"className" : className
												}
											}
										});
								return false;
							}
						} else if (typename == "ftb") {
							index = index + 1;
							answer.content = $(element).parent().find('input[name^="question_content_"]').val();
							if (answer.content == "") {
								flg = false;
								s = "<span class='text-danger'><i class='ace-icon fa fa-times red'></i>第" + index
										+ "题未填写，请填写后重试</span>";
								className = "btn-sm btn-danger";
								bootbox.dialog({
											message : "<h4 style='font-family: 微软雅黑'>" + s + "</h4>",
											buttons : {
												"success" : {
													"label" : "关 闭",
													"className" : className
												}
											}
										});
								return false;
							}
						}
					});
					if (flg) {
						$.ajax({
							url : '/QOG/checksurvey',
							type : 'post',
							data : {
								target : "检查发布",
								surveyid : num
							},
							success : function(result, response, status) {
								var result = eval("(" + result + ")");
								if (result.statusCode == 1) {

									var dialog;
									$.ajax({
										url : '/QOG/isuseralive',
										type : 'post',
										data : {},
										beforeSend : function() {

											dialog = bootbox.dialog({
												title : '信息',
												message : '<p class="text-center"><i class="fa fa-spinner fa-spin"></i> 正在提交，请稍后...</p>',
												closeButton : false
											});

										},
										success : function(result, response, status) {
											var result = eval("(" + result + ")");
											if (result.statusCode == 1) {

												var answers = [];

												$("div.div_question_content").each(function(index, element) {
													var answer = {
														surveyid : 0,
														number : 0,
														type : "",
														content : ""
													};
													var typename = $(element).attr("name");
													if (typename == "check") {
														var chk_value = [];
														$(element).find('input[name^="question_content_"]:checked')
																.each(function() {
																			chk_value.push($(this).val());
																		});
														answer.surveyid = parseInt($("input[name='surveyid']").val());
														answer.number = index + 1;
														answer.type = typename;
														answer.content = chk_value.join(",");
														answers.push(answer);

													} else if (typename == "radio") {
														answer.surveyid = parseInt($("input[name='surveyid']").val());
														answer.number = index + 1;
														answer.type = typename;
														answer.content = $(element)
																.find('input[name^="question_content_"]:checked').length > 0
																? $(element)
																		.find('input[name^="question_content_"]:checked')
																		.val()
																: "";
														answers.push(answer);
													} else if (typename == "qa") {
														answer.surveyid = parseInt($("input[name='surveyid']").val());
														answer.number = index + 1;
														answer.type = typename;
														answer.content = $(element)
																.find('textarea[name^="question_content_"]').val();
														answers.push(answer);
													} else if (typename == "ftb") {
														answer.surveyid = parseInt($("input[name='surveyid']").val());
														answer.number = index + 1;
														answer.type = typename;
														answer.content = $(element).parent()
																.find('input[name^="question_content_"]').val();
														answers.push(answer);
													}
												});
												$.ajax({
													url : '/QOG/saveanswers',
													type : 'post',
													data : {
														answers : JSON.stringify(answers)
													},
													beforeSend : function() {
													},
													success : function(data, response, status) {
														dialog.modal('hide');
														var result = eval("(" + data + ")");
														if (result.statusCode == 1) {
															s = "<span class='text-success'><i class='ace-icon fa fa-check green'></i> 恭喜您，保存成功！</span>";
															className = "btn-sm btn-success";
															bootbox.dialog({
																		message : "<h4 style='font-family: 微软雅黑'>" + s
																				+ "</h4>",
																		buttons : {
																			"success" : {
																				"label" : "关 闭",
																				"className" : className
																			}
																		}
																	});
														} else if (result.statusCode == 100) {
															s = "<span class='text-danger'><i class='ace-icon fa fa-times red'></i> 很抱歉，数据库事务进程错误，保存失败！</span>";
															className = "btn-sm btn-danger";
															bootbox.dialog({
																		message : "<h4 style='font-family: 微软雅黑'>" + s
																				+ "</h4>",
																		buttons : {
																			"success" : {
																				"label" : "关 闭",
																				"className" : className
																			}
																		}
																	});
														} else if (result.statusCode == -1) {
															s = "<span class='text-danger'><i class='ace-icon fa fa-times red'></i> 很抱歉，您已经答过此卷，保存失败！</span>";
															className = "btn-sm btn-danger";
															bootbox.dialog({
																		message : "<h4 style='font-family: 微软雅黑'>" + s
																				+ "</h4>",
																		buttons : {
																			"success" : {
																				"label" : "关 闭",
																				"className" : className
																			}
																		}
																	});
														}
													}
												});

											} else if (result.statusCode == 0) {
												dialog.modal('hide');
												s = "<span class='text-danger'><i class='ace-icon fa fa-times red'></i> 很抱歉，用户信息已失效，请重新登录！</span>";
												className = "btn-sm btn-danger";
												bootbox.dialog({
															message : "<h4 style='font-family: 微软雅黑'>" + s + "</h4>",
															buttons : {
																"success" : {
																	"label" : "关 闭",
																	"className" : className
																}
															}
														});
											}
										}
									});
								} else {
									s = "<span class='text-danger'><i class='ace-icon fa fa-times red'></i> 很抱歉，此问卷已经回收！</span>";
									className = "btn-sm btn-danger";
									bootbox.dialog({
												message : "<h4 style='font-family: 微软雅黑'>" + s + "</h4>",
												buttons : {
													"success" : {
														"label" : "关 闭",
														"className" : className
													}
												}
											});

								}
							}
						});
					}
				});
			} else {
				s = "<span class='text-danger'><i class='ace-icon fa fa-times red'></i> 很抱歉，此问卷已经回收！</span>";
				className = "btn-sm btn-danger";
				bootbox.dialog({
							message : "<h4 style='font-family: 微软雅黑'>" + s + "</h4>",
							buttons : {
								"success" : {
									"label" : "关 闭",
									"className" : className
								}
							}
						});

			}
		}
	});
});
