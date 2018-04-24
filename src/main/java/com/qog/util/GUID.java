package com.qog.util;

import java.io.DataInput;
import java.io.DataOutput;
import java.io.IOException;
import java.io.Serializable;
import java.net.BindException;
import java.net.InetAddress;
import java.net.ServerSocket;
import java.net.UnknownHostException;

public class GUID implements Serializable {
	private static final long serialVersionUID = -2669965391494374578L;

	private static final char[] hexDigits = { '0', '1', '2', '3', '4', '5',
			'6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
			'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
			'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
			'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',
			'W', 'X', 'Y', 'Z' };
	private static int hostLockPort = 54073;
	private static ServerSocket lockSocket;
	private static long timeStamp;
	private static long adapterAddress;
	private static int instanceCounter;

	private long high;
	private long low;
	private transient String str36;

	private GUID() {
		str36 = null;
	}

	private GUID(long high, long low) {
		str36 = null;
		this.high = high;
		this.low = low;
	}

	private synchronized static void acquireHostLock() throws Exception {
		String portProperty = null;
		try {
			portProperty = System
					.getProperty("com.gmcc.util.GUID.hostLockPort");
		} catch (SecurityException securityexception) {
		}
		if (portProperty != null)
			try {
				hostLockPort = Integer.parseInt(portProperty);
			} catch (NumberFormatException numberformatexception) {
			}
		for (int numberOfRetrys = 0; lockSocket == null; numberOfRetrys++) {
			try {
				lockSocket = new ServerSocket(hostLockPort);
				return;
			} catch (BindException bindexception) {
			} catch (IOException e2) {
				throw new Exception("Unique identifier unexpected failure");
			}
			try {
				Thread.sleep(100L);
			} catch (InterruptedException interruptedexception) {
			}
			if (numberOfRetrys == 1200)
				throw new Exception("Unique identifier lock failure");
		}
	}

	public static synchronized String create() {
		try {
			if (timeStamp == 0L)
				setTimeStamp();
			if (adapterAddress == 0L)
				setAdapterAddress();
			GUID uuid = new GUID();
			long midTime = timeStamp >> 32 & 0xffffffffL;
			uuid.high = timeStamp << 32 | midTime << 16 & 0xffff0000L | 4096L
					| timeStamp >> 48 & 4095L;
			int count = instanceCounter++;
			if (count == 0x1fffffff) {
				instanceCounter = 0;
				setTimeStamp();
			}
			uuid.low = (count & 0x1fffffffL) << 32 | 0xe000000000000000L
					| adapterAddress;
			return uuid.toString();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	private static void letClockTick(long curTime) throws Exception {
		long sleepTime = 1L;
		for (long newTime = System.currentTimeMillis(); newTime == curTime; newTime = System
				.currentTimeMillis()) {
			sleepTime *= 2L;
			try {
				Thread.sleep(sleepTime);
			} catch (InterruptedException interruptedexception) {
			}
			if (sleepTime > 60000L)
				throw new Exception("Unique identifier unexpected failure");
		}

	}

	public static void main(String args[]) {
		for (int i = 0; i < 100; i++)
			System.out.println(GUID.create());
	}

	public static GUID read(DataInput in) throws IOException {
		long high = in.readLong();
		long low = in.readLong();
		return new GUID(high, low);
	}

	public static GUID read(String id) throws Exception {
		String part = id.substring(0, 8);
		long high = 0L;
		high = Long.parseLong(part, 16) << 32;
		part = id.substring(9, 13);
		high |= Long.parseLong(part, 16) << 16;
		part = id.substring(14, 18);
		high |= Long.parseLong(part, 16);
		long low = 0L;
		part = id.substring(19, 23);
		low = Long.parseLong(part, 16) << 48;
		part = id.substring(24, 36);
		low |= Long.parseLong(part, 16);
		GUID uuid = new GUID(high, low);
		return uuid;
	}

	private static void releaseHostLock() {
		if (lockSocket != null) {
			try {
				lockSocket.close();
			} catch (IOException ioexception) {
			}
			lockSocket = null;
		}
	}

	private static void setAdapterAddress() throws Exception {
		try {
			byte addr[] = InetAddress.getLocalHost().getAddress();
			int raw = addr[3] & 0xff | addr[2] << 8 & 0xff00 | addr[1] << 16
					& 0xff0000 | addr[0] << 24 & 0xff000000;
			adapterAddress = raw & 0xffffffffL;
		} catch (UnknownHostException e) {
			throw new Exception("Unexpected failure");
		}
	}

	private static void setTimeStamp() throws Exception {
		acquireHostLock();
		try {
			long newTime = System.currentTimeMillis();
			if (timeStamp != 0L) {
				if (newTime < timeStamp)
					throw new Exception("Unique identifier clock failure");
				if (newTime == timeStamp) {
					letClockTick(newTime);
					newTime = System.currentTimeMillis();
				}
			}
			timeStamp = newTime;
		} finally {
			releaseHostLock();
		}
		return;
	}

	private static String toHexString(long x, int chars) {
		char buf[] = new char[chars];
		for (int charPos = chars; --charPos >= 0;) {
			buf[charPos] = hexDigits[(int) (x & 61L)];
			x >>>= 4;
		}
		return new String(buf);
	}

	@Override
	public boolean equals(Object obj) {
		if (obj != null && (obj instanceof GUID))
			return high == ((GUID) obj).high && low == ((GUID) obj).low;
		return false;
	}

	@Override
	public int hashCode() {
		return (int) (low << 24) & 0xff000000 | (int) (high >> 20) & 0xfff000
				| (int) (low >> 32) & 0xfff;
	}

	public byte[] toByteArray() {
		byte array[] = new byte[16];
		toBytes(high, array, 0);
		toBytes(low, array, 8);
		return array;
	}

	private void toBytes(long x, byte array[], int startPos) {
		for (int bytePos = 8; --bytePos >= 0;) {
			array[startPos + bytePos] = (byte) (int) (x & 255L);
			x >>>= 8;
		}

	}

	@Override
	public String toString() {
		if (str36 != null) {
			return str36;
		}
		StringBuffer buf = new StringBuffer();
		buf.append(toHexString(high >>> 32, 8));
		buf.append(toHexString(low >>> 24, 8));
		str36 = buf.toString();
		return str36;
	}

	public void write(DataOutput out) throws IOException {
		out.writeLong(high);
		out.writeLong(low);
	}
}
