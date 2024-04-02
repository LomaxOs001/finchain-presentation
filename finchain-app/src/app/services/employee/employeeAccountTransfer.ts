import { Employees } from './employees';
import { Observable } from 'rxjs';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import wordsData from '../data/english.json';


const protocol = 'http';
const hostname = 'localhost';
const backendPort = 8080;
const frontendPort = 4200;

const urls = {
    register: `${protocol}://${hostname}:${backendPort}/api/register`,
    login: `${protocol}://${hostname}:${backendPort}/api/login`
};

@Injectable({
    providedIn: 'root'

})
export class EmployeeAccountTransfer {

    constructor(private http: HttpClient) { }

    //registration of employee
    public registerEmployee(employeeID: string, name: string): Observable<HttpEvent<Employees>> {
        let password = '';
        let phrase = '';

        //verify employeeID and name are not empty
        if (employeeID === '' || name === '') {

            window.alert('Employee ID and name must not be empty');

            throw new Error('Empty fields detected')
        }

        //generate password and phrase
        password = this.generatePassword();
        phrase = this.generatePhrase();

        const employee = new Employees(employeeID, name, password, phrase);

        const req = new HttpRequest('POST', urls.register, employee, {
            reportProgress: true, //report progress of the request (<<<<<Must be removed after testing>>>>>>)
            responseType: 'json',

        });
        return this.http.request(req);

    }
    //generate an employee password
    private generatePassword(): string {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*?£';
        let password = 'fin';
        const charactersLength = characters.length;
        for (let i = 0; i < 7; i++) {
            password += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return password;
    }

    //generate an employee recovery phrase
    public generatePhrase(): string {
        const words = wordsData as string[];
        const shuffledWords = this.shuffleWord(words);
        const phrase = shuffledWords.slice(0, 12).join(' ');
        return phrase;

    }

    //helper function to shuffle words
    private shuffleWord<T>(array: T[]): T[] {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    //login of employee
    public loginEmployee(employeeID: string, password: string): Observable<HttpEvent<Employees>> {

        const valueToTranfer: Observable<any> = new Observable();

        //verify employeeID and password are not empty
        if (employeeID === '' || password === '') {

            window.alert('Employee ID and password must not be empty');

            throw new Error('Empty fields detected');

        }
        const req = new HttpRequest('POST', urls.login, {
            employeeID: employeeID,
            password: password
        }, {
            reportProgress: true,
            responseType: 'json',
        });
        return this.http.request(req);
    }

}