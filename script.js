//your JS code here. If required.
  const userAgent = window.navigator.userAgent;
  let browserName;
  let version;

  if (/Firefox\//.test(userAgent)) {
    browserName = "Firefox";
    version = userAgent.match(/Firefox\/([0-9.]+)/)[1];
  } else if (/Chrome\//.test(userAgent)) {
    browserName = "Chrome";
    version = userAgent.match(/Chrome\/([0-9.]+)/)[1];
  } else if (/Edge\//.test(userAgent)) {
    browserName = "Microsoft Edge";
    version = userAgent.match(/Edge\/([0-9.]+)/)[1];
  } else if (/Safari\//.test(userAgent)) {
    browserName = "Safari";
    version = userAgent.match(/Version\/([0-9.]+)/)[1];
  } else if (/Trident\//.test(userAgent)) {
    browserName = "Internet Explorer";
    version = userAgent.match(/rv:([0-9.]+)/)[1];
  } else {
    browserName = "an unknown browser";
    version = "";
  }

  // Get the div element to display the browser info
  const browserInfoDiv = document.getElementById("browser-info");

  // Add the browser info to the div element
  browserInfoDiv.innerText = "You are using " + browserName + " version " + version;