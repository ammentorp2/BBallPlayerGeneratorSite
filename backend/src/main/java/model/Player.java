/**
 * Represents a Player object - generated with all appropriate attributes
 * Author : Andrew Ammentorp
 */
package model;

/**
 * Class representing a basketball player, with all appropriate attributes
 */
public class Player {

    private final String firstName;
    private final String lastName;

    private final int heightInches; /* height in inches */
    private final int weight;

    private final Position primaryPosition;
    private final Position secondaryPosition;

    private final String playstyle;

    private final int age; /* age in years */

    /**
     * Initilizes player object
     */
    private Player(PlayerBuilder builder) {
        this.firstName = builder.firstName;
        this.lastName = builder.lastName;
        this.heightInches = builder.heightInches;
        this.weight = builder.weight;
        this.primaryPosition = builder.primaryPosition;
        this.secondaryPosition = builder.secondaryPosition;
        this.playstyle = builder.playstyle;
        this.age = builder.age;
    }

    /**
     * Gets age.
     *
     * @return the age
     */
    public int getAge() {
        return age;
    }


    /**
     * Gets secondary position.
     *
     * @return the secondary position
     */
    public Position getSecondaryPosition() {
        return secondaryPosition;
    }


    /**
     * Gets primary position.
     *
     * @return the primary position
     */
    public Position getPrimaryPosition() {
        return primaryPosition;
    }

    /**
     * Gets weight.
     *
     * @return the weight
     */
    public int getWeight() {
        return weight;
    }

    /**
     * Gets height inches.
     *
     * @return the height inches
     */
    public int getHeightInches() {
        return heightInches;
    }

    /**
     * Gets first name.
     *
     * @return the first name
     */
    public String getFirstName() {
        return firstName;
    }

    /**
     * Gets playstyle.
     *
     * @return the playstyle of player
     */
    public String getPlaystyle() {
        return playstyle;
    }

    /**
     * Gets last name.
     *
     * @return the last name
     */
    public String getLastName() {
        return lastName;
    }

    /**
     * Gets formatted height.
     *
     * @return the formatted height
     */
    public String getFormattedHeight() {
        int feet = 0;
        int heightInchesCopy = heightInches;

        while(heightInchesCopy >= 12){
            feet++;
            heightInchesCopy -= 12;
        }

        return feet + "-" + heightInchesCopy;
    }

    /**
     * toString
     * @return formatted output of object
     */
    @Override
    public String toString(){
        String res = firstName + " " + lastName + "\n" + this.getFormattedHeight() + ","
                    + weight + "lbs | " + primaryPosition;
        if(secondaryPosition != null)
            res += "/" + secondaryPosition;

        res += "\n" + age + " year old " + playstyle;
        return res;
    }

    /**
     * Builder feature for Player class
     *
     * Utilizes Java's Builder pattern: https://howtodoinjava.com/design-patterns/creational/builder-pattern-in-java/
     */
    public static class PlayerBuilder{
        private String firstName;
        private String lastName;

        private int heightInches; /* height in inches */
        private  int weight;

        private  Position primaryPosition;
        private Position secondaryPosition;

        private String playstyle;

        private int age; /* age in years */

        /**
         * Constructor for Player builder
         */
        public PlayerBuilder(){}

        /**
         * Constructor for player builder
         * @param firstName first name
         * @param lastName last name
         * @param heightInches height in inches
         * @param weight weight in lbs
         * @param primaryPosition primary position
         * @param secondaryPosition secondary position
         * @param playstyle playstyle
         * @param age age
         */
        public PlayerBuilder(String firstName,String lastName,int heightInches
                , int weight, Position primaryPosition, Position secondaryPosition
                ,String playstyle,int age){
            this.firstName = firstName;
            this.lastName = lastName;
            this.heightInches = heightInches;
            this.weight = weight;
            this.primaryPosition = primaryPosition;
            this.secondaryPosition = secondaryPosition;
            this.playstyle = playstyle;
            this.age = age;
        }

        /**
         * Add first name
         * @param firstName first name
         * @return this
         */
        public PlayerBuilder appendFirstName(String firstName){
            this.firstName = firstName;
            return this;
        }

        /**
         * Add last name
         * @param lastName last name
         * @return this
         */
        public PlayerBuilder appendLastName(String lastName){
            this.lastName = lastName;
            return this;
        }

        /**
         * Add height
         * @param heightInches height in inches
         * @return this
         */
        public PlayerBuilder appendHeight(int heightInches){
            this.heightInches = heightInches;
            return this;
        }

        /**
         * Add weight
         * @param weight weight
         * @return this
         */
        public PlayerBuilder appendWeight(int weight){
            this.weight = weight;
            return this;
        }

        /**
         * Append primary pos
         * @param primaryPosition the primary pos
         * @return this
         */
        public PlayerBuilder appendPrimaryPosition(Position primaryPosition){
            this.primaryPosition = primaryPosition;
            return this;
        }

        /**
         * Append secondary pos
         * @param secondaryPosition the secondary pos
         * @return this
         */
        public PlayerBuilder appendSecondaryPosition(Position secondaryPosition){
            this.secondaryPosition = secondaryPosition;
            return this;
        }

        /**
         * Append playstyle
         * @param playstyle the playstyle
         * @return this
         */
        public PlayerBuilder appendPlaystyle(String playstyle){
            this.playstyle = playstyle;
            return this;
        }

        /**
         * Append age
         * @param age the player's age
         * @return this
         */
        public PlayerBuilder appendAge(int age){
            this.age = age;
            return this;
        }


        /**
         * Build the player object
         * @return created Player
         */
        public Player build(){
            if(secondaryPosition != null){
                if(primaryPosition.compareTo(secondaryPosition) == 0
                        || Math.abs(primaryPosition.compareTo(secondaryPosition)) > 1){
                    throw new RuntimeException("Invalid second position");
                }
            }
            return new Player(this);
        }

        /**
         * Gets primary position.
         *
         * @return the primary position
         */
        public Position getPrimaryPosition() {
            return primaryPosition;
        }

        /**
         * Gets secondary position.
         *
         * @return the secondary position
         */
        public Position getSecondaryPosition() {
            return secondaryPosition;
        }
    }


}
