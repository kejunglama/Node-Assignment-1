const fs = require('fs');
const promiseReadFile = (filePath, encoding) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    });
}
console.log(promiseReadFile('./textfile/my_intro.txt', 'utf8').then((data) => {
    console.log(data);

}).catch((err) => {
    console.log(err);
}))
