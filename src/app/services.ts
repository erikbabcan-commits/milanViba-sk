import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './data.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-services',
  imports: [CommonModule, MatIconModule],
  template: `
    <section id="services" class="py-24 bg-cream">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-5xl font-extrabold text-anthracite mb-4">Naše služby</h2>
          <div class="w-20 h-1.5 bg-oak mx-auto rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          @for (service of data.services(); track service.id) {
            <div class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-black/5 group">
              <div class="w-16 h-16 bg-cream rounded-xl flex items-center justify-center mb-6 group-hover:bg-oak transition-colors">
                <mat-icon class="text-3xl text-oak group-hover:text-white">{{ service.icon }}</mat-icon>
              </div>
              <h3 class="text-xl font-bold text-anthracite mb-4">{{ service.title }}</h3>
              <p class="text-anthracite/70 leading-relaxed">
                {{ service.description }}
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
export class Services {
  protected readonly data = inject(DataService);
}
