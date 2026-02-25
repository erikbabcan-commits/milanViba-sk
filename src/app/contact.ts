import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './data.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, MatIconModule],
  template: `
    <section id="contact" class="py-24 bg-anthracite text-white">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="text-4xl md:text-5xl font-extrabold mb-8">Máte projekt? <br> Poďme ho zrealizovať.</h2>
            <p class="text-white/60 text-lg mb-12 max-w-md">
              Sme pripravení na vaše výzvy. Či už ide o malú kúpeľňu alebo kompletnú prestavbu domu, postaráme sa o každý detail.
            </p>

            <div class="space-y-8">
              <a [href]="'tel:' + data.phone().replace(' ', '')" class="flex items-center gap-6 group">
                <div class="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-oak transition-colors">
                  <mat-icon class="text-oak group-hover:text-white">phone</mat-icon>
                </div>
                <div>
                  <div class="text-sm text-white/40 uppercase tracking-widest font-bold mb-1">Zavolajte nám</div>
                  <div class="text-2xl font-bold">{{ data.phone() }}</div>
                </div>
              </a>

              <a [href]="'mailto:' + data.email()" class="flex items-center gap-6 group">
                <div class="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-oak transition-colors">
                  <mat-icon class="text-oak group-hover:text-white">email</mat-icon>
                </div>
                <div>
                  <div class="text-sm text-white/40 uppercase tracking-widest font-bold mb-1">Napíšte nám</div>
                  <div class="text-2xl font-bold">{{ data.email() }}</div>
                </div>
              </a>
            </div>
          </div>

          <div class="bg-white/5 p-10 rounded-3xl border border-white/10">
            <h3 class="text-xl font-bold mb-6">Používame len overené materiály</h3>
            <div class="flex flex-wrap gap-3">
              @for (partner of data.partners(); track partner) {
                <span class="px-4 py-2 bg-white/10 rounded-full text-sm font-bold tracking-wider hover:bg-oak transition-colors cursor-default">
                  {{ partner }}
                </span>
              }
            </div>
            
            <div class="mt-12 pt-12 border-t border-white/10">
              <p class="text-white/40 text-sm italic">
                "Kvalita nie je náhoda, je to výsledok inteligentného úsilia."
              </p>
            </div>
          </div>
        </div>

        <div class="mt-24 pt-8 border-t border-white/10 flex flex-col md:row items-center justify-between gap-4 text-white/40 text-sm">
          <div>© {{ currentYear }} Milan Viba - Stavebné práce. Všetky práva vyhradené.</div>
          <div class="flex gap-6">
            <a href="#" class="hover:text-white transition-colors">Ochrana údajov</a>
            <a href="#" class="hover:text-white transition-colors">Cookies</a>
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
export class Contact {
  protected readonly data = inject(DataService);
  protected readonly currentYear = new Date().getFullYear();
}
