package com.qog.util.encrypt;

public class XorEncryptor implements Encryptor {

	private final int KEY = 0xAA;

	public XorEncryptor() {
	}

	public String encrypt(String clearText) throws Exception {
		if (clearText == null)
			return null;
		byte[] buffer = clearText.getBytes();
		for (int i = 0; i < buffer.length; i++)
			buffer[i] = (byte) (buffer[i] ^ KEY);
		StringBuffer sb = new StringBuffer();
		for (int i = 0; i < buffer.length; i++)
			sb.append(Integer.toHexString(buffer[i]));
		return sb.toString();
	}

}
