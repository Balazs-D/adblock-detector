# AdBlock Detector Extension

_A simple adBlock detector extension for any open tab._
<br></br>

## Instructions

1.  Clone or download the repository

    `git clone git@github.com:Balazs-D/adblock-detector.git`

    In Chrome:

        - Open Chrome extensions page in the browser ( chrome://extensions/ )

        - Click on Load unpacked and select the AdBlock Detector order

    In Firefox

        - Open Firefox developer extension page in the browser ( about:debugging#/runtime/this-firefox )

        - Click on Load Temporary Add-on...

        - Select the manifest.json in the AdBlocker order

2.  Install Jest within the extension directory(**Only for testing**)

    `npm install --save-dev jest`

3.  Start test

    `npm test``

4.  Install JSON Server ( **Only for saving detected page loads**)

    `npm install -g json-server`

5.  Start JSON Server

    `json-server --watch db.json`

6.  Open JSON Server in the browser

    http://localhost:3000/logs
