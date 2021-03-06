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
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.Map;

public class DownLoadAnswerSheetServlet extends HttpServlet {
    private AnswerService answerService;

    public DownLoadAnswerSheetServlet() {
    }

    public void init(ServletConfig config) throws ServletException {

        WebApplicationContext ctx = WebApplicationContextUtils.getWebApplicationContext(config.getServletContext());
        answerService = (AnswerService) ctx.getBean("answerService");
    }

    public void destroy() {

        super.destroy();
    }

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("信息：方法【DownLoadAnswerSheetServletdoGet】开始！");
        String surveyId = WebUtil.getParam(request, "surveyid", null);
        System.out.println(surveyId);
        int surveyid = Integer.valueOf(surveyId);
        String userId = WebUtil.getParam(request, "userid", null);
        System.out.println(userId);
        int userid = Integer.valueOf(userId);
        List<Map<String, Object>> ret = answerService.getAnswerAndSurveyByUSId(surveyid, userid);
        String src = "";
        String stitle = "";
        String fstitle = "";
        String sdescription = "";
        String sanswertime = "";
        String fsanswertime = "";
        for (Map<String, Object> map : ret) {
            String answer = "您的答案:";
            fstitle = (String) map.get("surveytitle");
            stitle = "问卷标题:" + map.get("surveytitle");
            sdescription = "问卷描述:" + map.get("surveydescription");
            fsanswertime = map.get("answertime").toString();
            sanswertime = "答题时间:" + map.get("answertime").toString();
            String question = map.get("number") + "." + map.get("title");
            if (map.get("type").equals("单选") || map.get("type").equals("多选")) {

                String[] strings = ((String) map.get("content")).split(",");
                for (int i = 0; i < strings.length; i++) {
                    if (i == strings.length - 1) {
                        answer = answer + map.get(strings[i]);
                    } else {
                        answer = answer + map.get(strings[i]) + ",";
                    }
                }
            } else {
                answer = answer + map.get("content");
            }
            src = src + "\r\n" + question + "\r\n" + answer + "\r\n";
        }
        src = stitle + "\r\n" + sdescription + "\r\n" + sanswertime + "\r\n" + src;
        String filename = "my answer" + ".txt";
        response.setContentType("text/plain; charset=utf-8");
        // 设置Content-Disposition
        response.setHeader("Content-Disposition", "attachment;filename=" + filename);
        // 读取文件
        OutputStream out = response.getOutputStream();
        InputStream in = new ByteArrayInputStream(src.getBytes(StandardCharsets.UTF_8));
        // 写文件
        int b;
        while ((b = in.read()) != -1) {
            out.write(b);
        }

        in.close();
        out.close();
    }

    public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("信息：方法【DownLoadAnswerSheetServletdopost】开始！");

        String surveyId = WebUtil.getParam(request, "surveyid", null);
        System.out.println(surveyId);
        int surveyid = Integer.valueOf(surveyId);
        String userId = WebUtil.getParam(request, "userid", null);
        System.out.println(userId);
        int userid = Integer.valueOf(userId);
        List<Map<String, Object>> ret = answerService.getAnswerByUSId(surveyid, userid);
        String src = "dfgfdg";
        String filename = "ni.text";
        response.setContentType("text/plain; charset=utf-8");
        // 设置Content-Disposition
        response.setHeader("Content-Disposition", "attachment;filename=" + filename);
        // 读取文件
        OutputStream out = response.getOutputStream();
        InputStream in = new ByteArrayInputStream(src.getBytes(StandardCharsets.UTF_8));
        // 写文件
        int b;
        while ((b = in.read()) != -1) {
            out.write(b);
        }

        in.close();
        out.close();
    }
}
