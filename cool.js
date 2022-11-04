alert("Hi bro")
const header = document.createElement("HEADER")
header.setAttribute("id", "myHeader");
document.body.appendChild(header);

var y = document.createElement("H3"); 
var t = document.createTextNode("This is a h3 element in a header element");
y.appendChild(t);

document.getElementById("myHeader").appendChild(y);
