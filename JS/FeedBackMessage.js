$(document).ready(function () {
    $(window).bind("load", function () {
        if (window.location.href.indexOf("FeedbackSent") <= -1) {
            $("#AdMenu").animate({ bottom: '10px' });

            $("#MessageFloat").delay(2000).fadeIn(250);

            setTimeout(function () {
                new Audio('Sounds/SoundFeedBack.mp3').play();
            }, 2000);
        }
    });

    $("#ButtonMessageFloatClose").click(function () {
        $("#MessageFloat").fadeOut(250)
    });

    $("#ButtonBitcoin").click(function () {
        $("#AdMenu").animate({ bottom: '10px' });
    });

    $("#ButtonFeedBack").click(function () {
        $("#MessageFloat").fadeOut(250)
        $("#MessageMenu").animate({ bottom: '10px' });
    });

    $("#ButtonMessageMenuClose").click(function () {
        $("#MessageMenu").animate({ bottom: '-500px' });
    });

    $("#ButtonBitcoinMenuClose").click(function () {
        $("#AdMenu").animate({ bottom: '-500px' });
    });

    $("#ButtonAd").click(function () {
        window.open("https://get.cryptobrowser.site/5399042");
    });
});