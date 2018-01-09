


export class Animal {

        vrsta:string;
        ime:string;
        datum_rodjenja:string;
      

        constructor(ime:string,vrsta:string,datum_rodjenja:string){

            this.ime=ime;
            this.vrsta=vrsta;
            this.datum_rodjenja=datum_rodjenja;
            return this;

        }

}
