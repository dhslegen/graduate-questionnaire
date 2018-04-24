package com.qog.util;

import java.text.DecimalFormat;

public class JWFormat {
	public static String fenToDegree(String value) {
		String[] valueStr = value.split("\\.");

		String intDegree = valueStr[0].substring(0, valueStr[0].length() - 2);
		String intFen = valueStr[0].substring(valueStr[0].length() - 2,
				valueStr[0].length());
		String fen = valueStr[1];

		String degree = intFen + "." + fen;

		DecimalFormat df = new DecimalFormat(".000000");
		String dDegree = df.format(Double.parseDouble(degree) / 60);

		return intDegree + dDegree;
	}
}
