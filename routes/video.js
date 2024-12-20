import express from 'express';
import { createVideo } from '../controllers/video.js';

const router = express.Router();

// http://localhost:4000/api/videos
router.post('/', createVideo);

export default router;