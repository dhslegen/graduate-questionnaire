package com.qog;

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
import java.util.List;

public class CheckLoginServlet extends HttpServlet {
    private UserService userService;

    public CheckLoginServlet() {
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

        String target = WebUtil.getParam(request, "target", null);
        System.out.println(target);
        if ("logout".equals(target)) {

            request.getSession().invalidate();
            response.sendRedirect("/QOG/html/login.html");

        }
    }

    public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("信息：方法【CheckLoginServletdoPost】开始！");
        String target = WebUtil.getParam(request, "target", null);
        HttpSession session = null;
        /* 检查用户登录 */
        if ("checkuser".equals(target)) {

            String name = WebUtil.formLikeCondition(request, "name", false);
            String password = WebUtil.formLikeCondition(request, "password", false);
            List<Integer> lIntegers = userService.getIdByNamePassword(name, password);
            if (lIntegers.isEmpty()) {
                WebUtil.respond(request, response, Constant.STATUS_CODE_FAILURE);
                request.getSession().invalidate();
            } else {
                int id = lIntegers.get(0);
                WebUtil.respond(request, response, Constant.STATUS_CODE_SUCCESS);

                /* session存储用户名和权限 和ID */

                session = request.getSession();
                session.setMaxInactiveInterval(30 * 60);
                session.setAttribute("user", WebUtil.getParam(request, "name", null));
                session.setAttribute("auth", userService.getAuthByName(name));
                session.setAttribute("id", id);

                System.out.println("用户ID：" + session.getAttribute("id"));
                System.out.println("用户登录名：" + session.getAttribute("user"));
                System.out.println("用户权限：" + session.getAttribute("auth"));
            }

        } else if ("getname".equals(target)) {
            System.out.println("获取用户名");
            session = request.getSession();
            WebUtil.respond(request, response, session.getAttribute("user"));
        } else if ("logout".equals(target)) {
            request.getSession().invalidate();
            WebUtil.respond(request, response, 1);
        } else if ("register".equals(target)) {
            System.out.println("注册");

            String name = WebUtil.getParam(request, "name", null);
            String password = WebUtil.getParam(request, "password", null);
            session = request.getSession();
            int id = (int) session.getAttribute("id");
            System.out.println(name + password + id);
            WebUtil.respond(request, response, userService.updateUserInfo(name, password, id));
        } else if ("checksamename".equals(target)) {
            System.out.println("检查重名");

            String name = WebUtil.getParam(request, "name", null);

            WebUtil.respondStrict(request, response, userService.hasNoDuplicateRegister(name));
        } else if ("checkothersamename".equals(target)) {
            System.out.println("检查其他重名");

            String name = WebUtil.getParam(request, "name", null);
            session = request.getSession();
            if (session.getAttribute("id") != null) {
                int id = (int) session.getAttribute("id");

                WebUtil.respondStrict(request, response, userService.hasNoOtherDuplicate(name, id));
            } else {

                WebUtil.respondStrict(request, response, true);
            }
        }

    }
}
