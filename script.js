/* =========================
   RAINBOW CURSOR
========================= */

const cursorRing =
    document.querySelector(".cursor-ring");

const cursorDot =
    document.querySelector(".cursor-dot");


let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let ringX = mouseX;
let ringY = mouseY;


if (
    cursorRing &&
    cursorDot &&
    window.matchMedia("(pointer:fine)").matches
) {

    document.addEventListener(
        "mousemove",
        function (event) {

            mouseX = event.clientX;
            mouseY = event.clientY;

            cursorDot.style.left =
                mouseX + "px";

            cursorDot.style.top =
                mouseY + "px";

        }
    );


    function cursorLoop() {

        ringX +=
            (mouseX - ringX) * 0.075;

        ringY +=
            (mouseY - ringY) * 0.075;


        cursorRing.style.left =
            ringX + "px";

        cursorRing.style.top =
            ringY + "px";


        requestAnimationFrame(
            cursorLoop
        );
    }


    cursorLoop();


    /* Cursor becomes bigger on hover */

    document
        .querySelectorAll(
            "a, button, .project-card, .skill-card"
        )
        .forEach(function (element) {

            element.addEventListener(
                "mouseenter",
                function () {

                    cursorRing.style.width =
                        "30px";

                    cursorRing.style.height =
                        "30px";

                }
            );


            element.addEventListener(
                "mouseleave",
                function () {

                    cursorRing.style.width =
                        "18px";

                    cursorRing.style.height =
                        "18px";

                }
            );

        });

}


/* =========================
   PROJECT CARD 3D EFFECT
========================= */

document
    .querySelectorAll(".project-card")
    .forEach(function (card) {

        card.addEventListener(
            "mousemove",
            function (event) {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;


                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;


                const rotateX =
                    (y - centerY) / 30;

                const rotateY =
                    (centerX - x) / 30;


                card.style.transform =
                    `perspective(900px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-10px)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            function () {

                card.style.transform =
                    "perspective(900px) rotateX(0deg) rotateY(0deg)";

            }
        );

    });


/* =========================
   SKILL CARD 3D EFFECT
========================= */

document
    .querySelectorAll(".skill-card")
    .forEach(function (card) {

        card.addEventListener(
            "mousemove",
            function (event) {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;


                const rotateX =
                    (y - rect.height / 2) / 35;

                const rotateY =
                    (rect.width / 2 - x) / 35;


                card.style.transform =
                    `perspective(700px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-8px)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            function () {

                card.style.transform =
                    "";

            }
        );

    });


/* =========================
   SMOOTH SCROLL
========================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const target =
                    document.querySelector(
                        this.getAttribute("href")
                    );


                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    });