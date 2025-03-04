import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="py-5">
      <div class="container flex justify-between items-center">
        <div class="flex items-center font-bold text-2xl text-primary">
          <img src="assets/logo.svg" alt="Teamoop Logo" class="h-10 mr-3" />
          <span>Teamoop</span>
        </div>
        
        <nav [class.mobile-nav-active]="isMobileNavActive()">
          <ul class="flex gap-8 list-none">
            <li><a href="#features" class="no-underline text-text font-medium transition-colors hover:text-primary">Fonctionnalités</a></li>
            <li><a href="#projects" class="no-underline text-text font-medium transition-colors hover:text-primary">Projets</a></li>
            <li><a href="#about" class="no-underline text-text font-medium transition-colors hover:text-primary">À propos</a></li>
          </ul>
        </nav>
        
        <div class="flex gap-4">
          <button class="btn btn-secondary">Se connecter</button>
          <button class="btn btn-primary">Publier un projet</button>
        </div>
        
        <button class="hidden flex-col justify-between w-8 h-5 bg-transparent border-none cursor-pointer md:flex lg:hidden" (click)="toggleMobileNav()">
          <span class="block w-full h-0.5 bg-text rounded"></span>
          <span class="block w-full h-0.5 bg-text rounded"></span>
          <span class="block w-full h-0.5 bg-text rounded"></span>
        </button>
      </div>
    </header>
  `,
  styles: `
    @media (max-width: 768px) {
      nav, .auth-buttons {
        display: none;
      }
      
      .mobile-menu-toggle {
        display: flex;
      }
      
      .mobile-nav-active {
        display: block;
        position: absolute;
        top: 80px;
        left: 0;
        right: 0;
        background-color: white;
        padding: 20px;
        box-shadow: var(--box-shadow);
        z-index: 50;
      }
      
      .mobile-nav-active ul {
        display: flex;
        flex-direction: column;
        gap: 15px;
      }
    }
  `
})
export class HeaderComponent {
  isMobileNavActive = signal(false);
  
  toggleMobileNav() {
    this.isMobileNavActive.update(value => !value);
  }
}