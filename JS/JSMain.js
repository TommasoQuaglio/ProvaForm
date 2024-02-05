function errore(){
    name = document.getElementById("fname").value;
    if (name === ""){
        document.getElementById("Error_fname").innerHTML=" ERRORE -  il campo non deve essere vuoto";
    }else{
        document.getElementById("Error_fname").innerHTML="";
    }
}
