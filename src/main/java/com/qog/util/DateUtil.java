package com.qog.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class DateUtil {

	/**
	 * 日期转换成字符串
	 * 
	 * @param date
	 * @return str
	 */
	public static String dateToStr(Date date) {

		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		String str = format.format(date);
		return str;
	}

	/**
	 * 日期转换成字符串精确到天
	 * 
	 * @param date
	 * @return str
	 */
	public static String dateToStrDay(Date date) {

		SimpleDateFormat format = new SimpleDateFormat("yyyyMMdd");
		String str = format.format(date);
		return str;
	}

	/**
	 * 日期转换成字符串精确到秒
	 * 
	 * @param date
	 * @return str
	 */
	public static String dateToStrS(Date date) {

		SimpleDateFormat format = new SimpleDateFormat("YYYYMMddHHmmss");
		String str = format.format(date);
		return str;
	}

	/**
	 * 日期转换成字符串天
	 * 
	 * @param date
	 * @return str
	 */
	public static String dateToStrTime(Date date) {

		SimpleDateFormat format = new SimpleDateFormat("HHmmss");
		String str = format.format(date);
		return str;
	}

	/**
	 * 字符串转换成日期
	 * 
	 * @param str
	 * @return date
	 */
	public static Date strToDate(String str) {

		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		Date date = null;
		try {
			date = format.parse(str);
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return date;
	}

	// 十六进制日期转字符串
	public static String dateConversion(String recordContent) {
		long startCollectionTime = Long.parseLong(recordContent, 16);
		System.out.println(startCollectionTime);
		Date date = new Date(startCollectionTime * 1000);
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		String sDate = sdf.format(date);
		return sDate;
	}

	public static void main(String[] args) {

		Date date = new Date();
		System.out.println("日期转字符串：" + DateUtil.dateToStr(date));
		System.out.println("字符串转日期："
				+ DateUtil.strToDate(DateUtil.dateToStr(date)));
		System.out.println("字符串转日期：" + DateUtil.dateConversion("0d0000"));

	}
}
