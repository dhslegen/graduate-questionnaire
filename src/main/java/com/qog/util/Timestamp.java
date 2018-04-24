package com.qog.util;

import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;

public class Timestamp {
	public int getIntTimeStamp() {
		Calendar calendar = new GregorianCalendar();
		calendar.setTime(new Date());
		int month = calendar.get(Calendar.MONTH);
		int date = calendar.get(Calendar.DATE);
		int hour = calendar.get(Calendar.HOUR);
		int minute = calendar.get(Calendar.MINUTE);
		int second = calendar.get(Calendar.SECOND);
		int timestamp = (month + 1) * 100000000 + date * 1000000 + hour * 10000
				+ minute * 100 + second;
		return timestamp;
	}

	public String getStringTimeStamp() {
		int timeStamp = getIntTimeStamp();
		return (timeStamp < 1000000000) ? "0" + String.valueOf(timeStamp)
				: String.valueOf(timeStamp);
	}

	public byte[] getBytesTimeStamp() {
		return getStringTimeStamp().getBytes();
	}

}
