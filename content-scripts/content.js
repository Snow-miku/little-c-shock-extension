// Initialize the rules
var isOn = true;

chrome.runtime.onMessage.addListener(function(request) {
  isOn = request.enabled;
});

document.addEventListener("mouseup", function(event) {
  if (!isOn) {
    return;
  }
  var selectedText = window.getSelection().toString();
  if (selectedText) {
    alert("Copying \"" + selectedText + "\" is an unlawful act");
  }
});

chrome.storage.sync.get("color", (result) => {
  // This will console.log whatever is in chrome storage when the page is loaded
  console.log("in content.js sync function");
  isOn = result.enabled;
});