import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import DoctorItem from '../components/DoctorItem';

const Doctor = () => {

  const { doctors , search , showSearch } = useContext(ShopContext);
  const [showFilter,setShowFilter] = useState(false);
  const [filterProducts,setFilterProducts] = useState([]);
  const [category,setCategory] = useState([]);
  const [subCategory,setSubCategory] = useState([]);
  const [sortType,setSortType] = useState('relavent')

  const toggleCategory = (e) => {

    if (category.includes(e.target.value)) {
        setCategory(prev=> prev.filter(item => item !== e.target.value))
    }
    else{
      setCategory(prev => [...prev,e.target.value])
    }

  }

  const toggleSubCategory = (e) => {

    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev=> prev.filter(item => item !== e.target.value))
    }
    else{
      setSubCategory(prev => [...prev,e.target.value])
    }
  }

  const applyFilter = () => {

    let doctorsCopy = doctors.slice();

    if (showSearch && search) {
      doctorsCopy = doctorsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      doctorsCopy = doctorsCopy.filter(item => category.includes(item.category));
    }

    if (subCategory.length > 0 ) {
      doctorsCopy = doctorsCopy.filter(item => subCategory.includes(item.subCategory))
    }

    setFilterProducts(doctorsCopy)

  }

  const sortDoctor = () => {

    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilterDoctors(fpCopy.sort((a,b)=>(a.price - b.price)));
        break;

      case 'high-low':
        setFilterDoctors(fpCopy.sort((a,b)=>(b.price - a.price)));
        break;

      default:
        applyFilter();
        break;
    }

  }

  useEffect(()=>{
      applyFilter();
  },[category,subCategory,search,showSearch,doctors])

  useEffect(()=>{
    sortDoctor();
  },[sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      
      {/* Filter Options */}
      <div className='min-w-60'>
        <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>
        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' :'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>SPECIALIZATION</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Oncology'} onChange={toggleCategory}/> Oncology
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Cardiology'} onChange={toggleCategory}/> Cardiology
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Dermatology'} onChange={toggleCategory}/> Dermatology
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Neurology'} onChange={toggleCategory}/> Neurology
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Nephrology'} onChange={toggleCategory}/> Nephrology
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Gynecology'} onChange={toggleCategory}/> Obstetrics and Gynecology
            </p>
          </div>
        </div>
        {/* SubCategory Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' :'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>Working Days</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Monday'} onChange={toggleSubCategory}/> Monday
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Tuesday'} onChange={toggleSubCategory}/> Tuesday
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Wednesday'} onChange={toggleSubCategory}/> Wednesday
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Thursday'} onChange={toggleSubCategory}/> Thursday
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Fridayr'} onChange={toggleSubCategory}/> Friday
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Saturday'} onChange={toggleSubCategory}/> Saturday
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Sunday'} onChange={toggleSubCategory}/> Sunday
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className='flex-1'>

        

        {/* Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProducts.map((item,index)=>(
              <DoctorItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Doctor
