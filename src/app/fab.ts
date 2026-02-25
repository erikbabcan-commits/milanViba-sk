import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './data.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-fab',
  imports: [CommonModule, MatIconModule],
  template: `
    <a 
      [href]="'tel:' + data.phone().replace(' ', '')"
      class="fixed bottom-6 right-6 z-50 w-16 h-16 bg-oak text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all group"
      aria-label="Zavolať"
    >
      <div class="absolute inset-0 bg-oak rounded-full animate-ping opacity-20"></div>
      <mat-icon class="text-3xl">phone</mat-icon>
      
      <!-- Tooltip -->
      <span class="absolute right-20 bg-anthracite text-white text-xs font-bold py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
        Zavolať: {{ data.phone() }}
      </span>
    </a>
  `,
  styles: [`
    :host { display: block; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Fab {
  protected readonly data = inject(DataService);
}
