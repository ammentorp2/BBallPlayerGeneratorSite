/**
 *  Service to create a player
 *
 * Author : Andrew Ammentorp
 */
package service;

import com.github.javafaker.Faker;
import model.Player;
import model.Position;

/**
 * Service to create a player
 */
public class PlayerCreatorService {

    /**
     * Creates a purely random player
     * @return player
     */
    public static Player createPlayer(){
        // generate random name
        Faker faker = new Faker();
        String firstName = faker.name().firstName();
        String lastName = faker.name().lastName();


        //give player an age
        int age = AgeService.generateAge();


        //create a position (and potentially a second position)
        Position primaryPosition = PositionService.generatePosition();

        Position secondaryPosition = PositionService.generateSecondPosition(primaryPosition);

        return createPlayer(new Player.PlayerBuilder().appendFirstName(firstName)
                    .appendLastName(lastName).appendAge(age)
                    .appendPrimaryPosition(primaryPosition)
                    .appendSecondaryPosition(secondaryPosition));
    }

    /**
     * Create a player by name
     * @param firstName player's first name
     * @param lastName player's last name
     * @return the created player
     */
    public static Player createPlayerByName(String firstName,String lastName){
        //give player an age
        int age = AgeService.generateAge();

        //create a position (and potentially a second position)
        Position primaryPosition = PositionService.generatePosition();

        Position secondaryPosition = PositionService.generateSecondPosition(primaryPosition);

        return createPlayer(new Player.PlayerBuilder().appendFirstName(firstName)
                .appendLastName(lastName).appendAge(age)
                .appendPrimaryPosition(primaryPosition)
                .appendSecondaryPosition(secondaryPosition));
    }

    /**
     * Create a player by position
     * @param primaryPosition player's primary position
     * @return created player
     */
    public static Player createPlayerByPosition(Position primaryPosition){
        // generate random name
        Faker faker = new Faker();
        String firstName = faker.name().firstName();
        String lastName = faker.name().lastName();


        //give player an age
        int age = AgeService.generateAge();

        return createPlayer(new Player.PlayerBuilder().appendFirstName(firstName)
                .appendLastName(lastName).appendAge(age)
                .appendPrimaryPosition(primaryPosition));
    }

    /**
     * Create player by positions
     * @param primaryPosition primary position of player
     * @param secondaryPosition primary position of player
     * @return player
     */
    public static Player createPlayerByPosition(Position primaryPosition,Position secondaryPosition){

        // generate random name
        Faker faker = new Faker();
        String firstName = faker.name().firstName();
        String lastName = faker.name().lastName();


        //give player an age
        int age = AgeService.generateAge();

        return createPlayer(new Player.PlayerBuilder().appendFirstName(firstName)
                .appendLastName(lastName).appendAge(age)
                .appendPrimaryPosition(primaryPosition)
                .appendSecondaryPosition(secondaryPosition));

    }

    /**
     * Create player by age
     * @param age age of player
     * @return created player
     */
    public static Player createPlayerByAge(int age){
        // generate random name
        Faker faker = new Faker();
        String firstName = faker.name().firstName();
        String lastName = faker.name().lastName();

        //create a position (and potentially a second position)
        Position primaryPosition = PositionService.generatePosition();

        Position secondaryPosition = PositionService.generateSecondPosition(primaryPosition);

        return createPlayer(new Player.PlayerBuilder().appendFirstName(firstName)
                .appendLastName(lastName).appendAge(age)
                .appendPrimaryPosition(primaryPosition)
                .appendSecondaryPosition(secondaryPosition));
    }

    /**
     * Create player by name and position
     * @param firstName first name
     * @param lastName last name
     * @param primaryPosition their position
     * @return created player
     */
    public static Player createPlayerByNamePositon(String firstName,String lastName
            , Position primaryPosition){
        //give player an age
        int age = AgeService.generateAge();

        //Position secondaryPosition = PositionService.generateSecondPosition(primaryPosition);

        return createPlayer(new Player.PlayerBuilder().appendFirstName(firstName)
                .appendLastName(lastName).appendAge(age)
                .appendPrimaryPosition(primaryPosition));
    }

