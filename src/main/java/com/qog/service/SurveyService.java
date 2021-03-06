package com.qog.service;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.qog.util.Constant;
import com.qog.util.Service;
import com.qog.model.Question;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.transaction.support.TransactionTemplate;

import java.sql.Statement;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@SuppressWarnings("unused")
public class SurveyService implements Service {
    private static final Log logger = LogFactory.getLog(SurveyService.class);
    private JdbcTemplate jdao;
    private TransactionTemplate jtx;

    public SurveyService() {
    }

    public SurveyService(JdbcTemplate jdao, TransactionTemplate jtx) {
        this.jdao = jdao;
        this.jtx = jtx;
    }

    /**
     * 判断问卷表标题是否重复
     */
    private boolean hasDuplicate(String title) {
        return jdao.queryForObject(" SELECT COUNT(*) FROM survey WHERE title = '" + title + "'", Integer.class) > 0;
    }

    /**
     * 插入时判断问卷表标题是否重复
     */
    private boolean hasOtherDuplicate(String title, int id) {
        return jdao.queryForObject(" SELECT COUNT(*) FROM survey WHERE title = '" + title + "' AND id <>" + id, Integer.class) > 0;
    }

    /**
     * 插入时判断问卷表标题是否重复
     */
    public int updateHit(int surveyid) {
        String strSql = "UPDATE survey SET hit=hit+1 WHERE id=?";

        return jdao.update(conn -> {
            int i = 0;
            java.sql.PreparedStatement ps = conn.prepareStatement(strSql);
            ps.setInt(++i, surveyid);
            return ps;
        });
    }

    /**
     * 判断问题题号是否重复
     */
    private boolean hasDuplicate(int number, int surveyid) {
        String tb_questions = "(SELECT * FROM question WHERE surveyid=" + surveyid + ") AS tb_questions";
        return jdao.queryForObject("SELECT COUNT(*) FROM " + tb_questions + " WHERE `number` = " + number, Integer.class) > 0;
    }

    /**
     * 插入数据并返回ID
     */

    public int insertAndReturnID(String title, String description, String image, String type, int userid) {
        KeyHolder keyHolder = new GeneratedKeyHolder();
        String strSql = "insert into survey(title,description,createtime,isable,image,userid,`type`) values(?,?,NOW(),?,?,?,?)";
        if (!hasDuplicate(title)) {
            jdao.update(conn -> {
                String isable = "启用";
                int i = 0;
                java.sql.PreparedStatement ps;
                ps = conn.prepareStatement(strSql, Statement.RETURN_GENERATED_KEYS);
                ps.setString(++i, title);
                ps.setString(++i, description);
                ps.setString(++i, isable);
                ps.setString(++i, image);
                ps.setInt(++i, userid);
                ps.setString(++i, type);
                return ps;
            }, keyHolder);

            return keyHolder.getKey().intValue();
        } else {
            return -1;
        }

    }

    /**
     * 插入问卷与题目
     */

