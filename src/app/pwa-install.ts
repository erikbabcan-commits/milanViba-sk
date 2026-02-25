import { ChangeDetectionStrategy, Component, signal, afterNextRender } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-pwa-install',
  imports: [CommonModule, MatIconModule],
  template: `
    @if (showPrompt()) {
      <div 
        class="fixed bottom-24 left-6 right-6 md:left-auto md:right-6 md:w-80 z-[80] bg-white p-5 rounded-2xl shadow-2xl border border-oak/20 animate-in fade-in slide-in-from-right-10 duration-500"
      >
        <div class="flex items-start gap-4">
          <div class="w-12 h-12 bg-oak rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-oak/20">
            <mat-icon class="text-white">install_mobile</mat-icon>
          </div>
          <div class="flex-1">
            <h4 class="font-bold text-anthracite text-sm mb-1">Inštalovať aplikáciu</h4>
            <p class="text-xs text-anthracite/60 leading-relaxed mb-4">
              Pridajte si nás na plochu pre rýchly prístup k našim službám a galérii.
            </p>
            <div class="flex gap-2">
              <button 
                (click)="install()"
                class="flex-1 bg-anthracite hover:bg-black text-white text-[10px] font-bold py-2 px-3 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <mat-icon class="text-xs">add_to_home_screen</mat-icon>
                Inštalovať
              </button>
              <button 
                (click)="dismiss()"
                class="px-3 py-2 text-anthracite/40 hover:text-anthracite text-[10px] font-bold transition-colors"
              >
                Neskôr
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
export class PwaInstall {
  protected readonly showPrompt = signal(false);
  private deferredPrompt: any;

  constructor() {
    afterNextRender(() => {
      window.addEventListener('beforeinstallprompt', (e) => {
        // Prevent Chrome 67 and earlier from automatically showing the prompt
        e.preventDefault();
        // Stash the event so it can be triggered later.
        this.deferredPrompt = e;
        // Update UI notify the user they can install the PWA
        this.showPrompt.set(true);
      });

      window.addEventListener('appinstalled', () => {
        this.showPrompt.set(false);
        this.deferredPrompt = null;
        console.log('PWA was installed');
      });
    });
  }

  async install() {
    if (!this.deferredPrompt) return;
    
    this.showPrompt.set(false);
    this.deferredPrompt.prompt();
    
    const { outcome } = await this.deferredPrompt.userChoice;
    console.log(`User response to the install prompt: ${outcome}`);
    this.deferredPrompt = null;
  }

  dismiss() {
    this.showPrompt.set(false);
  }
}
