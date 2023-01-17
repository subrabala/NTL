document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        document.getElementById("text-wrapper").style.display = 'none';
    }, 3900);
    setTimeout(function(){
        const ntl_text = document.getElementById("ntl_text");
        ntl_text.style.webkitTextFillColor = 'transparent';
        ntl_text.style.webkitBackgroundClip = 'text';
    },4100);
  });

