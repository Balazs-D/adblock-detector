var adBlockEnabled = false;
var testAd = document.createElement("div");
testAd.innerHTML = "&nbsp;";
testAd.className = "adsbox";
document.body.appendChild(testAd);

const AdBlockChecker = () =>
  window.setTimeout(function () {
    if (testAd.offsetHeight === 0) {
      postLog(true);
      document.body.textContent = "";

      let header = document.createElement("div");
      let headerTitle = document.createElement("h1");
      let headerText = document.createElement("h3");

      header.classList.add("headerCont");
      headerTitle.classList.add("headerTitle");
      headerText.classList.add("headerText");

      headerTitle.textContent = "AdBlocker is active!";
      headerText.textContent = "Please deactivate and refresh to continue.";

      document.body.appendChild(header);
      header.appendChild(headerTitle);
      header.appendChild(headerText);
    }
    postLog(adBlockEnabled);
    testAd.remove();
  }, 100);

const postLog = (isBlocked) => {
  let dateStamp = ([month, date, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/"));
  let timeStamp = ([hour, minute, second] = new Date()
    .toLocaleTimeString("en-US")
    .split(/:| /));
  let timeDateStamp = timeStamp + dateStamp;
  let blocked = isBlocked;

  fetch("http://localhost:3000/logs/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      timeDateStamp,
      blocked,
    }),
  })
    .then((result) => result.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error));
};
