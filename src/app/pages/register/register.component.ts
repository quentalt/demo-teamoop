import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule,
    HeaderComponent,
    FooterComponent
  ],
  template: `
    <app-header></app-header>
    <main class="min-h-[80vh] flex items-center justify-center py-16 px-4">
      <div class="w-full max-w-md">
        <div class="bg-white rounded-lg shadow-lg p-8">
          <div class="text-center mb-8">
            <h1 class="text-3xl font-bold text-text">Créer un compte</h1>
            <p class="text-text opacity-70 mt-2">Rejoignez la communauté Teamoop</p>
          </div>
          
          <form [formGroup]="registerForm" (ngSubmit)="onSubmit()" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label for="firstName" class="block text-sm font-medium text-text mb-1">Prénom</label>
                <input 
                  type="text" 
                  id="firstName" 
                  formControlName="firstName"
                  class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Prénom"
                >
                <div *ngIf="registerForm.get('firstName')?.invalid && registerForm.get('firstName')?.touched" class="text-red-500 text-sm mt-1">
                  Prénom requis
                </div>
              </div>
              
              <div>
                <label for="lastName" class="block text-sm font-medium text-text mb-1">Nom</label>
                <input 
                  type="text" 
                  id="lastName" 
                  formControlName="lastName"
                  class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Nom"
                >
                <div *ngIf="registerForm.get('lastName')?.invalid && registerForm.get('lastName')?.touched" class="text-red-500 text-sm mt-1">
                  Nom requis
                </div>
              </div>
            </div>
            
            <div>
              <label for="email" class="block text-sm font-medium text-text mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                formControlName="email"
                class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="votre@email.com"
              >
              <div *ngIf="registerForm.get('email')?.invalid && registerForm.get('email')?.touched" class="text-red-500 text-sm mt-1">
                Email invalide
              </div>
            </div>
            
            <div>
              <label for="password" class="block text-sm font-medium text-text mb-1">Mot de passe</label>
              <input 
                type="password" 
                id="password" 
                formControlName="password"
                class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="••••••••"
              >
              <div *ngIf="registerForm.get('password')?.invalid && registerForm.get('password')?.touched" class="text-red-500 text-sm mt-1">
                Le mot de passe doit contenir au moins 6 caractères
              </div>
            </div>
            
            <div>
              <label for="confirmPassword" class="block text-sm font-medium text-text mb-1">Confirmer le mot de passe</label>
              <input 
                type="password" 
                id="confirmPassword" 
                formControlName="confirmPassword"
                class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="••••••••"
              >
              <div *ngIf="registerForm.get('confirmPassword')?.invalid && registerForm.get('confirmPassword')?.touched" class="text-red-500 text-sm mt-1">
                Les mots de passe ne correspondent pas
              </div>
            </div>
            
            <div class="flex items-center">
              <input 
                type="checkbox" 
                id="terms" 
                formControlName="terms"
                class="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
              >
              <label for="terms" class="ml-2 block text-sm text-text">
                J'accepte les <a href="#" class="text-primary hover:underline">conditions d'utilisation</a> et la <a href="#" class="text-primary hover:underline">politique de confidentialité</a>
              </label>
            </div>
            
            <button 
              type="submit" 
              class="w-full btn btn-primary py-3"
              [disabled]="registerForm.invalid"
            >
              S'inscrire
            </button>
          </form>
          
          <div class="mt-6 text-center">
            <p class="text-text">
              Déjà inscrit ? 
              <a routerLink="/login" class="text-primary hover:underline font-medium">Se connecter</a>
            </p>
          </div>
        </div>
      </div>
    </main>
    <app-footer></app-footer>
  `,
  styles: ``
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      terms: [false, Validators.requiredTrue]
    }, {
      validators: this.passwordMatchValidator
    });
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      form.get('confirmPassword')?.setErrors({ mismatch: true });
      return { mismatch: true };
    }

    return null;
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Form submitted', this.registerForm.value);
      // Ici, vous implémenteriez la logique d'inscription
    }
  }
}