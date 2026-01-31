import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconeComponent } from '../icone/icone';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [RouterLink, IconeComponent],
  templateUrl: './logo.html',
  styleUrl: './logo.scss'
})
export class LogoComponent {}
