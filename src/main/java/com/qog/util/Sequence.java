package com.qog.util;

import java.io.*;

public class Sequence {
	private static Sequence _instance;
	private long sequenceNumber;

	private Sequence() {
		BufferedReader br = null;
		try {
			br = new BufferedReader(new FileReader("seq.no"));
			sequenceNumber = Integer.parseInt(br.readLine());
		} catch (FileNotFoundException e) {
			sequenceNumber = 0;
		} catch (IOException e) {
			sequenceNumber = 0;
		} catch (NumberFormatException e) {
			sequenceNumber = 0;
		} finally {
			if (br != null) {
				try {
					br.close();
				} catch (IOException e) {
					sequenceNumber = 0;
				}
			}
		}
	}

	public static Sequence getInstance() {
		if (_instance == null)
			_instance = new Sequence();
		return _instance;
	}

	public synchronized long getSequenceNumber() {
		if (sequenceNumber == Long.MAX_VALUE)
			sequenceNumber = 1L;
		else
			sequenceNumber++;
		PrintWriter pw = null;
		try {
			pw = new PrintWriter(new FileWriter("seq.no"));
			pw.write("" + sequenceNumber);
			pw.flush();
		} catch (IOException e) {
		} finally {
			if (pw != null)
				pw.close();
		}
		return sequenceNumber;
	}
}
