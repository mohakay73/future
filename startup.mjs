import { dirname } from 'path';
import { fileURLToPath } from 'url';

import Blockchain from './models/Blockchain.mjs';

global.__appdir = dirname(fileURLToPath(import.meta.url));

export const blockchain = new Blockchain();

export const GENESIS_DATA = {
  timestamp: 1,
  blockIndex: 0,
  previousBlockHash: '0',
  currentBlockHash: '0',
  data: [],
  nonce: 0,
  difficulty: 2,
};
