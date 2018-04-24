package com.qog.util;

public class BytesUtil {
	public static String bytesToHexString(byte[] data) {
		String result = "";
		if (data == null)
			return result;
		for (int i = 0; i < data.length; i++) {
			if (data[i] < 0)
				result += Integer.toHexString(256 + data[i]);
			else if (data[i] < 16)
				result += "0" + Integer.toHexString(data[i]);
			else
				result += Integer.toHexString(data[i]);
		}
		return result.toUpperCase();
	}

	public static String byteToHexString(byte data) {
		String result = "";
		if (data < 0) {
			result = Integer.toHexString(256 + data);
		} else if (data < 16) {
			result = "0" + Integer.toHexString(data);
		} else {
			result = Integer.toHexString(data);
		}
		return result.toUpperCase();
	}

	public static byte[] hexStringToBytes(String hexStr) {
		String dataTemp = hexStr.toUpperCase();
		if (dataTemp.length() % 2 > 0) {
			dataTemp = "0" + dataTemp;
		}
		int len = (dataTemp.length() / 2);
		byte[] result = new byte[len];
		char[] achar = dataTemp.toCharArray();
		for (int i = 0; i < len; i++) {
			int pos = i * 2;
			result[i] = (byte) (toByte(achar[pos]) << 4 | toByte(achar[pos + 1]));
		}
		return result;
	}

	/**
	 * HEXString转byte
	 * 
	 * @param hexStr
	 *            要转换的HEXString
	 * @return 转换的byte
	 */
	public static byte hexStringToByte(String hexStr) {
		String dataTemp = hexStr.toUpperCase();
		if (dataTemp.length() == 1) {
			dataTemp = "0" + dataTemp;
		}
		byte result;
		char[] achar = dataTemp.toCharArray();
		result = (byte) (toByte(achar[0]) << 4 | toByte(achar[1]));
		return result;
	}

	private static byte toByte(char c) {
		byte b = (byte) "0123456789ABCDEF".indexOf(c);
		return b;
	}

	public static byte[] shortToByteArray(short s) {
		byte[] targets = new byte[2];
		for (int i = 0; i < 2; i++) {
			int offset = (targets.length - 1 - i) * 8;
			targets[i] = (byte) ((s >>> offset) & 0xff);
		}
		return targets;
	}

	public static byte[] intToByteArray(int i) {
		byte[] result = new byte[4];
		result[0] = (byte) (i >>> 24); // 取最高8位放到0下标
		result[1] = (byte) (i >>> 16); // 取次高8为放到1下标
		result[2] = (byte) (i >>> 8); // 取次低8位放到2下标
		result[3] = (byte) (i); // 取最低8位放到3下标
		return result;
	}

	public static int bytesToInt(byte[] data) {
		int result = 0;
		for (int i = 0; i < data.length; i++) {
			int shift = (data.length - 1 - i) * 8;
			result += (data[i] & 0xFF) << shift;
		}
		return result;
	}

	public static long bytesToLong(byte[] data) {
		long result = 0;
		for (int i = 0; i < data.length; i++) {
			int shift = (data.length - 1 - i) * 8;
			result += (long) (data[i] & 0xFF) << shift;
		}
		return result;
	}

	/**
	 * integer转byte[2]
	 * 
	 * @param intIn
	 *            要转换的integer
	 * @return 转换的byte[]
	 */
	public static byte[] intToByte2(int intIn) {
		byte[] result = new byte[2];
		result[0] = (byte) (intIn >>> 8); // 取次低8位放到2下标
		result[1] = (byte) (intIn); // 取最低8位放到3下标
		return result;
	}

	/**
	 * byte[]转short
	 * 
	 * @param data
	 *            要转换的byte[]
	 * @return 转换的integer
	 */
	public static short byteToShort(byte data) {
		short result = 0;
		result = (short) ((data & 0xFF));
		return result;
	}

	/**
	 * 字符串补字符
	 * 
	 * @param sOldStr元原字符串
	 * @param SupplyWay补充方式
	 *            ：0前补；1后补；其它 不变
	 * @param SupplyChar补充字符
	 * @param SupplyNum需占满位数
	 */
	public static String supplyString(String sOldStr, int SupplyWay,
			String SupplyChar, int SupplyNum) {
		String sTmp = "";
		for (int i = sOldStr.length(); i < SupplyNum; i++) {
			sTmp = sTmp + SupplyChar;
		}
		switch (SupplyWay) {
		case 0:
			sTmp = sTmp + sOldStr;
			break;
		case 1:
			sTmp = sOldStr + sTmp;
			break;
		default:
			sTmp = sOldStr;
			break;
		}
		return sTmp;
	}

	/**
	 * byte[]转ASC String
	 * 
	 * @param data
	 *            要转换的byte[]
	 * @return 转换后的ASC String
	 */
	public static String bytesToASCString(byte[] inputBytes) {
		int bytesLen = 0;
		String outputString = "";
		StringBuffer stringBuffer = new StringBuffer();
		char[] tChars;

		bytesLen = inputBytes.length;
		tChars = new char[bytesLen];

		for (int i = 0; i < bytesLen; i++) {
			tChars[i] = (char) inputBytes[i];
		}

		stringBuffer.append(tChars);
		outputString = stringBuffer.toString();
		return outputString;
	}
}
