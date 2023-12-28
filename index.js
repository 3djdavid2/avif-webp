const sharp= require('sharp');

sharp('input.avif')
.toFile('output.png')
.then(info => { console.log(info) })
.catch(err => { console.log(err) });