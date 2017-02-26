/**
 * Created by umadbro on 25/02/17.
 */
/**
 * Created by umadbro on 21/02/17.
 */
var nodemailer = require ('nodemailer');

var transporter = nodemailer.createTransport({

    service: 'Gmail',
    auth: {

        user: 'yuradragon05@gmail.com',
        pass: 'benjake10'
    }
});
var i=0;
var subject = 'Papa<parshkin67@mail.ru>';
var arr = new Array("PAPA", "MISHA", "OTEC", "BATY");
for(var i=0; i<arr.length; i++) {

    var message = '<b> hello,'+arr[i]+'</b>';
    var mailOptions = {

        from: 'Ura <yuradragond05@gmail.com>',
        to: subject,
        subject: arr[i],
        text: 'hello darkness my old friend',
        html: message
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {

            console.log(i + info.response+ ' '+ info.messageId);
        }

    });
}

