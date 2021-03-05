function storeData(name, value) {
	if (window.localStorage) { 
		window.localStorage.setItem(name, escape(value));   
    } else {
    	document.cookie = name + "=" + escape(value) + ";path=/"; 
    }
}

function loadData(name) {
	if(window.localStorage.getItem(name)!=null) { 
        return unescape(window.localStorage.getItem(name));
    } else if (document.cookie!=null && document.cookie.length>0) {
    	var s = document.cookie.split("; ");
    	for(var i=0; i<s.length; i++) {
    		var ss = s[i].split("=");
    		if(name==ss[0]) {
    			return unescape(ss[1]);
    		}
    	}
    	return "";
    } else {
    	return "";
    }
}

function setTitle() {
	$("#companyNameTitle").html(loadData("companyNameTitle"));
}

function logout() {
	$.post("/logout", {
	}, function(result){
		result = eval("(" + result + ")");
		var s = "";
		var className = "";
		if (result.statusCode==0) {
			window.location.href="login.html";
			return;
		} else if (result.statusCode==100) {
			s = "<span class='text-danger'><i class='ace-icon fa fa-times red'></i> 很抱歉，系统保存失败，请与系统维护人员联系</span>";
			className = "btn-sm btn-danger";
		}
		bootbox.dialog({
			message: "<h4 style='font-family: 微软雅黑'>"+s+"</h4>",
			buttons: {
				"success" : {
					"label" : "关 闭",
					"className" : className
				}
			}
		});
	});
}

function myFunctions(filename) {
	$.post("/function", {
		method:"myFunctions"
	}, function(result){
		result = eval("(" + result + ")");
		if (result.statusCode==0) {
			for(var i=0; i<result.data.length; i++) {
				if (result.data[i].PARENT_NAME=="") {
					$("ul.nav-list").append('<li id="' + result.data[i].FUNC_NAME + '" class="' + ((result.data[i].FUNC_HREF==filename)?"active":"") + '"><a href="' + ((result.data[i].FUNC_HREF!="")?result.data[i].FUNC_HREF:"#") + '"><i class="menu-icon ' + result.data[i].FUNC_ICON + '"></i><span class="menu-text"> ' + result.data[i].FUNC_LABEL + ' </span></a><b class="arrow"></b><ul class="submenu"></ul></li>');
				} else {
					$("#"+result.data[i].PARENT_NAME+" > ul.submenu").append('<li id="' + result.data[i].FUNC_NAME + '" class="' + ((result.data[i].FUNC_HREF==filename)?"active":"") + '"><a href="' + ((result.data[i].FUNC_HREF!="")?result.data[i].FUNC_HREF:"#") + '"><i class="menu-icon ' + result.data[i].FUNC_ICON + '"></i>' + result.data[i].FUNC_LABEL + '</a><b class="arrow"></b></li>');
					if (!$("#"+result.data[i].PARENT_NAME+" > a").hasClass("dropdown-toggle"))
						$("#"+result.data[i].PARENT_NAME+" > a").addClass("dropdown-toggle");
					if ($("#"+result.data[i].PARENT_NAME+" > a > b").length==0)
						$("#"+result.data[i].PARENT_NAME+" > a").append('<b class="arrow fa fa-angle-down"></b>');
					if (result.data[i].FUNC_HREF==filename) {
						$("#"+result.data[i].PARENT_NAME).addClass("active");
						$("#"+result.data[i].PARENT_NAME).addClass("open");
					}
				}
			}
		} else if (result.statusCode==100) {
			bootbox.dialog({
				message: "<h4 style='font-family: 微软雅黑'><span class='text-danger'><i class='ace-icon fa fa-times red'></i> 很抱歉，加载导航条失败，请与系统维护人员联系</span></h4>",
				buttons: {
					"success" : {
						"label" : "关 闭",
						"className" : "btn-sm btn-danger"
					}
				}
			});
		}
	});
}

