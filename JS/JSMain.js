
function errore(IDName, IDStampName){
    name = document.getElementById(IDName).value;
    if (name === ""){
        document.getElementById(IDStampName).innerHTML=" ERRORE -  il campo non deve essere vuoto";
    }else{
        document.getElementById(IDStampName).innerHTML="";
    }
}
