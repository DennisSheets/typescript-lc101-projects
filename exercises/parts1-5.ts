import { SpaceLocation } from './SpaceLocation';

// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 


// Part 1: Declare (5) Variables With Type
            //let spacecraftName: string = "Determination";
            //let speedMph: number = 17500;
let kilometersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400;
            //let milesPerKilometer: number = 0.621;

// Part 2: Print Days to Mars

            // let milesToMars: number = kilometersToMars * milesPerKilometer;
            // let hoursToMars: number = milesToMars / speedMph;
            // let daysToMars: number = hoursToMars / 24;

// Code an output statement here (use a template literal):
// Part 3: Create a Function ("getDaysToLocation")

// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.

// Part 4: Create a Spacecraft Class

class Spacecraft {
    milesPerKilometer: number;
    name: string;
    speedMph: number;
     
    constructor(name: string,speedMph: number){
        this.name = name;
        this.milesPerKilometer = .621;
        this.speedMph =speedMph;
    }

    getDaysToLocation(kilometersAway: number): number {
      
        return kilometersAway * this.milesPerKilometer / this.speedMph / 24;
    }

    printDaysToLocation(location: SpaceLocation) {
        console.log(`${this.name} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
     }

}

// Create an instance of the class here:

let spaceShuttle = new Spacecraft('Determination', 17500);

// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.

console.log(` ${spaceShuttle.name} traveling at ${spaceShuttle.speedMph}mph will travel: 
 ${kilometersToTheMoon}km and arrive at the moon in ${spaceShuttle.getDaysToLocation(kilometersToTheMoon)} days.
 ${kilometersToMars}km and arrive at the mars in ${spaceShuttle.getDaysToLocation(kilometersToMars)} days.
`);

// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
// Add the printDaysToLocation function to the Spacecraft class.

spaceShuttle.printDaysToLocation(new SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation('the Moon', kilometersToTheMoon));

// Paste in the code from step 6 here:
