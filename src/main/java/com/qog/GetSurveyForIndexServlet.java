package com.qog;

import com.qog.service.SurveyService;
import com.qog.util.WebUtil;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class GetSurveyForIndexServlet extends HttpServlet {
	private SurveyService surveyService;

	public GetSurveyForIndexServlet() {
	}

	public void init(ServletConfig config) throws ServletException {

		WebApplicationContext ctx = WebApplicationContextUtils.getWebApplicationContext(config.getServletContext());
		surveyService = (SurveyService) ctx.getBean("surveyService");
	}

	public void destroy() {

		super.destroy();
	}

	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("信息：方法【GetSurveyForIndexServletdoGet】开始！");
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("信息：方法【GetSurveyForIndexServletdoPost】开始！");

		String target = WebUtil.getParam(request, "target", null);
		if ("getsurveyforhot".equals(target)) {
			WebUtil.respond(request, response, surveyService.getSurveyByHit());
		} else if ("getsurveyfornew".equals(target)) {
			WebUtil.respond(request, response, surveyService.getSurveyByCreatetime());
		} else if ("getsurveyforsurveycenternew".equals(target)) {
			String type = WebUtil.getParam(request, "type", null);
			WebUtil.respond(request, response, surveyService.getSurveyByTypeAndCreatetime(type));
		} else if ("getsurveyforsurveycenterhot".equals(target)) {
			String type = WebUtil.getParam(request, "type", null);
			WebUtil.respond(request, response, surveyService.getSurveyByTypeAndHit(type));
		} else if ("getsurveyforsurveycentersearch".equals(target)) {
			String kword = WebUtil.getParam(request, "kword", null);
			WebUtil.respond(request, response, surveyService.getSurveyByKeyWord(kword));
		}
	}
}
