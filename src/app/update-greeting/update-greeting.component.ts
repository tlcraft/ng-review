import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GreetingService } from '../services/greeting.service';

@Component({
  selector: 'app-update-greeting',
  templateUrl: './update-greeting.component.html',
  styleUrls: ['./update-greeting.component.scss']
})
export class UpdateGreetingComponent {
  greetingForm = new FormControl("");

  constructor(private greetingService: GreetingService) { }

  ngOnInit() {
    const greeting = this.getCurrentGreeting();
    this.greetingForm.setValue(greeting);
  }

  getCurrentGreeting(): string {
    return this.greetingService.getGreeting();
  }

  saveGreeting(): void {
    const newGreeting = this.greetingForm.value;
    this.greetingService.setGreeting(newGreeting);
  }
}
