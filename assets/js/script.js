document.getElementById("year").innerHTML = new Date().getFullYear();

function menuToggle() {
    var toggle = document.getElementById("menu_toggle");
    var menu = document.getElementById("mobile_menu");
    if (toggle.checked == true){
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}