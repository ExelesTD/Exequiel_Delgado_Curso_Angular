let nombre: string;
let datos: [];
let valor: number | string;
let ejemplo = true;

interface Personaje{
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

class P1 implements Personaje{
    nombre: string;
    hp: number;
    habilidades: string[];
}

class Alumno{
    nombre: string;
    edad: number;
    id: string;
    constructor(){
        
    }
}


let alumnos: Alumno[];

let alumno1 = new Alumno();