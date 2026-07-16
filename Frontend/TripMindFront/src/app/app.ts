import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from '../core-modules/services/theme.service.';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('TripMindFront');
  public themeService= inject(ThemeService);
  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
