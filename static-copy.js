const fs = require("fs");
const path = require("path");

const baseDir = "./";
const distDir = process.argv.slice(2)[0];
const srcDir = "src";
const staticDir = "static";

if (!fs.existsSync(path.join(__dirname, baseDir, distDir))) {
    fs.mkdirSync(path.join(__dirname, baseDir, distDir));
}

const assetsDir = "assets";
if (!fs.existsSync(path.join(__dirname, baseDir, distDir, assetsDir))) {
    fs.mkdirSync(path.join(__dirname, baseDir, distDir, assetsDir));
}

const copyFile = (srcD, distD, name) => {
    fs.writeFileSync(path.join(distD, name), fs.readFileSync(path.join(srcD, name)));
    console.log(`Successfully copyied: ${name}`);
};

const scanDir = (dir) => {
    fs.readdir(dir, (err, files) => {
        files.forEach((file) => {
            if (!file.startsWith(".")) {
                const srcFp = path.join(dir, file);
                if (fs.lstatSync(srcFp).isDirectory()) {
                    const distFp = path.join(__dirname, baseDir, distDir, assetsDir, file);
                    fs.mkdirSync(distFp);
                    scanDir(srcFp);
                } else {
                    const distFp = dir.replace(
                        path.join(__dirname, baseDir, srcDir, staticDir),
                        path.join(__dirname, baseDir, distDir, assetsDir)
                    );
                    copyFile(dir, distFp, file);
                }
            }
        });
    });
};

if (fs.existsSync(path.join(__dirname, baseDir, srcDir, staticDir))) {
    console.log("");
    console.log("Copying source static files to dist dir...");
    console.log("");

    scanDir(path.join(__dirname, baseDir, srcDir, staticDir));
}
