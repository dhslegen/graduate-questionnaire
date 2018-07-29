package com.qog.util;

import net.sourceforge.pinyin4j.PinyinHelper;
import net.sourceforge.pinyin4j.format.HanyuPinyinCaseType;
import net.sourceforge.pinyin4j.format.HanyuPinyinOutputFormat;
import net.sourceforge.pinyin4j.format.HanyuPinyinToneType;
import net.sourceforge.pinyin4j.format.HanyuPinyinVCharType;
import net.sourceforge.pinyin4j.format.exception.BadHanyuPinyinOutputFormatCombination;

import java.util.Comparator;

public class Hanyupinyin {
	private int LONGEST_HANYUPINYIN_LENGTH = 6; // shuang

	public Comparator<String> HANYUPINYIN_ORDER = new Comparator<String>() {
		public int compare(String o1, String o2) {
			return toHanyuPinyinWithPadding(o1).compareToIgnoreCase(
					toHanyuPinyinWithPadding(o2));
		}
	};

	/**
	 * 汉字转换位汉语拼音首字母，英文字符和不变
	 * 
	 * @param chinese
	 *            汉字
	 * @return 拼音首字母
	 * @throws BadHanyuPinyinOutputFormatCombination
	 */
	public String toHanyuPinyinCapital(String chinese) {
		if (chinese == null || chinese.length() == 0)
			return "";
		String pinyinName = "";
		char[] nameChar = chinese.replaceAll("\\s+", "").toCharArray();
		for (int i = 0; i < nameChar.length; i++) {
			try {
				String[] pinyin = PinyinHelper.toHanyuPinyinStringArray(
						nameChar[i], getDefaultOutputFormat());
				if (pinyin != null) // 是汉字
					pinyinName += pinyin[0].charAt(0);
				else
					// 不是汉字
					pinyinName += nameChar[i];
			} catch (BadHanyuPinyinOutputFormatCombination e) {
			}
		}
		return pinyinName;
	}

	/**
	 * 汉字转换为汉语拼音，英文字符不变
	 * 
	 * @param chinese
	 *            汉字
	 * @return 拼音
	 * @throws BadHanyuPinyinOutputFormatCombination
	 */
	public String toHanyuPinyinWithPadding(String chinese) {
		if (chinese == null || chinese.length() == 0)
			return "";
		String pinyinName = "";
		char[] nameChar = chinese.replaceAll("\\s+", "").toCharArray();
		for (int i = 0; i < nameChar.length; i++) {
			try {
				String[] pinyin = PinyinHelper.toHanyuPinyinStringArray(
						nameChar[i], getDefaultOutputFormat());
				if (pinyin != null) // 是汉字
					pinyinName += padding(pinyin[0]);
				else
					// 不是汉字
					pinyinName += nameChar[i];
			} catch (BadHanyuPinyinOutputFormatCombination e) {
			}
		}
		return pinyinName;
	}

	private String padding(String hanyupinyin) {
		char[] dest = new char[LONGEST_HANYUPINYIN_LENGTH];
		for (int i = 0; i < dest.length; i++)
			dest[i] = ' ';
		char[] src = hanyupinyin.toCharArray();
		System.arraycopy(src, 0, dest, 0, src.length);
		return String.copyValueOf(dest);
	}

	public String toHanyuPinyinWithoutPadding(String chinese) {
		if (chinese == null || chinese.length() == 0)
			return "";
		String pinyinName = "";
		char[] nameChar = chinese.replaceAll("\\s+", "").toCharArray();
		for (int i = 0; i < nameChar.length; i++) {
			try {
				String[] pinyin = PinyinHelper.toHanyuPinyinStringArray(
						nameChar[i], getDefaultOutputFormat());
				if (pinyin != null) // 是汉字
					pinyinName += pinyin[0];
				else
					// 不是汉字
					pinyinName += nameChar[i];
			} catch (BadHanyuPinyinOutputFormatCombination e) {
			}
		}
		return pinyinName;
	}

	private HanyuPinyinOutputFormat getDefaultOutputFormat() {
		HanyuPinyinOutputFormat format = new HanyuPinyinOutputFormat();
		format.setCaseType(HanyuPinyinCaseType.LOWERCASE); // 小写
		format.setToneType(HanyuPinyinToneType.WITHOUT_TONE); // 没有音调数字
		format.setVCharType(HanyuPinyinVCharType.WITH_V); // 显示v
		return format;
	}

}
