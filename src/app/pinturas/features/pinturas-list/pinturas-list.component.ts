import { Component, OnInit } from '@angular/core';
import { PinturasService, Pintura } from '../../data-access/pinturas.service';  // Asegúrate de importar el servicio
import { inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-pinturas-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './pinturas-list.component.html',
  styles: ``
})
export default class PinturasListComponent implements OnInit {
  pinturas: Pintura[] = [];

  private _pinturasService = inject(PinturasService);
  private _router = inject(Router);

  ngOnInit(): void {
    this.loadPinturas();
  }

  async loadPinturas(): Promise<void> {
    try {
      this.pinturas = await this._pinturasService.getPinturas();
    } catch (error) {
      console.error('Error al cargar las pinturas', error);
    }
  }

  verDetalle(pintura: any) {
    this._router.navigateByUrl(`/detalle/${pintura.id}`);
  }
}
