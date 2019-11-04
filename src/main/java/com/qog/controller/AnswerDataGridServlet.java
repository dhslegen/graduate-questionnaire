package com.qog.controller;

import com.qog.service.AnswerService;
import com.qog.util.WebUtil;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

import javax.servlet.ServletConfig;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class AnswerDataGridServlet extends HttpServlet {
    private AnswerService answerService;

    public AnswerDataGridServlet() {
    }

    public void init(ServletConfig config) {

        WebApplicationContext ctx = WebApplicationContextUtils.getWebApplicationContext(config.getServletContext());
        answerService = (AnswerService) ctx.getBean("answerService");
    }

    public void doGet(HttpServletRequest request, HttpServletResponse response) {
        System.out.println("信息：方法【SurveyDataGridServletdoGet】开始！");
    }

    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        System.out.println("信息：方法【SurveyDataGridServletdoPost】开始！");
        /*
         * 获取消息实体内容
         */

        /*
         * ServletInputStream sis = request.getInputStream(); String
         * filepathString =
         * request.getServletContext().getRealPath("/WEB-INF/upload/body.out");
         * int length = request.getContentLength();
         *
         * System.out.println(length); System.out.println(filepathString);
         *
         * FileOutputStream fos = new FileOutputStream(filepathString); byte[]
         * buf = new byte[length];
         *
         * for (int read = 0, reading = 0; read < length; read = read + reading)
         * { reading = sis.read(buf, read, length - read); }
         *
         * fos.write(buf, 0, length); fos.close(); sis.close();
         */
        String username = WebUtil.getParam(request, "title", null);
        String date_from = WebUtil.getParam(request, "date_from", null);
        String date_to = WebUtil.getParam(request, "date_to", null);
        System.out.println(username + "" + date_from + "" + date_to);

        String pageSize = WebUtil.getParam(request, "rows", null);
        String pageNumber = WebUtil.getParam(request, "page", null);
        String sort = WebUtil.getParam(request, "sort", null);
        String order = WebUtil.getParam(request, "order", null);

        WebUtil.respondStrict(request, response, answerService.retPagination(username, date_from, date_to, pageSize, pageNumber, sort, order));
    }
}
