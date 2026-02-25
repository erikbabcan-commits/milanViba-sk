import { ChangeDetectionStrategy, Component, inject, ElementRef, viewChild, afterNextRender } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './data.service';
import { MatIconModule } from '@angular/material/icon';
import { animate, stagger, inView } from 'motion';

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule, MatIconModule],
  template: `
    <section class="py-24 bg-cream overflow-hidden">
      <div class="container mx-auto px-6">
        <div #header class="text-center mb-16 opacity-0">
          <h2 class="text-3xl md:text-5xl font-extrabold text-anthracite mb-4">Čo hovoria klienti</h2>
          <div class="w-20 h-1.5 bg-oak mx-auto rounded-full"></div>
        </div>

        <div #grid class="grid grid-cols-1 md:grid-cols-3 gap-8">
          @for (item of data.testimonials(); track item.id) {
            <div class="testimonial-card bg-white p-10 rounded-3xl shadow-sm border border-black/5 relative opacity-0">
              <!-- Quote Icon -->
              <mat-icon class="absolute top-6 right-8 text-oak/10 text-6xl scale-[2]">format_quote</mat-icon>
              
              <div class="flex gap-1 mb-6">
                @for (star of [1,2,3,4,5]; track star) {
                  <mat-icon class="text-oak text-sm">star</mat-icon>
                }
              </div>

              <p class="text-anthracite/80 italic mb-8 leading-relaxed relative z-10">
                "{{ item.text }}"
              </p>

              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-cream rounded-full flex items-center justify-center font-bold text-oak">
                  {{ item.name.charAt(0) }}
                </div>
                <div class="font-bold text-anthracite">{{ item.name }}</div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host { display: block; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Testimonials {
  protected readonly data = inject(DataService);
  private readonly header = viewChild<ElementRef>('header');
  private readonly grid = viewChild<ElementRef>('grid');

  constructor() {
    afterNextRender(() => {
      const headerEl = this.header()?.nativeElement;
      const gridEl = this.grid()?.nativeElement;

      if (headerEl) {
        inView(headerEl, () => {
          animate(
            headerEl,
            { opacity: [0, 1], y: [20, 0] },
            { duration: 0.8, ease: "easeOut" }
          );
        });
      }

      if (gridEl) {
        inView(gridEl, () => {
          const cards = gridEl.querySelectorAll('.testimonial-card');
          animate(
            cards,
            { opacity: [0, 1], scale: [0.95, 1] },
            { 
              delay: stagger(0.2),
              duration: 0.8,
              ease: "easeOut"
            }
          );
        });
      }
    });
  }
}
