package service;

import model.Position;

import java.util.Random;

/**
 * Service to generate playstyle
 */
public class PlaystyleService {

    /**
     * playstyles gotten from
     * https://dotesports.com/streaming/news/all-nba-2k21-archetypes-explained
     */

    final static String [] pgPlaystyles = {"Two-Way Slashing Playmaker","Three-level Scorer",
                                    "Midrange Specialist","Offensive Threat",
                                    "Pure Playmaker","Scoring Machine",
                                    "Slashing Playmaker","Slashing Sharpshooter"};

    final static String [] sgPlaystyles = {"Three-Way Finisher","Two-Way Sharpshooter",
                                    "Three-Level Scorer","Offensive Threat",
                                    "Scoring Machine","Sharpshooting Defender",
                                    "Shot Creator","Shot-Creating Sharpshooter"};

    final static String [] sfPlaystyles = {"Two-Way Finisher","Two-Way Sharpshooter",
                                    "Three-Level Scorer","Offensive Threat",
                                    "Perimeter Defender","Sharpshooting Defender",
                                    "Sharpshooting Slasher","Slashing Sharpshooter"};

    final static String [] pfPlaystyles = {"Two-Way Stretch Four","Three-Level Playmaker",
                                    "Three-Level Scorer","Glass Cleaner",
                                    "Interior Finisher","Paint Beast",
                                    "Post Playmaker","Pure Stretch Four"};

    final static String [] centerPlaystyles = {"Two-Way Athletic Finisher", "Three-Level Scorer",
                                        "Glass-Cleaning Stretch Five","Interior Force",
                                        "Post Playmaker","Post-Scoring Stretch Five",
                                        "Sharpshooting Defender","Slashing Rim Protector"};

    /**
     * Generates a playstyle for a player
     * @param primaryPosition the primary position the player plays
     * @return a random playstyle
     */
    public static String generatePlaystyle(Position primaryPosition) {
        Random rand = new Random(System.currentTimeMillis() % 500);
        int posNum = rand.nextInt(8); /* 0-7 */

        return switch (primaryPosition) {
            case PG -> pgPlaystyles[posNum];
            case SG -> sgPlaystyles[posNum];
            case SF -> sfPlaystyles[posNum];
            case PF -> pfPlaystyles[posNum];
            case C -> centerPlaystyles[posNum];
        };
    }
}
