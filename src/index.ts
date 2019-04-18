import * as express from 'express';
import * as compression from 'compression';
import * as cors from 'cors';
import * as methodOverride from 'method-override';
import * as bodyParser from 'body-parser';
import * as expressHealthCheck from 'express-healthcheck';
import routes from './items';
import errorHandler from './shared/error-handler';
import cacheDNS from './shared/cache-dns';

const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

cacheDNS();

server.use(compression());
server.use(cors());
server.use(methodOverride());
server.use('/api/healthcheck', expressHealthCheck());
server.use('/api', routes);
server.use(errorHandler);

server.disable('etag');
server.disable('x-powered-by');

export { server };
