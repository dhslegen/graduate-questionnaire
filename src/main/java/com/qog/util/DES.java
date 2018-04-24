package com.qog.util;

import javax.crypto.Cipher;
import javax.crypto.spec.SecretKeySpec;

public class DES {
	private byte[] KEY = new byte[] { 7, 0, 6, 6, 4, 1, 7, 0 }; // 必须8位
	// public byte[] IV; //必须8位

	/**
	 * 将byte数组转换为表示16进制值的字符串， 如：byte[]{8,18}转换为：0813， 和public byte[]
	 * hexString2ByteArray(String s) 互为可逆的转换过程
	 * 
	 * @param bytes
	 *            需要转换的byte数组
	 * @return 转换后的字符串
	 * @throws Exception
	 *             本方法不处理任何异常，所有异常全部抛出
	 */
	private String byteArray2HexString(byte[] bytes) throws Exception {
		int iLen = bytes.length;
		// 每个byte用两个字符才能表示，所以字符串的长度是数组长度的两倍
		StringBuffer sb = new StringBuffer(iLen * 2);
		for (int i = 0; i < iLen; i++) {
			int intTmp = bytes[i];
			// 把负数转换为正数
			while (intTmp < 0)
				intTmp = intTmp + 256;
			// 小于0F的数需要在前面补0
			if (intTmp < 16)
				sb.append("0");
			sb.append(Integer.toString(intTmp, 16));
		}
		return sb.toString();
	}

	/**
	 * 将表示16进制值的字符串转换为byte数组， 和public String byteArray2HexString(byte[]
	 * bytes)互为可逆的转换过程
	 * 
	 * @param s
	 *            需要转换的字符串
	 * @return 转换后的byte数组
	 * @throws Exception
	 *             本方法不处理任何异常，所有异常全部抛出
	 */
	private byte[] hexString2ByteArray(String s) throws Exception {
		byte[] arrB = s.getBytes();
		int iLen = arrB.length;
		// 两个字符表示一个字节，所以字节数组长度是字符串长度除以2
		byte[] arrOut = new byte[iLen / 2];
		for (int i = 0; i < iLen; i = i + 2) {
			String strTmp = new String(arrB, i, 2);
			arrOut[i / 2] = (byte) Integer.parseInt(strTmp, 16);
		}
		return arrOut;
	}

	public byte[] encrypt(byte[] clear) throws Exception {
		Cipher encryptCipher = Cipher.getInstance("DES");
		encryptCipher.init(Cipher.ENCRYPT_MODE, new SecretKeySpec(KEY, "DES"));
		return encryptCipher.doFinal(clear);
	}

	public String encrypt(String clearText) throws Exception {
		return byteArray2HexString(encrypt(clearText.getBytes()));
	}

	public byte[] decrypt(byte[] secret) throws Exception {
		Cipher decryptCipher = Cipher.getInstance("DES");
		decryptCipher.init(Cipher.DECRYPT_MODE, new SecretKeySpec(KEY, "DES"));
		return decryptCipher.doFinal(secret);
	}

	public String decrypt(String secretText) throws Exception {
		return new String(decrypt(hexString2ByteArray(secretText)));
	}

	// public static void main(String[] args) throws Exception {
	// DES des = new DES();
	// des.KEY = BytesUtil.hexStringToBytes("7A676B654073696E");
	// //des.IV = BytesUtil.hexStringToBytes("7A676B654073696E");
	// String s =
	// "B0860102030405060708000005014000005110117295888283BC00000000002004DC01D81F00050008CA000007D00240000002060320161113091812FAA33B9F";
	// byte[] bb = new byte[]{8, 8, 8, 8, 8, 8, 8, 8};
	// s += new String(bb);
	// byte[] b = des.encrypt(s.getBytes());
	// System.out.println(BytesUtil.bytesToHexString(b).toLowerCase());
	// }
}
