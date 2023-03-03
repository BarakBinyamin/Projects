# Generate QR codes
Generate Some QR codes with nodejs using the library [qrcode](https://www.npmjs.com/package/qrcode)

```javascript
const QRCode = require('qrcode')
const fs     = require('fs')

// download png
async download(filename, jsontoconvert){
  const datastring = JSON.stringify(jsontoconvert)
  const dataURL    = QRCode.toDataURL(datastring)
  const data       = dataURL.split(',')[1]
  const buff       = Buffer.from(a,'base64')
  fs.writeFileSync(`${filename}.png`, buff)
}

// display in terminal
async display(jsontoconvert){
  const datastring   = JSON.stringify(jsontoconvert)
  const qrcodeString = await QRCode.toString(datastring)
  console.log(qrcodeString)
}

async function main(){
  const someJSON = { "feild1":"value2", "feild2": 500 }
  const filename = "example"
  download(filename,someJSON)
  display(jsontoconvert)
}

main()
```
