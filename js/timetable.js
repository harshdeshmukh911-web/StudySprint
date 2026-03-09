function addSubject(){

let subject = document.getElementById("subject").value;

let li = document.createElement("li");

li.innerText = subject;

document.getElementById("table").appendChild(li);

}
