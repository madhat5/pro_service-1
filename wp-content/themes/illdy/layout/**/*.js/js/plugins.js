jQuery(document).ready(function(r){r(function(){r("#about .skill").length&&r("#about .skill").each(function(){var l=r(this),e=r(l).children(".skill-top").children(".skill-progress-bar"),o=r(l).data("skill-progress-bar-width"),s=r(l).data("skill-color");r(l).children(".skill-bottom"),r(e).progressbar({value:o}),r(this).children(".skill-top").children(".skill-progress-bar").children(".ui-progressbar-value").css("background-color",s),r(this).children(".skill-top").children(".skill-progress-bar").children(".ui-progressbar-value").append('<span class="ui-progressbar-value-circle" style="background-color: '+s+'"></span>'),r(this).children(".skill-top").children(".skill-progress-bar").children(".ui-progressbar-value").append('<span class="ui-progressbar-value-top" style="background-color: '+s+'"></span>'),r(this).children(".skill-top").children(".skill-progress-bar").children(".ui-progressbar-value").children(".ui-progressbar-value-top").text(o+"%"),r(this).children(".skill-top").children(".skill-progress-bar").children(".ui-progressbar-value").children(".ui-progressbar-value-top").append('<span class="ui-progressbar-value-triangle" style="border-top-color: '+s+'; border-right-color: transparent; border-bottom-color: transparent; border-left-color: transparent;"></span>'),r(this).children(".skill-bottom").css("color",s)}),r(".testimonials-carousel.owl-carousel-enabled .widget_illdy_testimonial").length>1&&r(".testimonials-carousel.owl-carousel-enabled").owlCarousel({items:1,loop:!0,dots:!0}),function(){var r;jQuery(".illdy-slider").length>0&&((r=jQuery(".illdy-slider")).owlCarousel({items:1,loop:!0,dots:!1,autoplay:r.data("autoplay"),autoplayTimeout:r.data("autoplay-time")}),jQuery(".illdy-slider-navigation").length>0&&(jQuery(".illdy-slider-navigation #prev").click(function(l){l.preventDefault(),r.trigger("prev.owl.carousel")}),jQuery(".illdy-slider-navigation #next").click(function(l){l.preventDefault(),r.trigger("next.owl.carousel")})))}(),r(window).scroll(function(){1==r("#counter").visible()&&r("#counter .counter-number").length&&r("#counter .counter-number").countTo()})})});