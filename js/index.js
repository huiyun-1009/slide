$(function () {
    let i = 0;
    let pic = $(".panel li").length;
    console.log(pic);

    $(".navi li").eq(0).addClass("on");
    let stop = setInterval(function () {
        // console.log("12");
        i++;
        if (i == pic - 1) {
            $(".panel")
                .stop()
                .animate({ "margin-left": "-2000px" }, function () {
                    $(".panel").css({ "margin-left": "0" });
                });

            i = 0;
        } else {
            $(".panel")
                .stop()
                .animate({ "margin-left": -i * 500 });
        }
        $(".navi li").removeClass("on");
        $(".navi li").eq(i).addClass("on");

        $(".next").on("click", function () {
            clearInterval(stop);
            i++;
            if (i == pic - 1) {
                $(".panel")
                    .stop()
                    .animate({ "margin-left": "-2000px" }, function () {
                        $(".panel").css({ "margin-left": "0" });
                    });

                i = 0;
            } else {
                $(".panel")
                    .stop()
                    .animate({ "margin-left": -i * 500 });
            }
            $(".navi li").removeClass("on");
            $(".navi li").eq(i).addClass("on");
        });

        $(".prev").on("click", function () {
            clearInterval(stop);
            i--;

            if (i < 0) {
                $(".panel").css({ "margin-left": "-2000px" });
                $(".panel").stop().animate({ "margin-left": "-1500px" });
                i = 3;
            } else {
                $(".panel")
                    .stop()
                    .animate({ "margin-left": -i * 500 });
            }

            $(".navi li").removeClass("on");
            $(".navi li").eq(i).addClass("on");
        });
    }, 2000);
});
