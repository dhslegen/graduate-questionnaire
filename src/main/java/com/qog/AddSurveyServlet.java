package com.qog;

import com.qog.service.SurveyService;
import com.qog.util.WebUtil;
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
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.LinkedList;
import java.util.List;

public class AddSurveyServlet extends HttpServlet {
    private SurveyService surveyService;

    public AddSurveyServlet() {
    }

    public void init(ServletConfig config) {

        WebApplicationContext ctx = WebApplicationContextUtils.getWebApplicationContext(config.getServletContext());
        surveyService = (SurveyService) ctx.getBean("surveyService");
    }

    public void doGet(HttpServletRequest request, HttpServletResponse response) {
        System.out.println("信息：方法【AddSurveyServletdoGet】开始！");
    }

    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        System.out.println("信息：方法【AddSurveyServletdoPost】开始！");

        /*
         * 获取消息实体内容，并解析为文件和请求
         */

        System.out.println(request.getCharacterEncoding());
        HttpSession session = request.getSession();
        session.setAttribute("progressBar", 0); // 定义指定上传进度的Session变量
        String fileName = "default.jpg";
        String error = "没有选择上传文件！";
        int maxSize = 50 * 1024 * 1024; // 单个上传文件大小的上限
        DiskFileItemFactory factory = new DiskFileItemFactory(); // 基于磁盘文件项目创建一个工厂对象
        ServletFileUpload upload = new ServletFileUpload(factory); // 创建一个新的文件上传对象
        try {
            List items = upload.parseRequest(request);// 解析上传请求
            for (Object item1 : items) {
                FileItem item = (FileItem) item1; // 获取FileItem对象
                if (!item.isFormField()) {// 判断是否为文件域
                    if (item.getName() != null && !item.getName().equals("")) {// 判断是否选择了文件
                        error = "";
                        long upFileSize = item.getSize(); // 上传文件的大小
                        fileName = item.getName();
                        SimpleDateFormat sdf = new SimpleDateFormat("yyyy_MM_dd_HH_mm_ss_SSS");
                        fileName = fileName.substring(0, fileName.lastIndexOf(".")) + sdf.format(new Date()) + fileName.substring(fileName.lastIndexOf("."));// 获取文件名
                        System.out.println("上传文件的名:" + item.getName());
                        System.out.println("上传文件的大小:" + item.getSize());
                        if (upFileSize > maxSize) {
                            error = "您上传的文件太大，请选择不超过50M的文件";
                            System.out.println(error);
                            fileName = "默认封面";
                            continue;
                        }
                        // 此时文件暂存在服务器的内存中
                        File tempFile = new File(fileName);// 构造临时对象
                        String uploadPath = request.getServletContext().getRealPath("/cover");
                        File file = new File(uploadPath, tempFile.getName()); // 获取根目录对应的真实物理路径
                        InputStream is = item.getInputStream();
                        int buffer = 1024; // 定义缓冲区的大小
                        int length1;
                        byte[] b = new byte[buffer];
                        double percent = 0;
                        FileOutputStream fos1 = new FileOutputStream(file);
                        while ((length1 = is.read(b)) != -1) {
                            percent += length1 / (double) upFileSize * 100D; // 计算上传文件的百分比
                            fos1.write(b, 0, length1); // 向文件输出流写读取的数据
                            session.setAttribute("progressBar", Math.round(percent)); // 将上传百分比保存到Session中
                        }
                        fos1.close();
                        Thread.sleep(1000); // 线程休眠1秒
                    } else {
                        error = "没有选择上传文件！";
                    }
                } else {
                    System.out.println(item.getFieldName() + "" + item.getString("UTF-8"));
                    request.setAttribute(item.getFieldName(), item.getString("UTF-8"));
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
            error = "上传文件出现错误：" + e.getMessage();
        }

        System.out.println(request.getAttribute("type"));
        String type = request.getAttribute("type").toString();
        System.out.println(request.getAttribute("title"));
        String title = request.getAttribute("title").toString();
        System.out.println(request.getAttribute("description"));
        String description = request.getAttribute("description").toString();
        System.out.println(request.getAttribute("questions"));
        String questions = request.getAttribute("questions").toString();
        String image = fileName;
        int userid = Integer.parseInt(session.getAttribute("id").toString());
        /*
         * int a = surveyService.insertAndReturnID(title, description, image,
         * type, userid);
         */
        int a = surveyService.insertSurveyAndQuestions(title, description, image, type, userid, questions);
        System.out.println("即时ID号：" + a);
        if (a == 1) {
            if (!"".equals(error)) {
                List<String> kiList = new LinkedList<>();
                kiList.add("1");
                kiList.add(error);
                WebUtil.respond(request, response, kiList);
                /*
                 * request.setAttribute("error", error);
                 * request.getRequestDispatcher("error.jsp") .forward(request,
                 * response);
                 */
            } else {
                List<String> kiList = new LinkedList<>();
                kiList.add("1");
                kiList.add("文件上传成功!");
                WebUtil.respond(request, response, kiList);
                /*
                 * request.setAttribute("result", "文件上传成功！");
                 * request.getRequestDispatcher
                 * ("upFile_deal.jsp").forward(request, response);
                 */
            }
        } else if (a == 100) {
            if (!"".equals(error)) {
                List<String> kiList = new LinkedList<>();
                kiList.add("0");
                kiList.add(error);
                WebUtil.respond(request, response, kiList);
                /*
                 * request.setAttribute("error", error);
                 * request.getRequestDispatcher("error.jsp") .forward(request,
                 * response);
                 */
            } else {
                List<String> kiList = new LinkedList<>();
                kiList.add("0");
                kiList.add("文件上传成功!");
                WebUtil.respond(request, response, kiList);
                /*
                 * request.setAttribute("result", "文件上传成功！");
                 * request.getRequestDispatcher
                 * ("upFile_deal.jsp").forward(request, response);
                 */
            }
        }

    }
}
