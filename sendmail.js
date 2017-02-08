//var sendmail = require('sendmail')(), //uncomment on production server
var sendmail = require('sendmail')({silent: true, devPort: 1025}), //uncomment on dev server
    fs = require('fs');

var file = './build/template.html',
    from = 'noreply@yourdomaine.com',
    to = 'test@yourdomaine.com',
    subject= 'test mail template';

fs.readFile(file, 'utf8', function (err, data) {
    if (err) {
      return console.log(err);
    }
    console.log(data);

    sendmail({
      from: from,
      to: to,
      subject: subject,
      html: data,
    }, function(err, reply) {
      console.log(err && err.stack);
      console.dir(reply);
    });
});
