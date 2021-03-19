// 1
function trackMouse(event) {
    let x = event.clientX;
    let y = event.clientY;
    document.getElementById("mousePosition").innerHTML = "Posición del Mouse " + x + ", " + y;
}

// 2
function getFormvalue(event) {
    event.preventDefault();
    let fname = document.getElementById("form1").elements[0].value;
    let lname = document.getElementById("form1").elements[1].value;
    if (document.getElementById("nombreCompleto") == undefined) {
        let fullName = document.createElement("p");
        fullName.id = "nombreCompleto"
        document.getElementById("form1").appendChild(fullName);
        document.getElementById("form1").lastChild.innerHTML = fname + " " + lname;
    }
    else {
        document.getElementById("nombreCompleto").innerHTML = fname + " " + lname;
    }
}

// 3
function insertRow() {
    let tabla = document.getElementById("sampleTable").childNodes[1];
    let newRow = tabla.insertRow();
    let lenTabla = tabla.rows.length;
    for (let i = 0; i < tabla.children[0].children.length; i++) {
        let newCell = newRow.insertCell();
        newCell.innerHTML = "Row " + lenTabla + " column " + (i + 1);
    }
}

function insertColumn() {
    let tabla = document.getElementById("sampleTable");
    let lenTabla = tabla.rows.length;
    let lenRow = tabla.rows.item(0).cells.length + 1;
    for (let i = 0; i < tabla.rows.length; i++) {
        let newCol = tabla.rows[i].insertCell();
        newCol.innerHTML = "Row " + (i + 1) + " column " + lenRow;
    }

}

// 4
function changeContent() {
    let rowAndCol = document.getElementById("form2").elements[0].value;
    let newText = document.getElementById("form2").elements[1].value;
    let insRow = rowAndCol[0] - 1;
    let insCol = rowAndCol[3] - 1;
    let tabla = document.getElementById("myTable");
    let inserting = tabla.rows.item(insRow).cells[insCol];
    inserting.innerHTML = newText;
}

// 5

function addColor() {
    let listOfColors = [
        "AliceBlue",
        "AntiqueWhite",
        "Aqua",
        "Aquamarine",
        "Azure",
        "Beige",
        "Bisque",
        "Black",
        "BlanchedAlmond",
        "Blue",
        "BlueViolet",
        "Brown",
        "BurlyWood",
        "CadetBlue",
        "Chartreuse",
        "Chocolate",
        "Coral",
        "CornflowerBlue",
        "Cornsilk",
        "Crimson",
        "Cyan",
        "DarkBlue",
        "DarkCyan",
        "DarkGoldenRod",
        "DarkGray",
        "DarkGrey",
        "DarkGreen",
        "DarkKhaki",
        "DarkMagenta",
        "DarkOliveGreen",
        "DarkOrange",
        "DarkOrchid",
        "DarkRed",
        "DarkSalmon",
        "DarkSeaGreen",
        "DarkSlateBlue",
        "DarkSlateGray",
        "DarkSlateGrey",
        "DarkTurquoise",
        "DarkViolet",
        "DeepPink",
        "DeepSkyBlue",
        "DimGray",
        "DimGrey",
        "DodgerBlue",
        "FireBrick",
        "FloralWhite",
        "ForestGreen",
        "Fuchsia",
        "Gainsboro",
        "GhostWhite",
        "Gold",
        "GoldenRod",
        "Gray",
        "Grey",
        "Green",
        "GreenYellow",
        "HoneyDew",
        "HotPink",
        "IndianRed",
        "Indigo",
        "Ivory",
        "Khaki",
        "Lavender",
        "LavenderBlush",
        "LawnGreen",
        "LemonChiffon",
        "LightBlue",
        "LightCoral",
        "LightCyan",
        "LightGoldenRodYellow",
        "LightGray",
        "LightGrey",
        "LightGreen",
        "LightPink",
        "LightSalmon",
        "LightSeaGreen",
        "LightSkyBlue",
        "LightSlateGray",
        "LightSlateGrey",
        "LightSteelBlue",
        "LightYellow",
        "Lime",
        "LimeGreen",
        "Linen",
        "Magenta",
        "Maroon",
        "MediumAquaMarine",
        "MediumBlue",
        "MediumOrchid",
        "MediumPurple",
        "MediumSeaGreen",
        "MediumSlateBlue",
        "MediumSpringGreen",
        "MediumTurquoise",
        "MediumVioletRed",
        "MidnightBlue",
        "MintCream",
        "MistyRose",
        "Moccasin",
        "NavajoWhite",
        "Navy",
        "OldLace",
        "Olive",
        "OliveDrab",
        "Orange",
        "OrangeRed",
        "Orchid",
        "PaleGoldenRod",
        "PaleGreen",
        "PaleTurquoise",
        "PaleVioletRed",
        "PapayaWhip",
        "PeachPuff",
        "Peru",
        "Pink",
        "Plum",
        "PowderBlue",
        "Purple",
        "RebeccaPurple",
        "Red",
        "RosyBrown",
        "RoyalBlue",
        "SaddleBrown",
        "Salmon",
        "SandyBrown",
        "SeaGreen",
        "SeaShell",
        "Sienna",
        "Silver",
        "SkyBlue",
        "SlateBlue",
        "SlateGray",
        "SlateGrey",
        "Snow",
        "SpringGreen",
        "SteelBlue",
        "Tan",
        "Teal",
        "Thistle",
        "Tomato",
        "Turquoise",
        "Violet",
        "Wheat",
        "White",
        "WhiteSmoke",
        "Yellow",
        "YellowGreen"
    ];
    let colores = document.getElementById("colorSelect");
    let newColor = document.createElement("option");
    newColor.text = listOfColors[Math.floor(Math.random() * 148)];
    colores.add(newColor);
}

function removeColor() {
    let colores = document.getElementById("colorSelect");
    colores.remove(colores.selectedIndex);
}

// 6
function enterMouse() {
    gatito.width = Math.floor(Math.random() * 301) + 300;
    gatito.height = Math.floor(Math.random() * 301) + 300;
    gatito.src = "http://placekitten.com/" + gatito.width + "/" + gatito.height;
    // let h = Math.floor(Math.random() * 301) + 300;
    // let w = Math.floor(Math.random() * 301) + 300;

}

function main() {
    document.addEventListener("mousemove", function (event) { trackMouse(event) });
    gatito.addEventListener("mouseenter", enterMouse);
    form1.addEventListener("onclick", function (event) { getFormvalue(event) })
}