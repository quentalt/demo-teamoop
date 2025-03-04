import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <header class="py-5">
      <div class="container flex justify-between items-center">
        <div class="flex items-center font-bold text-2xl text-primary">
          <img src="assets/logo.svg" alt="Teamoop Logo" class="h-10 mr-3" />
          <span>Teamoop</span>
        </div>

        <nav class="hidden lg:block">
          <ul class="flex gap-8 list-none">
            <li><a href="#features" class="no-underline text-text font-medium transition-colors hover:text-primary">Fonctionnalités</a></li>
            <li><a href="#projects" class="no-underline text-text font-medium transition-colors hover:text-primary">Projets</a></li>
            <li><a href="#about" class="no-underline text-text font-medium transition-colors hover:text-primary">À propos</a></li>
          </ul>
        </nav>

        <div class="hidden lg:flex gap-4">
          <a routerLink="/login" class="btn btn-secondary">Se connecter</a>
          <a routerLink="/register" class="btn btn-primary">S'inscrire</a>
        </div>

        <button
            class="lg:hidden flex flex-col justify-between w-8 h-5 bg-transparent border-none cursor-pointer"
            (click)="toggleMobileNav()"
            aria-label="Menu"
        >
          <span class="block w-full h-0.5 bg-text rounded"></span>
          <span class="block w-full h-0.5 bg-text rounded"></span>
          <span class="block w-full h-0.5 bg-text rounded"></span>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div
          class="mobile-nav fixed inset-0 bg-white z-50 pt-20 px-6 transform transition-transform duration-300 ease-in-out"
          [class.translate-x-0]="isMobileNavActive()"
          [class.translate-x-full]="!isMobileNavActive()"
      >
        <button
            class="absolute top-5 right-5 text-3xl"
            (click)="toggleMobileNav()"
            aria-label="Fermer"
        >
          &times;
        </button>

        <ul class="flex flex-col gap-6 list-none">
          <li><a href="#features" class="block text-xl font-medium py-2 border-b border-gray-100" (click)="toggleMobileNav()">Fonctionnalités</a></li>
          <li><a href="#projects" class="block text-xl font-medium py-2 border-b border-gray-100" (click)="toggleMobileNav()">Projets</a></li>
          <li><a href="#about" class="block text-xl font-medium py-2 border-b border-gray-100" (click)="toggleMobileNav()">À propos</a></li>
        </ul>

        <div class="mt-8 flex flex-col gap-4">
          <a routerLink="/login" class="btn btn-secondary text-center" (click)="toggleMobileNav()">Se connecter</a>
          <a routerLink="/register" class="btn btn-primary text-center" (click)="toggleMobileNav()">S'inscrire</a>
        </div>
      </div>
    </header>
  `,
  styles: `
    .mobile-nav {
      height: 100vh;
      overflow-y: auto;
    }
  `
})
export class HeaderComponent {
  isMobileNavActive = signal(false);

  toggleMobileNav() {
    this.isMobileNavActive.update(value => !value);

    // Prevent scrolling when mobile nav is open
    if (this.isMobileNavActive()) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
}