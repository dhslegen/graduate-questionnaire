package com.qog.controller;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.qog.service.QuestionService;
import com.qog.util.WebUtil;
import com.qog.model.Question;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

public class SaveQuestionsServlet extends HttpServlet {
	private QuestionService questionService;

	public SaveQuestionsServlet() {
	}

	public void init(ServletConfig config) throws ServletException {

		WebApplicationContext ctx = WebApplicationContextUtils.getWebApplicationContext(config.getServletContext());
		questionService = (QuestionService) ctx.getBean("questionService");
	}

	public void destroy() {

		super.destroy();
	}

	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("信息：方法【SaveQuestionServletdoGet】开始！");
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("信息：方法【SaveQuestionServletdoPost】开始！");

		String savestring = WebUtil.getParam(request, "questions", null);
		System.out.println(savestring);

		Gson gson = new Gson();
		List<Question> retList = gson.fromJson(savestring, new TypeToken<List<Question>>() {
		}.getType());

	}
}
