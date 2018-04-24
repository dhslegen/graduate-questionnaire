package com.qog.util;

public interface Service {
	int insert(Object model);

	int update(Object model);

	Object select(String[] conditions, String order, int startRow, int endRow);

	Object export(String[] conditions, String order);
}
