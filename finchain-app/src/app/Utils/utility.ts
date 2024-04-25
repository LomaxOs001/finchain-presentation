import wordsData from '../services/data/english.json';
import { Injectable } from '@angular/core';

@Injectable(
    { providedIn: 'root' }
)

export class Utility {

    //generate an employee password
    public generatePassword(): string {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*?£';
        let password = 'fin-';
        const charactersLength = characters.length;
        for (let i = 0; i < 10; i++) {
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

    //helper function to shuffle words to ensure randomness
    private shuffleWord<T>(array: T[]): T[] {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
}
