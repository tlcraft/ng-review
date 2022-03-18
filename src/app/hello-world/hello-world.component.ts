import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit, OnChanges {
  @Input() name: string;
  private readonly greeting: string;

  constructor() { 
    this.greeting = "Hello";
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
    return `${this.greeting}, ${this.name}!`;
  }
}
