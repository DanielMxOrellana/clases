import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  standalone: true,
  styleUrls: ['./dashboard.page.scss'],
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonButton
  ]
})
export class DashboardPage {
  constructor(private router: Router) {}
  canActivate(): boolean {
    const isAuthenticated = !!localStorage.getItem('usuario'); // Verifica si hay un token de autenticación
    if (!isAuthenticated) {
      this.router.navigate(['/login']); // Redirige al login si no está autenticado
      return false;
    }
    return true;
  }
  logout() {
    localStorage.removeItem('usuario');
    this.router.navigate(['/login']);
  }
}
