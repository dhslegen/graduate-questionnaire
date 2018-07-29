package com.qog.util;

import it.sauronsoftware.jave.AudioAttributes;
import it.sauronsoftware.jave.Encoder;
import it.sauronsoftware.jave.EncoderException;
import it.sauronsoftware.jave.EncodingAttributes;

import java.io.File;

public class Audio {

	// filename必须得是wav格式，转换成mp3格式
	public static String transcode(String filename)
			throws IllegalArgumentException,
            EncoderException {
		File source = new File(filename);
		String r = filename.substring(0, filename.lastIndexOf('.') + 1) + "mp3";
		File target = new File(r);
		AudioAttributes audio = new AudioAttributes();
		audio.setCodec("libmp3lame");
		audio.setChannels(new Integer(1));
		audio.setSamplingRate(new Integer(22050));
		audio.setBitRate(new Integer(16000));
		EncodingAttributes attrs = new EncodingAttributes();
		attrs.setFormat("mp3");
		attrs.setAudioAttributes(audio);
		Encoder encoder = new Encoder();
		encoder.encode(source, target, attrs);
		return r;
	}

	// public static void main(String[] args) throws IllegalArgumentException,
	// InputFormatException, EncoderException {
	// transcode("C:/Tomcat6.0.43/webapps/upload/20150319111122_356823030164011.wav",
	// "C:/Tomcat6.0.43/webapps/upload/111.mp3");
	// }

}
