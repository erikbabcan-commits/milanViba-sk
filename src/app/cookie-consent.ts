import { ChangeDetectionStrategy, Component, signal, afterNextRender } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cookie-consent',
  imports: [CommonModule, MatIconModule],
  template: `
    @if (isVisible()) {
      <div 
        class="fixed bottom-6 left-6 right-6 md:left-6 md:right-auto md:max-w-sm z-[70] bg-anthracite text-white p-6 rounded-2xl shadow-2xl border border-white/10 animate-in fade-in slide-in-from-bottom-10 duration-500"
      >
        <div class="flex items-start gap-4">
          <div class="w-10 h-10 bg-oak/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <mat-icon class="text-oak">cookie</mat-icon>
          </div>
          <div>
            <h4 class="font-bold mb-1">Používame cookies</h4>
            <p class="text-xs text-white/60 leading-relaxed mb-4">
              Tento web používa súbory cookies na zlepšenie používateľského zážitku a analýzu návštevnosti.
            </p>
            <div class="flex gap-3">
              <button 
                (click)="accept()"
                class="bg-oak hover:bg-oak/90 text-white text-xs font-bold py-2 px-4 rounded-lg transition-colors"
              >
                Súhlasím
              </button>
              <button 
                (click)="isVisible.set(false)"
                class="text-white/40 hover:text-white text-xs font-bold py-2 px-4 transition-colors"
              >
                Zavrieť
              </button>
            </div>
          </div>
        </div>
      </div>
    }
  `,
  styles: [`
    :host { display: block; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CookieConsent {
  protected readonly isVisible = signal(false);

  constructor() {
    afterNextRender(() => {
      const consent = localStorage.getItem('cookie-consent');
      if (!consent) {
        setTimeout(() => this.isVisible.set(true), 2000);
      }
    });
  }

  accept() {
    localStorage.setItem('cookie-consent', 'true');
    this.isVisible.set(false);
  }
}
