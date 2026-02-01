import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pagina-estamparia',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './pagina-estamparia.html',
  styleUrl: './pagina-estamparia.scss',
})
export class PaginaEstampariaComponent {
  produtos = [
    {
      nome: 'Camisetas Personalizadas',
      descricao: 'Algodão premium, diversos tamanhos e cores. Estampa duradoura.',
      imagem: 'assets/camisa-personalizada-lorrane.dev.png',
    },
    {
      nome: 'Toalinhas e Canecas',
      descricao: 'Cerâmica, polímero e tecido. Personalize com fotos, logos ou artes.',
      imagem: 'assets/toalinha-personalizada.png',
    },
    {
      nome: 'Ecobags',
      descricao: 'Sacolas ecológicas personalizadas. Ótimas para eventos e brindes.',
      imagem: 'assets/produto-ecobags.jpg',
    },
    {
      nome: 'Bonés e Chapéus',
      descricao: 'Bordado ou sublimação. Diversos modelos e cores.',
      imagem: 'assets/produto-bones.jpg',
    },
    {
      nome: 'Almofadas',
      descricao: 'Personalize com fotos e artes especiais. Presente perfeito.',
      imagem: 'assets/produto-almofadas.jpg',
    },
    {
      nome: 'Brindes Corporativos',
      descricao: 'Squeezes, chaveiros, mousepads e muito mais.',
      imagem: 'assets/produto-brindes.jpg',
    },
  ];

  beneficios = [
    { titulo: 'Personalização Total', descricao: 'Sua arte, do seu jeito' },
    { titulo: 'Feito com Carinho', descricao: 'Cada peça é única e especial' },
    { titulo: 'Qualidade Premium', descricao: 'Materiais de primeira linha' },
  ];
}
