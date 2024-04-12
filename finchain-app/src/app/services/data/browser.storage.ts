import { Injectable } from '@angular/core';

const USER_KEY = 'auth-user';

@Injectable({
    providedIn: 'root'
})

export class BrowserStorage {
    constructor() { }


    public saveUser(user: any): void {
        window.sessionStorage.removeItem(USER_KEY);
        window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    }

    public getUser(): any {
        const user = window.sessionStorage.getItem(USER_KEY);
        if (user) {
            return JSON.parse(user);
        }
        return {};
    }

    public isLogged(): boolean {
        return this.getUser() !== null;
    }

    public signOut(): void {
        window.sessionStorage.clear();
    }
}