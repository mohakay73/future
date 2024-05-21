import fs from 'fs';
import path from 'path';
import { writeFile, readFile } from 'fs/promises';

console.log("global.__appdir in filehandler:", global.__appdir); // Debug log

const ensureDirectoryExists = (folderPath) => {
  console.log("Ensuring directory exists at:", folderPath); // Debug log
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }
};

const writeFileSync = (folderName, fileName, data) => {
  try {
    console.log("writeFileSync -> folderName:", folderName, "fileName:", fileName); // Debug log
    const folderPath = path.join(global.__appdir, folderName);
    console.log("Writing file synchronously to:", folderPath); // Debug log
    ensureDirectoryExists(folderPath);

    const filePath = path.join(folderPath, fileName);
    console.log("Full file path:", filePath); // Debug log
    fs.writeFileSync(filePath, data);
  } catch (error) {
    throw new Error(error.message);
  }
};

const writeFileAsync = async (folderName, fileName, data) => {
  try {
    console.log("writeFileAsync -> folderName:", folderName, "fileName:", fileName); // Debug log
    const folderPath = path.join(global.__appdir, folderName);
    console.log("Writing file asynchronously to:", folderPath); // Debug log
    ensureDirectoryExists(folderPath);

    const filePath = path.join(folderPath, fileName);
    console.log("Full file path:", filePath); // Debug log
    await writeFile(filePath, data);
  } catch (error) {
    throw new Error(error.message);
  }
};

const readFileAsync = async (folderName, fileName, encoding) => {
  try {
    console.log("readFileAsync -> folderName:", folderName, "fileName:", fileName); // Debug log
    if (!global.__appdir || !folderName || !fileName) {
      throw new Error(`Invalid path arguments. global.__appdir: ${global.__appdir}, folderName: ${folderName}, fileName: ${fileName}`);
    }
    const folderPath = path.join(global.__appdir, folderName);
    console.log("Reading file from folder path:", folderPath); // Debug log
    const filePath = path.join(folderPath, fileName);
    console.log("Full file path:", filePath); // Debug log
    const data = await readFile(filePath, encoding);
    console.log(`Data read: ${data}`); 
    return data;
  } catch (error) {
    console.error(`Failed to read file: ${error.message}`); 
    throw new Error(error.message);
  }
};

export { writeFileSync, writeFileAsync, readFileAsync, ensureDirectoryExists };
