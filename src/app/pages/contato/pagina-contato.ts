import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pagina-contato',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './pagina-contato.html',
  styleUrl: './pagina-contato.scss',
})
export class PaginaContatoComponent {
  faqs = [
    {
      q: 'Qual o prazo de entrega?',
      a: 'O prazo varia de acordo com o produto e quantidade. Em geral, trabalhamos com prazos de 3 a 7 dias úteis.',
    },
    {
      q: 'Vocês fazem entrega para todo o Brasil?',
      a: 'Sim! Realizamos entregas para todo o território nacional via Correios ou transportadoras.',
    },
    {
      q: 'Qual a quantidade mínima de pedido?',
      a: 'Depende do produto. Para alguns itens trabalhamos sem quantidade mínima. Entre em contato para saber mais!',
    },
    {
      q: 'Posso enviar minha própria arte?',
      a: 'Claro! Aceitamos artes em diversos formatos. Nossa equipe também pode criar a arte para você.',
    },
  ];
}
