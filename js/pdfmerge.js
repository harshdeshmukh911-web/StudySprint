async function mergePDF(){

const { PDFDocument } = PDFLib;

const files = document.getElementById("pdfFiles").files;

const mergedPdf = await PDFDocument.create();

for(let file of files){

let bytes = await file.arrayBuffer();

let pdf = await PDFDocument.load(bytes);

let pages = await mergedPdf.copyPages(pdf,pdf.getPageIndices());

pages.forEach(p=>mergedPdf.addPage(p));

}

let merged = await mergedPdf.save();

let blob = new Blob([merged],{type:"application/pdf"});

let url = URL.createObjectURL(blob);

let link = document.getElementById("downloadLink");

link.href = url;
link.innerText="Download Merged PDF";
link.style.display="block";

}