    public int insertSurveyAndQuestions(String title, String description, String image, String type, int userid, String savestring) {
        KeyHolder keyHolder = new GeneratedKeyHolder();
        String strSql = "insert into survey(title,description,createtime,isable,image,userid,`type`,publish) values(?,?,NOW(),?,?,?,?,'可编辑')";

        // 执行事务
        return jtx.execute(status -> {
            try {
                jdao.update(conn -> {
                    String isable = "启用";
                    int i = 0;
                    java.sql.PreparedStatement ps;
                    ps = conn.prepareStatement(strSql, Statement.RETURN_GENERATED_KEYS);
                    ps.setString(++i, title);
                    ps.setString(++i, description);
                    ps.setString(++i, isable);
                    ps.setString(++i, image);
                    ps.setInt(++i, userid);
                    ps.setString(++i, type);
                    return ps;
                }, keyHolder);

                int surveyid = keyHolder.getKey().intValue();
                Gson gson = new Gson();
                List<Question> retList = gson.fromJson(savestring, new TypeToken<List<Question>>() {
                }.getType());

                int affectrows = 0;
                for (Question ques : retList) {
                    String sqlsString;
                    int number = ques.getNumber();
                    if (hasDuplicate(number, surveyid)) {
                        sqlsString = "UPDATE question SET title=?,description=?,`type`=?,surveyid=?,`number`=?,opA=?,opB=?,opC=?,opD=?,opE=?,opF=?,opG=?,opH=?,opI=? WHERE surveyid=? AND `number`=?";
                        jdao.update(conn -> {
                            int i = 0;
                            java.sql.PreparedStatement ps;
                            ps = conn.prepareStatement(sqlsString);
                            ps.setString(++i, ques.getTitle());
                            ps.setString(++i, ques.getDescription());
                            ps.setString(++i, ques.getType());
                            ps.setInt(++i, surveyid);
                            ps.setInt(++i, ques.getNumber());
                            ps.setString(++i, ques.getOpA());
                            ps.setString(++i, ques.getOpB());
                            ps.setString(++i, ques.getOpC());
                            ps.setString(++i, ques.getOpD());
                            ps.setString(++i, ques.getOpE());
                            ps.setString(++i, ques.getOpF());
                            ps.setString(++i, ques.getOpG());
                            ps.setString(++i, ques.getOpH());
                            ps.setString(++i, ques.getOpI());
                            ps.setInt(++i, surveyid);
                            ps.setInt(++i, ques.getNumber());
                            return ps;
                        });
                    } else {
                        KeyHolder keyHolder1 = new GeneratedKeyHolder();
                        sqlsString = "INSERT INTO question(title,description,`type`,surveyid,`number`,opA,opB,opC,opD,opE,opF,opG,opH,opI) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
                        jdao.update(conn -> {
                            int i = 0;
                            java.sql.PreparedStatement ps;
                            ps = conn.prepareStatement(sqlsString, Statement.RETURN_GENERATED_KEYS);
                            ps.setString(++i, ques.getTitle());
                            ps.setString(++i, ques.getDescription());
                            ps.setString(++i, ques.getType());
                            ps.setInt(++i, surveyid);
                            ps.setInt(++i, ques.getNumber());
                            ps.setString(++i, ques.getOpA());
                            ps.setString(++i, ques.getOpB());
                            ps.setString(++i, ques.getOpC());
                            ps.setString(++i, ques.getOpD());
                            ps.setString(++i, ques.getOpE());
                            ps.setString(++i, ques.getOpF());
                            ps.setString(++i, ques.getOpG());
                            ps.setString(++i, ques.getOpH());
                            ps.setString(++i, ques.getOpI());
                            return ps;
                        }, keyHolder1);

                    }
                }
                jdao.update("DELETE FROM question WHERE surveyid=" + surveyid + " AND `number`>" + retList.size());

                return Constant.STATUS_CODE_SUCCESS;
            } catch (Exception e) {
                e.printStackTrace();
                status.setRollbackOnly();
                return Constant.STATUS_CODE_DB_FAILURE;
            }
        });

    }

    /**
     * 修改问卷与题目
     */

    public int updateSurveyAndQuestions(String title, String description, String image, String type, int userid, int surveyid, String savestring) {

        // 执行事务
        return jtx.execute(status -> {
            try {
                String strSql;
                if ("".equals(image)) {
                    strSql = "UPDATE survey SET title=?,description=?,`type`=?,userid=?,createtime=NOW() WHERE id=?";

                    jdao.update(conn -> {
                        int i = 0;
                        java.sql.PreparedStatement ps;
                        ps = conn.prepareStatement(strSql);
                        ps.setString(++i, title);
                        ps.setString(++i, description);
                        ps.setString(++i, type);
                        ps.setInt(++i, userid);
                        ps.setInt(++i, surveyid);
                        return ps;
                    });

                } else {
                    strSql = "UPDATE survey SET title=?,description=?,image=?,`type`=?,userid=? WHERE id=?";
                    if (!hasOtherDuplicate(title, surveyid)) {
                        jdao.update(conn -> {
                            int i = 0;
                            java.sql.PreparedStatement ps;
                            ps = conn.prepareStatement(strSql);
                            ps.setString(++i, title);
                            ps.setString(++i, description);
                            ps.setString(++i, image);
                            ps.setString(++i, type);
                            ps.setInt(++i, userid);
                            ps.setInt(++i, surveyid);
                            return ps;
                        });
                    }

                }
                Gson gson = new Gson();
                List<Question> retList = gson.fromJson(savestring, new TypeToken<List<Question>>() {
                }.getType());

                for (Question ques : retList) {
                    String sqlsString;
                    int number = ques.getNumber();
                    if (hasDuplicate(number, surveyid)) {
                        sqlsString = "UPDATE question SET title=?,description=?,`type`=?,surveyid=?,`number`=?,opA=?,opB=?,opC=?,opD=?,opE=?,opF=?,opG=?,opH=?,opI=? WHERE surveyid=? AND `number`=?";
                        jdao.update(conn -> {
                            int i = 0;
                            java.sql.PreparedStatement ps;
                            ps = conn.prepareStatement(sqlsString);
                            ps.setString(++i, ques.getTitle());
                            ps.setString(++i, ques.getDescription());
                            ps.setString(++i, ques.getType());
                            ps.setInt(++i, surveyid);
                            ps.setInt(++i, ques.getNumber());
                            ps.setString(++i, ques.getOpA());
                            ps.setString(++i, ques.getOpB());
                            ps.setString(++i, ques.getOpC());
                            ps.setString(++i, ques.getOpD());
                            ps.setString(++i, ques.getOpE());
                            ps.setString(++i, ques.getOpF());
                            ps.setString(++i, ques.getOpG());
                            ps.setString(++i, ques.getOpH());
                            ps.setString(++i, ques.getOpI());
                            ps.setInt(++i, surveyid);
                            ps.setInt(++i, ques.getNumber());
                            return ps;
                        });
                    } else {
                        KeyHolder keyHolder = new GeneratedKeyHolder();
                        sqlsString = "INSERT INTO question(title,description,`type`,surveyid,`number`,opA,opB,opC,opD,opE,opF,opG,opH,opI) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
                        jdao.update(conn -> {
                            int i = 0;
                            java.sql.PreparedStatement ps;
                            ps = conn.prepareStatement(sqlsString, Statement.RETURN_GENERATED_KEYS);
                            ps.setString(++i, ques.getTitle());
                            ps.setString(++i, ques.getDescription());
                            ps.setString(++i, ques.getType());
                            ps.setInt(++i, surveyid);
                            ps.setInt(++i, ques.getNumber());
                            ps.setString(++i, ques.getOpA());
                            ps.setString(++i, ques.getOpB());
                            ps.setString(++i, ques.getOpC());
                            ps.setString(++i, ques.getOpD());
                            ps.setString(++i, ques.getOpE());
                            ps.setString(++i, ques.getOpF());
                            ps.setString(++i, ques.getOpG());
                            ps.setString(++i, ques.getOpH());
                            ps.setString(++i, ques.getOpI());
                            return ps;
                        }, keyHolder);

                    }
                }
                jdao.update("DELETE FROM question WHERE surveyid=" + surveyid + " AND `number`>" + retList.size());
                return Constant.STATUS_CODE_SUCCESS;
            } catch (Exception e) {
                e.printStackTrace();
                status.setRollbackOnly();
                return Constant.STATUS_CODE_DB_FAILURE;
            }
        });
    }