function getFunctionsByName(type, name) {
	$("div.dd > ol.dd-list").empty();
	$.post("/function", {
		method:"allFunctions"
	}, function(result){
		result = eval("(" + result + ")");
		if (result.statusCode==0) {
			for(var i=0; i<result.data.length; i++) {
				if (result.data[i].PARENT_NAME=="") {
					$("div.dd > ol.dd-list").append('<li onclick="pick(\'' + result.data[i].FUNC_NAME + '\',event);" id="' + result.data[i].FUNC_NAME + '" class="dd-item dd2-item" data-id="' + result.data[i].FUNC_NAME + '"><div class="dd-handle dd2-handle"><i class="normal-icon ace-icon ' + result.data[i].FUNC_ICON + ' blue bigger-130"></i></div><div class="dd2-content">' + result.data[i].FUNC_LABEL + '</div><ol class="dd-list"></ol></li>');
				} else {
					$("#"+result.data[i].PARENT_NAME+" > ol.dd-list").append('<li onclick="pick(\'' + result.data[i].FUNC_NAME + '\',event);" id="' + result.data[i].FUNC_NAME + '" class="dd-item dd2-item" data-id="' + result.data[i].FUNC_NAME + '"><div class="dd-handle dd2-handle"><i class="normal-icon ace-icon ' + result.data[i].FUNC_ICON + ' blue bigger-130"></i></div><div class="dd2-content">' + result.data[i].FUNC_LABEL + '</div><ol class="dd-list"></ol></li>');
				}
			}
			$.post("/function", {
				method:"getFunctionsByName",
				type: type,
				name: name
			}, function(result){
				result = eval("(" + result + ")");
				if (result.statusCode==0) {
					for(var i=0; i<result.data.length; i++) {
						$("#"+result.data[i]+" > div").addClass('btn-info');
					}
				} else if (result.statusCode==100) {
					bootbox.dialog({
						message: "<h4 style='font-family: 微软雅黑'><span class='text-danger'><i class='ace-icon fa fa-times red'></i> 很抱歉，加载功能项失败，请与系统维护人员联系</span></h4>",
						buttons: {
							"success" : {
								"label" : "关 闭",
								"className" : "btn-sm btn-danger"
							}
						}
					});
				}
			});
		} else if (result.statusCode==100) {
			bootbox.dialog({
				message: "<h4 style='font-family: 微软雅黑'><span class='text-danger'><i class='ace-icon fa fa-times red'></i> 很抱歉，加载功能项失败，请与系统维护人员联系</span></h4>",
				buttons: {
					"success" : {
						"label" : "关 闭",
						"className" : "btn-sm btn-danger"
					}
				}
			});
		}
	});
}

function pick(id, event) {
	if (event.stopPropagation) {
		event.stopPropagation();
	} else if (window.event) {
		window.event.cancelBubble = true;
	}
	$("li#" + id + " > div.dd-handle").toggleClass('btn-info'); $("li#" + id + " > div.dd2-content").toggleClass('btn-info');
	if ($("li#" + id + " > div.dd-handle").hasClass('btn-info')) {
		//点亮父节点
		var pid = $("li#" + id).parent('ol').parent('li').attr("id");
		$("li#" + pid + " > div.dd-handle").addClass('btn-info'); $("li#" + pid + " > div.dd2-content").addClass('btn-info');
	} else {
		//拉暗孩子
		$("li#" + id + "").find("li > div.dd-handle").removeClass('btn-info'); $("li#" + id + "").find("li > div.dd2-content").removeClass('btn-info');
	}
}

function getFunctions() {
	var result = "";
	$("div.dd div.dd-handle").each(function() {
		if ($(this).hasClass('btn-info')) {
			result += $(this).parent('li').attr("id") + ",";
		}
	});
	return result;
}


/**
 * 展示 修改个人信息的  页面
 */
