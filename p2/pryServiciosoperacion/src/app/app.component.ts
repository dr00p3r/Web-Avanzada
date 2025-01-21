import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosService } from './productos.service';
import { Producto } from './producto';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pryServiciosoperacion';
  productos: Producto[] = [];

  constructor(private productosService: ProductosService){

  }

  ngOnInit(): void {
    this.productosService.getData().subscribe({
      next: (data) => {
        this.productos = data;
        console.log(data);
      },
      error: (error) => {
        console.error('Error al obtener los productos:', error);
      }
    });
  };
}
