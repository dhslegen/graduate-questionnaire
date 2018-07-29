package com.qog.service;

import com.qog.util.Service;
import model.User;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;

import java.sql.Statement;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@SuppressWarnings("unused")
public class UserService implements Service {
    private static final Log logger = LogFactory.getLog(UserService.class);
    private JdbcTemplate jdao;

    public UserService() {
    }

    public UserService(JdbcTemplate jdao) {
        this.jdao = jdao;
    }

    /**
     * 判断用戶名是否重复
     */
    private boolean hasDuplicate(String username) {
        return jdao.queryForObject(" SELECT COUNT(*) FROM `user` WHERE name = '" + username + "'", Integer.class) > 0;
    }

    /**
     * 判断学号是否重复
     */
    private boolean hasNoDuplicateStudentid(String studentid) {
        return jdao.queryForObject(" SELECT COUNT(*) FROM `user` WHERE studentid = '" + studentid + "'", Integer.class) <= 0;
    }

    /**
     * 判断用戶名是否重复
     */
    public boolean hasNoDuplicateRegister(String username) {
        return jdao.queryForObject(" SELECT COUNT(*) FROM `user` WHERE name = '" + username + "'", Integer.class) <= 0;
    }

    /**
     * 修改时判断与其他用戶名是否重复
     */
    public boolean hasNoOtherDuplicate(String username, int id) {
        return jdao.queryForObject(" SELECT COUNT(*) FROM `user` WHERE name = '" + username + "' AND id <> " + id, Integer.class) <= 0;
    }

    /**
     * 新增数据并返回即时ID
     */

    public int insertAndReturnID(String name, String sex, String password, String auth, String tel, String email, String studentid) {
        KeyHolder keyHolder = new GeneratedKeyHolder();
        String strSql = "insert into `user`(name,sex,registertime,password,auth,tel,email,studentid,graduation) values(?,?,NOW(),?,?,?,?,?,?)";
        if (hasNoDuplicateStudentid(studentid)) {
            if (!hasDuplicate(name)) {
                jdao.update(conn -> {
                    int i = 0;
                    java.sql.PreparedStatement ps;
                    ps = conn.prepareStatement(strSql, Statement.RETURN_GENERATED_KEYS);
                    ps.setString(++i, name);
                    ps.setString(++i, sex);
                    ps.setString(++i, password);
                    ps.setString(++i, auth);
                    ps.setString(++i, tel);
                    ps.setString(++i, email);
                    ps.setString(++i, studentid);
                    ps.setString(++i, Integer.toString(Integer.valueOf(studentid.substring(0, 4)) + 4));
                    return ps;
                }, keyHolder);

                return keyHolder.getKey().intValue();
            } else {
                return -1;
            }
        } else {
            return -2;
        }
    }

    /**
     * 新增批量用户
     */
    public String insertUsersByExcel(List<User> list) {
        StringBuilder result = new StringBuilder();
        int i = 0;
        for (User user : list) {
            i = i + 1;
            String studentid = user.getStudentid();
            try {
                if (hasNoDuplicateStudentid(studentid)) {
                    // 不存在就添加
                    String sql = "INSERT INTO `user` (studentid,name,password,registertime,tel,email,sex,graduation) VALUES(?,?,?,NOW(),?,?,?,?)";
                    jdao.update(sql, user.getStudentid(), user.getName(), user.getPassword(), user.getTel(), user.getEmail(), user.getSex(),
                            Integer.toString(Integer.valueOf(user.getStudentid().substring(0, 4)) + 4));
                    result.append("第").append(i).append("条记录新增成功！");
                } else {
                    // 存在就更新
                    String sql = "UPDATE `user` SET name=?,password=?,registertime=NOW(),tel=?,email=?,sex=?,graduation=? WHERE studentid=?";
                    jdao.update(sql, user.getName(), user.getPassword(), user.getTel(), user.getEmail(), user.getSex(), Integer.toString(Integer.valueOf(user.getStudentid().substring(0, 4)) + 4),
                            user.getStudentid());
                    result.append("第").append(i).append("条记录更新成功！");
                }
            } catch (Exception e) {
                e.printStackTrace();
                System.out.println("SQL语句:" + "执行失败,原因为: " + e.getMessage());
                return "数据库进程错误！";
            }
        }
        return result.toString();
    }

