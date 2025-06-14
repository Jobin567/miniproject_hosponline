import express from 'express'
import { listReports, addReport, removeReport, singleReport } from '../controllers/reportController.js'
import upload from '../middleware/multer.js';
import adminAuth from '../middleware/adminAuth.js';

const reportRouter = express.Router();

reportRouter.post('/add',adminAuth,upload.fields([{name:'image1',maxCount:1},{name:'image2',maxCount:1},{name:'image3',maxCount:1},{name:'image4',maxCount:1}]),addReport);
reportRouter.post('/remove',adminAuth,removeReport);
reportRouter.post('/single',singleReport);
reportRouter.get('/list',listReports)

export default reportRouter