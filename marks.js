function calculate(){
    let marks = Number(document.getElementById("marks").value);
    let total = Number(document.getElementById("total").value);

    if (marks > total || marks < 0 || total <= 0) {
        document.getElementById("result").innerHTML = "<strong>Error:</strong> Please enter valid marks!";
        document.getElementById("result").style.display = "block";
        return;
    }

    let percentage = (marks / total) * 100;

    document.getElementById("result").innerHTML = "<strong>Percentage:</strong> " + percentage.toFixed(2) + "%";
    document.getElementById("result").style.display = "block";
}
