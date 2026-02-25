import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService, GalleryItem } from './data.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule, MatIconModule],
  template: `
    <section id="gallery" class="py-24 bg-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-5xl font-extrabold text-anthracite mb-4">Ukážky prác</h2>
          <div class="w-20 h-1.5 bg-oak mx-auto rounded-full"></div>
        </div>

        <div class="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          @for (item of data.gallery(); track item.id) {
            <div 
              class="relative overflow-hidden rounded-2xl cursor-pointer group break-inside-avoid"
              (click)="openLightbox(item)"
            >
              <img 
                [src]="item.url" 
                [alt]="item.alt"
                loading="lazy"
                class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div class="absolute inset-0 bg-anthracite/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <mat-icon class="text-white text-4xl">zoom_in</mat-icon>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Lightbox -->
    @if (selectedImage(); as item) {
      <div 
        class="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
        (click)="closeLightbox()"
      >
        <button 
          class="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
          (click)="closeLightbox()"
        >
          <mat-icon class="text-4xl">close</mat-icon>
        </button>
        
        <img 
          [src]="item.url" 
          [alt]="item.alt"
          class="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          (click)="$event.stopPropagation()"
          referrerPolicy="no-referrer"
        />
        
        <div class="absolute bottom-10 left-0 right-0 text-center text-white/80 font-medium">
          {{ item.alt }}
        </div>
      </div>
    }
  `,
  styles: [`
    :host { display: block; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Gallery {
  protected readonly data = inject(DataService);
  protected readonly selectedImage = signal<GalleryItem | null>(null);

  openLightbox(item: GalleryItem) {
    this.selectedImage.set(item);
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.selectedImage.set(null);
    document.body.style.overflow = 'auto';
  }
}
