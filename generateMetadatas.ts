const { readdirSync, writeFileSync } = require("fs");
const { resolve } = require("path");

const ipfsRoot = "QmXD59psFdW3AaVBq3N1HmWdjxu4Dwva1SiwRQbGzpMGnL";

// Get path to image directory
const imageDirPath = resolve(__dirname, "assets/images");

// Get an array of the files inside the folder
const files = readdirSync(imageDirPath);

// Loop through each file that was retrieved
files.forEach((fileName: any, index: any) => {
  const name = fileName.replace(".png", "");
  const description = `A fine pixel punk`;
  const json = {
    description: description,
    image: `ipfs://${ipfsRoot}/${fileName}`,
    name: name,
  };
  const jsonString = JSON.stringify(json, null, 2);
  const jsonFilename = resolve(__dirname, "assets/metadatas");
  writeFileSync(jsonFilename + `/${name}.json`, jsonString);
  console.log(`Wrote ${name}`);
});

console.log("Done");
