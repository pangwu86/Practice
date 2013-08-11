package org.pw.io;

import java.nio.ByteBuffer;
import java.nio.CharBuffer;

public class BaseIO {

    public static void main(String[] args) {
        charBuffer();
    }

    public static void charBuffer() {
        CharBuffer cb = CharBuffer.allocate(100);
        System.out.println(cb.order().toString());
    }

    public static void byteBuffer() {
        ByteBuffer bf = ByteBuffer.allocateDirect(100);
        ByteBuffer bf2 = ByteBuffer.allocate(100);

    }
}
