package service;

import java.util.Random;

public class AgeService {
    public static int generateAge() {
        Random rand = new Random(System.currentTimeMillis() % 17);
        return rand.nextInt(20) + 19;
    }
    // TODO make service to make age range prospect/young/prime/veteran/old (user controlled age range)
}
