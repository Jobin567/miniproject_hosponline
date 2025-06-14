import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ReportItem from '../components/ReportItem';

const Reports = () => {
  const { reports, search, showSearch, user } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterReports, setFilterReports] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relavent');

  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]);
  };

  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategory(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]);
  };

  const applyFilter = () => {
    if (!Array.isArray(reports)) {
      setFilterReports([]);
      return;
    }

    let reportsCopy = reports.slice();

    console.log("User object:", user);
    console.log("Original reports count:", reports.length);

    if (user?.name) {
      reportsCopy = reportsCopy.filter(item => item.name === user.name); // 🔍 or use item.userId === user._id
      console.log("Filtered by user.name:", reportsCopy.length);
    }

    if (showSearch && search) {
      reportsCopy = reportsCopy.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      reportsCopy = reportsCopy.filter(item => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      reportsCopy = reportsCopy.filter(item => subCategory.includes(item.subCategory));
    }

    setFilterReports(reportsCopy);
  };

  const sortReport = () => {
    let fpCopy = filterReports.slice();
    switch (sortType) {
      case 'low-high':
        setFilterReports(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case 'high-low':
        setFilterReports(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch, reports, user]);

  useEffect(() => {
    sortReport();
  }, [sortType]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      

      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'REPORTS'} />
          
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            
            filterReports.map((item, index) => (
              <ReportItem
  key={index}
  name={item.name}
  id={item._id}
  price={item.price}
  image={item.image}
  description={item.description}
/>

            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Reports;
