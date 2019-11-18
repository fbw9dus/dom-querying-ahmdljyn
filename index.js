
var body = document.querySelector("body");

var h1Menu = document.querySelector(".title");

var main = document.querySelector(".main");

var foodCatall = document.querySelectorAll(".food-category");

var labelAll = document.querySelectorAll(".category");

var foodItemsAll = document.querySelectorAll(".food-item");

var allergiesAlert = document.querySelector(".allergy-warning");

var WarningText = document.querySelector("#warning");

var alergyList = document.querySelectorAll("section ul li:nth-child(even)");

var allergyes = document.querySelectorAll(".allergies");

var allergyInfo = document.querySelectorAll(".allergy-info");

var footer = document.querySelector(".footer")

var footerDesc = document.querySelectorAll(".food-desc")

var h3foodDesc = document.querySelector(".food-desc > h3");

body.style.fontFamily = "Arial"

h1Menu.style.display = "flex";

h1Menu.style.justifyContent = "center";

main.style.display = "flex"

main.style.flexDirection = "row"

main.style.flexWrap = "wrap"

main.style.justifyContent = "space-around"

for (i = 0; i < labelAll.length; i++){
    labelAll[i].style.color = "red"
    labelAll[i].style.fontStyle = "italic"
}

function colorGenerator (){
    var color = "";
    for(var i = 0; i < 3; i++) {
        var sub = Math.floor(Math.random() * 256).toString(16);
        color += (sub.length == 1 ? "0" + sub : sub);
    }
    return "#" + color;
}

colorGenerator()
var foodCatall = document.querySelectorAll(".food-category")
foodCatall.forEach(item =>{
    item.style.backgroundColor = colorGenerator();
    item.style.padding = "2rem"
    item.style.width = "20rem"
})

main.style.display = "flex";

main.style.justifyContent = "center";

foodCatall.forEach(item =>{
    item.style.backgroundColor = colorGenerator();
    item.style.padding = "1.3em"
    item.style.width = "20rem"
})

allergiesAlert.style.display = "flex";

allergiesAlert.style.flexDirection = "column";

allergiesAlert.style.alignItems = "center"

WarningText.style.fontSize = "2rem";

WarningText.style.textAlign = "Center";

WarningText.style.fontFamily = "Sans";

allergyes.forEach(item =>{
    item.style.listStyle = "none";
    item.style.width = "18rem";
})

alergyList.forEach(item =>{
   item.style.backgroundColor = "blue";
   item.style.justifyItems = "center";
})

footer.style.display = "flex"

footer.style.flexDirection = "row"

footer.style.flexWrap = "wrap"

footer.style.justifyContent = "space-around"

footerDesc.forEach(item =>{
    item.style.border = "3px solid rgb(67, 233, 25)"
    item.style.backgroundColor = "rgb(161, 241, 235)"
    item.style.borderRadius = "50%"
    item.style.padding = "3.6rem"
})

