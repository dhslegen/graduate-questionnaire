<%@page contentType="text/html; charset=UTF-8"%>
<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
	String id = request.getParameter("id");
	System.out.println("传递到jsp的参数为" + id);
	String userid = request.getParameter("userid");
	System.out.println("传递到jsp的参数为" + userid);
%>

<!DOCTYPE html>
<html lang="zh-cn">
<head>
<meta charset="UTF-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1,maximum-scale=1, user-scalable=no">
<meta http-equiv="Pragma" content="no-cache">
<meta http-equiv="Cache-Control" content="no-cache">
<meta http-equiv="Cache" content="no-cache">
<title>毕业生问卷调查网</title>
<link rel="stylesheet" href="css/bootstrap.min.css">
<link rel="stylesheet" href="css/testpreview.css">
</head>
<body style="background: #ddf4ff url(img/oldbg2-bg.jpg) repeat-x; margin: 0px; padding: 0px;">

	<div class="div_center"
		style="margin: 0 auto;padding-top: 105px; background:url(img/oldbg2.jpg) no-repeat top center; background-size:850px auto;">
		<div class="survey_container"
			style="padding-bottom: 5px; margin:0 auto; padding:70px;text-align:center;overflow: auto; background: rgb(255, 255, 255); width: 840px; position: relative;">
			<div class="answer_survey_content" style="width:700px;text-align:left;">

				<div class="div_servey_title">
					<p class="p_servey_title">问卷标题</p>
				</div>

				<div class="div_servey_description">
					<p class="p_servey_description">问卷描述问卷描述问卷描述问卷描述问卷描述问卷描述问卷描述问卷描述问卷描述问卷描述问卷描述问卷描述问卷描述问卷描述问卷描述问卷描述问卷描述问卷描述问卷描述问卷描述问卷描述问卷描述</p>
				</div>

				<div class="survid_div">
					<input type="hidden" name="answersurveyid" value=<%=id%>>
				</div>
				<div class="survid_div">
					<input type="hidden" name="answeruserid" value=<%=userid%>>
				</div>

				<!-- 				<div class="div_question">
					<div class="div_question_title">
						<p>
							<label type="多选" name="question_title_1"><strong>1. </strong>问题标题<sup>[多选]</sup></label>
						</p>
					</div>
					<div class="div_question_content type_check">
						<p>
							<label class="checkbox-inline"> <input type="checkbox" name="question_content_1"
								value="opA"> 选项 1
							</label> <label class="checkbox-inline"> <input type="checkbox" name="question_content_1"
								value="opB"> 选项 2
							</label> <label class="checkbox-inline"> <input type="checkbox" name="question_content_1"
								value="opC"> 选项 3
							</label>
						</p>
					</div>
				</div>

				<div class="div_question">
					<div class="div_question_title">
						<p>
							<label type="单选" name="question_title_2"><strong>2. </strong>问题标题<sup>[单选]</sup></label>
						</p>
					</div>
					<div class="div_question_content type_radio">
						<p>
							<label class="checkbox-inline"> <input type="radio" name="question_content_2"
								value="opA">选项 1
							</label> <label class="checkbox-inline"> <input type="radio" name="question_content_2"
								value="opB">选项 2
							</label> <label class="checkbox-inline"> <input type="radio" name="question_content_2"
								value="opC">选项 3
							</label>
						</p>
					</div>
				</div>

				<div class="div_question">
					<div class="div_question_title">
						<p>
							<label type="问答" name="question_title_3"><strong>3. </strong>问题标题<sup>[问答]</sup></label>
						</p>
					</div>
					<div class="div_question_content type_qa">
						<p>
							<textarea class="form-control" rows="3" name="question_content_3"></textarea>
						</p>
					</div>
				</div>

				<div class="div_question">
					<div class="div_question_title type_ftb">
						<p>
							<label type="填空" name="question_title_4"><strong>4. </strong>问题<input
								class="ftb_input" type="text" name="question_content_4" value="">标题<sup>[填空]</sup></label>
						</p>
					</div>
				</div>
 -->
			</div>
		</div>
	</div>

	<script src="js/bootstrap.min.js"></script>
	<script src="../assets/js/jquery.validate.js"></script>
	<script src="../assets/js/bootbox.js"></script>
	<script src="js/answerpreview.js"></script>
</body>
</html>
