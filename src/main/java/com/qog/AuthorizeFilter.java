package com.qog;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.IOException;

public class AuthorizeFilter implements Filter {
    private static final Log logger = LogFactory.getLog(AuthorizeFilter.class);
    private FilterConfig config;

    @Override
    public void init(FilterConfig config) throws ServletException {
        this.config = config;
        // TODO Auto-generated method stub

    }

    public void destroy() {
        this.config = null;
    }

    public AuthorizeFilter() {
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        boolean isExcludedPage = false;
        String loginPage = config.getInitParameter("loginPage");
        String excludedPages = config.getInitParameter("excludedPages");
        String[] excludedPageArray = excludedPages.split(",");
        for (String page : excludedPageArray) {
            if (((HttpServletRequest) request).getServletPath().equals(page)) {
                isExcludedPage = true;
                break;
            }
        }
        if (isExcludedPage) {
            // 在过滤url之外
            chain.doFilter(request, response);
        } else {
            HttpServletRequest req = (HttpServletRequest) request;
            HttpSession session = req.getSession();
            System.out.println(session.isNew());
            String servletPath = req.getServletPath();
            System.out.println(servletPath);
            String user = "user";
            if (session.getAttribute(user) == null) {
                req.setAttribute("tip", "您还没登录");
                System.out.println("您还没登录");
                req.getRequestDispatcher(loginPage).forward(request, response);
            } else {
                chain.doFilter(request, response);
                System.out.println("您已登录");
            }
        }

    }
}
