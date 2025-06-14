import mongoose from 'mongoose'

const slotSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    items: { type: Array, required: true },
    
    address: { type: Object, required: true },
    status: { type: String, required: true, default:'Approval Pending' },
    
    
    date: {type: Number, required:true}
})

const slotModel = mongoose.models.slot || mongoose.model('slot',slotSchema)
export default slotModel;