    /**
     * Creates player by name and positions
     * @param firstName first name
     * @param lastName last name
     * @param primaryPosition their primary position
     * @param secondaryPosition their secondary position
     * @return created player
     */
    public static Player createPlayerByNamePositon(String firstName,String lastName
            , Position primaryPosition, Position secondaryPosition){
        //give player an age
        int age = AgeService.generateAge();

        return createPlayer(new Player.PlayerBuilder().appendFirstName(firstName)
                .appendLastName(lastName).appendAge(age)
                .appendPrimaryPosition(primaryPosition)
                .appendSecondaryPosition(secondaryPosition));
    }

    /**
     * Create a player by name and age
     * @param firstName first name
     * @param lastName last name
     * @param age age of player
     * @return created player
     */
    public static Player createPlayerByNameAge(String firstName,String lastName, int age){
        //create a position (and potentially a second position)
        Position primaryPosition = PositionService.generatePosition();

        Position secondaryPosition = PositionService.generateSecondPosition(primaryPosition);

        return createPlayer(new Player.PlayerBuilder().appendFirstName(firstName)
                .appendLastName(lastName).appendAge(age)
                .appendPrimaryPosition(primaryPosition)
                .appendSecondaryPosition(secondaryPosition));
    }

    /**
     * Create player by position and age
     * @param primaryPosition primary position
     * @param age player's age
     * @return created player
     */
    public static Player createPlayerByPositionAge(Position primaryPosition,int age){
        // generate random name
        Faker faker = new Faker();
        String firstName = faker.name().firstName();
        String lastName = faker.name().lastName();

        return createPlayer(new Player.PlayerBuilder().appendFirstName(firstName)
                .appendLastName(lastName).appendAge(age)
                .appendPrimaryPosition(primaryPosition));
    }
    /**
     * Create player by position and age
     * @param primaryPosition primary position
     * @param secondaryPosition secondary position
     * @param age player's age
     * @return created player
     */
    public static Player createPlayerByPositionAge(Position primaryPosition,Position secondaryPosition, int age){


        // generate random name
        Faker faker = new Faker();
        String firstName = faker.name().firstName();
        String lastName = faker.name().lastName();

        return createPlayer(new Player.PlayerBuilder().appendFirstName(firstName)
                .appendLastName(lastName).appendAge(age)
                .appendPrimaryPosition(primaryPosition)
                .appendSecondaryPosition(secondaryPosition));
    }


    /**
     * Create player by name, position, and age
     * @param firstName first name
     * @param lastName last name
     * @param primaryPosition position
     * @param age age
     * @return created player
     */
    public static Player createPlayerByNamePosAge(String firstName,String lastName,Position primaryPosition,int age){
        return createPlayer(new Player.PlayerBuilder().appendFirstName(firstName)
                .appendLastName(lastName).appendAge(age)
                .appendPrimaryPosition(primaryPosition));
    }

    /**
     * Create player by name, positions, and age
     * @param firstName first name
     * @param lastName last name
     * @param primaryPosition position
     * @param secondaryPosition secondary position
     * @param age age
     * @return created player
     */
    public static Player createPlayerByNamePosAge(String firstName,String lastName,Position primaryPosition,Position secondaryPosition,int age){
        return createPlayer(new Player.PlayerBuilder().appendFirstName(firstName)
                .appendLastName(lastName).appendAge(age)
                .appendPrimaryPosition(primaryPosition)
                .appendSecondaryPosition(secondaryPosition));
    }

    /**
     * Create player
     * @param builder builder for player object
     * @return created player
     */
    private static Player createPlayer(Player.PlayerBuilder builder) {
        // generate height
        int playerHeightInInches = HeightService.generateHeight(builder.getPrimaryPosition());
        builder.appendHeight(playerHeightInInches);

        // generate weight
        int weight = WeightService.generateWeight(builder.getPrimaryPosition(),builder.getSecondaryPosition());
        builder.appendWeight(weight);

        // generate playstyle
        String playstyle = PlaystyleService.generatePlaystyle(builder.getPrimaryPosition());
        builder.appendPlaystyle(playstyle);

        return builder.build();

    }

}
