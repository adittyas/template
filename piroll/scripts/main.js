$(document).ready(function() {
  const progressbar = function() {
    let percent = [];
    $(".bar-percent").each(function() {
      percent.push($(this).html());
    });

    $(".progress-bar").each(function(index) {
      $(this).animate(
        {
          width: percent[index]
        },
        1000
      );
    });
  };
  const navbar = function() {
    let win = $(window).scrollTop();
    if (win > 50) {
      $("body>header").addClass("navbar-white");
    } else {
      $("body>header").removeClass("navbar-white");
    }
  };
  const imgAbout = function() {
    let x = $(".skill-meter")
      .parent()
      .outerHeight();
    $("#aboutImg").css("height", x);
  };
  $(window).on({
    load: function() {
      navbar();
      imgAbout();
    },
    scroll: function() {
      navbar();
      imgAbout();

      let windowTop = $(this).scrollTop() + $(this).height();

      $(".myanime").each(function(index) {
        if (windowTop > $(this).offset().top) {
          //   setTimeout(() => {
          //     $(this).addClass("fadeInUp");
          //   }, 500);
          $(this).addClass("fadeInUp");
        }
      });

      // $("#home button").css({
      //     "transform": "translate(0px,-" + windowTop / 2 + "%)"
      // });
      // $("#home h2").css({
      //     "transform": "translate(0px,-" + windowTop / 4 + "%)"
      // });
      // $("#home p").css({
      //     "transform": "translate(0px,-" + windowTop / 8 + "%)"
      // });
    }
  });

  // smooth scroll
  $("a").on("click", function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});
