import { Component } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CabecalhoComponent } from './components/cabecalho/cabecalho';
import { RodapeComponent } from './components/rodape/rodape';
import { BotaoWhatsappComponent } from './components/botao-whatsapp/botao-whatsapp';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CabecalhoComponent, RodapeComponent, BotaoWhatsappComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  exibirLayoutCompleto = true;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.exibirLayoutCompleto = !event.url.includes('contato-whats');
    });
  }
}
