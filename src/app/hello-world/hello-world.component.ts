import { Component, OnInit } from '@angular/core';
import { GreetingService } from '../services/greeting.service';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit {
  nameForm = new FormControl("");

  constructor(private greetingService: GreetingService) { 
  }

  ngOnInit() {
    this.nameForm.setValue("world");
  }

  getMessage(): string {
    return `${this.greetingService.getGreeting()}, ${this.nameForm.value}!`;
  }
}
