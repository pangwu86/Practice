package org.pw.regex;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.StringReader;

import org.nutz.lang.Files;
import org.nutz.lang.Strings;

public class RegexTest {

    public static void main(String[] args) throws Exception {
        rt1();
    }

    public static void rt1() throws IOException {
        String t = Files.read("rt1.txt");
        StringBuilder exsrntxt = new StringBuilder();
        BufferedReader reader = new BufferedReader(new StringReader(t));
        String nline = null;
        while ((nline = reader.readLine()) != null) {
            // 仅仅关心fid即可
            if (nline.matches(".+\"fid\".+")) {
                System.out.println(nline);
                String fid = nline.split(":")[1].trim();
                fid = fid.substring(0, fid.length() - 1);
                System.out.println(fid);
            }
            exsrntxt.append(nline).append("\n");
        }
    }

    public static void rt2() {
        String txt = "大海 : 24\n你好   :   55\n活动和获得发       :124";
        String[] lines = Strings.splitIgnoreBlank(txt, "\n");
        for (String l : lines) {
            String[] ns = Strings.splitIgnoreBlank(l, "[][]");
        }
    }

}
