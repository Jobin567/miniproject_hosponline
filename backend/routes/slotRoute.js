import express from 'express'
import { allSlots, userSlots, updateStatus, placeSlot, getUserSlots} from '../controllers/slotController.js'
import adminAuth  from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'

const slotRouter = express.Router()

slotRouter.post('/place',authUser,placeSlot)

// Admin Features
slotRouter.post('/list',adminAuth,allSlots)
slotRouter.post('/status',adminAuth,updateStatus)

// Payment Features


// User Feature 
slotRouter.post('/getuserslots',authUser,getUserSlots)



export default slotRouter