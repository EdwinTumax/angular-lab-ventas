import { Component, OnInit } from '@angular/core';
import { DetalleFacturaService } from '../../services/detalle-factura.service';
import { FacturaService } from '../../services/factura.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Factura } from '../interfaces/factura.interface';
import { DetalleFactura } from '../interfaces/detalle-factura.interface';

@Component({
  selector: 'app-detalle-factura',
  templateUrl: './detalle-factura.component.html'
})

export class DetalleFacturaComponent implements OnInit {

factura: Factura = {
  codigoFactura: 0,
  numeroFactura: 0,
  serie: '',
  fechaFactura: new Date(),
  total: 0.00,
  detalleFactura: []
};
loading = false;
  constructor(private _ActivatedRoute: ActivatedRoute, private _factura: FacturaService,
    private _detalleFacturaService: DetalleFacturaService) {
    this.loading = true;
    this._ActivatedRoute.params.subscribe(params => {
      this._factura.getFactura(params['id']).subscribe((data: any) => {
        console.log(params['id']);
        console.log('Detalle: ' + data);
        this.factura = data;
      });
    });
  }

  ngOnInit() {
  }


}
