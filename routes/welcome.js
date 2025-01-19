// import express, { Router } from 'express'
// import path from 'path'

// const router = express.Router()

// router.get('/', (req,res) => {
//     res.sendFile(path.join(__dirname,'views','shop.html'))
// })

// export default router


import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();

// Recreate __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..','views', 'shop.html'));
});

export default router;
