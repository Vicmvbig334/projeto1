var colorIndex= 0;
var colors = ["black", "white", "red"];
const button = document.getElementById("btn");

button.addEventListener("click", function() {
    document.body.style.backgroundColor = colors[colorIndex];
   colorIndex= (colorIndex+1) % colors.length;
});