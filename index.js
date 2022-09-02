const { readdirSync, write, writeFileSync } = require('fs')
const {cp, readFileSync} = require('fs');

function getDirectories(source) {
    try {
        return readdirSync(source, { withFileTypes: true });
    } catch(error) {
        console.log(error);
        return null;
    }
}

let metadataJSON = [];
var directory = getDirectories("./assets");
for (var i = 0; i <= directory.length; i++) {
    if (i == directory.length) {
        writeF();
        return;
    }
 
    let directoryData = directory[i].name;
    const currentData = JSON.parse(readFileSync(`./assets/${directoryData}/metadata.json`).toString());
    metadataJSON.push(readFileSync(`./assets/${directoryData}/metadata.json`).toString());
    let getFile = getDirectories(`./assets/${directoryData}/3D`);
    let ok = null;
    let isDefault = false;
    if (!getFile || !getFile[0]) {
        getFile = getDirectories(`./assets/${directoryData}/Default/3D`)
        if (!getFile) {
            throw "fail";
        };
        ok = `./assets/${directoryData}/Default/3D/${getFile[0].name}`;
        isDefault = true;
    } else {
        ok = `./assets/${directoryData}/3D/${getFile[0].name}`;
    }
    let filenamet = null;
    if (!currentData.mappedToEmoticons) {
        filenamet = currentData.cldr;
    } else {
        filenamet = currentData.mappedToEmoticons;
    }
    filenamet = filenamet.toString().replace("_default", "");
    cp(ok, `./emojis/${filenamet}_3d.png`, (err) => {
        console.log(err);
    });
}

async function writeF() {
    try {
        const promise = writeFileSync('./metadata.json', `[${metadataJSON.toString()}]`);
      
        await promise;
    } catch (err) {
        // When a request is aborted - err is an AbortError
        console.error(err);
    }
}