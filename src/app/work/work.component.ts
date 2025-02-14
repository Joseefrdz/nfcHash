import { Component, inject, HostListener, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrl: './work.component.css'
})
export class WorkComponent implements OnInit, AfterViewInit {

  @ViewChild('miInput') miInput!: ElementRef;

  recuento: number = 0;
  codigoNfc: string = "";
  codigoHash: string = "";
  token: string = '';
  timer: any;

  nfcHash = new Map<string, string>(); //Creamos un map de elementos clave-valor para almacenar los chips con sus respectivos hash

  private alerta = inject(MatSnackBar);
  private apiService = inject(ApiService);
  private router = inject(Router);


  //Establecemos varios HostListener para manejar el reinicio del temporizador de logout, tanto si hacemos click como si escribimos

  @HostListener('document:click', ['$event'])
  onMouseMove($event: MouseEvent) {
    this.inactividad()
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown($event: KeyboardEvent) {
    this.inactividad()
  }


  //OPCIONAL:Cierre de sesión al cerrar la ventana O recargar la página

  // @HostListener('window:beforeunload', ['$event'])
  // onBeforeUnload($event: Event) {
  //   this.apiService.setToken(this.token);
  //}


  //Este método es para poner el focus en el input principal del componente para agilizar el trabajo de lectura de NFC

  ponerFocusEnInput() {
    if (this.miInput) {
      this.miInput.nativeElement.focus();
    }
  }

  //Creamos un método de deslogeo por inactividad con un temporizador

  inactividad() {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.router.navigate(['/login']);
      this.unlogin();
      alert('Sesión cerrada por inactividad, vuelva a iniciar sesión');
    }, 1800000);
    // 1800000 - 30 min
    //  900000 - 15 min
    //  600000 - 10 min
  }

  //Creamos un método de encryptación con SHA256: hash de 256bits, muy usado, menos propenso a colisiones que MD5

  crearHash(): void {
    this.codigoHash = CryptoJS.SHA256(this.codigoNfc).toString();
    this.ponerFocusEnInput();
  }

  //Creamos unos snackbar de Angular Material para los avisos/errores de almacenamiento de nfc y hash

  snackbarAlert(msj: string) {
    this.alerta.open(msj, 'cerrar', { duration: 3000 })
    this.ponerFocusEnInput();
    // {duration: 3000}
  }
  snackbarError(msj: string) {
    this.alerta.open(msj, 'cerrar', { duration: 3000 })
    this.ponerFocusEnInput();
    // {duration: 3000}
  }

  //Método para almacenar elementos clave(código NFC)-valor(Hash) en un map

  memorizar() {
    if (this.codigoNfc != '' && this.codigoHash != '') {  //Solo puedes tener la opcion de memorizar si los campos están rellenos

      if (this.nfcHash.has(this.codigoNfc) || this.nfcHash.has(this.codigoHash)) { //También se revisa que no haya duplicados
        this.snackbarAlert('No se puede añadir, porque ya está registrado')
      } else {
        this.nfcHash.set(this.codigoNfc, this.codigoHash); //Una vez compruebe que todo está ok memorizará el NCF y su Hash
        this.recuento = this.nfcHash.size;
      }

    } else {  //En caso de no estar rellenos darán error
      this.snackbarError('No se pueden añadir campos vacíos')

    }
    this.codigoNfc = '';
    this.codigoHash = '';
    this.ponerFocusEnInput();
  }

  //Método para mostrar el recuento memorizado

  // mostrar() {
  //     console.log(this.nfcHash);
  // }
  mostrar() {
    this.nfcHash.forEach((valor, clave) => {
      console.log(`Código Nfc: ${clave}
                  Código Hash: ${valor}`);
    });
  }

  //Método para deslogearte

  unlogin() {
    this.apiService.setToken(this.token);
  }

  ngOnInit(): void {
    this.inactividad(); //llamamos a la función del contador para que empiece conforme se carga el componente

  }
  ngAfterViewInit(): void {
    this.miInput.nativeElement.focus(); //Una vez se inician las vistas el foco se situará en el input deseado
  }
}
