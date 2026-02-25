import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Header } from './header';
import { Hero } from './hero';
import { Services } from './services';
import { Features } from './features';
import { Process } from './process';
import { Gallery } from './gallery';
import { Testimonials } from './testimonials';
import { Contact } from './contact';
import { Footer } from './footer';
import { Fab } from './fab';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  imports: [Header, Hero, Services, Features, Process, Gallery, Testimonials, Contact, Footer, Fab],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
