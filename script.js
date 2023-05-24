
console.log('Currently Looking for a job.')

// --------typing words--------- 
new TypeIt("#simpleUsage", {
    strings: ['Front-End Developer'],
    startDelay: 250,
    speed: 150,
    loop: true,
    loopDelay: 100,
    waitUntilVisible: true,
    // afterComplete: function (instance) {
    //     instance.destroy();
    // }
}).pause(2500).go();

// --------scrolling down button--------- 
$(function() {
    $('.scroll-down').click (function() {
        $('#home').animate({scrollTop: $('#portfolio').offset().top }, 'slow');
        return false;
    });
});

// WEA.one_page = function() {
//     //var HHeight = $('.navbar').outerHeight();
//     var $one_page_nav = $('.one-page-nav');
//     if($one_page_nav.length > 0) {
//         $one_page_nav.each(function(){
//             $.scrollIt({
//               upKey: 38,             // key code to navigate to the next section
//               downKey: 40,           // key code to navigate to the previous section
//               easing: 'linear',      // the easing function for animation
//               scrollTime: 600,       // how long (in ms) the animation takes
//               activeClass: 'active', // class given to the active nav element
//               onPageChange: null,    // function(pageIndex) that is called when page is changed
//               topOffset: -70           // offste (in px) for fixed top navigation
//             });
//         });
//     }
// }


// --------gallery portfolio--------- 
    document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelector(".whiskey-cards")) {
        // Slider dragging
        const slider = document.querySelector(".whiskey-cards");
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener("mousedown", (e) => {
            isDown = true;
            slider.classList.add("active");
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
            cancelMomentumTracking();
        });

        slider.addEventListener("mouseleave", () => {
            isDown = false;
            slider.classList.remove("active");
        });

        slider.addEventListener("mouseup", () => {
            isDown = false;
            slider.classList.remove("active");
            beginMomentumTracking();
        });

        slider.addEventListener("mousemove", (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = x - startX; //scroll-fast
            var prevScrollLeft = slider.scrollLeft;
            slider.scrollLeft = scrollLeft - walk;
            velX = slider.scrollLeft - prevScrollLeft;
        });

        // Momentum
        var velX = 0;
        var momentumID;

        slider.addEventListener("wheel", (e) => {
            cancelMomentumTracking();
        });

        function beginMomentumTracking() {
            cancelMomentumTracking();
            momentumID = requestAnimationFrame(momentumLoop);
        }

        function cancelMomentumTracking() {
            cancelAnimationFrame(momentumID);
        }

        function momentumLoop() {
            slider.scrollLeft += velX * 2;
            velX *= 0.95;
            if (Math.abs(velX) > 0.5) {
                momentumID = requestAnimationFrame(momentumLoop);
            }
        }

        // Scroll
        const scrollContainer = document.querySelector(".whiskey-cards");

        scrollContainer.addEventListener("wheel", (evt) => {
            evt.preventDefault();

            window.requestAnimationFrame(() => {
                scrollContainer.scrollTo({
                    top: 0,
                    left: scrollContainer.scrollLeft + evt.deltaY * 2,
                    behavior: "smooth"
                });
            });
        });
    }
});
// --------gallery portfolio end--------- 


