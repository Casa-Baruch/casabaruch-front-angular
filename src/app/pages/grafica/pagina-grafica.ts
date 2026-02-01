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
      descricao: 'Vinil, papel, transparente. Diversos formatos e acabamentos.',
      imagem: 'assets/adesivos-casabaruch.png',
    },
    {
      nome: 'Cartões de Visita',
      descricao: 'Couché, kraft, verniz localizado. Impressão frente e verso.',
      imagem: 'assets/produto-cartoes.jpg',
    },
    {
      nome: 'Tags e Etiquetas',
      descricao: 'Tags para roupas, etiquetas para produtos, com furo ou adesivas.',
      imagem: 'assets/tags.png',
    },
    {
      nome: 'Folders e Panfletos',
      descricao: 'Diversos tamanhos e dobras. Ideal para divulgação.',
      imagem: 'assets/produto-folders.jpg',
    },
    {
      nome: 'Banners e Faixas',
      descricao: 'Lona, tecido, com ou sem acabamento. Uso interno e externo.',
      imagem: 'assets/produto-banners.jpg',
    },
    {
      nome: 'Embalagens',
      descricao: 'Caixas, sacolas, papel de seda personalizados.',
      imagem: 'assets/produto-embalagens.jpg',
    },
  ];

  beneficios = [
    { titulo: 'Entrega Rápida', descricao: 'Produção ágil e entregas expressas', icone: 'clock' },
    { titulo: 'Alta Qualidade', descricao: 'Materiais premium e acabamento impecável', icone: 'award' },
    { titulo: 'Atendimento Ágil', descricao: 'Respostas rápidas pelo WhatsApp', icone: 'zap' },
  ];
}
