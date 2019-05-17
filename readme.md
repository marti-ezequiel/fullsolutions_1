 *Curso*  
 - http://fgoyena.me/fs201904/
    
# Curso FrontEnd - Clase 01

**Documentacion**
- [Bootstrap Oficial -> GetBootstrap.com](https://getbootstrap.com/docs/4.3/getting-started/introduction/)
- [Flexbox (y mas) -> Css-Tricks.com](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Compatibilidad con navegadores -> CanIUse.com](https://caniuse.com/)
- [Flexbox101 (pruebas) -> The-Echoplex.net](https://the-echoplex.net/flexyboxes/)

**Ejercicios Flexbox**
- [Froggy - flexboxfroggy.com/](https://flexboxfroggy.com/) 
- [Tower Defence - flexboxdefense.com](http://www.flexboxdefense.com/) 

**Ejercicio del curso**   
Hacer algo parecido a getboostrap.com/docs/4.3/examples/ -> Blog  
Tiene que tener
- Articulos
- Categorias
- Titulo
- Autor
  
# Curso FrontEnd - Clase 02

**Contenido**
- Node.Js
- npm
- Sass
- Javascript
- Javascript (ES5)
- Javascript (ES6)
- Javascript (CheatSheets)
- Javascript (ES6 Arrow functions)

**Documentacion & Tools**
- [APIs de pueba -> JsonPlaceholder](http://jsonplaceholder.typicode.com/)
- [Es6 Cheatsheet -> Devhints.Io](https://devhints.io/es6)

**PlugIns recomendados de VsCode**
- Live Sass (cuando no se usa Angular)
- Live Server

**node**
- El package.json era importante. Se crea con el npm init

**npm**
- -g -> Global: Se instala el coso en la pc (se usa en compiladores)
- --save -> Se agrega al package.json

**ES5 highlights**
- Releer que es (en funciones) apply, call, bind

**ES6 highlights**
- Usar siempre el tipo de variable const.
- Tambien existe el let. Es un var que respeta scopes.
- Nunca usar var.
- Para las strings usar acento invertido ``.
- Existen las promises para hacer llamados. 
- Para esperar varios llamados tenés Promise.all().then().catch().
- Otra manera de hacer llamados es fetch().then().catch().finally().
- Existe el async/await. Siempre usar try / catch.
- En las arrow functions, el "this" funciona distinto.
- Releer el foreach. (for in/for of)
- Releer Spread

# Curso FrontEnd - Clase 03

**Contenido**
- Repaso de extensiones de Node
- Repaso de SASS
- Repaso de JavaScript
- Repaso de ES6/ES5/Cheatsheet

**Documentacion**
- [TypeScript Cheatsheet -> Devhints.Io](https://devhints.io/typescript)

**Resto de la clase**
- Hacer la tarea

# Curso FrontEnd - Clase 04

**Documentacion**
- [Bootstrap en Angular -> Ng Bootstrap Github](https://ng-bootstrap.github.io/)

**Plug-Ins Recomendados**
- Angular 8 Snippets
- Angular v7 Snippets
- Angular Language Service

**Comandos**
- Instalar Angular (preferentemente en la pc) -> `npm i -g @angular/cli`
- Inicializar proyecto Angular -> `ng new project_name --style scss --routing --skip-git`
- Instalar Bootstrap -> `npm i --save bootstrap`
- Crear componente -> `ng g component name`
- Run Angular Server -> `ng serve`

**Aclaraciones**
- Dentro de assets conviene poner las imagenes (organizar).
- Luego de instalar bootstrap, incluir el scss en angular.json
- Para hacer rutas a otros lados utilizar `<a routerLink="path"> Link </a>`

# Curso FrontEnd - Clase 05
Suspendida

# Curso FrontEnd - Clase 06

**Bindeo**
 - El bindeo (one way to source) se hace a través de corchetes. ` { foo } `
 - Existen [Pipes](https://alligator.io/angular/built-in-pipes-angular/). Maneras de formatear variables. Puede ser para formatos de fecha, currency, number, string, etc. Se configuran con la barra comun ` { foo | pipe_1 | pipe_2 } `
 - Para bindear (two ways) se utiliza ` [(ngModel)]= "bar" `. Utilizado por ejemplo en inputs.
 - Para utilizar `ngModel` tenemos que importar FormsModule en el appModule.
 - `import { FormsModule } from '@angular/forms';`
 - El bindeo de eventos se hace con paréntesis ` (click) = "foo()" `
 - Si el routerLink tiene que evaluar una funcion, se utilizan corchetes `<a routerlink="nombre" > link </a>`
 - Si el routerLink tiene que evaluar una funcion, se utilizan corchetes `<a [routerlink]="'nombre'" > link </a>` 

**TimeOut function**
 - Timeout ` settimeout(() => { }, 5000) `
 - Si incluimos "changeDetection" los cambios no son automáticos, si no que hay que llamar una función.

**Servicios**
- Actúan como Singletón en el Módulo (se puede cambiar). Se agrega en la lista de providers del app.Module
- ng g service nombre_servicio
- O crear un nombre del archivo. por convencion nombre_service.service.ts
- Se le agrega @Injectable()

**Inyeccion de dependencia**
- Se pueden declarar variables en los parámetros del constructor que se inyectan automáticamente.

**Directivas**
- *ngIf -> Evalúa una condición. Si sale por true se renderiza el componente. Si no... bueno, no
- *ngFor -> Actúa como un ForOf

# Curso FrontEnd - Clase 07

**Contenido**
- Pipe Json
- Parámetros por url
- Observables / Suscribers
- Http
- Promises
- Inputs
- Interface OnChanges

**Parámetros**
- Para enviar parámetros a un component se puede definir en la ruta dentro del app-routing. Ej. `path: person/:id`
- Para capturar los parámetros de la ruta se puede inyectar el ActivatedRoute (en la clase).
- Dentro de la instancia del activatedRoute, el paramMap es un diccionario (Obserbable) que indica el valor de cada parámetro. 
- Se puede observar el **paramMap** mediante el método suscribe `this.activatedRoute.paramMap.suscribe((p) => { });`
- Observable = streams de información a los cuales nos suscribimos y lanzan un evento al cambiar.

**Http**
- Para usar una promise se puede usar async/await o promise.then
- Para utilizar llamadas Http se debe incluir en app.modules (dentro de imports) `HttpClientModule`

**Notas**
- Existe un `pipe` (json) que parsea objetos. `Persona: {{ person | json }}`
- *(Para hacer parseo de String a Int se puede poner un +).*
- En los componetes las variables que sean Input se les agrega el decorato `@Input()`
- Si un input recibe un objeto, se bindea (se actualizan los cambios)
- Si una clase con inputs implementa `Onchanges`, se dispara un método cada vez que se asigne/cambie un input

# Curso FrontEnd - Clase 08

**Contenido**
- Terminar ejercicio 3 y hacer ejercicios 4, 5 y 6

**Documentacion**
- [Outlets en Routes](https://www.techiediaries.com/angular-router-multiple-outlets/)
- [Form Validation](https://angular.io/guide/form-validation)
- [Reactive Forms](https://angular.io/guide/reactive-forms)

**Sugerencias**
- La extensión de Visual Code **Angular Language Service** ayuda bastante
- La extensión de Visual Code **Angular Essentials** ayuda por demás.

**Cosas**
- Para renderizar múltiples componentes en un mismo path se le pueden asignar outlets a regiones específicas. Es difícil de explicar. Lean el link de la documentación.

**Forms - Html**
- El atributo `[(ngModule)]="foo"` en un input asigna el value de ese input a una variable "**foo**" en el TypeScript.
- El atributo `#bar="ngModule"` en un input asigna el elemento "input" a una variable "**bar**" que existe **solo** dentro del template/html.
- El atributo `#foo="ngForm"` en un form asigna el elemento "form" a una variable "**foo**" que existe **solo** dentro del template/html.
- Con el **ngForm** y **ngModule** se pueden validar que los inputs tengan datos válidos a través de atributos.
    - `required` hace que un input sea obligatorio
    - `min-lenght` define un largo mínimo del contenido
    - Estas cosas deberían leerse de la parte de "form validation" de la documentación

# Curso FrontEnd - Clase 09

****