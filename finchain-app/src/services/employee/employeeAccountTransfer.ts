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
    providedIn: 'root' // This makes the service available application-wide

})
export class EmployeeAccountTransfer {

    constructor(private http: HttpClient) { }

    public registerEmployee(employeeID: string, name: string): Observable<HttpEvent<Employees>> {
        let password = '';
        let phrase = '';

        //verify employeeID and name are not empty
        if (employeeID === '' || name === '') {
            throw new Error('Employee ID and name must not be empty');
        }

        //generate password and phrase
        password = this.generatePassword();
        phrase = this.generatePhrase();

        const employee = new Employees(employeeID, name, password, phrase);

        const req = new HttpRequest('POST', urls.register, employee, {
            reportProgress: true,
            responseType: 'json',

        });

        //return employee;
        return this.http.request(req);

    }
    private generatePassword(): string {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*?£';
        let password = 'fin';
        const charactersLength = characters.length;
        for (let i = 0; i < 7; i++) {
            password += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return password;
    }
    public generatePhrase(): string {
        const words = wordsData as string[];
        const shuffledWords = this.shuffleWord(words);
        const phrase = shuffledWords.slice(0, 12).join(' ');
        return phrase;

    }
    private shuffleWord<T>(array: T[]): T[] {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

}