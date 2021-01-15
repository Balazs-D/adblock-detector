# AdBlock Detector Extension

_A simple adBlock detector extension for any open tab._
<br></br>

## Instructions

<br></br>

- ### Basic Task - AdBlock Detector
  <br></br>

1.  Clone or download the repository

    `git clone git@github.com:Balazs-D/adblock-detector.git`

    In Chrome:

        - Open Chrome extensions page in the browser ( chrome://extensions/ )

        - Click on Load unpacked and select the AdBlock Detector order

    In Firefox

        - Open Firefox developer extension page in the browser ( about:debugging#/runtime/this-firefox )

        - Click on Load Temporary Add-on...

        - Select the manifest.json in the AdBlocker order

<br></br>

- ### Bonus 1 - Unit Test
  <br></br>

2.  Get into the directory

    `cd elucidate-challenge`

3.  Install dependencies using

    `npm install --save-dev jest`

4.  Start test

    `npm test``

<br></br>

- ### Bonus 2 - Saving the detected page load sessions
  <br></br>

5. Start JSON Server

   `npm install -g json-server`

6. Start JSON Server

   `json-server --watch db.json`

7. Open JSON Server in the browser

   http://localhost:3000/logs
