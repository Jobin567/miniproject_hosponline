import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>Hosponline was founded with a vision to transform healthcare access by making quality medical services available at your fingertips. Our journey began with a mission to bridge the gap between patients and healthcare professionals through seamless digital solutions.

We are proud to offer a modern platform where individuals can easily find experienced doctors, book appointments, access medical reports, and receive personalized care—all from the comfort of their homes.</p>
              <p>At Hosponline, we are committed to bringing efficiency, accessibility, and compassion into healthcare. Whether it's scheduling consultations, retrieving lab reports, or exploring specialist profiles, our platform ensures a hassle-free and transparent experience for patients and caregivers.</p>
              <b className='text-gray-800'>Our Mission</b>
              <p>Our mission at Hosponline is to empower patients with choice, convenience, and confidence in their healthcare journey. We strive to exceed expectations by combining innovation with care—ensuring that every step, from booking to treatment, is smooth, secure, and supportive.

</p>
          </div>
      </div>

      <div className=' text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>We partner only with verified hospitals, certified doctors, and trusted labs to ensure safe, accurate, and top-tier medical services.
            <p className=' text-gray-600'></p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p className=' text-gray-600'>Book appointments, view reports, and connect with specialists—all from your phone or computer. Healthcare made easy, wherever you are.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p className=' text-gray-600'>Our dedicated support team is always ready to help—from booking queries to post-consultation follow-ups. Your well-being is our mission.

</p>
          </div>
      </div>

      <NewsletterBox/>
      
    </div>
  )
}

export default About
