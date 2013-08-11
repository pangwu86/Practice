package org.pw;

import org.nutz.lang.Strings;

public class FidToPath {

    public static void main(String[] args) {

        long[] fids = new long[]{128849020061L};

        // for (long fid : fids) {
        // String s = Strings.alignRight(Long.toHexString(fid), 14,
        // '0').toUpperCase();
        // s = s.replaceAll("([0-9A-Z]{2})", "/$1");
        // System.out.println(s);
        // }

        for (long fid : fids) {
            int pureId = (int) (0x7FFFFFFF & fid);
            String s = Strings.alignRight(Long.toHexString(pureId), 8, '0')
                              .replaceAll("\\p{XDigit}{2}", "/$0");
            System.out.println(s);
        }
    }
}
