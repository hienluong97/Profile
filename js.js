
/*change background color of nav when scroll*/


document.addEventListener("DOMContentLoaded", function () {
    var nav = document.querySelector('#header');

    window.addEventListener("scroll", function () {
        var scroll = this.scrollY;
        if (scroll > 0) {
            nav.style.backgroundColor = "white";
        }
        else {
            nav.style.backgroundColor = "transparent";
        }
    })
})


/* show_close_subnav_mobile */


function showMenu() {
    var smallMenu = document.getElementById("s-menu");
    smallMenu.classList.toggle('change_display');
}

