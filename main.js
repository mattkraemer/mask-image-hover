function findScreenCoords(mouseEvent) {
  var xPos;
  var yPos;

  if(mouseEvent) {
    xPos = mouseEvent.pageX;
    yPos = mouseEvent.pageY;
  } else {
    xPos = window.event.pageX;
    yPos = window.event.pageY;
  }

  document.getElementById('screenCoords').innerHTML = xPos + ', ' + yPos;
  document.getElementById('wrapper').style = `-webkit-mask-position: ${-xPos}px ${-yPos}px`
}
document.getElementById('wrapper').onmousemove = findScreenCoords