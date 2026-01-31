import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LogoComponent } from '../marca/logo/logo';

@Component({
  selector: 'app-rodape',
  standalone: true,
  imports: [RouterLink, LogoComponent],
  templateUrl: './rodape.html',
  styleUrl: './rodape.scss'
})
export class RodapeComponent {
  anoAtual = new Date().getFullYear();
}
