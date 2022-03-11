//const QRGenerator = require('qrcode-terminal');
const qr = require('qr-image');
function generateQrFromArg(){
    //QRGenerator.generate(process.argv[2]);
    var qr_svg = qr.image(process.argv[2], { type: 'png' });
    qr_svg.pipe(require('fs').createWriteStream('Script20.png'));
}

generateQrFromArg()
