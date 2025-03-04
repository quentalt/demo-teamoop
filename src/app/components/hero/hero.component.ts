import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="min-h-[80vh] flex items-center relative overflow-hidden py-16">
      <div class="background-pattern absolute inset-0 z-0 opacity-50">
        <div *ngFor="let item of patternItems()"
             class="pattern-item absolute bg-primary opacity-20 rounded"
             [style.width.px]="item.width"
             [style.height.px]="item.height"
             [style.top.%]="item.top"
             [style.left.%]="item.left"
             [style.transform]="'rotate(' + item.rotation + 'deg)'">
        </div>
      </div>

      <div class="container flex flex-col lg:flex-row items-center justify-between z-10">
        <div class="w-full lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
          <h1 class="text-4xl lg:text-5xl font-bold mb-5 text-text">Connectez-vous à des projets open-source passionnants</h1>
          <p class="text-lg lg:text-xl mb-8 text-text opacity-90">Teamoop est la plateforme qui relie les développeurs juniors à des projets open-source adaptés à leur niveau et à leurs intérêts.</p>
          <div class="flex flex-col sm:flex-row gap-4 mb-10 justify-center lg:justify-start">
            <a routerLink="/register" class="btn btn-primary text-center">Explorer les projets</a>
            <button class="btn btn-secondary">Comment ça marche</button>
          </div>
          <div class="flex gap-10 justify-center lg:justify-start">
            <div class="flex flex-col">
              <span class="text-3xl font-bold text-primary">{{ developerCount() }}+</span>
              <span class="text-base text-text">Développeurs</span>
            </div>
            <div class="flex flex-col">
              <span class="text-3xl font-bold text-primary">{{ projectCount() }}+</span>
              <span class="text-base text-text">Projets</span>
            </div>
            <div class="flex flex-col">
              <span class="text-3xl font-bold text-primary">{{ contributionCount() }}+</span>
              <span class="text-base text-text">Contributions</span>
            </div>
          </div>
        </div>

        <div class="w-full lg:w-1/2 flex justify-center">
          <img src="assets/hero-illustration.svg" alt="Développeurs collaborant sur des projets" class="max-w-full h-auto" />
        </div>
      </div>
    </section>
  `,
  styles: ``
})
export class HeroComponent {
  developerCount = signal(1500);
  projectCount = signal(350);
  contributionCount = signal(5200);

  // Éléments de motif pour l'arrière-plan
  patternItems = signal([
    { width: 80, height: 10, top: 20, left: 10, rotation: 45 },
    { width: 60, height: 10, top: 30, left: 80, rotation: -30 },
    { width: 40, height: 10, top: 70, left: 20, rotation: 60 },
    { width: 100, height: 10, top: 80, left: 70, rotation: -15 },
    { width: 30, height: 10, top: 40, left: 40, rotation: 75 },
    { width: 50, height: 10, top: 60, left: 90, rotation: -45 },
    { width: 70, height: 10, top: 10, left: 60, rotation: 30 },
    { width: 90, height: 10, top: 50, left: 30, rotation: -60 }
  ]);
}