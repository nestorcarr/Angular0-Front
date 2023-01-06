export class Persona {
    id!: number;
    nombre: string;
    apellido: string;
    profesion: string;
    acerca_de_mi: string;
    acercademi: string;
    imageprincipal: string;

    constructor(nombre: string, apellido: string, profesion: string, acerca_de_mi: string, acercademi: string, imageprincipal: string) {

        this.nombre = nombre;
        this.apellido = apellido;
        this.profesion = profesion;
        this.acerca_de_mi = acerca_de_mi;
        this.acercademi = acercademi;
        this.imageprincipal = imageprincipal;

    }

}
