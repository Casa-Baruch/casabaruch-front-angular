import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from './components/cabecalho/cabecalho';
import { RodapeComponent } from './components/rodape/rodape';
import { BotaoWhatsappComponent } from './components/botao-whatsapp/botao-whatsapp';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CabecalhoComponent, RodapeComponent, BotaoWhatsappComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
