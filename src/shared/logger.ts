import { createLogger, format, transports } from 'winston';

// Basic logger 
const logger = createLogger({
  level: 'info',
  format: format.combine(format.colorize(), format.simple()),
  transports: [new transports.Console()]
});

export default logger;