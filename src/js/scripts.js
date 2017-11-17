document.addEventListener("DOMContentLoaded", function(){
    let buttonColor = document.getElementsByName("submitted[color]");
    [].forEach.call(buttonColor,function(el){
        let attr = el.getAttribute("value");
        el.addEventListener('click', function () {
            document.images["full-img"].src = "img/tshirts/tshirt_" + attr + ".jpg";
        });
    });
});

