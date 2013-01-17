function getDomain(url) {

    var prefix = /^https?:\/\//;
    var domain = /^[^\/]+/;
    // remove any prefix
    url = url.replace(prefix, "");
    // assume any URL that starts with a / is on the current page's domain
    if (url.charAt(0) === "/") {
        url = window.location.hostname + url;
    }
    // now extract just the domain
    var match = url.match(domain);
    if (match) {
        return (match[0]);
    }
    return (null);
}

chrome.tabs.onUpdated.addListener(// Called when the url of a tab changes.
function() {
chrome.tabs.getSelected(function(tab) {
	if(getDomain(tab.url) == "www.facebook.com")
    	chrome.tabs.remove(tab.id, function() { });
    
});
}

);

