//Ex-1
var third = document.firstElementChild.lastElementChild.querySelector("ul").lastElementChild.innerHTML = "Third elem in list";

//document.getElementsByTagName(..) - returns a HTMLCollection
//Example:
document.getElementsByTagName("li")[0].innerHTML = "First elem in list";

//document.getElementsByClassName(..) - returns a HTMLCollection
//Example:
document.getElementsByClassName("list")[1].innerHTML = "Second elem in list";

//document.getElementById(..) - returns a single element
//Example:
document.getElementById("title").innerHTML = "Selected by id!";

//document.querySelector(..) - returns the first element that matches a CSS selector, can be any valid CSS selector (id, class, tag, etc)
//Example:
document.querySelector("h2").innerHTML = "Selected by querySelector!";

