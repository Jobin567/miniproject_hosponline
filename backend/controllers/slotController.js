import slotModel from "../models/slotModels.js";
import userModel from "../models/userModel.js";
import doctorModel from "../models/doctorModel.js";

// Placing orders using COD Method
const placeSlot= async (req,res) => {
    
    try {
        
        const { userId, items,  address} = req.body;

        const slotData = {
            userId,
            items,
            address,
            
            date: Date.now()
        }

        const newSlot = new slotModel(slotData)
        await newSlot.save()

        
       
        res.json({success:true,message:"Booked Successfully"})


    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }

}

// Placing orders using Stripe Method


// Verify Stripe 


// Placing orders using Razorpay Method





// All Orders data for Admin Panel
const allSlots = async (req,res) => {

    try {
        
        const slots = await slotModel.find({})
        res.json({success:true,slots})

    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }

}

// slotRoute.js or wherever your routes are defined


// User Order Data For Forntend
// User Slot Data for Frontend
const userSlots = async (req, res) => {
  try {
    const { userId } = req.body;
    const slots = await slotModel.find({ userId });

    const enrichedSlots = await Promise.all(
      slots.map(async (slot) => {
        const enrichedItems = await Promise.all(
          slot.items.map(async (item) => {
            const doctor = await doctorModel.findById(item.doctorId);
            return {
              ...item,
              image: doctor?.image || [],
              description: doctor?.description || "",
              category: doctor?.category || "",
            };
          })
        );

        return {
          ...slot._doc,
          items: enrichedItems,
        };
      })
    );

    res.json({ success: true, slots: enrichedSlots });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};


const getUserSlots = async (req, res) => {
  try {
    const { userId } = req.body;

    const slots = await slotModel.find({ userId });

    const enrichedSlots = await Promise.all(
      slots.map(async (slot) => {
        
        const enrichedItems = await Promise.all(
          slot.items.map(async (item) => {
            const doctor = await doctorModel.findById(item.doctorId);
            console.log("Doctor:", doctor);

            return {
              ...item,
              name: doctor?.name,
              price: doctor?.price,
              image: doctor?.image || [],
              category: doctor?.category || '',
              description: doctor?.description || '',
            };
          })
        );

        return {
          ...slot._doc,
          items: enrichedItems,
        };
      })
    );

    res.json({ success: true, slots: enrichedSlots });

  } catch (err) {
    console.log("Error loading slots:", err);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

// update order status from Admin Panel
const updateStatus = async (req,res) => {
    try {
        
        const { slotId, status } = req.body

        await slotModel.findByIdAndUpdate(slotId, { status })
        res.json({success:true,message:'Status Updated'})

    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

export {placeSlot,  allSlots, userSlots, updateStatus,getUserSlots}