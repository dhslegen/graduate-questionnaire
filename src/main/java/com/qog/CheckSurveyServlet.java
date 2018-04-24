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

public class CheckSurveyServlet extends HttpServlet {
	private SurveyService surveyService;

	public CheckSurveyServlet() {
	}

	public void init(ServletConfig config) throws ServletException {

		WebApplicationContext ctx = WebApplicationContextUtils.getWebApplicationContext(config.getServletContext());
		surveyService = (SurveyService) ctx.getBean("surveyService");
	}

	public void destroy() {

		super.destroy();
	}

	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("信息：方法【CheckSurveyServletdoGet】开始！");
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("信息：方法【CheckSurveyServletdoPost】开始！");

		String target = WebUtil.getParam(request, "target", null);
		if ("禁用".equals(target)) {
			String ids = WebUtil.getParam(request, "ids", null);
			System.out.println(ids);
			int a = surveyService.unableById(ids);
			System.out.println(a);
			WebUtil.respondStrict(request, response, a);
		} else if ("启用".equals(target)) {
			String ids = WebUtil.getParam(request, "ids", null);
			System.out.println(ids);
			int a = surveyService.enableById(ids);
			System.out.println(a);
			WebUtil.respondStrict(request, response, a);
		} else if ("发布".equals(target)) {
			String ids = WebUtil.getParam(request, "ids", null);
			System.out.println(ids);
			int a = surveyService.publishById(ids);
			System.out.println(a);
			WebUtil.respondStrict(request, response, a);
		} else if ("回收".equals(target)) {
			String ids = WebUtil.getParam(request, "ids", null);
			System.out.println(ids);
			int a = surveyService.recycleById(ids);
			System.out.println(a);
			WebUtil.respondStrict(request, response, a);
		} else if ("重置".equals(target)) {
			String ids = WebUtil.getParam(request, "ids", null);
			System.out.println(ids);
			int a = surveyService.resetById(ids);
			System.out.println(a);
			WebUtil.respondStrict(request, response, a);
		} else if ("检查发布".equals(target)) {
			String surveyid = WebUtil.getParam(request, "surveyid", null);
			System.out.println(surveyid);
			int a = surveyService.checkpublishById(surveyid);
			System.out.println(a);
			WebUtil.respond(request, response, a);
		}

	}
}
