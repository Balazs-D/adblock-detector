var adBlockEnabled = false;
var testAd = document.createElement("div");
testAd.innerHTML = "&nbsp;";
testAd.className = "adsbox";
document.body.appendChild(testAd);

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
  d = new Date();
  let hour = d.getHours();
  let min = d.getMinutes();
  let s = d.getSeconds();
  let timeDateStamp = hour + ":" + min + ":" + s + " / " + d.toDateString();

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
