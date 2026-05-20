import { Component, OnInit } from '@angular/core';
import { ProductoService } from './producto.service';
import { Producto } from '../models/producto';
import { interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html'
})
export class ListaProductosComponent implements OnInit {
  productos: Producto[] = [];

  constructor(private service: ProductoService) {}

  ngOnInit(): void {
    interval(5000)
      .pipe(
        switchMap(() => this.service.getProductos())
      )
      .subscribe({
        next: (data) => this.productos = data,
        error: (err) => console.error('Error en la conexión', err)
      });
  }
}