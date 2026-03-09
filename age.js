function calculateAge(){

let birthdate = document.getElementById("birthdate").value;

if(!birthdate){
alert("Select birthdate");
return;
}

let birth = new Date(birthdate);
let today = new Date();

let age = today.getFullYear() - birth.getFullYear();

let m = today.getMonth() - birth.getMonth();

if(m < 0 || (m === 0 && today.getDate() < birth.getDate())){
age--;
}

document.getElementById("result").innerHTML =
"Your Age: " + age + " years";

}
