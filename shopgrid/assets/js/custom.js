/*========================
  01: Background Image
  ==========================*/
var $bgImg = $("[data-background_img]");
$bgImg.css("background-image", function () {
        return 'url("' + $(this).data("background_img") + '")';
    })
    .removeAttr("data-background_img")
    .addClass("bg-img");