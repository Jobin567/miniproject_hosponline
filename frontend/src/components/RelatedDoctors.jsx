import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import DoctorItem from './DoctorItem';

const RelatedDoctors = ({category,subCategory}) => {

    const { doctors } = useContext(ShopContext);
    const [related,setRelated] = useState([]);

    useEffect(()=>{

        if (doctors.length > 0) {
            
            let doctorsCopy = doctors.slice();
            
            doctorsCopy = doctorsCopy.filter((item) => category === item.category);
            doctorsCopy = doctorsCopy.filter((item) => subCategory === item.subCategory);

            setRelated(doctorsCopy.slice(0,5));
        }
        
    },[doctors])

  return (
    <div className='my-24'>
      <div className=' text-center text-3xl py-2'>
        <Title text1={'RELATED'} text2={"DOCTORS"} />
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {related.map((item,index)=>(
            <DoctorItem key={index} id={item._id} name={item.name} price={item.price} image={item.image}/>
        ))}
      </div>
    </div>
  )
}

export default RelatedDoctors