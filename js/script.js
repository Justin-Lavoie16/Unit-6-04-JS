/* Created by: Justin Lavoie *
 Created on: nov 2022 * 
*/

"use strict"

if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/Unit-6-04-JS/sw.js", {
    scope: "/Unit-6-04-JS/",
  });
}

"use strict"

window.onload = function () {

  const params = new URLSearchParams(document.location.search);
  const radius = params.get("r");
  
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  const dimensions = "<ul>\n<li>Radius = " + radius + "</li>\n</ul>";
  // output
  document.getElementById("cube").innerHTML = dimensions;
  document.getElementById("answer").innerHTML =
    "The volume is: " + volume.toFixed(2) + " cm³";
};