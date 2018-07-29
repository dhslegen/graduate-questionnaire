package com.qog.util.encrypt;

public class NopEncryptor implements Encryptor {

	public NopEncryptor() {
	}

	public String encrypt(String clearText) {
		return clearText;
	}

}
