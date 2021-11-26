function change(object) {
    var btn_list_wrap = document.getElementsByClassName('btn-menu-wrap');
    for (i = 0; i < btn_list_wrap.length; i++) {
        btn_list_wrap[i].style.filter = "";
    };
    object.srcElement.parentElement.style.filter = "drop-shadow(0px 0px 3px white)";
}

var btn_list = document.getElementsByClassName('btn-menu');

var i;
for (i = 0; i < btn_list.length; i++) {
    btn_list[i].onfocus = change;
};




particlesJS.load('particles-js', 'assets/js/particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
  });


  