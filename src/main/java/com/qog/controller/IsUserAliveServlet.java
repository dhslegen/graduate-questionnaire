package com.qog.controller;

import com.qog.service.UserService;
import com.qog.util.Constant;
import com.qog.util.WebUtil;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

public class IsUserAliveServlet extends HttpServlet {
	private UserService userService;

	public IsUserAliveServlet() {
	}

	public void init(ServletConfig config) throws ServletException {

		WebApplicationContext ctx = WebApplicationContextUtils.getWebApplicationContext(config.getServletContext());
		userService = (UserService) ctx.getBean("userService");
	}

	public void destroy() {

		super.destroy();
	}

	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("信息：方法【CheckLoginServletdoGet】开始！");

	}

	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("信息：方法【isuserServletdoPost】开始！");
		HttpSession session = request.getSession();
		if (session.getAttribute("user") == null) {
			System.out.println(session.getAttribute("user"));
			WebUtil.respond(request, response, Constant.STATUS_CODE_FAILURE);
		} else {
			System.out.println(session.getAttribute("user"));
			WebUtil.respond(request, response, Constant.STATUS_CODE_SUCCESS);
		}
	}
}
