import { ChangeDetectionStrategy, Component, ElementRef, viewChild, afterNextRender } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { animate, stagger, inView } from 'motion';

@Component({
  selector: 'app-features',
  imports: [CommonModule, MatIconModule],
  template: `
    <section class="py-24 bg-anthracite text-white overflow-hidden">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div #image class="relative opacity-0">
            <div class="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/viba-feature/800/800" 
                alt="Kvalitná práca" 
                class="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <!-- Floating Stats -->
            <div class="absolute -bottom-6 -right-6 bg-oak p-6 rounded-2xl shadow-xl hidden md:block">
              <div class="text-3xl font-black mb-1">15+</div>
              <div class="text-xs uppercase tracking-widest font-bold opacity-80">Rokov skúseností</div>
            </div>
          </div>

          <div #content class="opacity-0">
            <h2 class="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">
              Kvalita, na ktorú sa <br> môžete spoľahnúť
            </h2>
            
            <div class="space-y-8">
              <div class="flex gap-6">
                <div class="flex-shrink-0 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <mat-icon class="text-oak">verified</mat-icon>
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-2">Certifikované materiály</h3>
                  <p class="text-white/60">Používame výhradne materiály od renomovaných výrobcov ako Rigips, Knauf či Mapei.</p>
                </div>
              </div>

              <div class="flex gap-6">
                <div class="flex-shrink-0 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <mat-icon class="text-oak">timer</mat-icon>
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-2">Dodržiavanie termínov</h3>
                  <p class="text-white/60">Váš čas si vážime. Dohodnuté termíny sú pre nás záväzné a nemenné.</p>
                </div>
              </div>

              <div class="flex gap-6">
                <div class="flex-shrink-0 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <mat-icon class="text-oak">cleaning_services</mat-icon>
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-2">Čistota na pracovisku</h3>
                  <p class="text-white/60">Po každom pracovnom dni si po sebe upraceme. Vaša spokojnosť je prioritou.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host { display: block; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Features {
  private readonly image = viewChild<ElementRef>('image');
  private readonly content = viewChild<ElementRef>('content');

  constructor() {
    afterNextRender(() => {
      const imgEl = this.image()?.nativeElement;
      const contentEl = this.content()?.nativeElement;

      if (imgEl) {
        inView(imgEl, () => {
          animate(
            imgEl,
            { opacity: [0, 1], x: [-40, 0] },
            { duration: 0.8, ease: "easeOut" }
          );
        });
      }

      if (contentEl) {
        inView(contentEl, () => {
          animate(
            contentEl,
            { opacity: [0, 1], x: [40, 0] },
            { duration: 0.8, ease: "easeOut" }
          );
        });
      }
    });
  }
}
