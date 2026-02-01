import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IconeComponent } from '../../components/marca/icone/icone';

@Component({
  selector: 'app-pagina-inicial',
  standalone: true,
  imports: [CommonModule, IconeComponent, RouterLink],
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
      imagem: 'assets/cartao-de-visita.png',
    },
    {
      nome: 'Tags e Etiquetas',
      descricao: 'O toque final perfeito para seus produtos.',
      imagem: 'assets/tags.png',
    },
  ];

  produtosEstamparia = [
    {
      nome: 'Camisetas',
      descricao: 'Estampas duráveis com cores vibrantes.',
      imagem: 'assets/camisa-personalizada-lorrane.dev.png',
    },
    {
      nome: 'Toalinhas e Canecas',
      descricao:
        'Personalizadas para presentes, escola ou brindes corporativos.',
      imagem: 'assets/toalinha-personalizada.png',
    },
    {
      nome: 'Ecobags',
      descricao: 'Sustentabilidade com o estilo da sua marca.',
      imagem: 'assets/eco-bag.png',
    },
  ];

  produtosEscolares = [
    {
      nome: 'Kits de Etiquetas Personalizadas',
      descricao:
        'Etiquetas para cadernos e livros, materiais pequenos (lápis e canetinhas) e uniformes. Resistentes à água e com cola extra forte.',
      imagem: 'assets/etiqueta-infantil.png',
    },
    {
      nome: 'Planner escolar semanal',
      descricao: 'Espaço para tarefas, horários e lembretes de material.',
      imagem: 'assets/planner.png',
    },
    {
      nome: 'Flashcards educativos',
      descricao:
        'Alfabeto, números, sílabas e formas. Impressão frente/verso em alta qualidade.',
      imagem: 'assets/flashcards.png',
    },
    {
      nome: 'Certificados escolares',
      descricao:
        'Aluno destaque, leitor do mês, conclusão de semestre e participações especiais.',
      imagem: 'assets/certificado.png',
    },
    {
      nome: 'Bloquinhos de anotação',
      descricao: 'Capa personalizada com o nome da criança.',
      imagem: 'assets/bloquinho-anotacao.png',
    },
    {
      nome: 'Folhas de atividades',
      descricao:
        'Caligrafia, matemática básica e coordenação motora para pré-escola.',
      imagem: 'assets/caligrafica.png',
    },
    {
      nome: 'Capas para trabalhos',
      descricao:
        'Capas prontas e personalizadas com espaço para preencher os dados do aluno.',
      imagem: 'assets/capa-de-trabalho.png',
    },
  ];

  produtosFesta = [
    {
      nome: 'Topper de Bolo e Tags',
      descricao: 'Tags para lembrancinhas e toppers personalizados.',
      imagem: 'assets/topper-de-bolo.png',
    },
    {
      nome: 'Rótulos e Convites',
      descricao: 'Convites digitais/impressos e rótulos para guloseimas.',
      imagem: 'assets/convite.png',
    },
    {
      nome: 'Lembrancinhas',
      descricao: 'Sacolinhas, caixinhas milk e cartões de agradecimento.',
      imagem: 'assets/caixa-milk.png',
    },
  ];

  produtosInfantil = [];

  estatisticas = [
    { valor: '100%', rotulo: 'Qualidade Garantida' },
    { valor: 'Agilidade', rotulo: 'No Atendimento' },
    { valor: 'Personalizado', rotulo: 'Do seu jeito' },
  ];

  depoimentos = [
    {
      nome: 'Mariana Silva',
      texto:
        'As etiquetas escolares são incríveis! Coloquei nos potinhos de lanche e garrafinhas, lavo todo dia e continuam perfeitas. Finalmente um kit que dura o ano todo.',
      estrelas: 5,
      foto: 'assets/user-1.jpg',
    },
    {
      nome: 'Juliana Mendes',
      texto:
        'As etiquetas para uniforme salvaram a vida! Meu filho perdia blusa toda semana na escola, agora com o nome bem visível na etiqueta interna, tudo volta para casa.',
      estrelas: 5,
      foto: 'assets/user-4.jpg',
    },
    {
      nome: 'Ana Paula',
      texto:
        'Sou professora e encomendei os flashcards e cartazes para minha sala. A qualidade da impressão é impecável e as crianças ficaram encantadas com o material.',
      estrelas: 5,
      foto: 'assets/user-3.jpg',
    },
    {
      nome: 'Ricardo Oliveira',
      texto:
        'O planner escolar ajudou muito na rotina do meu pequeno. Ele mesmo marca as tarefas e o espaço para "levar na mochila" evitou muitos esquecimentos.',
      estrelas: 5,
      foto: 'assets/user-2.jpg',
    },
    {
      nome: 'Carla Ferraz',
      texto:
        'As capas para trabalhos escolares são um diferencial maravilhoso. A escola sempre pede e ter uma capa personalizada e prontinha facilita muito nossa vida de mãe.',
      estrelas: 5,
      foto: 'assets/user-5.jpg',
    },
    {
      nome: 'Pedro Santos',
      texto:
        'Fizemos os bloquinhos personalizados com o nome dele e ele amou! Ficou super empolgado para escrever e desenhar. Atendimento nota 10 e entrega rápida.',
      estrelas: 5,
      foto: 'assets/user-6.jpg',
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
