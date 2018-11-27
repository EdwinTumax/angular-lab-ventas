import { Component, OnInit } from '@angular/core';
import { Compra } from '../../interfaces/compra.interface';
import { NgForm } from '@angular/forms';
import { CompraService } from '../../../services/compra.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-udpate-compra',
  templateUrl: './add-udpate-compra.component.html',
  styles: []
})
export class AddUdpateCompraComponent implements OnInit {
  compra: Compra = {
    numeroDocumento: 0,
    fecha: new Date(''),
    total: 0.0
  };
  nuevo = false;
  constructor(private _activatedRoute: ActivatedRoute, private _compraService: CompraService, private _router: Router) {
    this._activatedRoute.params.subscribe(params => {
      if (params['id'] > 0) {
        this._compraService.getCompra(params['id']).subscribe((data: any) => {
          this.compra = data;
        });
      } else {
        this.nuevo = true;
      }
    });
  }

  ngOnInit() {
  }

}
