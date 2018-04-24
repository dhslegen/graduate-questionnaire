package com.qog.util.encrypt;

import com.qog.util.DES;

public class DESEncryptor implements Encryptor {

	public DESEncryptor() {
	}

	public String encrypt(String clearText) throws Exception {
		if (clearText == null)
			return null;
		return new DES().encrypt(clearText);
	}
}
