import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './data.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-fab',
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      <!-- Toast Notification -->
      @if (toastMessage()) {
        <div 
          class="bg-red-600 text-white px-6 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-bounce"
        >
          <mat-icon>error_outline</mat-icon>
          <span class="font-bold text-sm">{{ toastMessage() }}</span>
          <button (click)="toastMessage.set(null)" class="ml-2 hover:opacity-70">
            <mat-icon class="text-sm">close</mat-icon>
          </button>
        </div>
      }

      <button 
        (click)="makeCall()"
        class="w-16 h-16 bg-oak text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all group relative"
        aria-label="Zavolať"
      >
        <div class="absolute inset-0 bg-oak rounded-full animate-ping opacity-20"></div>
        <mat-icon class="text-3xl">phone</mat-icon>
        
        <!-- Tooltip -->
        <span class="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-anthracite text-white text-xs font-bold py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-xl">
          Zavolať: {{ data.phone() }}
        </span>
      </button>
    </div>
  `,
  styles: [`
    :host { display: block; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Fab {
  protected readonly data = inject(DataService);
  protected readonly toastMessage = signal<string | null>(null);

  makeCall() {
    const phone = this.data.phone().replace(/\s/g, '');
    
    try {
      // Basic validation
      if (!phone || phone.length < 5) {
        throw new Error('Neplatné telefónne číslo');
      }

      // Attempt to call
      const callWindow = window.open(`tel:${phone}`, '_self');
      
      // Since window.open/location.href doesn't return success/fail for protocols,
      // we handle potential synchronous errors here.
      if (!callWindow && typeof window !== 'undefined') {
        // Some browsers might block the action if not triggered correctly
        // though usually tel: is allowed.
      }

    } catch (error) {
      console.error('Call failed:', error);
      this.showToast('Nepodarilo sa iniciovať hovor. Skúste číslo vytočiť manuálne.');
    }
  }

  private showToast(message: string) {
    this.toastMessage.set(message);
    setTimeout(() => {
      this.toastMessage.set(null);
    }, 5000);
  }
}
