// Initialize the rules
var isOn = true;

chrome.runtime.onMessage.addListener(function(request) {
  if (request.toggle === "on") {
    isOn = true;
  } else if (request.toggle === "off") {
    isOn = false;
  }
});

document.addEventListener("mouseup", function(event) {
  if (!isOn) return;
  var selectedText = window.getSelection().toString();
  if (selectedText) {
    alert("You selected: " + selectedText);
  }
});