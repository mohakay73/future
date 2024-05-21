import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
global.__appdir = __dirname;

console.log("Application Directory set in setGlobalAppDir:", global.__appdir);