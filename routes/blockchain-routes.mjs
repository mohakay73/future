import express from 'express';
import {
  mineBlock,
  getBlockchain,
  synchronizeChain,
  updateChain,
} from '../controllers/blockchain-controller.mjs';

const router = express.Router();

router.route('/').get(getBlockchain);
router.route('/mine').get(mineBlock);
router.route('/concensus').get(synchronizeChain);
router.route('/block/broadcast').post(updateChain);

export default router;
