/// <reference path="../../typings/dropboxjs/dropboxjs.d.ts" />
{
    var client;
    client = new Dropbox.Client({
        key: 'wde9f9j8u65zbce'
    });
    client.authDriver(new Dropbox.AuthDriver.ChromeExtension({
        scope: "",
        receiverPath: "/chrome_oauth_receiver.html"
    }));
}
//# sourceMappingURL=dropboxClient.service.js.map