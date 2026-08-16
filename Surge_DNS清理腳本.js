$httpAPI("POST", "/v1/dns/flush", null, function(result) {
    console.log("DNS cache flushed!");
    $done();
});