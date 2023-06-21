/* Go To Top Button - Start */
var goToTopButton = document.getElementById("goToTopButton");

if (goToTopButton) {
    window.onscroll = function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            goToTopButton.style.display = "block";
        } else {
            goToTopButton.style.display = "none";
        }
    };

    goToTopButton.addEventListener("click", function () {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    });
}
/* Go To Top Button - End */


/*========================
Background Image
==========================*/
var $bgImg = $("[data-background_img]");
$bgImg.css("background-image", function () {
        return 'url("' + $(this).data("background_img") + '")';
    })
    .removeAttr("data-background_img")
    .addClass("bg-img");