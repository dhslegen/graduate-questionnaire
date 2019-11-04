package com.qog.controller;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.qog.service.AnswerService;
import com.qog.service.QuestionService;
import com.qog.service.SurveyService;
import com.qog.util.WebUtil;
import com.qog.model.Answer;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.List;

public class SaveAnswersServlet extends HttpServlet {
	private QuestionService questionService;
	private AnswerService answerService;
	private SurveyService surveyService;

	public SaveAnswersServlet() {
	}

	public void init(ServletConfig config) throws ServletException {

		WebApplicationContext ctx = WebApplicationContextUtils.getWebApplicationContext(config.getServletContext());
		questionService = (QuestionService) ctx.getBean("questionService");
		answerService = (AnswerService) ctx.getBean("answerService");
		surveyService = (SurveyService) ctx.getBean("surveyService");
	}

	public void destroy() {

		super.destroy();
	}

	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("信息：方法【SaveAnswersServletdoGet】开始！");
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("信息：方法【SaveAnswersServletdoPost】开始！");

		String savestring = WebUtil.getParam(request, "answers", null);
		Gson gson = new Gson();
		List<Answer> retList = gson.fromJson(savestring, new TypeToken<List<Answer>>() {
		}.getType());

		System.out.println(savestring);
		HttpSession session = request.getSession();
		if (!retList.isEmpty()) {
			int surveyid = retList.get(0).getSurveyid();
			int userid = (int) session.getAttribute("id");
			if (answerService.hasDuplicateUS(userid, surveyid)) {
				WebUtil.respond(request, response, -1);
			} else {
				/* questionService.saveAnswers(retList); */
				surveyService.updateHit(surveyid);
				WebUtil.respond(request, response, answerService.insertAnswers(userid, surveyid, retList));
			}
		} else {
			WebUtil.respond(request, response, 1);
		}
		/*
		 * WebUtil.respond(request, response,
		 * questionService.saveQuestions(retList));
		 */

	}
}
