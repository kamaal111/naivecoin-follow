import App from './controllers/app';
import BlocksController from './controllers/blocksController';
import PeersController from './controllers/peersController';

import config from './config';

const blocksController = new BlocksController();
const peersController = new PeersController();
const controllers = [blocksController, peersController];

const app = new App({controllers});
app.listen({serverPort: config.SERVER_PORT, socketsPort: config.SOCKETS_PORT});
