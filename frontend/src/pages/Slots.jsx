import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import axios from 'axios';

const Slots = () => {
  const { backendUrl, token, currency ,user} = useContext(ShopContext);
  const [slotData, setslotData] = useState([]);

  const loadSlotData = async () => {
    try {
      if (!token) return;

      const userId = user?._id;
      
if (!token || !userId) return;


      const response = await axios.post(
        backendUrl + '/api/slot/getuserslots',
        {userId},
        { headers: { token } }
      );

      if (response.data.success) {
        

        // Use response.data.orders or response.data.slots — depending on your backend
        
      if (response.data.success) {
        let allSlotsItem = []
        response.data.slots.map((slot)=>{
          slot.items.map((item)=>{
            item['status'] = slot.status
            item['payment'] = slot.payment
            item['paymentMethod'] = slot.paymentMethod
            item['date'] = slot.date
            allSlotsItem.push(item)
          })
        })
        setslotData(allSlotsItem.reverse())
      }
      
    }
    } catch (error) {
      console.error('Error loading slots:', error);
    }
  };

  useEffect(() => {
  if (token && user?._id) {
    loadSlotData();
    

  }
}, [token, user]);
console.log("User slots:", slotData);




  return (
    
    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Title text1={'MY'} text2={'APPOINTMENTS'} />
      </div>

      <div>
        {slotData.length === 0 ? (
          <p className='text-gray-500 mt-6'>No orders found.</p>
        ) : (
          slotData.map((item, index) =>
             (
            <div
              key={index}
              className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'
            >
              <div className='flex items-start gap-6 text-sm'>
                <img
                  className='w-16 sm:w-20'
                  src={item.image?.[0] || '/placeholder.jpg'}
                  alt={item.name}
                />
                <div>
                  <p className='sm:text-base font-medium'>{item.name}</p>
                  <div className='flex items-center gap-3 mt-1 text-base text-gray-700'>
                    <p>Rs.{item.price}</p>
                    
                  </div>
                  <p className='mt-1'>
                    Date:{' '}
                    <span className='text-gray-400'>
                      {new Date(item.date).toDateString()}
                    </span>
                  </p>
                </div>
              </div>
              <div className='md:w-1/2 flex justify-between'>
                <div className='flex items-center gap-2'>
                  <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                  <p className='text-sm md:text-base'>{item.status}</p>
                </div>
                <button
                  onClick={loadSlotData}
                  className='border px-4 py-2 text-sm font-medium rounded-sm'
                >
                  Track Order
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Slots;
