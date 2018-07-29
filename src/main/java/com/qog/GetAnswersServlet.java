package com.qog;

import com.qog.service.AnswerService;
import com.qog.util.WebUtil;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class GetAnswersServlet extends HttpServlet {
	private AnswerService answerService;

	public GetAnswersServlet() {
	}

	public void init(ServletConfig config) throws ServletException {

		WebApplicationContext ctx = WebApplicationContextUtils.getWebApplicationContext(config.getServletContext());
		answerService = (AnswerService) ctx.getBean("answerService");
	}

	public void destroy() {

		super.destroy();
	}

	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("信息：方法【GetAnswersServletdoGet】开始！");
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("信息：方法【GetAnswersServletdopost】开始！");

		String surveyId = WebUtil.getParam(request, "surveyid", null);
		System.out.println(surveyId);
		int surveyid = Integer.valueOf(surveyId);
		String userId = WebUtil.getParam(request, "userid", null);
		System.out.println(userId);
		int userid = Integer.valueOf(userId);
		WebUtil.respondStrict(request, response, answerService.getAnswerByUSId(surveyid, userid));
	}
}
