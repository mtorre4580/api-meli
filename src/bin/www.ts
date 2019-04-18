if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = process.env.NODE_ENV || 'local';
}
// Track event in newrelic mtorre4580@outlook.com
import 'newrelic';
import * as http from 'http';
import { server } from '../index';
import logger from '../shared/logger';

const port = normalizePort(process.env.PORT || '5000');
server.set('port', port);

const httpServer = http.createServer(server);

httpServer.listen(port);
httpServer.on('error', onError);
httpServer.on('listening', onListening);

function normalizePort(val: string): boolean | number {
    const normalizedPort = parseInt(val, 10);
    if (normalizedPort > 0) {
        return normalizedPort;
    }
    return false;
}

function onError(error: any) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
    switch (error.code) {
        case 'EACCES':
            logger.error(bind + ' requires elevated privileges');
            process.exit(1);
        break;
            case 'EADDRINUSE':
            logger.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
        throw error;
    }
}

function onListening() {
    const addr = httpServer.address();
    const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    logger.info(`Listening on ${bind} - Environment: ${process.env.NODE_ENV}`);
}

process.on('SIGINT', () => process.exit());
