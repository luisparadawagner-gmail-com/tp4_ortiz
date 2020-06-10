import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-videojuego',
  templateUrl: './formulario-videojuego.component.html',
  styleUrls: ['./formulario-videojuego.component.css'],
})
export class FormularioVideojuegoComponent implements OnInit {
  videojuego: string;

  showJuegoCentral: boolean = false;
  showJuego: boolean = true;

  constructor(private fb: FormBuilder) {}

  juegoForm = this.fb.group({
    nombre: ['', Validators.required],
    plataforma: [''],
    version: [''],
    genero: [''],
  });

  submit() {
    debugger;
    this.juegoForm.value;

    this.videojuego = this.juegoForm.value;

    this.showJuegoCentral = true;
    this.showJuego = false;
  }

  ngOnInit(): void {}
}
