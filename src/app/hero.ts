import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './data.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-hero',
  imports: [CommonModule, MatIconModule],
  template: `
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Background Image with Overlay -->
      <div class="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/viba-hero/1920/1080" 
          alt="Stavebné práce Milan Viba" 
          class="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div class="absolute inset-0 bg-anthracite/70 backdrop-blur-[2px]"></div>
      </div>

      <!-- Content -->
      <div class="relative z-10 container mx-auto px-6 text-center">
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight">
          Kompletné prestavby <br class="hidden md:block"> bytov a domov
        </h1>
        <p class="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto font-light">
          Precízne. Spoľahlivo. Profesionálne. <br>
          Vaša vízia, naša realizácia.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#contact" 
            class="w-full sm:w-auto px-8 py-4 bg-oak hover:bg-oak/90 text-white font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
          >
            <mat-icon>contact_page</mat-icon>
            Kontaktovať
          </a>
          <a 
            href="#services" 
            class="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg transition-all backdrop-blur-sm border border-white/30 flex items-center justify-center gap-2"
          >
            Naše služby
          </a>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <mat-icon class="text-4xl">expand_more</mat-icon>
      </div>
    </section>
  `,
  styles: [`
    :host { display: block; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Hero {}
