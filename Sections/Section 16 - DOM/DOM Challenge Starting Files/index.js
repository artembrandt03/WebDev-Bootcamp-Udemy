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

//Ex-2
document.querySelector("button").style.backgroundColor = "yellow";

//.classList - returns a list of all the classes that belong to a property
//classList.add("new-class") - adds a class
//classList.remove("class-to-remove") - removes a class
//classList.toggle("class-to-toggle") - toggles a class on/off

//Ex-3
document.querySelector("h1").classList.add("huge");

//.textContent - returns the text content of a node and its descendants
//Example:
var text = document.querySelector("h2").textContent;
alert(text);

//getAttribute(..) - returns the value of a specified attribute on the element
//setAttribute(..) - sets the value of a specified attribute on the element
//Example:
var input = document.querySelector("input");
input.getAttribute("type"); //returns "checkbox"
input.setAttribute("type", "radio"); //changes the input type to "radio"