import { ChangeDetectionStrategy, Component, signal, afterNextRender } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { animate } from 'motion';

@Component({
  selector: 'app-scroll-top',
  imports: [CommonModule, MatIconModule],
  template: `
    <button 
      (click)="scrollToTop()"
      [class.opacity-100]="isVisible()"
      [class.translate-y-0]="isVisible()"
      [class.opacity-0]="!isVisible()"
      [class.translate-y-10]="!isVisible()"
      [class.pointer-events-none]="!isVisible()"
      class="fixed bottom-24 right-6 z-50 w-12 h-12 bg-anthracite text-white rounded-full shadow-xl flex items-center justify-center hover:bg-oak transition-all duration-300 group"
      aria-label="Hore"
    >
      <mat-icon class="group-hover:-translate-y-1 transition-transform">expand_less</mat-icon>
    </button>
  `,
  styles: [`
    :host { display: block; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrollTop {
  protected readonly isVisible = signal(false);

  constructor() {
    afterNextRender(() => {
      window.addEventListener('scroll', () => {
        this.isVisible.set(window.scrollY > 400);
      });
    });
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
