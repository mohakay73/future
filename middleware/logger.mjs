import fs from'fs'
const logger = (req, res, next) => {
    const filePath = path.join(global.__appdir, 'logs', 'app.log');
    console.log("Writing log to:", filePath); // Debug log
  
    const message = `${req.method} ${
      req.originalUrl
    } - ${new Date().toLocaleDateString('sv-SE')} ${new Date().toLocaleTimeString(
      'sv-SE'
    )}\n`;
  
    fs.appendFileSync(filePath, message);
  
    next();
  };
  
  export default logger;
  
  