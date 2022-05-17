/**
 *  Service to create a random weight
 *
 * Author : Andrew Ammentorp
 */
package service;

import model.Position;

import java.util.Random;

public class WeightService {
    /**
     * Data gotten from http://hoopobsession.com/2019HtWt.html
     */

    final static int PG_WEIGHT = 191;
    final static int SG_WEIGHT = 205;
    final static int SF_WEIGHT = 220;
    final static int PF_WEIGHT = 232;
    final static int C_WEIGHT = 250;


    /**
     * Generates a weight for a player
     * @param primaryPosition primary pos
     * @param secondaryPosition secondary pos
     * @return generated weight
     */
    public static int generateWeight(Position primaryPosition, Position secondaryPosition) {
        Random rand = new Random(System.currentTimeMillis());
        int variance = rand.nextInt(11); /* 0-10 */
        boolean flip = rand.nextBoolean();

        if(flip)
            variance *= -1;

        int weight = 0;

        if(primaryPosition == Position.PG){
            weight = PG_WEIGHT + variance;

            if(secondaryPosition == Position.SG)
                weight += 5;
        }
        else if(primaryPosition == Position.SG){
            weight = SG_WEIGHT + variance;

            if(secondaryPosition == Position.PG)
                weight -= 5;
            if(secondaryPosition == Position.SF)
                weight += 5;
        }
        else if(primaryPosition == Position.SF){
            weight = SF_WEIGHT + variance;

            if(secondaryPosition == Position.SG)
                weight -= 5;
            if(secondaryPosition == Position.PF)
                weight += 5;
        }
        else if(primaryPosition == Position.PF){
            weight = PF_WEIGHT + variance;

            if(secondaryPosition == Position.SF)
                weight -= 5;
            if(secondaryPosition == Position.C)
                weight += 5;
        }
        else if(primaryPosition == Position.C){
            weight = C_WEIGHT + variance;

            if(secondaryPosition == Position.PF)
                weight -= 5;
        }

        return weight;
    }
}
