package com.qog;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletInputStream;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import model.Answer;
import model.Question;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.qog.util.Constant;
import com.qog.util.DESede;
import com.qog.util.WebUtil;

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
