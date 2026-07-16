import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private isDark = false;

  constructor() {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
      this.enableDarkMode();
    }
  }

  toggleTheme() {
    this.isDark = !this.isDark;

    if (this.isDark) {
      this.enableDarkMode();
    } else {
      this.enableLightMode();
    }
  }

  enableDarkMode() {
    document.body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
    this.isDark = true;
  }

  enableLightMode() {
    document.body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
    this.isDark = false;
  }

  get currentTheme() {
    return this.isDark;
  }
}