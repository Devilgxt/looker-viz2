function drawViz(data, element) {
  const viz = document.getElementById("viz");
  viz.innerHTML += "<pre>" + JSON.stringify(data, null, 2) + "</pre>";
}
