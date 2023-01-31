// Initialize the rules
var isOn = true;

chrome.runtime.onMessage.addListener(function(request) {
  isOn = request.enabled;
});

document.addEventListener("mouseup", function(event) {
  if (!isOn) {
    console.log("here");
    return;
  }
  var selectedText = window.getSelection().toString();
  if (selectedText) {
    alert("You selected: " + selectedText);
  }
});