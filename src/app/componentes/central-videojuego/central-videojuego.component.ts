import { Component, OnInit, Input } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  Validators,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-central-videojuego',
  templateUrl: './central-videojuego.component.html',
  styleUrls: ['./central-videojuego.component.css'],
})
export class CentralVideojuegoComponent implements OnInit {
  @Input() juegoC: string;

  juegoForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    debugger;

    this.initForm(this.juegoC);
  }
  initForm(juegoC: any) {
    debugger;
    this.juegoForm = this.fb.group({
      nombre: [juegoC.nombre, Validators.required],
      plataforma: [juegoC.plataforma],
      version: [juegoC.version],
      genero: [juegoC.genero],
    });
  }
  submit() {
    debugger;
    this.juegoForm.value;
  }
}
