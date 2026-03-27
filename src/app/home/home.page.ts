import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent, IonButton, IonCard } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  standalone: true,
  imports: [IonContent, IonButton, RouterLink, IonCard],
})
export class HomePage {}