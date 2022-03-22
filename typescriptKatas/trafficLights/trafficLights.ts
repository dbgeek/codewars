import { throws } from "assert";

interface RoadObject {
    position: number;
}
class Car {
    position: number;
    constructor(position: number){
        this.position = position;
    }
}

class TrafficLight {
    light: string;
    position: number;
    time: number = 1;
    constructor(position: number, light: string){
        this.position = position;
        this.light = light;
    }
    next(): void {
        switch (this.light) {
            case 'R': {
                if (this.time < 5) {
                    this.time += 1;
                } else {
                    this.light = 'G';
                    this.time = 1;
                }
                break;
            }
            case 'G': {
                if (this.time < 5) {
                    this.time += 1;
                } else {
                    this.light = 'O';
                    this.time = 1;
                }
                break;
            }
            case 'O': {
                this.light = 'R';
                this.time = 1;
                break;
            }
        }
    }
}
class Road {
    cars: Car[] = [];
    traficLights: TrafficLight[] = [];
    roadLength: number;
    constructor(initialState: string) {
        this.roadLength = initialState.length;
        initialState.split('').forEach( (item, index) => {
            switch (item) {
                case 'G': {
                    this.traficLights.push(new TrafficLight(index, item));
                    break;
                }
                case 'O': {
                    this.traficLights.push(new TrafficLight(index, item));
                    break;
                }
                case 'R': {
                    this.traficLights.push(new TrafficLight(index, item));
                    break;
                }
                case 'C': {
                    this.cars.push(new Car(index));
                    break;
                }
            }
        })
    }
    toString(): string {
        return this.getState().join('');
    }
    getState(): string[] {
        const state = Array<string>(this.roadLength).fill('.');
        this.traficLights.forEach( (item) => {
            state[item.position] = item.light;
        });
        this.cars.forEach( (item) => {
            state[item.position] = 'C';
        });
        return state;
    }
    next(): void {
        this.traficLights.forEach( (item) => {
            item.next();
        })
        const state = this.getState();
        this.cars.forEach( (item) => {
            if (item.position === (this.roadLength-1)) {
                this.cars = []
            }
            if (state[item.position + 1] === 'G' || state[item.position + 1] === '.') {
                item.position += 1;
            }
        })
    }
}

export function trafficLights(road: string, n: number): string[] {
    let r = new Road(road);
    let roadState: string[] =  [r.toString()];
    for (let i = 1; i <= n; i++){
        r.next();
        roadState.push(r.toString());
    }
    return roadState;
}

console.log(trafficLights("C...R............G......", 10));
