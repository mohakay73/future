import Blockchain from './gruppuppgift/models/Blockchain.mjs';

export const blockchain = new Blockchain();

export const GENESIS_DATA = {
    timestamp:1,
    blockIndex: 0,
    previousBlockHash: '0',
    currentBlockHash: '0',
    data: [],
    nonce: 0,
    difficulty: 2,
  };