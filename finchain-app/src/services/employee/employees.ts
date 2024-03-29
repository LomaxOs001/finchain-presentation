import { Inject, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root' // This makes the service available application-wide

})
export class Employees {
    private employeeID: string;
    private name: string;
    private password: string;
    private phrase: string;

    constructor(@Inject(String) employeeID: string, @Inject(String) name: string, @Inject(String) password: string, @Inject(String) phrase: string) {
        this.employeeID = employeeID;
        this.name = name;
        this.password = password;
        this.phrase = phrase;
    }
    toString(): string {
        return `Employee ID: ${this.employeeID}, Password: ${this.password}`;
    }

    static fromJSON(json: any): Employees {
        return new Employees(json.employeeID, json.name, json.password, json.phrase);
    }

    toJSON(): any {
        return {
            employeeID: this.employeeID,
            name: this.name,
            password: this.password,
            phrase: this.phrase
        };
    }

}