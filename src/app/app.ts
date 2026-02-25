import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Hero } from './hero';
import { Services } from './services';
import { Gallery } from './gallery';
import { Contact } from './contact';
import { Fab } from './fab';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  imports: [Hero, Services, Gallery, Contact, Fab],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
