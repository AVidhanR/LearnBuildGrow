// Import the 'winston' module which is a popular logging library for Node.js
import { createLogger, format, transports } from "winston";

// Import some format functions from winston to format the log messages
const { combine, timestamp, json, colorize } = format;

// Define a custom format for console logging with colors
// Use the 'combine' function to combine multiple format functions
// Use the 'colorize' function to display log messages in colors
// Use the 'printf' function to define the log message format
// The format will be: level: message (e.g. info: This is an info message)
const consoleLogFormat = format.combine(
  format.colorize(),
  format.printf(({ level, message, timestamp }) => {
    return `${level}: ${message}`;
  })
);

// Create a Winston logger instance using the 'createLogger' function
// Set the log level to 'info' (i.e. only log messages with level 'info' or higher)
// Use the 'combine' function to combine multiple format functions
// Use the 'colorize' function to display log messages in colors
// Use the 'timestamp' function to add a timestamp to each log message
// Use the 'json' function to format the log message as JSON
// Define two transports for the logger: console and file
// The console transport will use the custom consoleLogFormat
// The file transport will write log messages to a file named 'app.log'
const logger = createLogger({
  level: "info",
  format: combine(colorize(), timestamp(), json()),
  transports: [
    new transports.Console({
      format: consoleLogFormat,
    }),
    new transports.File({ filename: "app.log" }),
  ],
});

// Export the logger instance as the default export of this module
// So that it can be imported and used in other parts of the application
export default logger;
