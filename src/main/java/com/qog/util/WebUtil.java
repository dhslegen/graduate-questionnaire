package com.qog.util;

import com.google.gson.*;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.lang.reflect.Type;
import java.net.URLEncoder;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class WebUtil {
    private static final Log logger = LogFactory.getLog(WebUtil.class);
    public static final Gson GSON = new GsonBuilder().serializeNulls().registerTypeAdapter(Date.class, new DateSerializer()).create();

    public static String getParam(HttpServletRequest request, String name, String defaultValue) {
        String v = request.getParameter(name);
        return (v != null && v.length() > 0) ? v.trim() : defaultValue;
    }

    public static String[] getParams(HttpServletRequest request, String name) {
        String[] vs = request.getParameterValues(name);
        if (vs == null)
            return new String[0];
        return vs;
    }

    public static String formLikeCondition(HttpServletRequest request, String name, boolean like) {
        String s = null;
        String v = request.getParameter(name);
        if (v == null || v.length() == 0)
            s = "(1=1)";
        else if (like)
            s = "(`" + name + "` like '%" + v + "%')";
        else
            s = "(`" + name + "`='" + v + "')";
        if (logger.isDebugEnabled())
            logger.debug("[" + WebUtil.class.getCanonicalName() + "] condition=" + s);
        return s;
    }

    // 数字Between
    public static String formNumberBetweenCondition(HttpServletRequest request, String name, String beginName, String endName) {
        String s = null;
        String begin = request.getParameter(beginName);
        String end = request.getParameter(endName);
        if ((begin == null || begin.length() == 0) && (end == null || end.length() == 0))
            s = "(1=1)";
        else {
            if (begin == null || begin.length() == 0)
                begin = "" + Long.MIN_VALUE;
            if (end == null || end.length() == 0)
                end = "" + Long.MAX_VALUE;
            s = "(" + name + ">=" + begin + " and " + name + "<=" + end + ")";
        }
        if (logger.isDebugEnabled())
            logger.debug("[" + WebUtil.class.getCanonicalName() + "] condition=" + s);
        return s;
    }

    // 日期Between
    public static String formDateBetweenCondition(HttpServletRequest request, String name, String beginName, String endName) {
        String s = null;
        String begin = request.getParameter(beginName);
        String end = request.getParameter(endName);
        if ((begin == null || begin.length() == 0) && (end == null || end.length() == 0))
            s = "(1=1)";
        else {
            if (begin == null || begin.length() == 0)
                begin = "0000-00-00";
            if (end == null || end.length() == 0)
                end = "9999-12-31";
            s = "(" + name + ">='" + begin + "' and " + name + "<='" + end + "')";
        }
        if (logger.isDebugEnabled())
            logger.debug("[" + WebUtil.class.getCanonicalName() + "] condition=" + s);
        return s;
    }

    // 处理in, 多值查询, 上传的值必须是xxx,xxx,xxx格式
    public static String formInCondition(HttpServletRequest request, String name) {
        String s = null;
        String v = request.getParameter(name);
        if (v == null || v.length() == 0)
            s = "(1=1)";
        else {
            v = "('" + v.replaceAll(",", "','") + "')";
            s = "(" + name + " in " + v + ")";
        }
        if (logger.isDebugEnabled())
            logger.debug("[" + WebUtil.class.getCanonicalName() + "] condition=" + s);
        return s;
    }

    @SuppressWarnings("unchecked")
    public static void respond(HttpServletRequest request, HttpServletResponse response, Object ret) throws IOException {
        Map<String, Object> map = new HashMap<String, Object>();
        if (ret instanceof Integer) {
            map.put("statusCode", ret);
        } else if (ret instanceof Map) {
            map = (Map<String, Object>) ret;
        } else if (ret instanceof List || ret instanceof Boolean || ret instanceof String) {
            map.put("statusCode", Constant.STATUS_CODE_SUCCESS);
            map.put("data", ret);
        } else if (ret instanceof ByteArrayOutputStream || ret instanceof byte[]) {
            response.setContentType("application/msexcel");
            String filename = "export.xls";
            try {
                if (request.getAttribute("contentType") != null)
                    response.setContentType((String) request.getAttribute("contentType"));
                if (request.getAttribute("filename") != null)
                    filename = URLEncoder.encode((String) request.getAttribute("filename"), "UTF-8");
            } catch (UnsupportedEncodingException e) {
                e.printStackTrace();
            }
            response.setHeader("Content-disposition", "attachment; filename=" + filename);
            if (ret instanceof ByteArrayOutputStream) {
                response.getOutputStream().write(((ByteArrayOutputStream) ret).toByteArray());
                ((ByteArrayOutputStream) ret).close();
            } else if (ret instanceof byte[]) {
                response.getOutputStream().write((byte[]) ret);
                ret = null;
            }
            return;
        }
        String result = GSON.toJson(map).replace("null", "\"\"");
        if (logger.isDebugEnabled())
            logger.debug("[" + WebUtil.class.getCanonicalName() + "] response result=" + result);
        boolean isAjax = (request.getHeader("X-Requested-With") != null) && request.getHeader("X-Requested-With").equals("XMLHttpRequest");
        if (isAjax) {
            // if request was ajax(modern browser), just print it back
            response.getWriter().print(result);
            System.out.println("发送的数据为：" + result);
        } else {
            // if request was from an older browser not supporting ajax upload
            // then we have used an iframe instead and the response is sent back
            // to the iframe as a script
            response.setContentType("text/html;charset=UTF-8");
            response.getWriter().print(
                    "<script language=\"javascript\" type=\"text/javascript\">window.top.window.jQuery(\"#temporary_iframe_id\").data(\"deferrer\").resolve(" + result + ");</script>");
        }
    }

    public static void respondSelection(HttpServletRequest request, HttpServletResponse response, Service service, String[] conditions) throws IOException {
        String order = getParam(request, "sidx", "") + " " + getParam(request, "sord", "");
        order = order.trim();
        if (order.length() == 0)
            order = null;
        String pageNo = getParam(request, "pageNo", "1");
        String s = request.getSession().getServletContext().getInitParameter("defaultRowCountPerPage");
        if (s == null)
            s = "10";
        String rowCountPerPage = getParam(request, "rowCountPerPage", s.trim());
        int startRow = (Integer.parseInt(pageNo) - 1) * Integer.parseInt(rowCountPerPage) + 1;
        int endRow = Integer.parseInt(pageNo) * Integer.parseInt(rowCountPerPage);
        respond(request, response, service.select(conditions, order, startRow, endRow));
    }

    public static void respondStrict(HttpServletRequest request, HttpServletResponse response, Object ret) throws IOException {
        String result = GSON.toJson(ret).replace("null", "\"\"");
        if (logger.isDebugEnabled())
            logger.debug("[" + WebUtil.class.getCanonicalName() + "] response result=" + result);
        System.out.println("发送的数据为：" + result);
        boolean isAjax = (request.getHeader("X-Requested-With") != null) && request.getHeader("X-Requested-With").equals("XMLHttpRequest");
        if (isAjax) {
            // if request was ajax(modern browser), just print it back
            response.getWriter().print(result);
        } else {
            // if request was from an older browser not supporting ajax upload
            // then we have used an iframe instead and the response is sent back
            // to the iframe as a script
            response.setContentType("text/html;charset=UTF-8");
            response.getWriter().print(
                    "<script language=\"javascript\" type=\"text/javascript\">window.top.window.jQuery(\"#temporary_iframe_id\").data(\"deferrer\").resolve(" + result + ");</script>");
        }
    }

    static class DateSerializer implements JsonSerializer<Date> {
        private static final SimpleDateFormat DATE_FORMAT = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

        @Override
        public JsonElement serialize(Date date, Type type, JsonSerializationContext jsonSerializationContext) {
            if (date == null) {
                return JsonNull.INSTANCE;
            }
            return jsonSerializationContext.serialize(DATE_FORMAT.format(date));
        }
    }

    public static void respondDirect(HttpServletRequest request, HttpServletResponse response, String ret) throws IOException {
        String result = ret;
        if (logger.isDebugEnabled())
            logger.debug("[" + WebUtil.class.getCanonicalName() + "] response result=" + result);
        System.out.println("发送的数据为：" + result);
        boolean isAjax = (request.getHeader("X-Requested-With") != null) && request.getHeader("X-Requested-With").equals("XMLHttpRequest");
        if (isAjax) {
            // if request was ajax(modern browser), just print it back
            response.getWriter().print(result);
        } else {
            // if request was from an older browser not supporting ajax upload
            // then we have used an iframe instead and the response is sent back
            // to the iframe as a script
            response.setContentType("text/html;charset=UTF-8");
            response.getWriter().print(
                    "<script language=\"javascript\" type=\"text/javascript\">window.top.window.jQuery(\"#temporary_iframe_id\").data(\"deferrer\").resolve(" + result + ");</script>");
        }
    }

    public static void export(HttpServletRequest request, HttpServletResponse response, Service service, String[] conditions) throws IOException {
        String order = getParam(request, "order", "");
        order = order.trim();
        if (order.length() == 0)
            order = null;
        respond(request, response, service.export(conditions, order));
    }
}
