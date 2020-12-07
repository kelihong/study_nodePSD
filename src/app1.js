const PSD = require("psd")

var fs = require("fs")


var psdPath = "./psds/cup.psd"
var imgPath = "./images/test.jpg"


var psd = PSD.fromFile(psdPath)



psd.parse()



fs.readFile(imgPath, function (err, data) {
    if (err) {
        return console.log(err);
    }

    PSD.open("./psds/cup2.psd").then(function (psd) {

        console.log(psd)

        // console.log(psd.layerMask.obj.file.data =data ) // x

        return psd.image.saveAsPng('./output/output1.png')
    })
    

})