function updatePersonInfoHTML( id) {
	var cont = "";
	cont = "<div class='tabbable'>" 
			  + "<div style='text-align:center; font-size:23px; height: 45px;' class='background-blue' >修 改 密 码</div>"
		      
		      + "<div class='tab-content'>"
		      	+ "<div id='prn-pwd' class='tab-pane in active'>"
		      	+ "<form id='form-bean-person-pwd' class='form-horizontal' role='form'>"
		      		+ "<fieldset>"
		      			+ "<div class='form-group'>"
		      				+ "<label class='col-sm-4 control-label no-padding-right' for='PWD_01'> 旧 密 码  </label>"
		      				+ "<div class='col-sm-8'>"
		      					+ "<div class='input-group'>"
		      						+ "<span class='input-group-addon'>"
		      							+ "<img alt='' src='../assets/images/gmcc/pwd.png' style='width:16px; height:18px;cursor:text;'>"
		      						+ "</span>"
		      						+ "<input id='PWD_01' name='PWD_01' type='password' class='col-xs-10 col-sm-8' placeholder='请输入旧密码' style='height:40px;' />"
		      						+ "<span class='help-block inline'> &nbsp;&nbsp;<i id='user_unavailable' style='display: none;height:18px;' class='ace-icon glyphicon glyphicon-ok green bigger-125'></i><i id='user_available' style='display: none;' class='ace-icon glyphicon glyphicon-remove red bigger-125'></i></span>"
		      					+ "</div>"
		      				+ "</div>"
		      			+ "</div>"
		      			
		      			+ "<div class='form-group'>"
		      				+ "<label class='col-sm-4 control-label no-padding-right' for='PWD_02'> 新 密 码  </label>"
		      				+ "<div class='col-sm-8'>"
		      					+ "<div class='input-group'>"
		      						+ "<span class='input-group-addon'>"
		      							+ "<img alt='' src='../assets/images/gmcc/pwd.png' style='width:16px; height:18px;cursor:text;'>"
		      						+ "</span>"
		      						+ "<input id='PWD_02' name='PWD_02' type='password' class='col-xs-10 col-sm-8' placeholder='请输入新密码' style='height:40px;' />"
		      						+ "<span class='help-block inline'> &nbsp;&nbsp;<i id='user_unavailable' style='display: none;height:18px;' class='ace-icon glyphicon glyphicon-ok green bigger-125'></i><i id='user_available' style='display: none;' class='ace-icon glyphicon glyphicon-remove red bigger-125'></i></span>"
		      					+ "</div>"
		      				+ "</div>"
		      			+ "</div>"
		      			
		      			+ "<div class='form-group'>"
		      				+ "<label class='col-sm-4 control-label no-padding-right' for='PWD_03'>  确 认 新 密 码   </label>"
		      				+ "<div class='col-sm-8'>"
		      					+ "<div class='input-group'>"
		      						+ "<span class='input-group-addon'>"
		      							+ "<img alt='' src='../assets/images/gmcc/pwd.png' style='width:16px; height:18px;cursor:text;'>"
		      						+ "</span>"
		      						+ "<input id='PWD_03' name='PWD_03' type='password' class='col-xs-10 col-sm-8' placeholder='请再次确认新密码' style='height:40px;' />"
		      						+ "<span class='help-block inline'> &nbsp;&nbsp;<i id='user_unavailable' style='display: none;height:18px;' class='ace-icon glyphicon glyphicon-ok green bigger-125'></i><i id='user_available' style='display: none;' class='ace-icon glyphicon glyphicon-remove red bigger-125'></i></span>"
		      					+ "</div>"
		      				+ "</div>"
		      			+ "</div>"
		      			
	      				+ "<div class='col-xs-offset-8 col-md-offset-15'>"
	      					+ "<button class='btn btn-primary' type='submit'>"
	      						+ "保  存"
	      						+ "<i class='ace-icon fa fa-cloud-upload icon-on-right'></i>"
	      					+ "</button>"
	      				+ "</div>"
		      		
		      		+ "</fieldset>"
		      	+ "</form>"
		      	+ "</div>"
		      + "</div>"
		    + "</div>"
		  + "</div>";
		      		
		      		
	$(id).html( cont);
}


