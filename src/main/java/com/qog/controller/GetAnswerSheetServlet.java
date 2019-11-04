package com.qog.controller;

import com.qog.service.AnswerService;
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

public class GetAnswerSheetServlet extends HttpServlet {
	private AnswerService answerService;

	public GetAnswerSheetServlet() {
	}

	public void init(ServletConfig config) throws ServletException {

		WebApplicationContext ctx = WebApplicationContextUtils.getWebApplicationContext(config.getServletContext());
		answerService = (AnswerService) ctx.getBean("answerService");
	}

	public void destroy() {

		super.destroy();
	}

	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("信息：方法【GetAnswerSheetServletdoGet】开始！");
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("信息：方法【GetAnswerSheetServletdopost】开始！");

		HttpSession session = request.getSession();
		int userid = (int) session.getAttribute("id");
		WebUtil.respondStrict(request, response, answerService.getAnswerByUserId(userid));
	}
}
