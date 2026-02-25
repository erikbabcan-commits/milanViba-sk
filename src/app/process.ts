import { ChangeDetectionStrategy, Component, inject, ElementRef, viewChild, afterNextRender } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './data.service';
import { MatIconModule } from '@angular/material/icon';
import { animate, stagger, inView } from 'motion';

@Component({
  selector: 'app-process',
  imports: [CommonModule, MatIconModule],
  template: `
    <section class="py-24 bg-white overflow-hidden">
      <div class="container mx-auto px-6">
        <div #header class="text-center mb-16 opacity-0">
          <h2 class="text-3xl md:text-5xl font-extrabold text-anthracite mb-4">Ako pracujeme</h2>
          <p class="text-anthracite/60 max-w-2xl mx-auto">
            Transparentnosť a jasný plán sú základom úspešnej spolupráce. Tu je náš overený postup.
          </p>
        </div>

        <div #grid class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <!-- Connector Line (Desktop) -->
          <div class="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-oak/10 -translate-y-1/2 z-0"></div>

          @for (step of data.processSteps(); track step.id; let last = $last) {
            <div class="process-step relative z-10 flex flex-col items-center text-center opacity-0">
              <div class="w-20 h-20 bg-cream rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-xl group-hover:scale-110 transition-transform">
                <mat-icon class="text-3xl text-oak">{{ step.icon }}</mat-icon>
                <!-- Step Number -->
                <div class="absolute -top-2 -right-2 w-8 h-8 bg-anthracite text-white text-xs font-bold rounded-full flex items-center justify-center border-2 border-white">
                  {{ step.id }}
                </div>
              </div>
              <h3 class="text-xl font-bold text-anthracite mb-3">{{ step.title }}</h3>
              <p class="text-sm text-anthracite/60 leading-relaxed px-4">
                {{ step.description }}
              </p>
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
export class Process {
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
          const steps = gridEl.querySelectorAll('.process-step');
          animate(
            steps,
            { opacity: [0, 1], y: [30, 0] },
            { 
              delay: stagger(0.2),
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1]
            }
          );
        });
      }
    });
  }
}
