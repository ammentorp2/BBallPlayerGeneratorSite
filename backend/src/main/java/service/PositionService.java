/**
 *  Service to create positions
 *
 * Author : Andrew Ammentorp
 */
package service;

import model.Position;

import java.util.Random;

/**
 * Service to create positions
 */
public class PositionService {
    /**
     * Generates a position
     * @return generated position
     */
    public static Position generatePosition(){
        Random rand = new Random(System.currentTimeMillis() % 500);

        int posNum = rand.nextInt(6) + 1;

        return switch (posNum) {
            case 1 -> Position.PG;
            case 2 -> Position.SG;
            case 3 -> Position.SF;
            case 4 -> Position.PF;
            default -> Position.C;
        };
    }

    public static Position generateSecondPosition(Position primaryPosition){
        //for now "flip a coin" to see if they get a second POS
        Random rand = new Random(System.currentTimeMillis());

        boolean secondPOS = rand.nextBoolean();

        if (secondPOS){
            Random posRand = new Random(System.currentTimeMillis());
            boolean posFlip = posRand.nextBoolean();
            if(primaryPosition == Position.PG)
                return Position.SG;
            else if(primaryPosition == Position.SG){
                if (posFlip)
                    return Position.PG;
                else
                    return Position.SF;
            }
            else if(primaryPosition == Position.SF){
                if (posFlip)
                    return Position.SG;
                else
                    return Position.PF;
            }
            else if(primaryPosition == Position.PF){
                if (posFlip)
                    return Position.SF;
                else
                    return Position.C;
            }
            else if(primaryPosition == Position.C){
                return Position.PF;
            }
            else{
                throw new RuntimeException("Invlaid position");
            }
        }
        else{
            return null;
        }

    }
}
