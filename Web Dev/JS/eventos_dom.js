function track_mouse(event) {

    let x = event.clientX;
    let y = event.clientY;

    document.getElementById("mousePosition").innerHTML = "Posición del mouse: (" + x + ", " + y + ")";
}

function getFormvalue(event) {
    event.preventDefault();

    let first_name = document.getElementByName("fname").value;
    let last_name = document.getElementByName("lname").value;

    if (document.getElementById("full_name") == null) {
        document.getElementById("name_form").appendChild(document.createElement("p"));
        document.getElementById("name_form").lastChild.id = "full_name";
        document.getElementById("full_name").innerHTML = first_name + " " + last_name;
    }
    else {
        document.getElementById("full_name").innerHTML = first_name + " " + last_name;
    }
}

function main() {

    document.addEventListener("mousemove", function (event) { track_mouse(event) });
}