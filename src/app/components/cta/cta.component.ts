import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="bg-primary text-white py-16 lg:py-20 text-center">
      <div class="container px-4">
        <h2 class="text-3xl lg:text-4xl font-bold mb-5">Prêt à contribuer à des projets open-source ?</h2>
        <p class="text-lg lg:text-xl max-w-3xl mx-auto mb-8 opacity-90">Rejoignez Teamoop dès aujourd'hui et commencez votre parcours dans l'univers de l'open-source avec le soutien d'une communauté bienveillante.</p>
        <div class="flex flex-col sm:flex-row justify-center gap-5">
          <a routerLink="/register" class="btn btn-secondary">S'inscrire gratuitement</a>
          <a routerLink="/login" class="btn btn-outline">En savoir plus</a>
        </div>
      </div>
    </section>
  `,
  styles: `
    .btn {
      @apply mb-3 sm:mb-0;
    }
  `
})
export class CtaComponent {}