    /**
     * 新增数据并返回即时ID
     */

    public int updateUserInfo(String name, String password, int id) {
        int a;
        String strSql = "UPDATE `user` SET name=?,password=? WHERE id=?";
        if (hasNoOtherDuplicate(name, id)) {
            a = jdao.update(conn -> {
                int i = 0;
                java.sql.PreparedStatement ps;
                ps = conn.prepareStatement(strSql);
                ps.setString(++i, name);
                ps.setString(++i, password);
                ps.setInt(++i, id);
                return ps;
            });

        } else {
            return -1;
        }
        return a;
    }

    /**
     * 返回分页信息：
     */
    public Map<String, Object> retPagination(String username, String date_from, String date_to, String pageSize, String pageNumber, String sort, String order) {
        Map<String, Object> map = new HashMap<>();
        String readedPaper = String.valueOf((Integer.valueOf(pageNumber) - 1) * Integer.valueOf(pageSize));
        System.out.println("分页当期翻过的页：" + readedPaper);

        String sql;
        String totalsql;

        if (username == null && date_from == null && date_to == null) {
            String tb_original = "(SELECT `user`.* FROM `user`) AS tb_original";

            String tb_odr = "(SELECT tb_original.* FROM " + tb_original + " ORDER BY " + sort + " " + order + ") AS tb_odr";

            sql = "SELECT * FROM " + tb_odr + " LIMIT " + readedPaper + "," + pageSize;
            totalsql = "SELECT COUNT(*) FROM " + tb_odr;
        } else {
            if (username != null) {
                username = " WHERE name LIKE '%" + username + "%'";
            } else {
                username = "";
            }
            if (date_from != null) {
                if (username.equals("")) {
                    date_from = " WHERE registertime >'" + date_from + "'";
                } else {
                    date_from = " AND registertime >'" + date_from + "'";
                }
            } else {
                date_from = "";
            }
            if (date_to != null) {
                if (username.equals("") && date_from.equals("")) {
                    date_to = " WHERE DATEADD(DAY, -1, registertime) <='" + date_to + "'";
                } else {
                    date_to = " AND DATEADD(DAY, -1, registertime) <='" + date_to + "'";
                }
            } else {
                date_to = "";
            }
            String conditionString = username + date_from + date_to;

            String tb_original = "(SELECT `user`.* FROM `user` " + conditionString + ") AS tb_original";

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
        String sql = "DELETE FROM `user` WHERE id IN " + ids;
        return jdao.update(sql);
    }

    /**
     * 获取指定ID的记录
     */
    public Map<String, Object> getUserById(String id) {

        String sql = "SELECT studentid,id,name,sex,password,auth,tel,email FROM `user` WHERE id = " + id;

        try {

            return jdao.queryForMap(sql);

        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("SQL语句:" + sql + "执行失败,原因为: " + e.getMessage());
            return null;
        }
    }

    /**
     * 修改数据并返回影响行数
     */

    public int updateAndReturnID(String name, String sex, String password, String auth, String tel, String email, int id) {
        String strSql;

        strSql = "UPDATE `user` SET name=?,sex=?,password=?,auth=?,tel=?,email=? WHERE id=?";
        if (hasNoOtherDuplicate(name, id)) {

            return jdao.update(conn -> {
                int i = 0;
                java.sql.PreparedStatement ps;
                ps = conn.prepareStatement(strSql);
                ps.setString(++i, name);
                ps.setString(++i, sex);
                ps.setString(++i, password);
                ps.setString(++i, auth);
                ps.setString(++i, tel);
                ps.setString(++i, email);
                ps.setInt(++i, id);
                return ps;
            });
        } else {
            return -1;
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

    /**
     * 查询用户密码是否正确
     */
    public List<Integer> getIdByNamePassword(String name, String password) {
        return jdao.queryForList(" select id from `user` where " + name + " and " + password + " LIMIT 1", Integer.class);
    }

    /**
     * 查询用户权限
     */
    public String getAuthByName(String name) {

        return jdao.queryForObject(" select auth from `user` where " + name, String.class);

    }

    /**
     * 查询用户ID
     */
    public String getIdByName(String name) {

        return jdao.queryForObject(" select id from `user` where " + name, String.class);

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
