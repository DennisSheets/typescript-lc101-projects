import { Payload } from './Payload';
import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';


export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo [];
    astronauts: Astronaut [];

    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
        this.cargoItems = [];
        this.astronauts = [];
    }

    sumMass (items: Payload []): number {
        let allItemsMass = 0;
        for (let i = 0; i < items.length ; i++){
            allItemsMass += items[i].massKg;
        }
        return allItemsMass;
    }

    currentMassKg(): number {
        return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts)
    }

    canAdd(item: Payload): boolean {
        if(this.currentMassKg() +item.massKg <= this.totalCapacityKg) {
            return true;
        } else { 
        false 
        }
    }

    addCargo(cargo: Cargo): boolean {
          if(this.canAdd(cargo) == true) {
            this.cargoItems.push(cargo);
            return true;
        } else { return false;
        }
    }

    addAstronaut(astronaut: Astronaut): boolean {
        if(this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true; 
        }else { return false;

        }
    } 
}

