const PSD = require("psd")

var fs = require("fs")


var psdPath = "./psds/cup2.psd"
var imgPath = "./images/test.jpg"


var psd = PSD.fromFile(psdPath)



psd.parse()



fs.readFile(imgPath, function (err, data) {
    var imageData = data
    if (err) {
        return console.log(err);
    }

    // console.log(data);
    PSD.open(psdPath).then(function (psd) {

        var testData = psd
        // console.log(testData)
        // console.log(psd.layers)

        // psd.layers.forEach((layer, index) => {
        //     // console.log(layer)

            
            
        // });

        console.log(psd.image.obj.channelsInfo.pop(2))


        // fs.writeFile('./test/test.psd', psd.file.data, function (error){
        //     if(error) {
        //         return console.log(error);
        //     } 
        //     console.log("成功！")

        // })

        // console.log(psd.layerMask.obj.file.data =data ) // x
        
        return psd.image.saveAsPng('./output/output.png')
    })
    // console.log(data);


})




