const toggleCheckbox = document.getElementById("toggleCheckbox");

toggleCheckbox.addEventListener("change", function() {
  if (toggleCheckbox.checked) {
    chrome.runtime.sendMessage({ toggle: "on" });
    chrome.storage.local.set({ highlightDetectionEnabled: true });
  } else {
    chrome.runtime.sendMessage({ toggle: "off" });
    chrome.storage.local.set({ highlightDetectionEnabled: false });
  }
});

chrome.storage.local.get("highlightDetectionEnabled", function(result) {
  toggleCheckbox.checked = result.highlightDetectionEnabled || false;
});