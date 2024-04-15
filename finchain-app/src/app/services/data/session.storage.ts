import { Injectable } from '@angular/core';

const EMP_TOKEN = 'empl_auth';

@Injectable({
    providedIn: 'root'
})
export class SessionStorage {
    constructor() { }


    public saveToken(sessionId: any): void {
        const aToken = sessionId;
        if (aToken) {
            window.sessionStorage.setItem(EMP_TOKEN, aToken);
            console.log("Token is stored: ", aToken);
        }
    }

    public getToken(): string | null {
        const token = window.sessionStorage.getItem(EMP_TOKEN);
        return token ? token : null;
    }

    public signOut(): void {
        window.sessionStorage.clear();
    }
}