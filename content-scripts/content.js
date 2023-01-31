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

chrome.storage.sync.get("color", (result) => {
  // This will console.log whatever is in chrome storage when the page is loaded
  console.log("in content.js sync function"); // This will console.log { color: "#ffffff" } (or whatever the stored color was)
  // set the body background color
  isOn = result.enabled;
});