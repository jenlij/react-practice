
request.get({
    url: "https://api.nytimes.com/svc/topstories/v2/technology.json",
    qs: {
      'api-key': "965dd3415e3c4c14a37767c6a31ccfda"
    },
  }, function(err, response, body) {
    body = JSON.parse(body);
    console.log(body);
  })