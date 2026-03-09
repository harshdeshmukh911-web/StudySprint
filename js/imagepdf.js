function convert(){

const file = document.getElementById("imageInput").files[0];

const reader = new FileReader();

reader.onload = function(e){

const { jsPDF } = window.jspdf;

let pdf = new jsPDF();

pdf.addImage(e.target.result,"JPEG",10,10,180,160);

let url = pdf.output("bloburl");

let link = document.getElementById("download");

link.href = url;
link.innerText="Download PDF";
link.style.display="block";

}

reader.readAsDataURL(file);

}
