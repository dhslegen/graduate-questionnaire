$(function() {
	$.ajax({
		url : '/isuseralive',
		type : 'post',
		data : {},
		beforeSend : function() {
		},
		success : function(result, response, status) {
			var result = eval("(" + result + ")");
			if (result.statusCode == 1) {
				$.ajax({
					url : '/getanswersheet',
					type : 'post',
					data : {},
					beforeSend : function() {
					},
					success : function(data, response, status) {
						var result = eval("(" + data + ")");
						$.each(result, function(index, item) {
									var showHtml = '	<div class="col-md-6 col">'
											+ '<div class="media">'
											+ '<div class="media-left">'
											+ '<a href="answer.html?'
											+ item.surveyid
											+ '&'
											+ item.userid
											+ '" target=\'_blank\'><img style="height:100px;width:150px" src="../cover/'
											+ item.image + '"' + 'class="media-object" alt=""></a>' + '</div>'
											+ '<div class="media-body">' + '<h4 class="media-heading">' + item.title
											+ '</h4>' + '<p class="description">' + item.description + '</p>'
											+ '<p>答题时间：' + item.createtime + '</p>' + '</div>' + '</div>' + '</div>';
									$("div.survey_my_answer_sheet").append(showHtml);
								});
					}
				});
			} else if (result.statusCode == 0) {
				s = "<span class='text-danger'><i class='ace-icon fa fa-times red'></i> 很抱歉，用户信息已失效，获取答卷失败！</span>";
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
	$.ajax({
		url : '/checklogin',
		type : 'post',
		data : {
			target : 'getname'
		},
		beforeSend : function() {
		},
		success : function(data, response, status) {
			var result = eval("(" + data + ")");
			if (typeof(result.data) == "undefined") {
			} else {
				var placed = '<li id="placed"><a id="user_place" class="dropdown-toggle" data-toggle="dropdown" href="#"> 你好，'
						+ result.data
						+ ' <span class="caret"></span>'
						+ '</a>'
						+ '<ul class="dropdown-menu">'
						+ '<li><a onclick="logout()" href="#">退出</a></li>'
						+ '<li class="divider"></li>'
						+ '<li><a onclick="updateinfo()" href="#">修改信息</a></li>' + '</ul></li>';;
				$("#place").replaceWith(placed);
				/*
				 * $("#user_place").removeAttr("data-toggle data-dismiss
				 * data-target").attr("onclick", "logout()") .html(" 你好," +
				 * result.data + " <span class=\"glyphicon glyphicon-log-out\"></span>
				 * 注销");
				 */
			}
		}
	});
	$("a.manage_center_flg").click(function(e) {
				if ($("#user_place").text().indexOf("你好") == -1) {
					e.preventDefault();
					$("#login").modal();
				}
			});

	$('#login').on('hide.bs.modal', function() {
		document.getElementById("login_form").reset();
			// 执行一些动作...
		});
	$('#register').on('hide.bs.modal', function() {
		document.getElementById("register_form").reset();
			// 执行一些动作...
		});
	// 修改登录
	$("#login_form").validate({
		errorElement : 'div',
		errorClass : 'help-block',
		focusInvalid : true,
		ignore : "",
		rules : {
			login_name : {
				required : true
			},
			login_pwd : {
				required : true
			}
		},

		messages : {
			login_name : {
				required : "请填写用户名"
			},
			login_pwd : {
				required : "请填写密码"
			}

		},

		highlight : function(e) {
			$(e).closest('.form-group').removeClass('has-info').addClass('has-error');
		},

		success : function(e) {
			$(e).closest('.form-group').removeClass('has-error');
			$(e).remove();
		},

		errorPlacement : function(error, element) {
			if (element.is('input[type=checkbox]') || element.is('input[type=radio]')) {
				var controls = element.closest('div[class*="col-"]');
				if (controls.find(':checkbox,:radio').length > 1)
					controls.append(error);
				else
					error.insertAfter(element.nextAll('.lbl:eq(0)').eq(0));
			} else if (element.is('.select2')) {
				error.insertAfter(element.siblings('[class*="select2-container"]:eq(0)'));
			} else if (element.is('.chosen-select')) {
				error.insertAfter(element.siblings('[class*="chosen-container"]:eq(0)'));
			} else
				error.insertAfter(element.parent());
		},

		submitHandler : function(form) {
			$.post("/checklogin", {
						target : 'checkuser',
						name : $('#login_name').val(),
						password : $('#login_pwd').val()
					}, function(result) {
						$("#login_name").val("");
						$("#login_pwd").val("");
						result = eval("(" + result + ")");
						var s = "";
						var className = "";
						if (result.statusCode == 1) {
							s = "<span class='text-success'><i class='ace-icon fa fa-check green'></i> 恭喜您，登录成功！</span>";
							className = "btn-sm btn-success";
						} else {
							s = "<span class='text-danger'><i class='ace-icon fa fa-times red'></i> 用户名或密码错误，登陆失败！</span>";
							className = "btn-sm btn-danger";
						}
						$('#login').modal('hide');
						window.location.reload();
						$.ajax({
							url : '/checklogin',
							type : 'post',
							data : {
								target : 'getname'
							},
							beforeSend : function() {
							},
							success : function(data, response, status) {
								var result = eval("(" + data + ")");
								if (typeof(result.data) == "undefined") {
								} else {
									var placed = '<li id="placed"><a id="user_place" class="dropdown-toggle" data-toggle="dropdown" href="#"> 你好，'
											+ result.data
											+ ' <span class="caret"></span>'
											+ '</a>'
											+ '<ul class="dropdown-menu">'
											+ '<li><a onclick="logout()" href="#">退出</a></li>'
											+ '<li class="divider"></li>'
											+ '<li><a onclick="updateinfo()" href="#">修改信息</a></li>' + '</ul></li>';
									$("#place").replaceWith(placed);
									/*
									 * $("#user_place").removeAttr("data-toggle
									 * data-dismiss data-target").attr(
									 * "onclick", "logout()").html(" 你好," +
									 * result.data + " <span class=\"glyphicon
									 * glyphicon-log-out\"></span> 注销");
									 */
								}
							}
						});
						bootbox.dialog({
									message : "<h4 style='font-family: 微软雅黑'>" + s + "</h4>",
									buttons : {
										"success" : {
											"label" : "关 闭",
											"className" : className
										}
									}
								});
					});
			return false;
		}
	});
	// 修改注册
	$("#register_form").validate({
		errorElement : 'div',
		errorClass : 'help-block',
		focusInvalid : true,
		ignore : "",
		rules : {
			user_name : {
				required : true,
				minlength : 2,
				maxlength : 10,
				remote : { // 验证用户名是否存在
					type : "POST",
					url : "/checklogin", // servlet
					data : {
						target : 'checkothersamename',
						name : function() {
							return $("#user_name").val();
						}
					}
				}
			},
			user_pwd : {
				required : true,
				minlength : 6
			},
			user_pwd1 : {
				equalTo : "#user_pwd"
			}
			/*
			 * user_email : { required : true, email : true }
			 */
		},

		messages : {
			user_name : {
				required : "请填写新的用户名",
				minlength : "最少2位",
				maxlength : "最多10位",
				remote : "该用户名已存在"
			},
			user_pwd : {
				required : "请填写密码",
				minlength : "最少6位"
			},
			user_pwd1 : {
				equalTo : "两次密码不一致"
			}
			/*
			 * user_email : { required : "请填写正确的邮箱", email : "邮箱格式错误" }
			 */

		},

		highlight : function(e) {
			$(e).closest('.form-group').removeClass('has-info').addClass('has-error');
		},

		success : function(e) {
			$(e).closest('.form-group').removeClass('has-error');
			$(e).remove();
		},

		errorPlacement : function(error, element) {
			if (element.is('input[type=checkbox]') || element.is('input[type=radio]')) {
				var controls = element.closest('div[class*="col-"]');
				if (controls.find(':checkbox,:radio').length > 1)
					controls.append(error);
				else
					error.insertAfter(element.nextAll('.lbl:eq(0)').eq(0));
			} else if (element.is('.select2')) {
				error.insertAfter(element.siblings('[class*="select2-container"]:eq(0)'));
			} else if (element.is('.chosen-select')) {
				error.insertAfter(element.siblings('[class*="chosen-container"]:eq(0)'));
			} else
				error.insertAfter(element.parent());
		},

		submitHandler : function(form) {
			var dialog;
			$.ajax({
				url : '/isuseralive',
				type : 'post',
				data : {},
				beforeSend : function() {

					dialog = bootbox.dialog({
								title : '信息',
								message : '<p class="text-center"><i class="fa fa-spinner fa-spin"></i> 正在验证，请稍后...</p>',
								closeButton : false
							});

				},
				success : function(result, response, status) {
					var result = eval("(" + result + ")");
					if (result.statusCode == 1) {
						dialog.modal('hide');
						$.post("/checklogin", {
									target : 'register',
									name : $('#user_name').val(),
									password : $('#user_pwd').val()
								}, function(result) {
									$("#user_name").val("");
									$("#user_pwd").val("");
									$("#user_pwd1").val("");
									result = eval("(" + result + ")");
									var s = "";
									var className = "";
									if (result.statusCode > 0) {
										s = "<span class='text-success'><i class='ace-icon fa fa-check green'></i> 恭喜您，修改成功，信息已失效，请再次登录！</span>";
										className = "btn-sm btn-success";
										logout();
										$("#login").modal();
									} else if (result.statusCode == -1) {
										s = "<span class='text-success'><i class='ace-icon fa fa-check green'></i> 修改失败，用户名已存在！</span>";
										className = "btn-sm btn-success";
									} else {
										s = "<span class='text-success'><i class='ace-icon fa fa-check green'></i>修改失败，未知错误，请联系开发人员！</span>";
										className = "btn-sm btn-success";
									}
									$('#register').modal('hide');
									bootbox.dialog({
												message : "<h4 style='font-family: 微软雅黑'>" + s + "</h4>",
												buttons : {
													"success" : {
														"label" : "关 闭",
														"className" : className
													}
												}
											});
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

			return false;
		}
	});

});
function logout() {
	$.ajax({
				url : '/checklogin',
				type : 'post',
				data : {
					target : 'logout'
				},
				beforeSend : function() {
				},
				success : function(data, response, status) {
					var result = eval("(" + data + ")");
					if (result.statusCode == 1) {
						var place = '<li id="place"><a id="user_place" href="#" data-toggle="modal" data-dismiss="modal"'
								+ 'data-target="#login"><span class="glyphicon glyphicon-log-in"></span> 登录</a></li>'
						$("#placed").replaceWith(place);
						/*
						 * $("#user_place").attr({ "data-toggle" : "modal",
						 * "data-dismiss" : "modal", "data-target" : "#login"
						 * }).removeAttr("onclick") .html("<span
						 * class=\"glyphicon glyphicon-log-in\"></span>
						 * 登录|注册");
						 */
						$("div.survey_my_answer_sheet").empty();
					}
				}
			});
}
function updateinfo() {
	$('#register').modal();
}
