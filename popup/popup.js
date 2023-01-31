const toggleCheckbox = document.getElementById("toggleCheckbox");

async function updateContentScript() {
  console.log("updateContentScript");

  // This code came from the Chrome extension documentation. It just gets
  // the currently active tab on the last focused window to ensure that we
  // send the message to the right place.
  const [tab] = await chrome.tabs.query({
    active: true,
    lastFocusedWindow: true,
  });

  if (toggleCheckbox.checked) {
    console.log("checked");
    chrome.tabs.sendMessage(tab.id, { enabled: true });
    chrome.storage.sync.set({ enabled: true });
  } else {
    console.log("not checked");
    chrome.tabs.sendMessage(tab.id, { enabled: false });
    chrome.storage.sync.set({ enabled: false });
  }
}

toggleCheckbox.addEventListener("change", (e) => updateContentScript());

// This code will run when the popup is opened. It asks chrome storage to get
// the current value of "color"
chrome.storage.sync.get(["enabled"], (result) => {
  // Console.log the result
  console.log("in popup.js sync function");
  // Set the state of the toggleCheckbox input to whatever the stored boolean is
  toggleCheckbox.checked = result.enabled;

  console.log("enabled: " + result);
});