import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'

const Orders_doctor = ({ token }) => {

  const [slots, setSlots] = useState([])

  const fetchAllSlots = async () => {

    if (!token) {
      return null;
    }

    try {

      const response = await axios.post(backendUrl + '/api/slot/list', {}, { headers: { token } })
      if (response.data.success) {
        setSlots(response.data.slots.reverse())
      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      toast.error(error.message)
    }


  }

  const statusHandler = async ( event, slotId ) => {
    try {
      const response = await axios.post(backendUrl + '/api/slot/status' , {slotId, status:event.target.value}, { headers: {token}})
      if (response.data.success) {
        await fetchAllSlots()
      }
    } catch (error) {
      console.log(error)
      toast.error(response.data.message)
    }
  }

  useEffect(() => {
    fetchAllSlots();
  }, [token])

  return (
    <div>
      <h3>Order Page</h3>
      <div>
        {
          slots.map((slot, index) => (
            <div className='grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm text-gray-700' key={index}>
              <img className='w-12' src={assets.parcel_icon} alt="" />
              <div>
                <div>
                  {slot.items.map((item, index) => {
                    if (index === slot.items.length - 1) {
                      return <p className='py-0.5' key={index}> Doctor's Name : {item.name} x {item.quantity} <span> {item.size} </span> </p>
                    }
                    else {
                      return <p className='py-0.5' key={index}>Doctor's Name : {item.name} x {item.quantity} <span> {item.size} </span> ,</p>
                    }
                  })}
                </div>
                <p className='mt-3 mb-2 font-medium'>Patient's Name : {slot.address.firstName + " " + slot.address.lastName}</p>
                <div>
                  <p>Patient's Address : {slot.address.street + ","}</p>
                  <p>{slot.address.city + ", " + slot.address.state + ", " + slot.address.country + ", " + slot.address.zipcode}</p>
                </div>
                <p>{slot.address.phone}</p>
              </div>
              <div>
                
                <p>Date : {new Date(slot.date).toLocaleDateString()}</p>
              </div>
              
              <select onChange={(event)=>statusHandler(event,slot._id)} value={slot.status} className='p-2 font-semibold'>
                <option value="Approval Pending">Approval Pending</option>
                <option value="Booked Successfully">Booked Successfully</option>
                <option value="Booking Rejected">Booking Rejected</option>
                
              </select>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Orders_doctor