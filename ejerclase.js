var array;

function arraymulti(){
    array = [
        {username: "Mateo", cod:"192094", doc:"12345", tipouser:"estudiante"},
        {username: "Alejandro", cod:"192095", doc:"12345", tipouser:"profesor"},
        {username: "Jaimes", cod:"192096", doc:"12345", tipouser:"admin"},
    ]
    let fecha = new Date();
    var minutos = fecha.getTime();
    console.log(minutos);

}
function compara(){
    var nombre = $("nombre").val();
    for (let i = 0; i < array.length; i++){
        if (nombre==array[i].username){
            console.log("El nombre SI existe")
        }
        else {
            console.log("El nombre NO existe")
        }
    }
}