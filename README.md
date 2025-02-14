# NFC-Hash 

Automatiza la lectura y encriptación de chips NFC con NFC-Hash!  Una appweb diseñada para optimizar el trabajo con tecnología NFC. 

Este proyecto surgió durante mi periodo de prácticas con el objetivo de **suprimir la repetitiva tarea de lectura y escritura de chips NFC**.  NFC-Hash facilita el proceso, permitiendo leer chips NFC con un lector externo, encriptar el código NFC y almacenarlo. 

## ¿Cómo funciona? ⚙️

1. **Acceso restringido:**  La aplicación está diseñada para uso empresarial, por lo que el acceso al área de trabajo requiere un inicio de sesión.

    * **Nota importante:** El código para la autenticación con una base de datos de usuarios está implementado, pero se encuentra comentado en el código. Para fines de demostración, se ha sustituido por un login predeterminado. 

2. **Lectura y encriptación simplificada:** Una vez logeado, encontrarás una ventana flotante intuitiva. 
    * El código NFC se puede **escribir automáticamente** si tienes un lector NFC conectado. 
    * La app genera el hash de forma rápida y eficiente. 
    * El código encriptado se almacena de forma segura. 

3. **Seguimiento y control:**  Puedes verificar un recuento de los códigos y sus hashes en la consola con solo pulsar el contador. 

4. **Seguridad ante todo:** La app cuenta con expulsión por inactividad para proteger los datos. 

Espero que esta herramienta sea útil para optimizar tu trabajo con chips NFC!

![NFC-Hash](https://i.ibb.co/4RJ3z5sv/Your-Space.png)


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
