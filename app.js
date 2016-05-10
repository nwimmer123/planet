$(document).ready(function() {

  console.log('SANITY CHECK!! app.js loaded!');

  $("button").on("click", function() {
    var entity = $("#camera")[0];
    var currentYMultiplier = entity.getAttribute("yMultiplier");
    entity.setAttribute('yMultiplier', currentYMultiplier + .05);
  });
  
});