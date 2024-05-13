document.addEventListener('DOMContentLoaded', function() {
    sendAPIRequest();
});

function sendAPIRequest() {
   var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://iptv.apdtest.net/api/senddata", true);
    xhr.withCredentials = true
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {

        if (xhr.readyState === XMLHttpRequest.DONE){
            if (xhr.status === 200) {
                // Assuming the API returns HTML content to display in the iframe
                //document.getElementById('apiFrame').srcdoc = xhr.responseText;
            }
        }
        
    };
    var data = JSON.stringify({
        "version": 1,
        "platform": "x1",
        "testKey": "testValue"
    });
    xhr.send(data);
    xhr.onload=function(){document.getElementById('apiFrame').srcdoc = xhr.responseText}
}