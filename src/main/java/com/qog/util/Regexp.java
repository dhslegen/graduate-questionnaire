package com.qog.util;

import java.util.regex.Pattern;

public class Regexp {
	/**
	 * 是否0-9数字
	 * 
	 * @param strnumber
	 *            要验证的字符串
	 * @return
	 */
	public static boolean isNumber(String strnumber) {
		return Pattern.matches("^[0-9]*$", strnumber);
	}

	/**
	 * 是否HEX数字
	 * 
	 * @param strnumber
	 *            要验证的字符串
	 * @return
	 */
	public static boolean isHexNumber(String strnumber) {
		return Pattern.matches("^(0[xX])?[0-9a-fA-F]+$", strnumber);
	}

	/**
	 * 验证年月日时分秒 yyyy-MM-dd HH:mm:ss
	 * 
	 * @param strIn
	 *            要验证的字符串
	 * @return
	 */
	public static boolean isDateTime(String strIn) {
		return Pattern
				.matches(
						"^(([0-9]\\d{3}(-)?)?((?:0?[1-9]|1[0-2])(-)?)?(?:0?[1-9]|[1-2]\\d|3[0-1])$)|((([0-9]\\d{3}(-)?)?((?:0?[1-9]|1[0-2])(-)?)?(?:0?[1-9]|[1-2]\\d|3[0-1]))?( )?(((?:0?[1-9]|1\\d|2[0-3])(:)?)?((?:0?[1-9]|[1-5]\\d)(:)?)?(?:0?[1-9]|[1-5]\\d)))$",
						strIn);
	}

	/**
	 * 验证年月日
	 * 
	 * @param strIn
	 *            要验证的字符串
	 * @return
	 */
	public static boolean isDate(String strIn) {
		return Pattern
				.matches(
						"^(([0-9]\\d{3}(-)?)?((?:0?[1-9]|1[0-2])(-)?)?(?:0?[1-9]|[1-2]\\d|3[0-1])$)",
						strIn);
	}

	/**
	 * 验证IP
	 * 
	 * @param strIn
	 *            要验证的字符串
	 * @return
	 */
	public static boolean isIP(String strIn) {
		return Pattern
				.matches(
						"^(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])$",
						strIn);
	}

	/**
	 * 验证端口号
	 * 
	 * @param strIn
	 *            要验证的字符串
	 * @return
	 */
	public static boolean isPort(String strIn) {
		return Pattern.matches("^[0-9]{1,5}", strIn);
	}

	/**
	 * 是否字母
	 * 
	 * @param strIn
	 *            要验证的字符串
	 * @return
	 */
	public static boolean isStr(String strIn) {
		return Pattern.matches("^[A-Za-z]+$", strIn);
	}

	/**
	 * 验证汉字
	 * 
	 * @param strIn
	 *            要验证的字符串
	 * @return
	 */
	public static boolean isChinese(String strIn) {
		return Pattern.matches("^[\u4e00-\u9fa5],{0,}$}", strIn);
	}
}
