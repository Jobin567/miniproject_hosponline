import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedDoctors from '../components/RelatedDoctors';

const Doctor_1= () => {

  const { doctorId } = useParams();
  const { doctors, currency ,navigate } = useContext(ShopContext);
  const [doctorData, setDoctorData] = useState(false);
  const [image, setImage] = useState('')
  const [size,setSize] = useState('')


  const sizeMap = {
  S: "6am to 10am",
  M: "10.00 am to 1pm",
  L: "2pm to 7pm",
  XL: "8pm to 11pm",
  XXL: "Urgent Cases"
};


  const fetchDoctorData = async () => {

    doctors.map((item) => {
      if (item._id === doctorId) {
        setDoctorData(item)
        setImage(item.image[0])
        return null;
      }
    })

  }

  useEffect(() => {
    fetchDoctorData();
  }, [doctorId,doctors])

  return doctorData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/*----------- Product Data-------------- */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/*---------- Product Images------------- */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
              {
                doctorData.image.map((item,index)=>(
                  <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
                ))
              }
          </div>
          <div className='w-full sm:w-[80%]'>
              <img className='w-full h-auto' src={image} alt="" />
          </div>
        </div>

        {/* -------- Product Info ---------- */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{doctorData.name}</h1>
          <div className=' flex items-center gap-1 mt-2'>
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_dull_icon} alt="" className="w-3 5" />
              <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{doctorData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{doctorData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
              <p>Select Time</p>
              <div className='flex gap-2'>
                {doctorData.sizes.map((item, index) => (
  <button 
    onClick={() => setSize(item)} 
    className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`} 
    key={index}
  >
    {sizeMap[item] || item}
  </button>
))}

              </div>
          </div>
          <button 
  onClick={() => {
    localStorage.setItem("selectedDoctor", JSON.stringify({
  _id: doctorData._id,
  name: doctorData.name,
  price: doctorData.price,
  image: doctorData.image,
}));

    navigate('/appointment');
  }} 
  className='bg-black text-white text-sm my-8 px-8 py-3'>
  Book Appointment
</button>

          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
              <p> Certified and Experienced Doctors</p>
              <p>Secure and Confidential Medical Records</p>
              <p>Book Appointments Instantly – Anytime, Anywhere</p>
              <p> 24/7 Online Support for Patients</p>
          </div>
        </div>
      </div>

      {/* ---------- Description & Review Section ------------- */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>Hosponline is a next-generation digital healthcare platform dedicated to bridging the gap between patients and medical professionals. We bring quality care closer to you by offering a seamless and convenient way to book doctor appointments, consult specialists, and manage health records—all from the comfort of your home.</p>
          <p>With a strong network of certified doctors and healthcare providers, Hosponline ensures timely, accessible, and personalized care for every individual. Whether you're seeking routine checkups, specialized treatments, or urgent consultations, Hosponline is your one-stop solution for trusted, reliable healthcare services.</p>
        </div>
      </div>

      {/* --------- display related products ---------- */}

      <RelatedDoctors category={doctorData.category} subCategory={doctorData.subCategory} />

    </div>
  ) : <div className=' opacity-0'></div>
}

export default Doctor_1
