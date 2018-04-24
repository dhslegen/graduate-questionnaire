package com.qog.util;

import javax.crypto.Cipher;
import javax.crypto.spec.SecretKeySpec;

import com.qog.util.BytesUtil;

public class DESede {
	private byte[] KEY = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0 };

	public void setKEY(byte[] kEY) {
		KEY = kEY;
	}

	public void setKEY(String s) {
		KEY = BytesUtil.hexStringToBytes(s);
	}

	public byte[] getKEY() {
		return KEY;
	}

	public byte[] encrypt(byte[] clear) throws Exception {
		Cipher encryptCipher = Cipher.getInstance("DESede");
		encryptCipher.init(Cipher.ENCRYPT_MODE,
				new SecretKeySpec(KEY, "DESede"));
		return encryptCipher.doFinal(clear);
	}

	public String encrypt(String clearText) throws Exception {
		return BytesUtil.bytesToHexString(encrypt(BytesUtil
				.hexStringToBytes(clearText)));
	}

	public byte[] decrypt(byte[] secret) throws Exception {
		Cipher decryptCipher = Cipher.getInstance("DESede");
		decryptCipher.init(Cipher.DECRYPT_MODE,
				new SecretKeySpec(KEY, "DESede"));
		return decryptCipher.doFinal(secret);
	}

	public String decrypt(String secretText) throws Exception {
		return BytesUtil.bytesToHexString(decrypt(BytesUtil
				.hexStringToBytes(secretText)));
	}
}
