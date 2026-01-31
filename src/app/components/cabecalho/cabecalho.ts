import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LogoComponent } from '../marca/logo/logo';

interface LinkNavegacao {
  rota: string;
  rotulo: string;
  fragmento?: string;
}

@Component({
  selector: 'app-cabecalho',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, LogoComponent],
  templateUrl: './cabecalho.html',
  styleUrl: './cabecalho.scss'
})
export class CabecalhoComponent {
  menuAberto = signal(false);
  scrolled = signal(false);

  links: LinkNavegacao[] = [
    { rota: '/', rotulo: 'Início' },
    { rota: '/', rotulo: 'Infantil & Escolar', fragmento: 'infantil' },
    { rota: '/', rotulo: 'Festa', fragmento: 'festa' },
    { rota: '/', rotulo: 'Para empresas', fragmento: 'solucoes' },
    { rota: '/', rotulo: 'Contato', fragmento: 'contato' }
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled.set(window.scrollY > 20);
  }

  alternarMenu() {
    this.menuAberto.update(v => !v);
  }

  fecharMenu() {
    this.menuAberto.set(false);
  }
}
