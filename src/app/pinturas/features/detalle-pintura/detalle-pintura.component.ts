import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { PinturasService, Pintura } from '../../data-access/pinturas.service';

@Component({
  selector: 'app-detalle-pintura',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle-pintura.component.html',
  styles: ``
})
export default class DetallePinturaComponent implements OnInit {
  pintura: Pintura | null = null; // Deja null al inicio hasta que cargue la pintura

  // Inyección de dependencias
  private _pinturasService = inject(PinturasService);
  private _activateRoute = inject(ActivatedRoute);
  private _router = inject(Router);

  ngOnInit(): void {
    const idParam = this._activateRoute.snapshot.paramMap.get('id');
    const id = Number(idParam);

    if (!isNaN(id)) {
      this.loadPintura(id);
    } else {
      console.error('ID de pintura no válido:', idParam);
      this.volver();
    }
  }

  async loadPintura(id: number): Promise<void> {
    try {
      this.pintura = await this._pinturasService.getPinturaById(id);
    } catch (error) {
      console.error('Error al cargar la pintura:', error);
      this.volver();
    }
  }

  volver(): void {
    this._router.navigateByUrl('/pinturas/pinturas-list');
  }
}
