import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="bg-primary text-white py-20 text-center">
      <div class="container">
        <h2 class="text-4xl font-bold mb-5">Prêt à contribuer à des projets open-source ?</h2>
        <p class="text-xl max-w-3xl mx-auto mb-8 opacity-90">Rejoignez Teamoop dès aujourd'hui et commencez votre parcours dans l'univers de l'open-source avec le soutien d'une communauté bienveillante.</p>
        <div class="flex justify-center gap-5 flex-wrap">
          <button class="btn btn-secondary">S'inscrire gratuitement</button>
          <button class="btn btn-outline">En savoir plus</button>
        </div>
      </div>
    </section>
  `,
  styles: `
    @media (max-width: 768px) {
      .flex {
        flex-direction: column;
        align-items: center;
      }
      
      button {
        width: 100%;
        max-width: 300px;
      }
    }
  `
})
export class CtaComponent {}