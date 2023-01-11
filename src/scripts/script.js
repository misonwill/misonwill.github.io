document.getElementById("year").innerHTML = new Date().getFullYear();

var toggle = document.getElementById("menu_toggle");

function menuToggle() {
    var menu = document.getElementById("mobile_menu");
    if (toggle.checked == true){
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}

toggle.onclick = menuToggle;