$(function() {
	var num = $("input[name='analysissurveyid']").val();
	$.ajax({
		url : '/getanalysis',
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
					+ '<label class="checkbox-inline"> <input type="checkbox" name="analysis_question_content_1"'
					+ 'value="opA"> 选项 1'
					+ '</label> <label class="checkbox-inline"> <input type="checkbox" name="analysis_question_content_1"'
					+ 'value="opB"> 选项 2'
					+ '</label> <label class="checkbox-inline"> <input type="checkbox" name="analysis_question_content_1"'
					+ 'value="opC"> 选项 3' + '</label>' + '</p>' + '</div>' + '</div>';
			var radiokHtml = '<div class="div_question">' + '<div class="div_question_title">' + '<p>'
					+ '<label type="单选" name="question_title_2"><strong>2. </strong>问题标题<sup>[单选]</sup></label>'
					+ '</p>' + '</div>' + '<div class="div_question_content type_radio">' + '<p>'
					+ '<label class="checkbox-inline"> <input type="radio" name="analysis_question_content_2"'
					+ 'value="opA">选项 1'
					+ '</label> <label class="checkbox-inline"> <input type="radio" name="analysis_question_content_2"'
					+ 'value="opB">选项 2'
					+ '</label> <label class="checkbox-inline"> <input type="radio" name="analysis_question_content_2"'
					+ 'value="opC">选项 3' + '</label>' + '</p>' + '</div>' + '</div>';
			var qaHtml = '<div class="div_question">' + '<div class="div_question_title">' + '<p>'
					+ '<label type="问答" name="question_title_3"><strong>3. </strong>问题标题<sup>[问答]</sup></label>'
					+ '</p>' + '</div>' + '<div class="div_question_content type_qa">' + '<p>'
					+ '<textarea class="form-control" rows="3" name="analysis_question_content_3"></textarea>' + '</p>'
					+ '</div>' + '</div>';

			var ftbHtml = '<div class="div_question">'
					+ '<div class="div_question_title type_ftb">'
					+ '<p>'
					+ '<label type="填空" name="question_title_4"><strong>4. </strong>问题<input class="ftb_input" type="text" name="analysis_question_content_4" value="">标题<sup>[填空]</sup></label>'
					+ '</p>' + '</div>' + '</div>';
			var result = eval("(" + result + ")");
			if (result.data.length == 0) {
				$.messager.alert('警告操作！', '目前没有统计数据，可能正在编辑', 'warning');
			}
			$.each(result.data, function(index, item) {
				if (index == 1) {
					$("div.surveyanalysis_div").find("h3").text('当前问卷接受调查的总人数：' + item.hitT);
				}
				/* console.log(item); */
				if (item.type == "多选") {
					var ops = '';
					var opsname = [];
					var opshit = [];
					var opsnh = [];
					for (i = 0; i < 9; i++) {

						if (item.opA != "") {
							ops = ops
									+ '<label class="checkbox-inline"> <input type="checkbox" name="analysis_question_content_'
									+ item.number + '"' + 'value="opA">' + item.opA + '' + '</label>';
							opsname.push(item.opA);
							opshit.push(item.hitA);
							var obj = {
								value : item.hitA,
								name : item.opA
							}
							opsnh.push(obj);
						} else {
							break;
						}
						if (item.opB != "") {
							ops = ops
									+ '<label class="checkbox-inline"> <input type="checkbox" name="analysis_question_content_'
									+ item.number + '"' + 'value="opB">' + item.opB + '' + '</label>';
							opsname.push(item.opB);
							opshit.push(item.hitB);
							var obj = {
								value : item.hitB,
								name : item.opB
							}
							opsnh.push(obj);
						} else {
							break;
						}
						if (item.opC != "") {
							ops = ops
									+ '<label class="checkbox-inline"> <input type="checkbox" name="analysis_question_content_'
									+ item.number + '"' + 'value="opC">' + item.opC + '' + '</label>';
							opsname.push(item.opC);
							opshit.push(item.hitC);
							var obj = {
								value : item.hitC,
								name : item.opC
							}
							opsnh.push(obj);
						} else {
							break;
						}
						if (item.opD != "") {
							ops = ops
									+ '<label class="checkbox-inline"> <input type="checkbox" name="analysis_question_content_'
									+ item.number + '"' + 'value="opD">' + item.opD + '' + '</label>';
							opsname.push(item.opD);
							opshit.push(item.hitD);
							var obj = {
								value : item.hitD,
								name : item.opD
							}
							opsnh.push(obj);
						} else {
							break;
						}
						if (item.opE != "") {
							ops = ops
									+ '<label class="checkbox-inline"> <input type="checkbox" name="analysis_question_content_'
									+ item.number + '"' + 'value="opE">' + item.opE + '' + '</label>';
							opsname.push(item.opE);
							opshit.push(item.hitE);
							var obj = {
								value : item.hitE,
								name : item.opE
							}
							opsnh.push(obj);
						} else {
							break;
						}
						if (item.opF != "") {
							ops = ops
									+ '<label class="checkbox-inline"> <input type="checkbox" name="analysis_question_content_'
									+ item.number + '"' + 'value="opF">' + item.opF + '' + '</label>';
							opsname.push(item.opF);
							opshit.push(item.hitF);
							var obj = {
								value : item.hitF,
								name : item.opF
							}
							opsnh.push(obj);
						} else {
							break;
						}
						if (item.opG != "") {
							ops = ops
									+ '<label class="checkbox-inline"> <input type="checkbox" name="analysis_question_content_'
									+ item.number + '"' + 'value="opG">' + item.opG + '' + '</label>';
							opsname.push(item.opG);
							opshit.push(item.hitG);
							var obj = {
								value : item.hitG,
								name : item.opG
							}
							opsnh.push(obj);
						} else {
							break;
						}
						if (item.opH != "") {
							ops = ops
									+ '<label class="checkbox-inline"> <input type="checkbox" name="analysis_question_content_'
									+ item.number + '"' + 'value="opH">' + item.opH + '' + '</label>';
							opsname.push(item.opH);
							opshit.push(item.hitH);
							var obj = {
								value : item.hitH,
								name : item.opH
							}
							opsnh.push(obj);
						} else {
							break;
						}
						if (item.opI != "") {
							ops = ops
									+ '<label class="checkbox-inline"> <input type="checkbox" name="analysis_question_content_'
									+ item.number + '"' + 'value="opI">' + item.opI + '' + '</label>';
							opsname.push(item.opI);
							opshit.push(item.hitI);
							var obj = {
								value : item.hitI,
								name : item.opI
							}
							opsnh.push(obj);
						} else {
							break;
						}
						break;
					}
					var checkHtml = '<div class="div_question">' + '<div class="div_question_title">' + '<p>'
							+ '<label type="多选" name="question_title_1"><strong>' + item.number + '. </strong>'
							+ item.title + '<sup>[多选]</sup></label>' + '</p>' + '</div>'
							+ '<div class="div_question_content type_check">' + '<p>' + ops + '</p>' + '</div>'
							+ '<div class="echarts_bar_div_outer"><div class="select_outer">'
							+ '数据来源：<select name="question_datasource" class="textbox datasource">'
							+ '<option value="全部" selected="selected">全部</option>' + '</select>届'
							+ '</div><div class="echarts_bar_div" id=echarts_bar_' + item.number + '></div></div>'
							+ '</div>';
					console.log(checkHtml);
					$(checkHtml).appendTo("div.analysis_survey_content");
					var myChart = echarts.init(document.getElementById('echarts_bar_' + item.number));

					// 指定图表的配置项和数据
					var option = {
						title : {
							text : ''
						},
						label : {
							normal : {
								show : true,
								position : 'top'
							}
						},
						tooltip : {},
						legend : {
							data : ['选择的人数']
						},
						xAxis : {
							data : opsname
						},
						yAxis : {},
						series : [{
									name : '选择的人数',
									type : 'bar',
									data : opshit
								}]
					};

					// 使用刚指定的配置项和数据显示图表。
					myChart.setOption(option);
					/*
					 * var myChart1 =
					 * echarts.init(document.getElementById('echarts_pie_' +
					 * item.number)); // 指定图表的配置项和数据 var option1 = {
					 * backgroundColor : '#2c343c',
					 * 
					 * title : { text : 'Customized Pie', left : 'center', top :
					 * 20, textStyle : { color : '#ccc' } },
					 * 
					 * tooltip : { trigger : 'item', formatter : "{a} <br/>{b} :
					 * {c} ({d}%)" },
					 * 
					 * visualMap : { show : false, min : 80, max : 600, inRange : {
					 * colorLightness : [0, 1] } }, series : [{ name : '访问来源',
					 * type : 'pie', radius : '55%', center : ['50%', '50%'],
					 * data : opsnh.sort(function(a, b) { return a.value -
					 * b.value; }), roseType : 'radius', label : { normal : {
					 * textStyle : { color : 'rgba(255, 255, 255, 0.3)' } } },
					 * labelLine : { normal : { lineStyle : { color : 'rgba(255,
					 * 255, 255, 0.3)' }, smooth : 0.2, length : 10, length2 :
					 * 20 } }, itemStyle : { normal : { color : '#c23531',
					 * shadowBlur : 200, shadowColor : 'rgba(0, 0, 0, 0.5)' } },
					 * 
					 * animationType : 'scale', animationEasing : 'elasticOut',
					 * animationDelay : function(idx) { return Math.random() *
					 * 200; } }] }; // 使用刚指定的配置项和数据显示图表。
					 * myChart1.setOption(option1);
					 */
				} else if (item.type == "单选") {
					var ops = '';
					var opsname = [];
					var opshit = [];
					var opsnh = [];
					for (i = 0; i < 9; i++) {

						if (item.opA != "") {
							ops = ops
									+ '<label class="checkbox-inline"> <input type="radio" name="analysis_question_content_'
									+ item.number + '"' + 'value="opA">' + item.opA + '' + '</label>';
							opsname.push(item.opA);
							opshit.push(item.hitA);
							var obj = {
								value : item.hitA,
								name : item.opA
							}
							opsnh.push(obj);
						} else {
							break;
						}
						if (item.opB != "") {
							ops = ops
									+ '<label class="checkbox-inline"> <input type="radio" name="analysis_question_content_'
									+ item.number + '"' + 'value="opB">' + item.opB + '' + '</label>';
							opsname.push(item.opB);
							opshit.push(item.hitB);
							var obj = {
								value : item.hitB,
								name : item.opB
							}
							opsnh.push(obj);
						} else {
							break;
						}
						if (item.opC != "") {
							ops = ops
									+ '<label class="checkbox-inline"> <input type="radio" name="analysis_question_content_'
									+ item.number + '"' + 'value="opC">' + item.opC + '' + '</label>';
							opsname.push(item.opC);
							opshit.push(item.hitC);
							var obj = {
								value : item.hitC,
								name : item.opC
							}
							opsnh.push(obj);
						} else {
							break;
						}
						if (item.opD != "") {
							ops = ops
									+ '<label class="checkbox-inline"> <input type="radio" name="analysis_question_content_'
									+ item.number + '"' + 'value="opD">' + item.opD + '' + '</label>';
							opsname.push(item.opD);
							opshit.push(item.hitD);
							var obj = {
								value : item.hitD,
								name : item.opD
							}
							opsnh.push(obj);
						} else {
							break;
						}
						if (item.opE != "") {
							ops = ops
									+ '<label class="checkbox-inline"> <input type="radio" name="analysis_question_content_'
									+ item.number + '"' + 'value="opE">' + item.opE + '' + '</label>';
							opsname.push(item.opE);
							opshit.push(item.hitE);
							var obj = {
								value : item.hitE,
								name : item.opE
							}
							opsnh.push(obj);
						} else {
							break;
						}
						if (item.opF != "") {
							ops = ops
									+ '<label class="checkbox-inline"> <input type="radio" name="analysis_question_content_'
									+ item.number + '"' + 'value="opF">' + item.opF + '' + '</label>';
							opsname.push(item.opF);
							opshit.push(item.hitF);
							var obj = {
								value : item.hitF,
								name : item.opF
							}
							opsnh.push(obj);
						} else {
							break;
						}
						if (item.opG != "") {
							ops = ops
									+ '<label class="checkbox-inline"> <input type="radio" name="analysis_question_content_'
									+ item.number + '"' + 'value="opG">' + item.opG + '' + '</label>';
							opsname.push(item.opG);
							opshit.push(item.hitG);
							var obj = {
								value : item.hitG,
								name : item.opG
							}
							opsnh.push(obj);
						} else {
							break;
						}
						if (item.opH != "") {
							ops = ops
									+ '<label class="checkbox-inline"> <input type="radio" name="analysis_question_content_'
									+ item.number + '"' + 'value="opH">' + item.opH + '' + '</label>';
							opsname.push(item.opH);
							opshit.push(item.hitH);
							var obj = {
								value : item.hitH,
								name : item.opH
							}
							opsnh.push(obj);
						} else {
							break;
						}
						if (item.opI != "") {
							ops = ops
									+ '<label class="checkbox-inline"> <input type="radio" name="analysis_question_content_'
									+ item.number + '"' + 'value="opI">' + item.opI + '' + '</label>';
							opsname.push(item.opI);
							opshit.push(item.hitI);
							var obj = {
								value : item.hitI,
								name : item.opI
							}
							opsnh.push(obj);
						} else {
							break;
						}
						break;
					}
					var radiokHtml = '<div class="div_question">' + '<div class="div_question_title">' + '<p>'
							+ '<label type="单选" name="question_title_' + item.number + '"><strong>' + item.number
							+ '. </strong>' + item.title + '<sup>[单选]</sup></label>' + '</p>' + '</div>'
							+ '<div class="div_question_content type_radio">' + '<p>' + ops + '</p>' + '</div>'
							+ '<div class="echarts_bar_div_outer"><div class="select_outer">'
							+ '数据来源：<select name="question_datasource" class="textbox datasource">'
							+ '<option value="全部" selected="selected">全部</option>' + '</select>届'
							+ '</div><div class="echarts_bar_div" id=echarts_bar_' + item.number + '></div></div>'
							+ '</div>';
					console.log(radiokHtml);
					$(radiokHtml).appendTo("div.analysis_survey_content");
					var myChart = echarts.init(document.getElementById('echarts_bar_' + item.number));

					// 指定图表的配置项和数据
					var option = {
						title : {
							text : ''
						},
						label : {
							normal : {
								show : true,
								position : 'top'
							}
						},
						tooltip : {},
						legend : {
							data : ['选择的人数']
						},
						xAxis : {
							data : opsname
						},
						yAxis : {},
						series : [{
									name : '选择的人数',
									type : 'bar',
									data : opshit
								}]
					};
					// 使用刚指定的配置项和数据显示图表。
					myChart.setOption(option);

				} else if (item.type == "问答") {
					var qaHtml = '<div class="div_question">' + '<div class="div_question_title">' + '<p>'
							+ '<label type="问答" name="question_title_' + item.number + '"><strong>' + item.number
							+ '. </strong>' + item.title + '<sup>[问答]</sup></label>' + '</p>' + '</div>'
							+ '<div class="div_question_content type_qa">' + '<p>'
							+ '<textarea class="form-control" rows="3" name="analysis_question_content_' + item.number
							+ '"></textarea>' + '</p>' + '</div>' + '</div>';
					$(qaHtml).appendTo("div.analysis_survey_content");
				} else if (item.type == "填空") {
					var content = item.title.replace("#",
							'<input class="ftb_input" type="text" name="analysis_question_content_' + item.number
									+ '" value="">');
					var ftbHtml = '<div class="div_question">' + '<div class="div_question_title type_ftb">' + '<p>'
							+ '<label type="填空" name="question_title_' + item.number + '"><strong>' + item.number
							+ '. </strong>' + content + '<sup>[填空]</sup></label>' + '</p>' + '</div>' + '</div>';
					$(ftbHtml).appendTo("div.analysis_survey_content");
				}

			});
			$.ajax({
						url : '/getoptions',
						type : 'post',
						data : {
							surveyid : num
						},
						success : function(result, response, status) {
							var result = eval("(" + result + ")");
							$.each(result.data, function(index, item) {
										var op = '<option value="' + item + '">' + item + '</option>'
										$("#leader-select").append(op);
										$("select[name='question_datasource']").append(op);
									});
						}
					});
			$("select[name='question_datasource']").change(function(e) {
						var number = $(this).closest("div.div_question").find("strong").text().split(". ")[0];
						var surveyid = num;
						var graduation = $(this).val();
						var count = $(this).closest("div.div_question").find("input").length;
						$("#leader-select").val($(this).val());
						$.ajax({
									url : '/getsingleanalysis',
									type : 'post',
									data : {
										surveyid : num,
										number : number,
										graduation : graduation
									},
									success : function(result, response, status) {
										var result = eval("(" + result + ")");
										$("div.surveyanalysis_div").find("h3").text('当前问卷接受调查的总人数：' + result.hitT);
										var opsname = [];
										var opshit = [];
										for (var i = 0; i < count; i++) {
											if (i == 0) {
												opsname.push(result.opA);
												opshit.push(result.hitA);
											} else if (i == 1) {
												opsname.push(result.opB);
												opshit.push(result.hitB);
											} else if (i == 2) {
												opsname.push(result.opC);
												opshit.push(result.hitC);
											} else if (i == 3) {
												opsname.push(result.opD);
												opshit.push(result.hitD);
											} else if (i == 4) {
												opsname.push(result.opE);
												opshit.push(result.hitE);
											} else if (i == 5) {
												opsname.push(result.opF);
												opshit.push(result.hitF);
											} else if (i == 6) {
												opsname.push(result.opG);
												opshit.push(result.hitG);
											} else if (i == 7) {
												opsname.push(result.opH);
												opshit.push(result.hitH);
											} else if (i == 8) {
												opsname.push(result.opI);
												opshit.push(result.hitI);
											}
										}
										var myChart = echarts.init(document.getElementById('echarts_bar_'
												+ result.number));

										// 指定图表的配置项和数据
										var option = {
											title : {
												text : ''
											},
											label : {
												normal : {
													show : true,
													position : 'top'
												}
											},
											tooltip : {},
											legend : {
												data : ['选择的人数']
											},
											xAxis : {
												data : opsname
											},
											yAxis : {},
											series : [{
														name : '选择的人数',
														type : 'bar',
														data : opshit
													}]
										};

										// 使用刚指定的配置项和数据显示图表。
										myChart.setOption(option);
									}
								});
					});
			$("#leader-select").change(function(e) {
						$("select[name='question_datasource']").val($(this).val()).trigger('change');
					});
		}
	});
	$.ajax({
				url : '/getsurvey',
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