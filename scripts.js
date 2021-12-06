document.getElementById("caption").addEventListener("click", toggle);
function toggle() {
var x = document.getElementById("cmd");
var y = document.getElementById("caption");
if (x.style.display === "none") {
x.style.display = "block";
y.innerHTML = "awesome code (click to close)";
} else {
x.style.display = "none";
y.innerHTML = "awesome code (click to open)";
}
}
