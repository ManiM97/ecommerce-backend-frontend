const express = require('express')
import { createorder } from '../controllers/ordercontroller'
const router = express.Router()

router.route('/order').post(createorder)