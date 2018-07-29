package com.qog.service;

import com.qog.util.Service;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.LinkedList;
import java.util.List;
import java.util.Map;

@SuppressWarnings("unused")
public class NavService implements Service {
	private static final Log logger = LogFactory.getLog(NavService.class);
	private JdbcTemplate jdao;

	public NavService() {
	}

	public NavService(JdbcTemplate jdao) {
		this.jdao = jdao;
	}

	/**
	 * 根据父节点和权限判断查询子节点信息
	 */
	public List<Map<String, Object>> findNodeByNidAndAuth(String id, String auth) {
		String[] arrayString = auth.split(",");
		StringBuilder authBuilder = new StringBuilder();
		for (int i = 0; i < arrayString.length; i++) {
			if (i == arrayString.length - 1) {
				authBuilder.append("'").append(arrayString[i]).append("'");
			} else {
				authBuilder.append("'").append(arrayString[i]).append("',");
			}
		}
		auth = authBuilder.toString();
		return jdao.queryForList("SELECT id,text,state,iconCls,url FROM navbar WHERE nid=" + id
				+ " AND text IN (" + auth + ")");

	}

	/**
	 * 根据父节点判断查询子节点信息
	 */
	public List<Map<String, Object>> findNodeByNid(String id) {

		return jdao.queryForList("SELECT id,text,state,iconCls,url FROM navbar WHERE nid=" + id);

	}

	/**
	 * 根据权限判断父节点
	 */
	@SuppressWarnings("null")
	public List<Map<String, Object>> findNodeByAuth(String auth) {
		List<Map<String, Object>> lObjects = new LinkedList<>();
		if (auth.contains("问卷管理") || auth.contains("问卷审核")) {
			lObjects.add(jdao.queryForMap("SELECT id,text,state,iconCls,url FROM navbar WHERE id="
					+ "1" + ""));
		}
		if (auth.contains("问卷发布与回收")) {
			lObjects.add(jdao.queryForMap("SELECT id,text,state,iconCls,url FROM navbar WHERE id="
					+ "2" + ""));
		}
		if (auth.contains("查看答卷") || auth.contains("答卷分析")) {
			lObjects.add(jdao.queryForMap("SELECT id,text,state,iconCls,url FROM navbar WHERE id="
					+ "3" + ""));
		}
		if (auth.contains("用户管理")) {
			lObjects.add(jdao.queryForMap("SELECT id,text,state,iconCls,url FROM navbar WHERE id="
					+ "4" + ""));
		}
		return lObjects;

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