    /**
     * 返回分页信息：
     */
    public Map<String, Object> retPagination(String title, String date_from, String date_to, String pageSize, String pageNumber, String sort, String order) {
        Map<String, Object> map = new HashMap<>();
        String readedPaper = String.valueOf((Integer.valueOf(pageNumber) - 1) * Integer.valueOf(pageSize));
        System.out.println("分页当期翻过的页：" + readedPaper);

        String sql;
        String totalsql;

        if (title == null && date_from == null && date_to == null) {
            String tb_original = "(SELECT `user`.name ,survey.* FROM `user` RIGHT JOIN survey ON `user`.id=survey.userid) AS tb_original";

            String tb_odr = "(SELECT tb_original.* FROM " + tb_original + " ORDER BY " + sort + " " + order + ") AS tb_odr";

            sql = "SELECT * FROM " + tb_odr + " LIMIT " + readedPaper + "," + pageSize;
            totalsql = "SELECT COUNT(*) FROM " + tb_odr;
        } else {
            if (title != null) {
                title = " WHERE title LIKE '%" + title + "%'";
            } else {
                title = "";
            }
            if (date_from != null) {
                if (title.equals("")) {
                    date_from = " WHERE createtime >'" + date_from + "'";
                } else {
                    date_from = " AND createtime >'" + date_from + "'";
                }
            } else {
                date_from = "";
            }
            if (date_to != null) {
                if (title.equals("") && date_from.equals("")) {
                    date_to = " WHERE DATE_SUB(createtime,INTERVAL 1 DAY) <='" + date_to + "'";
                } else {
                    date_to = " AND DATE_SUB(createtime,INTERVAL 1 DAY) <='" + date_to + "'";
                }
            } else {
                date_to = "";
            }
            String conditionString = title + date_from + date_to;

            String tb_original = "(SELECT `user`.name ,survey.* FROM `user` RIGHT JOIN survey ON `user`.id=survey.userid " + conditionString + ") AS tb_original";

            String tb_odr = "(SELECT tb_original.* FROM " + tb_original + " ORDER BY " + sort + " " + order + ") AS tb_odr";

            sql = "SELECT * FROM " + tb_odr + " LIMIT " + readedPaper + "," + pageSize;
            totalsql = "SELECT COUNT(*) FROM " + tb_odr;
        }
        System.out.println("拼装后的查询语句：" + sql);
        List<Map<String, Object>> rows = jdao.queryForList(sql);
        int total = jdao.queryForObject(totalsql, Integer.class);

        map.put("total", total);
        map.put("rows", rows);

        return map;

    }

    /**
     * 删除指定ID的记录
     */
    public int deleteById(String ids) {
        String sql = "DELETE FROM survey WHERE id IN " + ids;
        return jdao.update(sql);
    }

