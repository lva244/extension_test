function FindProxyForURL(url, host) {
    // Your proxy server name and port
    var proxyserver = '162.243.250.84:3333';
    //
    //  Here's a list of hosts to connect via the PROXY server
    //
    var proxylist = new Array(
        "kohls.com",
        "www.kohls.com",
        "media.kohlsimg.com",
        "media1.kohlsimg.com",
        "media2.kohlsimg.com",
        "js.kohls.com",
        "www.media.kohlsimg.com",
        "target.com",
        "www.target.com",
        "eastbay.com",
        "www.eastbay.com",
        "puritan.com",
        "www.puritan.com",
        "walmart.com",
        "www.walmart.com"
    );
    // Return our proxy name for matched domains/hosts
    for(var i=0; i<proxylist.length; i++) {
        var value = proxylist[i];
        if (dnsDomainIs(host, value) ) {
            return "PROXY "+proxyserver;
        }
    }

    if (shExpMatch(url, "*.kohlsimg.com/*") || shExpMatch(url, "*.kohls.com/*") ) {
        return "PROXY "+proxyserver;
    }
   
    return "DIRECT";
}