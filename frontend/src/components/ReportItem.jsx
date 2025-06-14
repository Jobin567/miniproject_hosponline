import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ReportItem = ({ id, image, name, price, description }) => {
  const { currency } = useContext(ShopContext);

  return (
    <div className='text-gray-700 cursor-pointer'>
      {/* Clicking the image will download it */}
      <a href={image[0]} download>
        <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="report" />
      </a>

      {/* The rest links to details page */}
      <Link to={`/report/${id}`} onClick={() => scrollTo(0, 0)}>
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className='text-sm text-gray-600 mt-1 overflow-hidden text-ellipsis whitespace-nowrap'>{description}</p>
        <p className='text-sm font-medium'>{currency}{price}</p>
        
      </Link>
    </div>
  );
};

export default ReportItem;
