package com.qog;

import com.qog.service.QuestionService;
import com.qog.util.WebUtil;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class GetOptionsServlet extends HttpServlet {
	private QuestionService questionService;

	public GetOptionsServlet() {
	}

	public void init(ServletConfig config) throws ServletException {

		WebApplicationContext ctx = WebApplicationContextUtils.getWebApplicationContext(config.getServletContext());
		questionService = (QuestionService) ctx.getBean("questionService");
	}

	public void destroy() {

		super.destroy();
	}

	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("信息：方法【GetOptionsServletdoGet】开始！");
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("信息：方法【GetOptionsServletdoPost】开始！");

		String surveyId = WebUtil.getParam(request, "surveyid", null);
		System.out.println(surveyId);
		int surveyid = Integer.valueOf(surveyId);
		WebUtil.respond(request, response, questionService.getAnalysisOptionsBySurveyId(surveyid));
	}
}
