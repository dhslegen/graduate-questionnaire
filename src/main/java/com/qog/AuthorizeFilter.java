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

	public void doFilter(ServletRequest requset, ServletResponse response, FilterChain chain) throws IOException, ServletException {
		boolean isExcludedPage = false;
		String encoding = config.getInitParameter("encoding");
		String loginpage = config.getInitParameter("loginpage");
		String logoutpage = config.getInitParameter("logoutpage");
		String excludedPages = config.getInitParameter("excludedPages");
		String excludedPageArray[] = excludedPages.split(",");
		for (String page : excludedPageArray) {
			if (((HttpServletRequest) requset).getServletPath().equals(page)) {
				isExcludedPage = true;
				break;
			}
		}
		if (isExcludedPage) {// 在过滤url之外
			chain.doFilter(requset, response);
		} else {
			HttpServletRequest req = (HttpServletRequest) requset;
			HttpSession session = req.getSession();
			System.out.println(session.isNew());
			String requestpath = req.getServletPath();
			System.out.println(requestpath);
			if (session.getAttribute("user") == null) {
				req.setAttribute("tip", "您还没登录");
				System.out.println("您还没登录");
				req.getRequestDispatcher(loginpage).forward(requset, response);
			} else {
				chain.doFilter(requset, response);
				System.out.println("您已登录");
			}
		}

	}
}
