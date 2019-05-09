import { Injectable } from '@angular/core';
import { IPersona } from '../model/interfaces/ipersona';

@Injectable()
export class PersonService {

    public nombre: string;
    public personas: IPersona[] = [];

    constructor(){

        this.nombre = 'Jota';

        setTimeout(() => {
            this.personas = [
                { nombre: 'Pepe' },
                { nombre: 'Papa' },
                { nombre: 'Pato' }
            ]
        }, 2500);

    }
}