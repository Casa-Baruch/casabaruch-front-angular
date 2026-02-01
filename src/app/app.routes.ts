import { Routes } from '@angular/router';
import { PaginaInicialComponent } from './pages/pagina-inicial/pagina-inicial';
import { PaginaNaoEncontradaComponent } from './pages/nao-encontrada/pagina-nao-encontrada';
import { ContatoWhatsComponent } from './pages/contato-whats/contato-whats';

export const routes: Routes = [
  {
    path: '',
    component: PaginaInicialComponent,
    title: 'Casa Baruch - Gráfica e Estamparia em São Paulo',
  },
  {
    path: 'contato-whats',
    component: ContatoWhatsComponent,
    title: 'Fale Conosco - Casa Baruch',
  },
  {
    path: '**',
    component: PaginaNaoEncontradaComponent,
    title: 'Página Não Encontrada - Casa Baruch',
  },
];