    /**
     * 禁用指定ID的记录
     */
    public int unableById(String ids) {
        String sql = "UPDATE survey SET isable='禁用' WHERE id IN " + ids;
        return jdao.update(sql);
    }

    /**
     * 启用指定ID的记录
     */
    public int enableById(String ids) {
        String sql = "UPDATE survey SET isable='启用' WHERE id IN " + ids;
        return jdao.update(sql);
    }

    /**
     * 发布指定ID的记录
     */
    public int publishById(String ids) {
        String sql = "UPDATE survey SET publish='已发布' WHERE id IN " + ids;
        return jdao.update(sql);
    }

    /**
     * 回收指定ID的记录
     */
    public int recycleById(String ids) {
        String sql = "UPDATE survey SET publish='已回收' WHERE id IN " + ids;
        return jdao.update(sql);
    }

    /**
     * 重置指定ID的记录
     */
    public int resetById(String ids) {
        String sql = "UPDATE survey SET publish='可编辑' , hit=0 WHERE id IN " + ids;
        String sql1 = "DELETE FROM answer WHERE surveyid IN " + ids;
        jdao.update(sql1);
        return jdao.update(sql);
    }

    /**
     * 检查指定ID的survey是否发布
     */
    public int checkpublishById(String id) {
        int flag;
        String sql = "SELECT publish FROM survey WHERE id=" + id;
        String a = jdao.queryForObject(sql, String.class);
        if (a.equals("已发布")) {
            flag = 1;
        } else {
            flag = 0;
        }
        return flag;
    }

    /**
     * 获取指定ID的记录
     */
    public Map<String, Object> getSurveyById(String id) {

        String sql = "SELECT id,`type`,title,description,image FROM survey WHERE id = " + id;

        try {

            return jdao.queryForMap(sql);

        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("SQL语句:" + sql + "执行失败,原因为: " + e.getMessage());
            return null;
        }
    }

    /**
     * 获取按hit排序记录
     */
    public List<Map<String, Object>> getSurveyByHit() {

        String sql = "SELECT hit,id,`type`,title,description,image FROM survey WHERE isable='启用' AND publish='已发布' ORDER BY hit DESC LIMIT 8";

        try {

            return jdao.queryForList(sql);

        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("SQL语句:" + sql + "执行失败,原因为: " + e.getMessage());
            return null;
        }
    }

    /**
     * 获取按hit及type排序记录
     */
    public List<Map<String, Object>> getSurveyByTypeAndHit(String type) {

        String sql = "SELECT createtime,hit,id,`type`,title,description,image FROM survey WHERE isable='启用' AND publish='已发布' AND `type`='" + type + "' ORDER BY hit DESC";

        try {

            return jdao.queryForList(sql);

        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("SQL语句:" + sql + "执行失败,原因为: " + e.getMessage());
            return null;
        }
    }

    /**
     * 获取按时间排序记录
     */
    public List<Map<String, Object>> getSurveyByCreatetime() {

        String sql = "SELECT createtime,id,`type`,title,description,image FROM survey WHERE isable='启用' AND publish='已发布' ORDER BY createtime DESC LIMIT 8";

        try {

            return jdao.queryForList(sql);

        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("SQL语句:" + sql + "执行失败,原因为: " + e.getMessage());
            return null;
        }
    }

    /**
     * 获取type按时间排序记录
     */
    public List<Map<String, Object>> getSurveyByTypeAndCreatetime(String type) {

        String sql = "SELECT createtime,id,`type`,title,description,image FROM survey WHERE isable='启用' AND publish='已发布' AND `type`='" + type + "' ORDER BY createtime DESC";

        try {

            return jdao.queryForList(sql);

        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("SQL语句:" + sql + "执行失败,原因为: " + e.getMessage());
            return null;
        }
    }

    /**
     * 获取type按时间排序记录
     */
    public List<Map<String, Object>> getSurveyByKeyWord(String kword) {

        String sql = "SELECT createtime,id,`type`,title,description,image FROM survey WHERE isable='启用' AND publish='已发布' AND title LIKE '%" + kword + "%' ORDER BY hit DESC";

        try {

            return jdao.queryForList(sql);

        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("SQL语句:" + sql + "执行失败,原因为: " + e.getMessage());
            return null;
        }
    }

    /**
     * 保存
     */
    @Override
    public int insert(Object model) {
        return 0;
    }

    /**
     * 修改
     */
    @Override
    public int update(Object model) {
        return 0;
    }

    @Override
    public Object select(String[] conditions, String order, int startRow, int endRow) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public Object export(String[] conditions, String order) {
        // TODO Auto-generated method stub
        return null;
    }

}
