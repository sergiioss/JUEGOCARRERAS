
class Vehiculo{


            // CONSTRUCTOR
        constructor (newNombre, newRuedas, newModelo, newMagias,newNombreFoto){

            this.nombre = newNombre;
            this.ruedas = newRuedas;
            this.modelo = newModelo;
            this.magias = newMagias;
            this.nombreFoto = newNombreFoto
            this.kms = 0;

        }

          // METODOS
        acelerar(){
            this.kms = Math.floor(this.kms + 2);
        };
        

};

        //CREAR PERSONAJES

        let mario = new Vehiculo("Mario", 4, "Kart", "derrape1","mariocompeti"); 
        let luigi = new Vehiculo("Luigi", 4, "Coche antiguo", "derrape2","luigicompeti"); 
        let princesa = new Vehiculo("Princesa", 2, "Moto", "derrape9","princesacompeti");
        let larry = new Vehiculo("Larry", 4, "Kart3", "derrape4","larrycompeti");

        //DICCIONARIO DE LOS PERSONAJES
        let players = {
            "mario": mario,
            "luigi": luigi,
            "princesa": princesa,
            "larry": larry
        }

