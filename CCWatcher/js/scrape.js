var startIndex = document.body.innerHTML.indexOf("rss.php?user_id=", 0);
var endIndex = document.body.innerHTML.indexOf("\"><img", startIndex);
var count = endIndex - startIndex - 16;
var string = "http://www.conquerclub.com/rss.php?user_id=" + document.body.innerHTML.substring(startIndex+16, endIndex);

chrome.extension.sendRequest({rsslink: string}, function(response) {});