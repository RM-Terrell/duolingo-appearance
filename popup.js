// Set backround color for outer areas.
let colorBackgroundOut = document.getElementById('colorBackgroundOut');
chrome.storage.sync.get(["colorBackgroundOut"], function(items){
  if (items.colorBackgroundOut.length > 0) {
    colorBackgroundOut.value = items.colorBackgroundOut;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + items.colorBackgroundOut + '";'});
    });
  }
});
colorBackgroundOut.onchange = function(element) {
  let color = '#' + element.target.value;
  chrome.storage.sync.set({ "colorBackgroundOut": color }, function(){});
  chrome.storage.sync.get(["colorBackgroundOut"], function(items){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + items.colorBackgroundOut + '";'});
    });
  });
};

// Set backround color for inner areas.
let colorBackgroundIn = document.getElementById('colorBackgroundIn');
chrome.storage.sync.get(["colorBackgroundIn"], function(items){
  if (items.colorBackgroundIn.length > 0) {
    colorBackgroundIn.value = items.colorBackgroundIn;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.getElementsByClassName("_2hEQd")[0].style.backgroundColor = "' + items.colorBackgroundIn + '";'});
    });
  }
});
colorBackgroundIn.onchange = function(element) {
  let color = '#' + element.target.value;
  chrome.storage.sync.set({ "colorBackgroundIn": color }, function(){});
  chrome.storage.sync.get(["colorBackgroundIn"], function(items){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.getElementsByClassName("_2hEQd")[0].style.backgroundColor = "' + items.colorBackgroundIn + '";'});
    });
  });
};
