import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './data.service';

@Component({
  selector: 'app-partners',
  imports: [CommonModule],
  template: `
    <section class="py-12 bg-white border-y border-black/5 overflow-hidden">
      <div class="container mx-auto px-6">
        <div class="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          @for (partner of data.partners(); track partner) {
            <div class="text-2xl font-black tracking-tighter text-anthracite select-none">
              {{ partner }}
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
export class Partners {
  protected readonly data = inject(DataService);
}
