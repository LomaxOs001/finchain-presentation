import { Employees } from './employees';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utility } from '../../Utils/utility';



const AUTH_API = 'http://localhost:8080/api/';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
    providedIn: 'root'

})
export class EmployeeAccountTransfer {

    constructor(private http: HttpClient, private util: Utility) { }

    //registration of employee
    public registerEmployee(employeeId: string, name: string): Observable<any> {
        let password = '';
        let recoveryPhrase = '';

        //generate password and phrase
        password = this.util.generatePassword();
        recoveryPhrase = this.util.generatePhrase();

        return this.http.post(AUTH_API + 'register', {
            employeeId,
            name,
            password,
            recoveryPhrase

        }, httpOptions);
    }

    //login of employee
    public loginEmployee(employeeId: string, password: string): Observable<any> {

        //verify employeeID and password are not empty
        if (employeeId === '' || password === '') {

            window.alert('Employee ID and password must not be empty');

            throw new Error('Empty fields detected');
        }
        return this.http.post(AUTH_API + 'login', {
            employeeId,
            password
        });
    }

}