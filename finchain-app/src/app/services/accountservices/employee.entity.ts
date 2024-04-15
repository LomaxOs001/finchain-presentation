import { Inject, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'

})
export class EmployeeAccountService {
    private employeeId: string;
    private name: string;
    private password: string;
    private recoveryPhrase: string;

    constructor(@Inject(String) employeeId: string, @Inject(String) name: string, @Inject(String) password: string, @Inject(String) phrase: string) {
        this.employeeId = employeeId;
        this.name = name;
        this.password = password;
        this.recoveryPhrase = phrase;
    }
    toString(): string {
        return `Employee ID: ${this.employeeId}, Password: ${this.password}`;
    }

    static fromJSON(json: any): EmployeeAccountService {
        return new EmployeeAccountService(json.employeeId, json.name, json.password, json.recoveryPhrase);
    }

} 