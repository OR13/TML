var Mbox = require('node-mbox');
var MailParser = require('mailparser').MailParser;
var sanitizeHtml = require('sanitize-html');

// strip all html from emails...
sanitizeConfig = {
  allowedTags: [],
  allowedAttributes: []
}

var argv = require('minimist')(process.argv.slice(2));
// console.dir(argv);
var src = argv.src;
var dst = argv.dst;

console.log('src: ', src);
console.log('dst: ', dst);

var fs = require('fs');
var stream = fs.createWriteStream(dst);

stream.once('open', function (fd) {

  var mbox = new Mbox(src, { /* options */ });
  mbox.on('message', function (msg) {
    var mailparser = new MailParser({ streamAttachments: true });
    mailparser.on('data', data => {
      if (data.type === 'text') {
        clean = sanitizeHtml(data.html, sanitizeConfig);
        // console.log(clean);
        stream.write(clean);
      }
    });

    mailparser.write(msg);
    mailparser.end();
  });

});

// stream.end();
