package com.qog.service;

import com.qog.util.Service;
import com.qog.model.Answer;
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
public class QuestionService implements Service {
    private static final Log logger = LogFactory.getLog(QuestionService.class);
    private JdbcTemplate jdao;
    @SuppressWarnings("FieldCanBeLocal")
    private TransactionTemplate jtx;

    public QuestionService() {
    }

    public QuestionService(JdbcTemplate jdao, TransactionTemplate jtx) {
        this.jdao = jdao;
        this.jtx = jtx;
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
        String strSql = "INSERT INTO survey(title,description,createtime,isable,image,userid,`type`) VALUES(?,?,NOW(),?,?,?,?)";
        if (!hasDuplicate(userid, userid)) {
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
     * 修改数据并返回ID
     */

    public int updateAndReturnID(String title, String description, String image, String type, int userid, int id) {
        String strSql;
        if ("".equals(image)) {
            strSql = "UPDATE survey SET title=?,description=?,`type`=?,userid=?,createtime=NOW() WHERE id=?";

            return jdao.update(conn -> {
                int i = 0;
                java.sql.PreparedStatement ps;
                ps = conn.prepareStatement(strSql);
                ps.setString(++i, title);
                ps.setString(++i, description);
                ps.setString(++i, type);
                ps.setInt(++i, userid);
                ps.setInt(++i, id);
                return ps;
            });
        } else {
            strSql = "UPDATE survey SET title=?,description=?,image=?,`type`=?,userid=?,createtime=NOW() WHERE id=?";

            return jdao.update(conn -> {
                int i = 0;
                java.sql.PreparedStatement ps;
                ps = conn.prepareStatement(strSql);
                ps.setString(++i, title);
                ps.setString(++i, description);
                ps.setString(++i, image);
                ps.setString(++i, type);
                ps.setInt(++i, userid);
                ps.setInt(++i, id);
                return ps;
            });
        }
    }

    /**
     * 返回分页信息：
     */
    Map<String, Object> retPagination(String title, String date_from, String date_to, String pageSize, String pageNumber, String sort, String order) {
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
    int deleteById(String ids) {
        String sql = "DELETE FROM survey WHERE id IN " + ids;
        return jdao.update(sql);
    }

    /**
     * 获取指定ID的记录
     */
    Map<String, Object> getSurveyById(String id) {

        String sql = "SELECT id,type,title,description,image FROM survey WHERE id = " + id;

        try {

            return jdao.queryForMap(sql);

        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("SQL语句:" + sql + "执行失败,原因为: " + e.getMessage());
            return null;
        }
    }

    /**
     * 获取指定surveyID的问题记录
     */
    public List<Map<String, Object>> getQuestionsBySurveyId(int surveyid) {

        String sql = "SELECT * FROM question WHERE surveyid = " + surveyid + " ORDER BY `number` ASC ";

        try {

            return jdao.queryForList(sql);

        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("SQL语句:" + sql + "执行失败,原因为: " + e.getMessage());
            return null;
        }

    }

    /**
     * 获取指定surveyID的分析数据
     */
    public List<Map<String, Object>> getAnalysisBySurveyId(int surveyid) {

        String sql = "SELECT question.type,question.title,question.opA,question.opB,question.opC,question.opD,question.opE,question.opF,question.opG,question.opH,question.opI,tb_hit.* FROM question INNER JOIN(SELECT surveyid,`number`,COUNT(*) hitT,COUNT(opA) hitA,COUNT(opB) hitB,COUNT(opC) hitC,COUNT(opD) hitD,COUNT(opE) hitE,COUNT(opF) hitF,COUNT(opG) hitG,COUNT(opH) hitH,COUNT(opI) hitI FROM (SELECT `user`.graduation graduation,`user`.studentid studentid,answer.* FROM (`user` INNER JOIN answer ON `user`.id=answer.userid)) AS tb_answer_user WHERE surveyid="
                + surveyid + " GROUP BY surveyid,`number`) AS tb_hit ON question.surveyid=tb_hit.surveyid AND question.number=tb_hit.number  ORDER BY `number` ASC";

        try {

            return jdao.queryForList(sql);

        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("SQL语句:" + sql + "执行失败,原因为: " + e.getMessage());
            return null;
        }

    }

    /**
     * 获取指定surveyID,number,graduation的分析数据
     */
    public Map<String, Object> getSingleAnalysisBySurveyId(int surveyid, int number, String graduation) {
        if (graduation.equals("全部")) {
            graduation = "";
        } else {
            graduation = " AND graduation= " + graduation;
        }

        String sql = "SELECT question.type,question.title,question.opA,question.opB,question.opC,question.opD,question.opE,question.opF,question.opG,question.opH,question.opI,tb_hit.* FROM question INNER JOIN(SELECT surveyid,`number`,COUNT(*) hitT,COUNT(opA) hitA,COUNT(opB) hitB,COUNT(opC) hitC,COUNT(opD) hitD,COUNT(opE) hitE,COUNT(opF) hitF,COUNT(opG) hitG,COUNT(opH) hitH,COUNT(opI) hitI FROM (SELECT `user`.graduation graduation,`user`.studentid studentid,answer.* FROM (`user` INNER JOIN answer ON `user`.id=answer.userid)) AS tb_answer_user WHERE surveyid="
                + surveyid + " AND `number`=" + number + graduation + " GROUP BY surveyid,`number`) AS tb_hit ON question.surveyid=tb_hit.surveyid AND question.number=tb_hit.number  ORDER BY `number` ASC";

        try {

            return jdao.queryForMap(sql);

        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("SQL语句:" + sql + "执行失败,原因为: " + e.getMessage());
            return null;
        }

    }

    /**
     * 获取指定surveyID的分析数据用到的option
     */
    public List<String> getAnalysisOptionsBySurveyId(int surveyid) {

        String sql = "SELECT DISTINCT graduation FROM (SELECT `user`.graduation graduation,`user`.studentid studentid,answer.* FROM (`user` INNER JOIN answer ON `user`.id=answer.userid) WHERE surveyid="
                + surveyid + ") AS tb_answer_user ORDER BY graduation ASC";

        try {

            return jdao.queryForList(sql, String.class);

        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("SQL语句:" + sql + "执行失败,原因为: " + e.getMessage());
            return null;
        }

    }

    /**
     * 保存问卷的答案记录
     */
    int saveAnswers(List<Answer> retList) {
        int affectrows = 0;
        for (Answer ans : retList) {
            String type = ans.getType();
            if (type.equals("check")) {
                String content = ans.getContent();
                if (!content.equals("")) {
                    String[] opHitName = content.split(",");
                    if (opHitName.length > 0) {
                        for (String string : opHitName) {
                            string = string.replace("op", "hit");
                            String setstr = string + "=" + string + "+1";
                            String sql = "UPDATE question SET " + setstr + " WHERE surveyid=? AND `number`=?";
                            System.out.println("check拼接后的SQL：" + sql);
                            int affectrow = jdao.update(conn -> {
                                int i = 0;
                                java.sql.PreparedStatement ps;
                                ps = conn.prepareStatement(sql);
                                ps.setInt(++i, ans.getSurveyid());
                                ps.setInt(++i, ans.getNumber());
                                return ps;
                            });
                            affectrows = affectrows + affectrow;
                        }
                    }
                }
            } else if (type.equals("radio")) {
                String content = ans.getContent();
                if (!content.equals("")) {
                    content = content.replace("op", "hit");
                    String setstr = content + "=" + content + "+1";
                    String sql = "UPDATE question SET " + setstr + " WHERE surveyid=? AND `number`=?";
                    System.out.println("radio拼接后的SQL：" + sql);
                    int affectrow = jdao.update(conn -> {
                        int i = 0;
                        java.sql.PreparedStatement ps;
                        ps = conn.prepareStatement(sql);
                        ps.setInt(++i, ans.getSurveyid());
                        ps.setInt(++i, ans.getNumber());
                        return ps;
                    });
                    affectrows = affectrows + affectrow;
                }
            }
        }
        return affectrows;
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
