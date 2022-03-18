import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class GreetingService {
    private greeting: string;

    constructor() {
        this.greeting = "Hello";
    }

    getGreeting(): string {
        return this.greeting;
    }

    setGreeting(newGreeting: string): void {
        this.greeting = newGreeting;
    }
}