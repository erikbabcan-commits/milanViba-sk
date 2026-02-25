import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './data.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, MatIconModule],
  template: `
    <footer class="bg-anthracite text-white/40 py-12 border-t border-white/5">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <!-- Brand -->
          <div class="flex flex-col gap-4">
            <div class="flex items-center gap-2 text-white">
              <div class="w-8 h-8 bg-oak rounded flex items-center justify-center">
                <mat-icon class="text-sm">construction</mat-icon>
              </div>
              <span class="text-lg font-bold uppercase tracking-tighter">Milan Viba</span>
            </div>
            <p class="text-sm leading-relaxed">
              Profesionálne stavebné práce a rekonštrukcie s dôrazom na kvalitu a detail. Pôsobíme v regióne a okolí.
            </p>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="text-white font-bold uppercase tracking-widest text-xs mb-6">Rýchle odkazy</h4>
            <ul class="space-y-3 text-sm">
              <li><a href="#services" class="hover:text-oak transition-colors">Naše služby</a></li>
              <li><a href="#gallery" class="hover:text-oak transition-colors">Ukážky prác</a></li>
              <li><a href="#contact" class="hover:text-oak transition-colors">Kontaktujte nás</a></li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div>
            <h4 class="text-white font-bold uppercase tracking-widest text-xs mb-6">Kontakt</h4>
            <ul class="space-y-3 text-sm">
              <li class="flex items-center gap-3">
                <mat-icon class="text-oak text-sm">phone</mat-icon>
                {{ data.phone() }}
              </li>
              <li class="flex items-center gap-3">
                <mat-icon class="text-oak text-sm">email</mat-icon>
                {{ data.email() }}
              </li>
            </ul>
          </div>
        </div>

        <div class="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div>© {{ currentYear }} Milan Viba. Všetky práva vyhradené.</div>
          <div class="flex gap-6">
            <a href="#" class="hover:text-white transition-colors">Ochrana osobných údajov</a>
            <a href="#" class="hover:text-white transition-colors">Všeobecné podmienky</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    :host { display: block; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Footer {
  protected readonly data = inject(DataService);
  protected readonly currentYear = new Date().getFullYear();
}
