package com.qog.util;

public class Constant {
	public static final int STATUS_CODE_FAILURE = 0;
	public static final int STATUS_CODE_SUCCESS = 1;
	public static final int STATUS_CODE_LOGIN_FAILURE = 5;
	public static final int STATUS_CODE_NO_ACCESS = 10;

	public static final int STATUS_CODE_DB_FAILURE = 100;
	public static final int STATUS_CODE_DUPLICATE = 101;
	public static final int STATUS_CODE_EMPTY_RESULT = 102;

	public static final int STATUS_CODE_IMPORT_FILE_FAILURE = 200;
	public static final int STATUS_CODE_IMPORT_FILE_FAILURE_WITH_REASON = 201;
	public static final int STATUS_CODE_EXPORT_FILE_FAILURE = 202;

	public static final int STATUS_CODE_INFRARED_COLLECT_FAILURE_WITH_REASON = 300;

	public static final int MAX_IMPORT_FILE_SIZE = 5 * 1024 * 1024;
}
