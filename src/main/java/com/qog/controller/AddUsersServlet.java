package com.qog.controller;

import com.qog.service.UserService;
import com.qog.util.WebUtil;
import jxl.Sheet;
import jxl.Workbook;
import com.qog.model.User;
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

import javax.servlet.ServletConfig;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.InputStream;
import java.util.LinkedList;
import java.util.List;

public class AddUsersServlet extends HttpServlet {
    private UserService userService;

    public AddUsersServlet() {
    }

    public void init(ServletConfig config) {

        WebApplicationContext ctx = WebApplicationContextUtils.getWebApplicationContext(config.getServletContext());
        userService = (UserService) ctx.getBean("userService");
    }

    public void doGet(HttpServletRequest request, HttpServletResponse response) {
        System.out.println("信息：方法【AddUsersServletdoGet】开始！");
    }

    public void doPost(HttpServletRequest request, HttpServletResponse response) {
        System.out.println("信息：方法【AddUsersServletdoPost】开始！");

        /*
         * 获取消息实体内容，并解析为文件和请求
         */

        System.out.println(request.getCharacterEncoding());
        HttpSession session = request.getSession();
        session.setAttribute("progressBar", 0); // 定义指定上传进度的Session变量
        DiskFileItemFactory factory = new DiskFileItemFactory(); // 基于磁盘文件项目创建一个工厂对象
        ServletFileUpload upload = new ServletFileUpload(factory); // 创建一个新的文件上传对象
        try {
            List items = upload.parseRequest(request);// 解析上传请求
            for (Object item1 : items) {
                FileItem item = (FileItem) item1; // 获取FileItem对象
                if (!item.isFormField()) {// 判断是否为文件域
                    if (item.getName() != null && !item.getName().equals("")) {// 判断是否选择了文件
                        // 此时文件暂存在服务器的内存中
                        List<User> list = new LinkedList<>();
                        try {
                            InputStream is = item.getInputStream();
                            Workbook rwb = Workbook.getWorkbook(is);
                            Sheet rs = rwb.getSheet("Sheet1");
                            int clos = rs.getColumns();// 得到所有的列
                            int rows = rs.getRows();// 得到所有的行
                            for (int i = 1; i < rows; i++) {
                                for (int j = 0; j < clos; j++) {
                                    // 第一个是列数，第二个是行数
                                    String studentid = rs.getCell(j++, i).getContents();// 默认最左边编号也算一列
                                    String sex = rs.getCell(j++, i).getContents();
                                    String password = rs.getCell(j++, i).getContents();
                                    String graduation = rs.getCell(j++, i).getContents();
                                    String tel = rs.getCell(j++, i).getContents();
                                    String email = rs.getCell(j++, i).getContents();

                                    list.add(new User(studentid, studentid, sex, password, graduation, tel, email));
                                }
                            }
                            WebUtil.respond(request, response, userService.insertUsersByExcel(list));
                        } catch (Exception e) {
                            // TODO Auto-generated catch block
                            e.printStackTrace();
                        }
                    }
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
