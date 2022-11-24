$(document).ready(function () {
    $(".dis").click(function () {
        const audio = new Audio("scream.mp3");
        audio.play();
        setTimeout(() => {
            $(this).hide();
        }, 2100)
    });
});