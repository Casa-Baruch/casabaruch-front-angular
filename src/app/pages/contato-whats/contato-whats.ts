import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { LogoComponent } from '../../components/marca/logo/logo';

@Component({
  selector: 'app-contato-whats',
  standalone: true,
  imports: [CommonModule, LogoComponent],
  templateUrl: './contato-whats.html',
  styleUrl: './contato-whats.scss'
})
export class ContatoWhatsComponent implements OnInit {
  whatsappNumber = '5511922732828';
  redirectUrl: string = '';
  countdown = 3;

  constructor(
    private route: ActivatedRoute,
    private meta: Meta,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.setupSeo();
    this.processRedirect();
  }

  setupSeo(): void {
    this.titleService.setTitle('Redirecionando para WhatsApp - Casa Baruch');
    this.meta.addTags([
      { name: 'description', content: 'Fale agora com a Casa Baruch via WhatsApp para orçamentos de gráfica e estamparia.' },
      { name: 'robots', content: 'noindex, follow' },
      // Schema.org for ContactPoint
      { property: 'og:title', content: 'Contato WhatsApp - Casa Baruch' },
      { property: 'og:description', content: 'Redirecionando para o atendimento oficial...' },
    ]);
  }

  processRedirect(): void {
    this.route.queryParams.subscribe(params => {
      const message = params['text'] || 'Olá! Vim pelo site e gostaria de um orçamento.';
      const phone = params['phone'] || this.whatsappNumber;
      
      // Preservar UTMs se existirem
      const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
      let utmString = '';
      
      utmParams.forEach(param => {
        if (params[param]) {
          utmString += `&${param}=${params[param]}`;
        }
      });

      this.redirectUrl = `https://api.whatsapp.com/send/?phone=${phone}&text=${encodeURIComponent(message)}${utmString}`;

      // Iniciar redirecionamento automático
      this.startCountdown();
    });
  }

  startCountdown(): void {
    const interval = setInterval(() => {
      this.countdown--;
      if (this.countdown <= 0) {
        clearInterval(interval);
        window.location.href = this.redirectUrl;
      }
    }, 1000);

    // Tentativa de redirecionamento imediato para navegadores que suportam
    // Mas mantemos o contador visual para conformidade de UX
    setTimeout(() => {
      if (this.countdown > 0) {
        // Se ainda não redirecionou pelo timer, forçamos
        // Mas o Google Ads prefere que o usuário veja conteúdo antes do salto
      }
    }, 500);
  }

  manualRedirect(): void {
    window.location.href = this.redirectUrl;
  }
}
