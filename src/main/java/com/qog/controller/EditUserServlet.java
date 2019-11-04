package com.qog.controller;

import com.qog.service.UserService;
import com.qog.util.WebUtil;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class EditUserServlet extends HttpServlet {
	private UserService userService;

	public EditUserServlet() {
	}

	public void init(ServletConfig config) throws ServletException {

		WebApplicationContext ctx = WebApplicationContextUtils.getWebApplicationContext(config.getServletContext());
		userService = (UserService) ctx.getBean("userService");
	}

	public void destroy() {

		super.destroy();
	}

	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("信息：方法【AddSurveyServletdoGet】开始！");
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("信息：方法【AddSurveyServletdoPost】开始！");

		int id = Integer.valueOf(WebUtil.getParam(request, "id", null));
		System.out.println(id);
		String name = WebUtil.getParam(request, "name", null);
		String sex = WebUtil.getParam(request, "sex", null);
		String password = WebUtil.getParam(request, "password", null);
		String auth = WebUtil.getParam(request, "auth", null);
		String tel = WebUtil.getParam(request, "tel", null);
		String email = WebUtil.getParam(request, "email", null);

		int affectrows = userService.updateAndReturnID(name, sex, password, auth, tel, email, id);
		WebUtil.respond(request, response, affectrows);
	}
}
