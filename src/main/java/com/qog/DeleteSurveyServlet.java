package com.qog;

import java.io.FileOutputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletInputStream;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

import com.qog.util.Constant;
import com.qog.util.DESede;
import com.qog.util.WebUtil;

public class DeleteSurveyServlet extends HttpServlet {
	private SurveyService surveyService;

	public DeleteSurveyServlet() {
	}

	public void init(ServletConfig config) throws ServletException {

		WebApplicationContext ctx = WebApplicationContextUtils.getWebApplicationContext(config
				.getServletContext());
		surveyService = (SurveyService) ctx.getBean("surveyService");
	}

	public void destroy() {

		super.destroy();
	}

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		System.out.println("信息：方法【SurveyDataGridServletdoGet】开始！");
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		System.out.println("信息：方法【SurveyDataGridServletdoPost】开始！");

		String ids = WebUtil.getParam(request, "ids", null);
		System.out.println(ids);
		int a = surveyService.deleteById(ids);
		System.out.println(a);
		WebUtil.respondStrict(request, response, a);
	}
}
