import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Preloader } from './preloader';
import { Header } from './header';
import { Hero } from './hero';
import { Services } from './services';
import { Features } from './features';
import { Partners } from './partners';
import { Process } from './process';
import { Gallery } from './gallery';
import { Testimonials } from './testimonials';
import { Contact } from './contact';
import { Footer } from './footer';
import { Fab } from './fab';
import { ScrollTop } from './scroll-top';
import { CookieConsent } from './cookie-consent';
import { PwaInstall } from './pwa-install';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  imports: [Preloader, Header, Hero, Services, Features, Partners, Process, Gallery, Testimonials, Contact, Footer, Fab, ScrollTop, CookieConsent, PwaInstall],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
