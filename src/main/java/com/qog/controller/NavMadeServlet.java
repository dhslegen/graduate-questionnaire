package com.qog.controller;

import com.qog.service.NavService;
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

public class NavMadeServlet extends HttpServlet {
	private NavService navService;

	public NavMadeServlet() {
	}

	public void init(ServletConfig config) throws ServletException {

		WebApplicationContext ctx = WebApplicationContextUtils.getWebApplicationContext(config
				.getServletContext());
		navService = (NavService) ctx.getBean("navService");
	}

	public void destroy() {

		super.destroy();
	}

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		System.out.println("信息：方法【NavMadeServletdoGet】开始！");
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		System.out.println("信息：方法【NavMadeServletdoPost】开始！");
		String id = WebUtil.getParam(request, "id", null);
		System.out.println("收的的数据：" + id);
		HttpSession session = request.getSession();
		String auth = session.getAttribute("auth").toString();
		if (id != null && id.length() > 0) {

			WebUtil.respondStrict(request, response, navService.findNodeByNidAndAuth(id, auth));

		} else {
			WebUtil.respondStrict(request, response, navService.findNodeByAuth(auth));
		}
	}
}
