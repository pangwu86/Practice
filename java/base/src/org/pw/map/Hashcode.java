package org.pw.map;

public class Hashcode {

    public static void main(String[] args) {

        hashCollision();
    }

    /**
     * 出现了同样的hashcode
     */
    static void hashCollision() {
        System.out.println("Aa : " + hash("Aa".hashCode()));
        System.out.println("BB : " + hash("BB".hashCode()));
    }

    static int hash(int h) {
        h ^= (h >>> 20) ^ (h >>> 12);
        return h ^ (h >>> 7) ^ (h >>> 4);
    }

}
