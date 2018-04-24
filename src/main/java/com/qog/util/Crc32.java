package com.qog.util;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.zip.CRC32;
import java.util.zip.CheckedInputStream;

/**
 * -----------------------------------------------------------------------------
 * Used to provide an example of how to calculate the checksum of a file using
 * the CRC-32 checksum engine.
 *
 * @version 1.0
 * @author Jeffrey M. Hunter (jhunter@idevelopment.info)
 * @author http://www.idevelopment.info
 *         ------------------------------------------
 *         -----------------------------------
 */

public class Crc32 {

	public static Map<String, Object> doChecksum(String fileName) {
		Map<String, Object> map = new HashMap<String, Object>();
		CheckedInputStream cis = null;
		try {
			// Computer CRC32 checksum
			cis = new CheckedInputStream(new FileInputStream(fileName),
					new CRC32());
			long fileSize = new File(fileName).length();
			byte[] buf = new byte[128];
			while (cis.read(buf) >= 0) {
			}

			long checksum = cis.getChecksum().getValue();

			map.put("file_crc32", checksum);
			map.put("file_size", fileSize);
			map.put("file_path", fileName);
			// System.out.println(checksum + " " + fileSize + " " + fileName);
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			if (cis != null) {
				try {
					cis.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}
		return map;

	}

	/**
	 * Sole entry point to the class and application.
	 * 
	 * @param args
	 *            Array of String arguments.
	 */
	// public static void main(String[] args) {
	// doChecksum("C://Documents and Settings//Administrator//桌面//fweg.txt");
	// String str = "10:30";
	// str = str.substring(0, 2)+str.substring(3, 5)+"00";
	// System.out.println(str);
	// }

}
