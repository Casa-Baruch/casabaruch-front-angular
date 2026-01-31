import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IconeComponent } from '../../components/marca/icone/icone';

@Component({
  selector: 'app-pagina-inicial',
  standalone: true,
  imports: [CommonModule, IconeComponent],
  templateUrl: './pagina-inicial.html',
  styleUrl: './pagina-inicial.scss',
})
export class PaginaInicialComponent {
  vantagens = [
    { texto: 'Entrega Rápida' },
    { texto: 'Qualidade Premium' },
    { texto: 'Atendimento Personalizado' },
  ];

  produtosGrafica = [
    {
      nome: 'Adesivos',
      descricao: 'Personalizados em diversos formatos e materiais.',
      imagem: 'assets/adesivos-casabaruch.png',
    },
    {
      nome: 'Cartões de Visita',
      descricao: 'Impressão premium para uma primeira impressão marcante.',
      imagem: 'assets/cartao-visita.jpg',
    },
    {
      nome: 'Tags e Etiquetas',
      descricao: 'O toque final perfeito para seus produtos.',
      imagem: 'assets/tags.jpg',
    },
  ];

  produtosEstamparia = [
    {
      nome: 'Camisetas',
      descricao: 'Estampas duráveis com cores vibrantes.',
      imagem: 'assets/camisetas.jpg',
    },
    {
      nome: 'Toalinhas e Canecas',
      descricao: 'Personalizadas para presentes, escola ou brindes corporativos.',
      imagem: 'assets/canecas.jpg',
    },
    {
      nome: 'Ecobags',
      descricao: 'Sustentabilidade com o estilo da sua marca.',
      imagem: 'assets/ecobags.jpg',
    },
  ];

  produtosEscolares = [
    {
      nome: 'Etiquetas Escolares',
      descricao: 'Para cadernos, livros, lápis e canetas. À prova d’água.',
      imagem: 'assets/etiquetas-escolares.jpg',
    },
    {
      nome: 'Capas e Agendas',
      descricao: 'Capas de caderno, livros e agendas personalizadas.',
      imagem: 'assets/agendas-escolares.jpg',
    },
    {
      nome: 'Identificação',
      descricao: 'Cartão de aluno e horários escolares impressos.',
      imagem: 'assets/identificacao-aluno.jpg',
    },
  ];

  produtosFesta = [
    {
      nome: 'Kit Festa Infantil',
      descricao: 'Combo com topper de bolo, bandeirolas e adesivos.',
      imagem: 'assets/kit-festa.jpg',
    },
    {
      nome: 'Topper de Bolo e Tags',
      descricao: 'Tags para lembrancinhas e toppers personalizados.',
      imagem: 'assets/topper-bolo.jpg',
    },
    {
      nome: 'Rótulos e Convites',
      descricao: 'Convites digitais/impressos e rótulos para guloseimas.',
      imagem: 'assets/convites-festa.jpg',
    },
  ];

  produtosInfantil = [
    {
      nome: 'Decoração do Quarto',
      descricao: 'Quadros, posters educativos e réguas de crescimento.',
      imagem: 'assets/decoracao-infantil.jpg',
    },
    {
      nome: 'Lembrancinhas',
      descricao: 'Sacolinhas, caixinhas milk e cartões de agradecimento.',
      imagem: 'assets/lembrancinhas.jpg',
    },
    {
      nome: 'Educativo e Pedagógico',
      descricao: 'Flashcards, certificados e cartazes para professores.',
      imagem: 'assets/pedagogico.jpg',
    },
  ];

  estatisticas = [
    { valor: '100%', rotulo: 'Qualidade Garantida' },
    { valor: 'Agilidade', rotulo: 'No Atendimento' },
    { valor: 'Personalizado', rotulo: 'Do seu jeito' },
  ];

  depoimentos = [
    {
      nome: 'Mariana Silva',
      texto:
        'Os cartões de visita premium ficaram incríveis! A qualidade do papel e da impressão superou minhas expectativas.',
      estrelas: 5,
      foto: 'assets/user-1.jpg',
    },
    {
      nome: 'Ricardo Oliveira',
      texto:
        'Os adesivos personalizados para minha empresa ficaram perfeitos. Atendimento rápido e entrega antes do prazo.',
      estrelas: 5,
      foto: 'assets/user-2.jpg',
    },
    {
      nome: 'Ana Paula',
      texto:
        'Precisei de tags urgentes para minha loja e a Casa Baruch entregou com uma qualidade impecável e muita agilidade.',
      estrelas: 5,
      foto: 'assets/user-3.jpg',
    },
  ];

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
      q: 'Vocês criam a arte do meu produto?',
      a: 'Sim! Caso você não tenha a arte pronta, nossa equipe de design pode criá-la para você. Esse serviço é cobrado à parte do valor da impressão.',
    },
    {
      q: 'Posso enviar minha própria arte?',
      a: 'Claro! Aceitamos artes em diversos formatos (PDF, AI, CDR, PNG). Se sua arte estiver pronta para impressão, não há custo adicional de criação.',
    },
  ];

  faqAberto: number | null = null;

  toggleFaq(index: number) {
    this.faqAberto = this.faqAberto === index ? null : index;
  }
}
