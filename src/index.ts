import * as express from 'express';
import * as compression from 'compression';
import * as cors from 'cors';
import * as methodOverride from 'method-override';
import * as bodyParser from 'body-parser';
import routes from './items';
import errorHandler from './shared/error-handler';

const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

server.use(compression());
server.use(cors());
server.use(methodOverride());
server.use('/api', routes);
server.use(errorHandler);

server.disable('etag');
server.disable('x-powered-by');

export { server };
