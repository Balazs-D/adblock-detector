// fake ad div
let adBlockActive = false;
let testAd = document.createElement("div");
testAd.innerHtml = "&nbsp";
testAd.className = "adsbox";
document.body.appendChild(testAd);

// main extension logic
// checking if ads can be shown or  not
const AdBlockChecker = () =>
  window.setTimeout(function () {
    if (testAd.offsetHeight === 0) {
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
    testAd.remove();
  }, 100);

AdBlockChecker();
