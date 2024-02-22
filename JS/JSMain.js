
function errore(IDName, IDStampName){
    name = document.getElementById(IDName).value;
    if (name === ""){
        document.getElementById(IDStampName).innerHTML=" ERRORE -  il campo non deve essere vuoto";
    }else{
        document.getElementById(IDStampName).innerHTML="";
    }
}
function vuoto(IDName, IDStampName){
    name = document.getElementById(IDName).value;
    document.getElementById(IDStampName).innerHTML="";
}

function controlloForm1(IDStampName){
    Fname = document.getElementById("fname").value;
    Lname = document.getElementById("lname").value;
    Form = document.getElementById("form").value;
    if (Fname !== "" && Lname !== ""){
        Form.submit();
    }else{
        if (Fname === ""){
            errore('fname', 'Error_fname');
        }
        if (Lname === ""){
            errore('lname', 'Error_lname');
        }
    }
}