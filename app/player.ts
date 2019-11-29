/// <reference path="person.ts" />

class Player implements Person {
    name: string;
    age?: number;
    higherScore: number;

    formatName() {
        return this.name.toUpperCase()
    };


}