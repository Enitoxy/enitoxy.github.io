$(document).ready(function () {
    const audio = new Audio("scream.mp3");
    $(".dis").click(function () {
        audio.play();
        setTimeout(() => {
            $(this).hide();
        }, 2100)
    });
});