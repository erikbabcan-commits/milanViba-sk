import { ChangeDetectionStrategy, Component, signal, afterNextRender } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { animate } from 'motion';

@Component({
  selector: 'app-preloader',
  imports: [CommonModule, MatIconModule],
  template: `
    @if (isVisible()) {
      <div 
        id="preloader"
        class="fixed inset-0 z-[1000] bg-anthracite flex flex-col items-center justify-center transition-opacity duration-700"
      >
        <div class="relative">
          <!-- Pulsing Rings -->
          <div class="absolute inset-0 scale-[2] opacity-20 bg-oak rounded-full animate-ping"></div>
          <div class="absolute inset-0 scale-[1.5] opacity-40 bg-oak rounded-full animate-ping [animation-delay:0.5s]"></div>
          
          <!-- Logo Icon -->
          <div class="relative w-24 h-24 bg-oak rounded-2xl flex items-center justify-center shadow-2xl">
            <mat-icon class="text-white text-5xl">construction</mat-icon>
          </div>
        </div>

        <!-- Text -->
        <div class="mt-12 text-center">
          <div class="text-white text-2xl font-extrabold tracking-tighter uppercase mb-1">Milan Viba</div>
          <div class="text-oak text-[10px] font-bold uppercase tracking-[0.4em]">Stavebné práce</div>
        </div>

        <!-- Loading Bar -->
        <div class="mt-8 w-48 h-1 bg-white/10 rounded-full overflow-hidden">
          <div class="h-full bg-oak w-0 animate-[loading_2s_ease-in-out_infinite]"></div>
        </div>
      </div>
    }
  `,
  styles: [`
    :host { display: block; }
    @keyframes loading {
      0% { width: 0; transform: translateX(0); }
      50% { width: 100%; transform: translateX(0); }
      100% { width: 0; transform: translateX(100%); }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Preloader {
  protected readonly isVisible = signal(true);

  constructor() {
    afterNextRender(() => {
      // Small delay to ensure smooth transition and that user actually sees the brand
      setTimeout(() => {
        const el = document.getElementById('preloader');
        if (el) {
          animate(
            el,
            { opacity: [1, 0], scale: [1, 1.1] },
            { duration: 0.8, ease: "easeIn" }
          ).finished.then(() => {
            this.isVisible.set(false);
          });
        } else {
          this.isVisible.set(false);
        }
      }, 1500);
    });
  }
}