/**
 * 修改个人 密码
 */
function personPwd( ){
	
	// 修改个人密码
	$("#form-bean-person-pwd").validate({
		errorElement: 'div',
		errorClass: 'help-block',
		focusInvalid: true,
		ignore: "",
		rules: {				
			PWD_01: {
				required: true
			},					
			PWD_02: {
				required: true						
			},
			PWD_03: {
				required: true,
				equalTo: "#PWD_02"
			}
		},
		
		messages: {
			PWD_01: {
				required: "请填写旧密码"
			},					
			PWD_02: {
				required: "请填写新密码"					
			},
			PWD_03: {
				required: "请填写确认密码",
				equalTo: "两次密码输入不一致"
			}
		},

		highlight: function (e) {
			$(e).closest('.form-group').removeClass('has-info').addClass('has-error');
		},

		success: function (e) {
			$(e).closest('.form-group').removeClass('has-error');
			$(e).remove();
		},

		errorPlacement: function (error, element) {
			if(element.is('input[type=checkbox]') || element.is('input[type=radio]')) {
				var controls = element.closest('div[class*="col-"]');
				if(controls.find(':checkbox,:radio').length > 1) controls.append(error);
				else error.insertAfter(element.nextAll('.lbl:eq(0)').eq(0));
			} else if(element.is('.select2')) {
				error.insertAfter(element.siblings('[class*="select2-container"]:eq(0)'));
			} else if(element.is('.chosen-select')) {
				error.insertAfter(element.siblings('[class*="chosen-container"]:eq(0)'));
			} else error.insertAfter(element.parent());
		},

		submitHandler: function (form) {
			
			$.post("/user", {
				method: "updatePwd",
				oldPwd: $.md5( $("#PWD_01").val()),
				newPwd: $.md5( $("#PWD_02").val())
				
			}, function(result){
				$("#PWD_01").val( "");
				$("#PWD_02").val( "");
				$("#PWD_03").val( "");
				
				result = eval("(" + result + ")");
				var s = "";
				var className = "";
				
				if (result.statusCode==0) {
					s = "<span class='text-success'><i class='ace-icon fa fa-check green'></i> 恭喜您，修改密码成功</span>";
					className = "btn-sm btn-success";
					
    			} else if (result.statusCode==1) {
    				s = "<span class='text-danger'><i class='ace-icon fa fa-times red'></i> 原密码错误</span>";
    				className = "btn-sm btn-danger";
    			} else if (result.statusCode==100) {
    				s = "<span class='text-danger'><i class='ace-icon fa fa-times red'></i> 很抱歉，系统保存失败，请与系统维护人员联系 </span>";
    				className = "btn-sm btn-danger";
    			} 
				
				bootbox.dialog({
					message: "<h4 style='font-family: 微软雅黑'>"+s+"</h4>" ,
					buttons: {
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
	
}


/**
 * 给 “个人信息” 按钮， 注册单击事件
 * 修改个人密码
 */
function updatePersonPwd( ) {
	
	// 单击 “ 个人信息 ” 
	$( "#person-info" ).on('click', function(e) {

		// 展示 修改个人信息的  页面
		updatePersonInfoHTML( "#update-person-info");
		
		//  修改密码 相关的 JS
		personPwd( );
		
		$( "#update-person-info" ).removeClass('hide').dialog({
			resizable: false,
			width: '450',
			modal: true,
			title_html: true				
		});
		
		
	});
}


/**
 * 获取用户姓名
 */
function getRealName( id) {
	$.post( "/user", {
		method: "getRealName"
	}, function( result) {
		result = eval( "("+ result +")");
		
		$( id).html( result.data);
	});
}
