alert("Bienvenidos al servicio de Claro Abonados")
let savedPin="1309"
let ingresar = "false"


for(let i = 2; i >= 0; i--){
let userPin = prompt("Ingresa tu pin. Tenes "+(i+1)+" intentos.");
if (userPin===savedPin){
    alert("Ingreso exitoso");
    ingresar = true;
    break;
}else{
    ("Error.Te quedan "+i+" intentos")
}
}


if(ingresar){
    let deuda = 3200;
    let opcion =prompt ("Elegi una opcion: N°1-Saldo de Deuda. N°2- Pagar Deuda. N°3-Recarga SoS. N°4 Stock de Celulares. N°5 Solicitar turno para atencion personal . N°6 Presiona x para finalizar ");
    const listaCelular = ["Moto E32 64GB " , "Samsung Galaxy A22 5G" ,"Samsung Galaxy A13 128GB" , "TCL 20E 64GB"]

    while (opcion!= "x" &&opcion !="X" ) {

           switch(opcion) {

              case "1":
                    alert("Tu saldo es $" +deuda);
                    break;

              case "2":
                let pago= parseInt(prompt("Ingresa cantidad a saldar"));

                if(pago<=deuda){
                   deuda= deuda - pago;
                   alert ("Tu nuevo saldo es $" +deuda);
                }else {
                   alert("Deuda Saldada");
                }
                  break;

                  case "3":
                    let recarga = parseInt(prompt("Ingresa el monto de recarga"));
                    deuda = deuda+recarga;
                    alert ("Tu nuevo saldo es $" +deuda);
                    break;
               
                  case "4":
                    for(let i = 0; i<listaCelular.length; i++){
                        alert(listaCelular[i]);
                    } break; 

                    case "5":
                        for (let i =1 ; 1<=2; i++ ){
                            let horario = parseInt(prompt("Ingresa el horario del turno a solicitar"));
                            let estadoTienda = tienda1.estaAbierto(horario);
                            if (estadoTienda == true){
                                alert("Disponible, Agendado al sistema");    
                            } else{
                                alert("Esta ocupado , intente nuevamente");
                            } 
                        }

                    default:
                        alert("Elegiste una opcion invalida");
                    break;

            } 
           opcion= prompt ("Elegi una opcion: N°1-Saldo de Deuda. N°2- Pagar Deuda. N°3-Recarga SoS o Pack de Gigas .N°4 Stock de Celulares. N°5 Solicitar turno para atencion personal . N°6 Presiona x para finalizar ");         
    }

}else {
    alert("Se a bloqueado la sesion , intente mas tarde.");
}


alert("Finalizado")


class Tienda{
    constructor(nombre,direccion,propietario,rubro){
        this.nombre = nombre
        this.direccion = direccion
        this.propietario = propietario
        this.rubro =  rubro
    }
    estaAbierto(hora){
        if ((hora >= 8 && hora <=14) || (hora >= 17 && hora <=22)){
            return true;
        }else{
            return false;
        }
    }
}

const tienda1 = new Tienda("Claro","Mexico 2875","Pedro Claro","Telefonia")



