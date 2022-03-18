import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GreetingService } from '../services/greeting.service';
@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit, OnChanges {
  @Input() name: string;

  constructor(private greetingService: GreetingService) { 
  }

  ngOnInit() {
    this.name = "world";
  }

  ngOnChanges(changes: SimpleChanges) {
    if(!this.name) {
      this.name = "world";
    }
  }

  getMessage(): string {
    return `${this.greetingService.getGreeting()}, ${this.name}!`;
  }
}
