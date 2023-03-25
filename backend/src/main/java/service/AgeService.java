package service;

import java.util.Random;

/**
 * Service to generate player age
 */
public class AgeService {
    /**
     * Generate a pure random age ( from 19-40)
     * @return random age
     */
    public static int generateAge() {
        Random rand = new Random(System.currentTimeMillis());
        return rand.nextInt(20) + 19;
    }
    // TODO make service to make age range prospect/young/prime/veteran/old (user controlled age range)
}
