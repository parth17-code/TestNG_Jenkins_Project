import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemsComponent } from './items/items.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ItemsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-fetch-app');
}
