package com.qog.service;

import com.qog.util.Constant;
import com.qog.util.Service;
import com.qog.model.Answer;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.transaction.support.TransactionTemplate;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@SuppressWarnings("unused")
public class AnswerService implements Service {
    private static final Log logger = LogFactory.getLog(AnswerService.class);
    private JdbcTemplate jdao;
    private TransactionTemplate jtx;

    public AnswerService() {
    }

    public AnswerService(JdbcTemplate jdao, TransactionTemplate jtx) {
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
     * 判断用户是否填过此问卷
     */
    public boolean hasDuplicateUS(int userid, int surveyid) {
        return jdao.queryForObject(" SELECT COUNT(*) FROM answer WHERE userid=" + userid + " AND surveyid=" + surveyid, Integer.class) > 0;
    }

    /**
     * 插入数据
     */

    public int insertAnswers(int userid, int surveyid, List<Answer> answers) {
        // 执行事务
        return jtx.execute(status -> {
            try {
                for (Answer ans : answers) {
                    String opName = "";
                    String opValue = "";
                    String type = ans.getType();
                    if (type.equals("check") || type.equals("radio")) {
                        String content = ans.getContent();
                        if (!content.equals("")) {
                            String[] opHitName = content.split(",");
                            if (opHitName.length > 0) {
                                for (String string : opHitName) {
                                    opName = opName + "," + string;
                                    opValue = opValue + ",'checked'";
                                }
                            }
                        }
                    }
                    String sqlString = "INSERT INTO answer(userid,`number`,`type`,surveyid,answertime,content" + opName + ") VALUES(?, ?, ?, ?, NOW() , ? " + opValue
                            + ")";
                    jdao.update(sqlString, userid, ans.getNumber(), ans.getType(), ans.getSurveyid(), ans.getContent());

                }
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
    public Map<String, Object> retPagination(String query_name, String date_from, String date_to, String pageSize, String pageNumber, String sort, String order) {
        Map<String, Object> map = new HashMap<>();
        String readedPaper = String.valueOf((Integer.valueOf(pageNumber) - 1) * Integer.valueOf(pageSize));
        System.out.println("分页当期翻过的页：" + readedPaper);

        String sql;
        String totalsql;

        if (query_name == null && date_from == null && date_to == null) {
            String tb_original = "(SELECT `user`.name username,survey.title surveytitle,answer.* FROM (`user` INNER JOIN (SELECT userid,surveyid,MAX(answertime) answertime FROM answer GROUP BY userid,surveyid) AS answer ON `user`.id=answer.userid)INNER JOIN survey ON answer.surveyid= survey.id) AS tb_original";

            String tb_odr = "(SELECT tb_original.* FROM " + tb_original + " ORDER BY " + sort + " " + order + ") AS tb_odr";

            sql = "SELECT * FROM " + tb_odr + " LIMIT " + readedPaper + "," + pageSize;
            totalsql = "SELECT COUNT(*) FROM " + tb_odr;
        } else {
            if (query_name != null) {
                query_name = " WHERE survey.title LIKE '%" + query_name + "%'";
            } else {
                query_name = "";
            }
            if (date_from != null) {
                if (query_name.equals("")) {
                    date_from = " WHERE answer.answertime >'" + date_from + "'";
                } else {
                    date_from = " AND answer.answertime >'" + date_from + "'";
                }
            } else {
                date_from = "";
            }
            if (date_to != null) {
                if (query_name.equals("") && date_from.equals("")) {
                    date_to = " WHERE DATE_SUB(answer.answertime,INTERVAL 1 DAY) <='" + date_to + "'";
                } else {
                    date_to = " AND DATE_SUB(answer.answertime,INTERVAL 1 DAY) <='" + date_to + "'";
                }
            } else {
                date_to = "";
            }
            String conditionString = query_name + date_from + date_to;

            String tb_original = "(SELECT `user`.name username,survey.title surveytitle,answer.* FROM (`user` INNER JOIN (SELECT userid,surveyid,MAX(answertime) answertime FROM answer GROUP BY userid,surveyid) AS answer ON `user`.id=answer.userid)INNER JOIN survey ON answer.surveyid= survey.id " + conditionString + ") AS tb_original";

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
        int a = 0;
        String[] answers = ids.split("\\|");
        for (String string : answers) {
            String[] answer = string.split(",");
            String sql = "DELETE FROM answer WHERE surveyid=" + answer[0] + " AND userid=" + answer[1];
            jdao.update(sql);
            a = a + 1;
        }
        return a;
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
     * 获取指定ID的记录
     */
    public List<Map<String, Object>> getAnswerByUSId(int surveyid, int userid) {

        String sql = "SELECT surveyid,`number`,`type`,content FROM answer WHERE surveyid = " + surveyid + " AND userid=" + userid + " ORDER BY `number` ASC";

        try {

            return jdao.queryForList(sql);

        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("SQL语句:" + sql + "执行失败,原因为: " + e.getMessage());
            return null;
        }
    }

    /**
     * 获取指定ID的问题和答案记录
     */
    public List<Map<String, Object>> getAnswerAndSurveyByUSId(int surveyid, int userid) {

        String sql = "SELECT survey.title surveytitle,survey.description surveydescription,question.*,answer.content,answer.answertime FROM (answer INNER JOIN question ON answer.surveyid=question.surveyid AND answer.number=question.number) INNER JOIN survey ON answer.surveyid=survey.id WHERE answer.surveyid = "
                + surveyid + " AND answer.userid= " + userid + " ORDER BY answer.number ASC";

        try {

            return jdao.queryForList(sql);

        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("SQL语句:" + sql + "执行失败,原因为: " + e.getMessage());
            return null;
        }
    }

    /**
     * 获取指定userID的记录
     */
    public List<Map<String, Object>> getAnswerByUserId(int userid) {

        String sql = "SELECT * FROM(SELECT `user`.name username,survey.title,survey.description description,survey.createtime createtime,survey.image image,answer.* FROM (`user` INNER JOIN (SELECT userid,surveyid,MAX(answertime) answertime FROM answer GROUP BY userid,surveyid) AS answer ON `user`.id=answer.userid)INNER JOIN survey ON answer.surveyid= survey.id) AS tb_usa WHERE userid="
                + userid + " ORDER BY answertime DESC";

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
