import express from 'express'
import { listDoctors, addDoctor, removeDoctor, singleDoctor } from '../controllers/doctorController.js'
import upload from '../middleware/multer.js';
import adminAuth from '../middleware/adminAuth.js';

const doctorRouter = express.Router();

doctorRouter.post('/add',adminAuth,upload.fields([{name:'image1',maxCount:1},{name:'image2',maxCount:1},{name:'image3',maxCount:1},{name:'image4',maxCount:1}]),addDoctor);
doctorRouter.post('/remove',adminAuth,removeDoctor);
doctorRouter.post('/single',singleDoctor);
doctorRouter.get('/list',listDoctors)

export default doctorRouter