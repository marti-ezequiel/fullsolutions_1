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
- [Live Sass](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass) (cuando no se usa Angular)
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

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
- [Angular 8 Snippets](https://marketplace.visualstudio.com/items?itemName=Mikael.Angular-BeastCode)
- [Angular v7 Snippets](https://marketplace.visualstudio.com/items?itemName=johnpapa.Angular2)
- [Angular Language Service](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template)

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
- Formularios
- Routes

**Documentacion**
- [Outlets en Routes](https://www.techiediaries.com/angular-router-multiple-outlets/)
- [Form Validation](https://angular.io/guide/form-validation)
- [Reactive Forms](https://angular.io/guide/reactive-forms)

**Sugerencias**
- La extensión de Visual Code **[Angular Language Service](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template)** ayuda bastante
- La extensión de Visual Code **[Angular Essentials](https://marketplace.visualstudio.com/items?itemName=johnpapa.angular-essentials)** ayuda por demás.

**Cosas**
- Para renderizar múltiples componentes en un mismo path se le pueden asignar outlets a regiones específicas. Es difícil de explicar. Lean el link de la documentación.

**Forms - Html**
Esta manera de crear el formulario se llama Template-Driven. Es porque todo el formulario se basa en el Template/HTML.
- El atributo **`[(ngModule)]="foo"`** en un input asigna el value de ese input a una variable "**`foo`**" en el TypeScript.
- El atributo **`#bar="ngModule"`** en un input asigna el elemento "`input`" a una variable "**`bar`**" que existe **solo** dentro del template/html.
- El atributo **`#foo="ngForm"`** en un form asigna el elemento "`form`" a una variable "**`foo`**" que existe **solo** dentro del template/html.
- Con el **ngForm** y **ngModule** se pueden validar que los inputs tengan datos válidos a través de atributos.
    - **`required`** hace que un input sea obligatorio
    - **`min-lenght`** define un largo mínimo del contenido
    - Estas cosas deberían leerse de la parte de "form validation" de la documentación
- Los elementos del **ngModule** tienen una coleccion de booleanos de errores según las validaciones que no se cumpla (se recomienda leer la documentación).
- Existe un evento del elemento `form` para bindear un 

# Curso FrontEnd - Clase 09

**Contenido**
- Explicación de los formularios que no dio la clase pasada para que hagamos algo por nuestra cuenta.
- Formularios reactivos.

**Documentación**
- [Reactive Forms](https://angular.io/guide/reactive-forms)

**Reactive Forms**
La idea de ReactiveForm es crear y manipular los formularios desde el TypeScript, dejando el html lo más limpio posible.
- Primero, incluir ReactiveForm en el AppModules.
- Una de las maneras es instanciando (con un `new`) un **FormControl**. 
    - Una ventaja es que se pueden crear **FormGroup** con varios "sub-formularios" (*FormControl*) .
    - Se puede validar si un **FormGroup** que contiene varios formularios (uno para empleados, áreas, etc) es válido para dejar submitir todo de una.
- Otra de las maneras maneras incluir en el constructor de la clase del Component FormBuilder.
    - Se puede llamar al formbuilder con el método `group` o `control`.
- El primer **FormGroup** es un elemento Formulario. 
- El **FormControl** son elementos de un formularios (inputs, selects, textareas, etc. )
- Los soguientes **FormGroup** son "formularios" de manera abstracta.
- Los valores no quedan bindeados a una variable, si no que quedan dentro del **Form**. `this.form.get('nombre').value`
- Para el **FormControl**, en el constructor se le puede pasar una colección de **`Validators`** para required, minLength, etc.

**Reactive Form - HTML**
- Se tiene que incluir el attributo **`[formGroup]="foo"`** en el form. 
- Se tiene que incluir el **name: 'foo'** al instanciar el **FormGroup**
- Se tiene que incluir el attributo **`formControlName="bar"`** en el input.
- Se tinee que incluir el **name: 'bar'** al instanciar el **FormControl**

**Ejercicio 6**
- Si se puede, agregar validador de nombre de usuario (que no exista ya).

# Curso FrontEnd - Clase 10

**Contenido**
- Resumen de angular
- ReactJs

**Documentación**
- [Angular Seed Repositorio](https://github.com/mgechev/angular-seed) - Una estructura de ejemplo para las divisiones / módulos / routeo.
- [Angular Seed Documentación](https://github.com/mgechev/angular-seed/blob/master/README.old.md) - El proyecto fue deprecado pero la estructura es para lo que lo estamos leyendo.
- [Angular Architecture](https://angular.io/guide/architecture)
- [React](https://reactjs.org/)

**Extensiones VisualCode**
- [ES7 React/Redux/GraphQL/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

**Extensiones Chrome**
- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=es-419) - Agrega Tab **React** en la consola

**Comandos**
- Install react - `npm i -g create-react-app`
- Opciones para crear proyecto en react - `create-react-app --help`
- Crear app en react - `create-react-app nombreProyecto`

**Angular Seed**
Es un proyecto base que se puede utilizar como base de otros proyectos.  
- División en módulos
- En **`routing.module.ts`** muestra como dividir el manejo de rutas por módulos. 

**Overview de Angular**
- Architecture
    - Estructura de un módulo
    - Bindeo de texto (interpolación) con dobles llaves `<div> {{ foo }} </div>`.
    - Bindeo de propiedades con corchetes `<div [foo]="bar"> Hi </div>`
    - Exportar variables con hashtags `<div #foo> Hi </div>`.
    - Bindear eventos es con paréntesis `<div (foo)="bar()"> Hi </div>`.
    - *ngIf
    - *ngFor
    - Bindeo Two-way lo utilizamos (durante el curso) solo para el ngModel. Se hace con Corchetes y paréntesis `<div [(foo)]="bar" > </div>`
- Lifecycle sequence - eventos que necesitan la implementación de una interfaz para poderlos implementar.
    - constructor()
    - ngOnChanges()
    - ngOnInit()
    - ngDoCheck()
    - ngAfterContentInit()
    - ngAfterContentCheked()
    - ngAfterViewInit()
- Attribute directives
- Structural directives
- Forms
    - Template
    - Reactive
- Observables
    - Es importante desuscribirse
    - Canales de eventos
- Inyección de dependencia
- Http Client
- Routing & Navigation
- Guards (dentro del routeo)
    - Tener un método que evaluar si podés acceder o no a esa ruta (usado en autenticación)
    - Existe un método para un observable
    - Existe un método para una promise
- Interceptor
    - Se definen en el módulo que se quiere usar
    - Puede itnerponerse a cualquier request
        - Ejemplo de request: agregarle un toquen a una llamada
    - Puede interceptar a un response
        - Puede identificar un 401 y volver a hacer llamda
        - Puede loguear respuestas

**React**
Es una librería que te deja manejar un DOM.  
Si se le agregan algunos componentes (builds y otros) creados por la comunidad puede ser considerado un framework.  
Utiliza javascript con ES6 (en lugar de typescript) y JSX. Se puede integrar SASS y TypeScript.  
Maneja un DOM virtual para ir resolviendo todo de antemano.
- props: las modifica el padre
- state: puede modificarse en el mismo componente (no el padre, no el hijo)
    - Se modifica con un this(setState)

Antes la aplicación iniciada en **`main.ts`**. Ahora en **`index.js`**

# Curso FrontEnd - Clase 11 (recuperando clase 05)

**Contenido**
- Blog en React
Todo lo que es public (assets) va en la carpeta **`public`**.  
Los SVG se manejan de manera... rara (repasar).  
- Existe una librería que es muy utilizada para llamdas http, llamda **Axios** (no tiene nada que ver con react)
- Las cosas que en angular se ejecutaban en el ngOninit, acá es en componentWillMount.
- Existe una librería que es muy utilizada para routing en react, **react-router-dom** (mantenido por la comunidad)
- Para renonbrar un componente se puede utilizar **`as`** al momento de importar.
- El route es un elemento dentro del jsx (dentro del render)
- Se puede routear escribiendo el contenido explícito o poner a qué componente redirecciona
- Si al route no se le asigna el atributo ``exact``, puede tomarse como un partial view y renderizar varios componentes.
- Existe un router para renderizar todos los path que no fueron configurados. Es poniendo el elemento **`<Switch>`**.
- ***React BoilerPlate*** - Es una seed de React: una guía de como armar un proyecto (o proyecto base), con varias dependencias claves ya incluidas.
- ***Redlux*** - Incluye la posibilidad de tener un State a nivel aplicación, en lugar de a nivel de clase. **React y Redlux** van de la mano.
- ***NgRx*** - Algo importante para Angular, similar a Redlux para React.
- Existe un elemento llamado **React.Fragment**. Es una especie de **`<div>`** que no se renderiza.

**Documentación**
- [Repositorio Axios](https://github.com/axios/axios)
- [Repositrio React Boiler Plate](https://github.com/react-boilerplate/react-boilerplate)

**Comandos**
- Para instalar **axion** --> `npm install axios --save`
- Para instalar **react-router-dom** --> `npm install react-router-dom --save`

**Comandos React**
- `start`
- `build`
- `test`
- `eject`

# Fuera de temas
- Para hacer mapeos de interfaces a clases, dentro del **`then`** de las llamadas hacer una llamada a un **`mapService`** que tome interfaces, instancie una nueva clase y mapee los atributos.
- Y viceversa
- Conviene poner un mapeador por clase

**Leer Aparte**
- Interceptors
- Guards
- `@Output`
- Directivas. No llegamos a verlas. Excepto las estructurales (ngFor, ngIf, etc.)
    - Modificación de DOM
    - Manejo de eventos
- Observables RxJS
    - Canal de eventos
    - Pipe
    - Map
- Redux - Permite tener estados en la aplicación
- Ionic (mobile)
- React native (mobile)