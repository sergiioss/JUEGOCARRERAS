
class Vehiculo{


            // CONSTRUCTOR
        constructor (newNombre, newRuedas, newModelo, newMagias,newNombreFoto,newNombreFrenada,newNombreSuper){

            this.nombre = newNombre;
            this.ruedas = newRuedas;
            this.modelo = newModelo;
            this.magias = newMagias;
            this.nombreFoto = newNombreFoto;
            this.nombreFrenada = newNombreFrenada;
            this.nombreSuper = newNombreSuper;
            this.kms = 0;

        }

          // METODOS
        acelerar(){
            this.kms = Math.floor(this.kms + 2);
        };
        derrape(){
            this.kms = Math.floor(this.kms - 4);
        };
        super(){
            this.kms = Math.floor(this.kms + 8);
        };

};

        //CREAR PERSONAJES

        let mario = new Vehiculo("Mario", 4, "Kart", "derrape1","mariobarra","mariofrenada","mariosuper"); 
        let luigi = new Vehiculo("Luigi", 4, "Coche antiguo", "derrape2","luigibarra","luigifrenada","luigisuper"); 
        let princesa = new Vehiculo("Princesa", 2, "Moto", "derrape9","princesabarra","princesafrenada","princesasuper");
        let larry = new Vehiculo("Larry", 4, "Kart3", "derrape4","larrybarra","larryfrenada","larrysuper");

        //DICCIONARIO DE LOS PERSONAJES
        let players = {
            "mario": mario,
            "luigi": luigi,
            "princesa": princesa,
            "larry": larry
        }

