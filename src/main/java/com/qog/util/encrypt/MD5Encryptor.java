package com.qog.util.encrypt;

import com.qog.util.MD5;

public class MD5Encryptor implements Encryptor {

	public MD5Encryptor() {
	}

	public String encrypt(String clearText) throws Exception {
		if (clearText == null)
			return null;
		return MD5.getMD5Code(clearText);
	}
}
