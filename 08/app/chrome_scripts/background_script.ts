/// <reference path="../../typings/dropboxjs/dropboxjs.d.ts" />
/// <reference path="../../typings/chrome/chrome.d.ts" />

{
  'use strict';
  let client;

  chrome.runtime.onInstalled.addListener((details) => {
    return console.log('previousVersion', details.previousVersion);
  });

  client = new Dropbox.Client({
    key: 'wde9f9j8u65zbce'
  });

  client.authDriver(new Dropbox.AuthDriver.ChromeExtension({
    scope: "",
    receiverPath: "/chrome_oauth_receiver.html"
  }));

  client.authenticate((error, client) => {
    if (error) {
      console.log(error);
    }
  });
}
