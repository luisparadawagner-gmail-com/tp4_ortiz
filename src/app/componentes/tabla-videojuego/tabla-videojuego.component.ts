import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-tabla-videojuego',
  templateUrl: './tabla-videojuego.component.html',
  styleUrls: ['./tabla-videojuego.component.css'],
})
export class TablaVideojuegoComponent {
  displayedColumns: string[] = [
    'nombre',
    'plataforma',
    'version',
    'genero',
    'agregar',
  ];

  dataSource: Element[] = [
    new Element('Zelda', 'Nintendo', 'Legend', 'Aventura'),
    new Element('Cs Go', 'Steam', 'Go', 'Shooter'),
    new Element('Sonic', 'Sega', 'Hedgehog', 'Aventura'),
    new Element('World Of Warcraft', 'Blizzard', 'Pandaria', 'Aventura'),
  ];

  elementselect: Element = new Element(' ', ' ', ' ', '');

  @ViewChild(MatTable) tabla1: MatTable<Element>;

  agregarFila(cod: number) {
    if (confirm('Quieres agregar esta fila?')) {
      this.dataSource.splice(cod, 1);
      this.tabla1.renderRows();
    }
  }
}

export class Element {
  constructor(
    public nombre: string,
    public plataforma: string,
    public version: string,
    public genero: string
  ) {}
}
