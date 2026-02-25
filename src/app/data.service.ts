import { Injectable, signal } from '@angular/core';

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface GalleryItem {
  id: number;
  url: string;
  alt: string;
  aspectRatio: 'portrait' | 'landscape' | 'square';
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  readonly phone = signal('0917 115 596');
  readonly email = signal('milanviba@gmail.com');
  
  readonly services = signal<ServiceItem[]>([
    {
      id: 1,
      title: 'Kompletné prestavby',
      description: 'Zabezpečujeme celkové rekonštrukcie bytov a domov od búracích prác až po finálne detaily.',
      icon: 'home'
    },
    {
      id: 2,
      title: 'Obklady a dlažby',
      description: 'Precízna pokládka veľkoformátových dlažieb a obkladov s dôrazom na čisté hrany a detaily.',
      icon: 'grid_view'
    },
    {
      id: 3,
      title: 'Sadrokartóny',
      description: 'Montáž sadrokartónových systémov RIGIPS a KNAUF pre stropy, priečky a podkrovia.',
      icon: 'architecture'
    }
  ]);

  readonly gallery = signal<GalleryItem[]>([
    { id: 1, url: 'https://picsum.photos/seed/viba1/800/1200', alt: 'Kúpeľňa realizácia 1', aspectRatio: 'portrait' },
    { id: 2, url: 'https://picsum.photos/seed/viba2/1200/800', alt: 'Kúpeľňa realizácia 2', aspectRatio: 'landscape' },
    { id: 3, url: 'https://picsum.photos/seed/viba3/800/800', alt: 'Detail obkladu', aspectRatio: 'square' },
    { id: 4, url: 'https://picsum.photos/seed/viba4/800/1200', alt: 'Moderná sprcha', aspectRatio: 'portrait' },
    { id: 5, url: 'https://picsum.photos/seed/viba5/1200/800', alt: 'Rekonštrukcia bytu', aspectRatio: 'landscape' },
    { id: 6, url: 'https://picsum.photos/seed/viba6/800/1200', alt: 'Sadrokartónový strop', aspectRatio: 'portrait' }
  ]);

  readonly partners = signal<string[]>(['RIGIPS', 'KNAUF', 'MAPEI', 'PCI']);

  readonly testimonials = signal([
    {
      id: 1,
      name: 'Peter K.',
      text: 'Maximálna spokojnosť s rekonštrukciou kúpeľne. Pán Viba je skutočný odborník, ktorý si potrpí na detaily.',
      rating: 5
    },
    {
      id: 2,
      name: 'Mária S.',
      text: 'Veľmi oceňujem čistotu na pracovisku a dodržanie dohodnutého termínu. Odporúčam všetkými desiatimi.',
      rating: 5
    },
    {
      id: 3,
      name: 'Jozef H.',
      text: 'Kompletná prestavba bytu prebehla bez problémov. Skvelá komunikácia a profesionálny prístup.',
      rating: 5
    }
  ]);

  readonly processSteps = signal([
    {
      id: 1,
      title: 'Obhliadka a konzultácia',
      description: 'Prídeme k vám, zameriame priestory a prekonzultujeme vaše predstavy a možnosti.',
      icon: 'visibility'
    },
    {
      id: 2,
      title: 'Cenová ponuka',
      description: 'Vypracujeme detailný rozpočet materiálov a prác bez skrytých poplatkov.',
      icon: 'description'
    },
    {
      id: 3,
      title: 'Realizácia',
      description: 'Samotné stavebné práce pod neustálym dohľadom a s dôrazom na kvalitu.',
      icon: 'construction'
    },
    {
      id: 4,
      title: 'Odovzdanie diela',
      description: 'Finálna kontrola, upratanie a odovzdanie hotového projektu k vašej spokojnosti.',
      icon: 'task_alt'
    }
  ]);
}
