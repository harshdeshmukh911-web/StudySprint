function calculateCGPA(){
    let g1 = Number(document.getElementById("g1").value);
    let g2 = Number(document.getElementById("g2").value);
    let g3 = Number(document.getElementById("g3").value);
    let g4 = Number(document.getElementById("g4").value);

    if (g1 < 0 || g2 < 0 || g3 < 0 || g4 < 0 || g1 > 10 || g2 > 10 || g3 > 10 || g4 > 10) {
        document.getElementById("cgpaResult").innerHTML = "<strong>Error:</strong> GPAs must be between 0 and 10!";
        document.getElementById("cgpaResult").style.display = "block";
        return;
    }

    let cgpa = (g1 + g2 + g3 + g4) / 4;

    document.getElementById("cgpaResult").innerHTML = "<strong>Your CGPA:</strong> " + cgpa.toFixed(2);
    document.getElementById("cgpaResult").style.display = "block";
}