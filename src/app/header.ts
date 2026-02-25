import { ChangeDetectionStrategy, Component, signal, afterNextRender } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  imports: [CommonModule, MatIconModule],
  template: `
    <header 
      [class.bg-anthracite/90]="isScrolled()"
      [class.backdrop-blur-md]="isScrolled()"
      [class.py-4]="isScrolled()"
      [class.py-6]="!isScrolled()"
      [class.shadow-lg]="isScrolled()"
      class="fixed top-0 left-0 right-0 z-[60] transition-all duration-300 text-white"
    >
      <div class="container mx-auto px-6 flex items-center justify-between">
        <!-- Logo -->
        <a href="#" class="flex items-center gap-2 group">
          <div class="w-10 h-10 bg-oak rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
            <mat-icon class="text-white">construction</mat-icon>
          </div>
          <div class="flex flex-col leading-none">
            <span class="text-xl font-extrabold tracking-tighter uppercase">Milan Viba</span>
            <span class="text-[10px] text-oak font-bold uppercase tracking-[0.2em]">Stavebné práce</span>
          </div>
        </a>

        <!-- Desktop Nav -->
        <nav class="hidden md:flex items-center gap-8">
          <a href="#services" class="text-sm font-bold uppercase tracking-widest hover:text-oak transition-colors">Služby</a>
          <a href="#process" class="text-sm font-bold uppercase tracking-widest hover:text-oak transition-colors">Postup</a>
          <a href="#gallery" class="text-sm font-bold uppercase tracking-widest hover:text-oak transition-colors">Galéria</a>
          <a href="#testimonials" class="text-sm font-bold uppercase tracking-widest hover:text-oak transition-colors">Recenzie</a>
          <a href="#contact" class="px-5 py-2 bg-oak hover:bg-oak/90 rounded-full text-sm font-bold uppercase tracking-widest transition-all shadow-md">Kontakt</a>
        </nav>

        <!-- Mobile Menu Toggle -->
        <button 
          (click)="toggleMenu()"
          class="md:hidden w-10 h-10 flex items-center justify-center bg-white/10 rounded-lg"
        >
          <mat-icon>{{ isMenuOpen() ? 'close' : 'menu' }}</mat-icon>
        </button>
      </div>

      <!-- Mobile Nav -->
      <div 
        [class.translate-x-0]="isMenuOpen()"
        [class.translate-x-full]="!isMenuOpen()"
        class="fixed inset-0 top-[72px] bg-anthracite z-50 transition-transform duration-500 md:hidden flex flex-col items-center justify-center gap-8"
      >
        <a (click)="toggleMenu()" href="#services" class="text-2xl font-bold uppercase tracking-widest hover:text-oak transition-colors">Služby</a>
        <a (click)="toggleMenu()" href="#process" class="text-2xl font-bold uppercase tracking-widest hover:text-oak transition-colors">Postup</a>
        <a (click)="toggleMenu()" href="#gallery" class="text-2xl font-bold uppercase tracking-widest hover:text-oak transition-colors">Galéria</a>
        <a (click)="toggleMenu()" href="#testimonials" class="text-2xl font-bold uppercase tracking-widest hover:text-oak transition-colors">Recenzie</a>
        <a (click)="toggleMenu()" href="#contact" class="px-10 py-4 bg-oak rounded-full text-xl font-bold uppercase tracking-widest">Kontakt</a>
      </div>
    </header>
  `,
  styles: [`
    :host { display: block; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Header {
  protected readonly isScrolled = signal(false);
  protected readonly isMenuOpen = signal(false);

  constructor() {
    afterNextRender(() => {
      window.addEventListener('scroll', () => {
        this.isScrolled.set(window.scrollY > 50);
      });
    });
  }

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
    if (this.isMenuOpen()) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }
}
