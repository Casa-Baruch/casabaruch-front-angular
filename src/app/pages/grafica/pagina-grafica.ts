import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pagina-grafica',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './pagina-grafica.html',
  styleUrl: './pagina-grafica.scss',
})
export class PaginaGraficaComponent {
  produtos = [
    {
      nome: 'Adesivos Personalizados',
      descricao: 'Vinil, transparente. Diversos formatos e acabamentos.',
      imagem: 'assets/adesivos-casabaruch.png',
    },
    {
      nome: 'Cartões de Visita',
      descricao: 'Impressão premium frente e verso.',
      imagem: 'assets/cartao-de-visita.png',
    },
    {
      nome: 'Tags e Etiquetas',
      descricao: 'Tags para roupas, etiquetas para produtos, com furo ou adesivas.',
      imagem: 'assets/tags.png',
    },
    {
      nome: 'Folders e Panfletos',
      descricao: 'Ideal para divulgação.',
      imagem: 'assets/produto-folders.jpg',
    },
    {
      nome: 'Banners e Faixas',
      descricao: 'Lona, tecido, com ou sem acabamento. Uso interno e externo.',
      imagem: 'assets/produto-banners.jpg',
    },
    {
      nome: 'Embalagens e Lembrancinhas',
      descricao: 'Caixas milk, sacolas e brindes personalizados.',
      imagem: 'assets/caixa-milk.png',
    },
  ];

  beneficios = [
    { titulo: 'Entrega Rápida', descricao: 'Produção ágil e entregas expressas', icone: 'clock' },
    { titulo: 'Alta Qualidade', descricao: 'Materiais premium e acabamento impecável', icone: 'award' },
    { titulo: 'Atendimento Ágil', descricao: 'Respostas rápidas pelo WhatsApp', icone: 'zap' },
  ];
}
