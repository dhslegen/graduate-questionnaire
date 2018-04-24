package com.qog.util;

public class Token {
	private static Token _instance;
	private long token;

	private Token() {
		this.token = 0;
	}

	public static Token getInstance() {
		if (_instance == null)
			_instance = new Token();
		return _instance;
	}

	public synchronized long getToken() {
		if (token == Long.MAX_VALUE)
			token = 1;
		else
			token++;
		return token;
	}
}
