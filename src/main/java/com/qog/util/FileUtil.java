package com.qog.util;

import java.io.File;
import java.io.IOException;
import java.io.RandomAccessFile;
import java.nio.MappedByteBuffer;
import java.nio.channels.FileChannel;
import java.nio.channels.FileChannel.MapMode;

public class FileUtil {
	public static File createFile(String destFileName) {
		File file = new File(destFileName);
		if (file.exists()) {
			System.out.println("创建单个文件" + destFileName + "失败，目标文件已存在！");
			return file;
		}
		if (destFileName.endsWith(File.separator)) {
			System.out.println("创建单个文件" + destFileName + "失败，目标文件不能为目录！");
			return file;
		}
		// 判断目标文件所在的目录是否存在
		if (!file.getParentFile().exists()) {
			// 如果目标文件所在的目录不存在，则创建父目录
			System.out.println("目标文件所在目录不存在，准备创建它！");
			if (!file.getParentFile().mkdirs()) {
				System.out.println("创建目标文件所在目录失败！");
				return file;
			}
		}
		// 创建目标文件
		try {
			if (file.createNewFile()) {
				System.out.println("创建单个文件" + destFileName + "成功！");
				return file;
			}
			System.out.println("创建单个文件" + destFileName + "失败！");
			return file;
		} catch (IOException e) {
			e.printStackTrace();
			System.out
					.println("创建单个文件" + destFileName + "失败！" + e.getMessage());
			return file;
		}
	}

	public static boolean createDir(String destDirName) {
		File dir = new File(destDirName);
		if (dir.exists()) {
			System.out.println("创建目录" + destDirName + "失败，目标目录已经存在");
			return false;
		}
		if (!destDirName.endsWith(File.separator)) {
			destDirName = destDirName + File.separator;
		}
		// 创建目录
		if (dir.mkdirs()) {
			System.out.println("创建目录" + destDirName + "成功！");
			return true;
		}
		System.out.println("创建目录" + destDirName + "失败！");
		return false;
	}

	public static String createTempFile(String prefix, String suffix,
			String dirName) {
		File tempFile = null;
		if (dirName == null) {
			try {
				// 在默认文件夹下创建临时文件
				tempFile = File.createTempFile(prefix, suffix);
				// 返回临时文件的路径
				return tempFile.getCanonicalPath();
			} catch (IOException e) {
				e.printStackTrace();
				System.out.println("创建临时文件失败！" + e.getMessage());
				return null;
			}
		}
		File dir = new File(dirName);
		// 如果临时文件所在目录不存在，首先创建
		if (!dir.exists()) {
			if (!FileUtil.createDir(dirName)) {
				System.out.println("创建临时文件失败，不能创建临时文件所在的目录！");
				return null;
			}
		}
		try {
			// 在指定目录下创建临时文件
			tempFile = File.createTempFile(prefix, suffix, dir);
			return tempFile.getCanonicalPath();
		} catch (IOException e) {
			e.printStackTrace();
			System.out.println("创建临时文件失败！" + e.getMessage());
			return null;
		}
	}

	/**
	 * Mapped File way MappedByteBuffer 可以在处理大文件时，提升性能
	 * 
	 * @param filename
	 * @return
	 * @throws IOException
	 */
	public static byte[] toByteArray(String filename) {
		FileChannel fc = null;
		RandomAccessFile raf = null;
		try {
			raf = new RandomAccessFile(filename, "r");
			fc = raf.getChannel();
			MappedByteBuffer byteBuffer = fc.map(MapMode.READ_ONLY, 0,
					fc.size()).load();
			byte[] result = new byte[(int) fc.size()];
			if (byteBuffer.remaining() > 0) {
				byteBuffer.get(result, 0, byteBuffer.remaining());
			}
			return result;
		} catch (IOException e) {
			e.printStackTrace();
			return new byte[0];
		} finally {
			if (fc != null) {
				try {
					fc.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
			if (raf != null) {
				try {
					raf.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}
	}
}