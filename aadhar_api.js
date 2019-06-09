var https = require('https');

var options = {
  'method': 'POST',
  'hostname': 'preprod.aadhaarapi.com',
  'path': '/verify-dl',
  'headers': {
    'Content-Type': 'application/json',
    'qt_api_key': '9e78f26b-cce1-4930-ad19-9d298e2f786b',
    'qt_agency_id': 'cc1b47d1-4341-4a1b-8b55-a20efa70a523'
  }
};

var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

var postData =  "{\n    \"dl_no\":\"DL-0420110149646\",\n    \"dob\":\"09-02-1976\",\n    \"consent\":\"Y\",\n    \"consent_text\":\"i give full consent\"\n} ";

req.write(postData);

req.end();
