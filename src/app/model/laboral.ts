
export class Laboral {
    id!: number;
    empresa: string;
    logo: string;
    cargo: string;
    inicio: string;
    finalizacion: string;
    tareas: string;

    constructor(empresa: string, logo: string, cargo: string, inicio: string, finalizacion: string, tareas: string) {

        this.empresa = empresa;
        this.logo = logo;
        this.cargo = cargo;
        this.inicio = inicio;
        this.finalizacion = finalizacion;
        this.tareas = tareas;

    }

}

