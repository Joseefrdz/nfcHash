import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  view: boolean = false;
  changetype: boolean = true;

  error: string = '';

  formulario: FormGroup;

  //Se inyectan algunos de los servicios que vamos a usar

  constructor(private apiService: ApiService, private router: Router, private form: FormBuilder) {

    //Creamos un formulario con los campos necesarios para el POST del api.service

    this.formulario = this.form.group({
      email: ['user@user.com', [Validators.required, Validators.email]],   //Estableceremos validadores para que la petición al backend sea
      password: ['password', Validators.required]                     //lo más correcta posible
    });
  }

  //Método que se ejecuta cuando se presiona el botón de login
  onSumbit(): void {

    if (this.formulario.invalid) {  //solo se podrá ejecutar el método si el formulario es correcto
      return;
    }

    // FUNCIONAMIENTO CON ENDPOINT REAL

    //const payload = this.formulario.value;          //payload adquirirá los valores introducidos en el formulario
    //this.apiService.login(payload).subscribe(       //Llamamos al método del api.services, pasándole como parámetro payload y nos 
    //  response => {                                 //suscribimos al observable, si obtenemos una respuesta correcta podremos logearnos e ir a /work
    //    this.router.navigate(['/work']);
    //    this.apiService.setToken(response.token);
    //  }, error => {
    //    this.error = 'Usuario o contraseña incorrectos';
    //}
    //);

    // FUNCIONAMIENTO SIN ENDPOINT

    const payload = this.formulario.value;
    console.log(payload)
    if (payload.email === "user@user.com" && payload.password === "password") {
      this.router.navigate(['/work']);
    } else {
      this.error = 'Usuario o contraseña incorrectos';
    }

  }

  //Método que comprueba la validez del formulario

  hasErrors(controlName: string, errorType: string) {
    return this.formulario.get(controlName)?.hasError(errorType) && this.formulario.get(controlName)?.touched;
  }

  //Método que muestra u oculta la contraseña

  viewpass() {
    this.view = !this.view;
    this.changetype = !this.changetype;

  }

}
