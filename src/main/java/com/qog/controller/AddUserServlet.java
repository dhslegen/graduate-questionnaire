package com.qog.controller;

import com.qog.service.UserService;
import com.qog.util.WebUtil;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

import javax.servlet.ServletConfig;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class AddUserServlet extends HttpServlet {
    private UserService userService;

    public AddUserServlet() {
    }

    public void init(ServletConfig config) {

        WebApplicationContext ctx = WebApplicationContextUtils.getWebApplicationContext(config.getServletContext());
        userService = (UserService) ctx.getBean("userService");
    }

    public void doGet(HttpServletRequest request, HttpServletResponse response) {
        System.out.println("信息：方法【AddUserServletdoGet】开始！");
    }

    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        System.out.println("信息：方法【AddUserServletdoPost】开始！");

        String name = WebUtil.getParam(request, "name", null);
        String sex = WebUtil.getParam(request, "sex", null);
        String password = WebUtil.getParam(request, "password", null);
        String auth = WebUtil.getParam(request, "auth", null);
        String tel = WebUtil.getParam(request, "tel", null);
        String email = WebUtil.getParam(request, "email", null);
        String studentid = WebUtil.getParam(request, "studentid", null);

        int ID = userService.insertAndReturnID(name, sex, password, auth, tel, email, studentid);
        WebUtil.respond(request, response, ID);

    }
}
