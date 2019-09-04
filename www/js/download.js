window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fs) {
    console.log('file system open: ' + fs.name);
    fs.root.getFile('bot.png', { create: true, exclusive: false }, function (fileEntry) {
        console.log('fileEntry is file? ' + fileEntry.isFile.toString());
        var oReq = new XMLHttpRequest();
        // Make sure you add the domain name to the Content-Security-Policy <meta> element.
        oReq.open("GET", "http://cordova.apache.org/static/img/cordova_bot.png", true);
        // Define how you want the XHR data to come back
        oReq.responseType = "blob";
        oReq.onload = function (oEvent) {
            var blob = oReq.response; // Note: not oReq.responseText
            if (blob) {
                // Create a URL based on the blob, and set an <img> tag's src to it.
                var url = window.URL.createObjectURL(blob);
                document.getElementById('bot-img').src = url;
                // Or read the data with a FileReader
                var reader = new FileReader();
                reader.addEventListener("loadend", function() {
                   // reader.result contains the contents of blob as text
                });
                reader.readAsText(blob);
            } else console.error('we didnt get an XHR response!');
        };
        oReq.send(null);
    }, function (err) { console.error('error getting file! ' + err); });
}, function (err) { console.error('error getting persistent fs! ' + err); });
/*
//Here's a similar replacement for FileTransfer's "Upload a File" example:

window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fs) {
    console.log('file system open: ' + fs.name);
    fs.root.getFile('bot.png', { create: true, exclusive: false }, function (fileEntry) {
        fileEntry.file(function (file) {
            var reader = new FileReader();
            reader.onloadend = function() {
                // Create a blob based on the FileReader "result", which we asked to be retrieved as an ArrayBuffer
                var blob = new Blob([new Uint8Array(this.result)], { type: "image/png" });
                var oReq = new XMLHttpRequest();
                oReq.open("POST", "http://mysweeturl.com/upload_handler", true);
                oReq.onload = function (oEvent) {
                    // all done!
                };
                // Pass the blob in to XHR's send method
                oReq.send(blob);
            };
            // Read the file as an ArrayBuffer
            reader.readAsArrayBuffer(file);
        }, function (err) { console.error('error getting fileentry file!' + err); });
    }, function (err) { console.error('error getting file! ' + err); });
}, function (err) { console.error('error getting persistent fs! ' + err); });
*/