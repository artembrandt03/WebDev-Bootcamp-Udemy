//Selecting elems with jQuery
$("h1").css("color", "red")
$("button").css("background-color", "yellow");

//Manipulating elems with jQuery
$("h2").addClass("big-title");
// $("h2").removeClass("big-title");
alert($("h2").hasClass("big-title"));

//Manipulating text with jQuery
$("h3").text("Goodbye World!");
$("h3").html("<em>Goodbye World!</em>"); // Using html() to add HTML content

//Manipulating attributes with jQuery
$("p").attr("class", "paragraph");
$("p").attr("href", "https://www.google.com");

//Adding event listeners with jQuery
$("button").click(function() {
  $("h1").css("color", "purple");
});
$("input").keypress(function(event) {
    $("h2").text(event.key);
    console.log(event.key);
});
$("h1").on("mouseover", function() {
    $("h1").css("color", "orange");
});

//Adding and removing elements with jQuery
$("h1").before("<button>New Button</button>");
$("h1").after("<button>New Button</button>");
$("h1").prepend("<button>New Button</button>"); //Adds button before the h1 content
$("h1").append("<button>New Button</button>"); //Adds button after the h1 content

//Animations with jQuery
$("button").click(function() {
    $("h1").fadeOut();
    $("h1").fadeIn();
    $("h1").slideUp();
    $("h1").slideDown();
    $("h1").animate({opacity: 0.5}); // Animates the opacity to 50%
});
