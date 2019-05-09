const admZip = require("adm-zip");
const fs = require("fs");

const path = process.argv[2];
const zip = new admZip();
fs.readdirSync(path).map(file => zip.addLocalFile(`${path}/${file}`));
zip.writeZip(`${path}/index.zip`);
