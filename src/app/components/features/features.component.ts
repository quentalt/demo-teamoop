import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-16" id="features">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-5 text-text">Pourquoi choisir Teamoop ?</h2>
          <p class="text-xl max-w-3xl mx-auto text-text opacity-80">Notre plateforme offre des fonctionnalités uniques pour faciliter votre entrée dans le monde de l'open-source</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white rounded shadow p-8 transition-transform hover:-translate-y-1" *ngFor="let feature of features()">
            <div class="text-4xl text-primary mb-5" [innerHTML]="feature.icon"></div>
            <h3 class="text-2xl font-medium mb-4 text-text">{{ feature.title }}</h3>
            <p class="text-text opacity-80">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: ``
})
export class FeaturesComponent {
  features = signal<Feature[]>([
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16"><path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/></svg>',
      title: 'Projets adaptés à votre niveau',
      description: 'Trouvez des projets open-source spécifiquement adaptés à votre niveau de compétence et à vos intérêts technologiques.'
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5Z"/></svg>',
      title: 'Mentorat personnalisé',
      description: 'Bénéficiez des conseils de développeurs expérimentés qui vous guideront tout au long de votre parcours de contribution.'
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16"><path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/></svg>',
      title: 'Documentation claire',
      description: 'Accédez à des guides détaillés et à une documentation complète pour faciliter votre contribution aux projets.'
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16"><path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>',
      title: 'Communauté active',
      description: 'Rejoignez une communauté dynamique de développeurs juniors et seniors partageant les mêmes intérêts et objectifs.'
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/></svg>',
      title: 'Suivi de progression',
      description: 'Visualisez votre évolution et vos contributions grâce à des outils de suivi de progression personnalisés.'
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16"><path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/><path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z"/></svg>',
      title: 'Projets variés',
      description: 'Découvrez une large gamme de projets dans différents langages et technologies pour élargir vos compétences.'
    }
  ]);
}