import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { FacebookLogo, GooglePlayLogo, TwitterLogo, X, GoogleLogo, Check } from '@phosphor-icons/react';
import Swal from 'sweetalert2';
import video from "../src/video.mp4";

const Element = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isSwiperVisible, setIsSwiperVisible] = useState(false);
  const [swiperIndex, setSwiperIndex] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    message: '',
    selectOption: '',
    checkbox: false,
  });

  const toggleShow = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500
    });
  };

  const buttonStyle = (index) => ({
    backgroundColor: activeIndex === index ? '#0fb78d' : 'transparent',
    color: activeIndex === index ? '#ffffff' : '#000000',
    padding: '10px',
    cursor: 'pointer',
    width: '100%',
    textAlign: 'left',
    marginBottom: '5px',
  });

  const sections = [
    {
      title: 'How to download and register?',
      content:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    },
    {
      title: 'How to create your PayPal account?',
      content:
        'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    },
    {
      title: 'How to link your PayPal and bank account?',
      content:
        'When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rhetoric question ran over her cheek, then she continued her way.',
    },
  ];

  const galleryImages = [
    "https://preview.colorlib.com/theme/product/images/gal_1.jpg",
    "https://preview.colorlib.com/theme/product/images/gal_2.jpg",
    "https://preview.colorlib.com/theme/product/images/gal_3.jpg",
    "https://preview.colorlib.com/theme/product/images/gal_4.jpg",
    "https://preview.colorlib.com/theme/product/images/gal_5.jpg",
    "https://preview.colorlib.com/theme/product/images/gal_6.jpg",
  ];

  const handleImageClick = (index) => {
    setSwiperIndex(index);
    setIsSwiperVisible(true);
  };

  return (
    <section className="p-8">
      <div className="container mx-auto">
        <h1 className="mt-36 text-5xl font-serif text-[#333333]">Element</h1>
        <br />
        <ul className="flex items-center text-2xl">
          <li className="text-[#333333] hover:text-[#66d0b6] cursor-pointer">Home</li> /
          <li className="text-[#333333] hover:text-[#66d0b6] cursor-pointer">Cart</li>
        </ul>
        <div className='flex flex-col lg:flex-row gap-8 items-start'>
          <div className="max-w-sm lg:mr-12">
            <h1 className="text-2xl font-serif">Accordion</h1>
            <br />
            {sections.map((section, index) => (
              <div key={index} className="mb-4">
                <button
                  className="font-serif font-semibold uppercase transition-all duration-300 ease-in-out"
                  onClick={() => toggleShow(index)}
                  style={buttonStyle(index)}
                >
                  {activeIndex === index ? `- ${section.title}` : `+ ${section.title}`}
                </button>
                {activeIndex === index && (
                  <p className="text-[#5F5F5F] p-4 mt-2 delay-1000 transition-all">
                    {section.content.split('\n').map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </p>
                )}
              </div>
            ))}
          </div>
          <div className="w-full lg:w-[560px] ">
            <h1 className='font-serif text-2xl'>Form</h1>
            <br />
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                className="border p-2 mb-2 w-full"
                placeholder='First name'
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
              <input
                className="border p-2 mb-2 w-full"
                placeholder='Last name'
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
              <br />
              <input
                className="border p-2 mb-2 w-full"
                type="email"
                placeholder='Email address'
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <br />
              <input
                className="border p-2 mb-2 w-full"
                type="password"
                placeholder='Password'
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
              <br />
              <textarea
                className="border p-2 mb-2 w-full"
                name="message"
                cols="30"
                rows="5"
                placeholder='Message'
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
              <br />
              <select
                className="border p-2 mb-2 w-full"
                name="selectOption"
                value={formData.selectOption}
                onChange={handleInputChange}
              >
                <option value="" disabled>Select an option</option>
                <option value="Colorlib">Colorlib</option>
                <option value="Offers high quality free template">Offers high quality free template</option>
              </select>
              <br />
              <div className="flex items-center mt-4 cursor-pointer">
                <input
                  type="checkbox"
                  id="checkbox"
                  name="checkbox"
                  checked={formData.checkbox}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                <label htmlFor="checkbox">Custom checkbox</label>
              </div>
              <button type="submit" className='uppercase bg-[#0fb78d] text-white py-2 px-4 mt-4 w-full lg:w-auto'>Submit</button>
            </form>
            <h1 className='text-2xl font-serif mt-4 lg:mt-0'>Social Icons</h1>
            <div className='flex gap-3 mt-3'>
              <FacebookLogo size={32} className='hover:bg-[#A3D8FF] w-[45px] rounded-full cursor-pointer' />
              <TwitterLogo size={32} className='hover:bg-[#A3D8FF] w-[45px] rounded-full cursor-pointer' />
              <GoogleLogo size={32} className='hover:bg-[#A3D8FF] w-[45px] rounded-full cursor-pointer' />
              <GooglePlayLogo size={32} className='hover:bg-[#A3D8FF] w-[45px] rounded-full cursor-pointer' />
            </div>
          </div>
        </div>
        <h1 className="text-2xl font-serif font-bold mt-14">Gallery</h1>
        <br />
        <div className='flex flex-wrap gap-10 items-center'>
          <div className="mt-5 w-full max-w-[700px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {galleryImages.map((src, index) => (
              <img
                key={index}
                src={src}
                alt=""
                className="w-full rounded-md hover:contrast-50 cursor-pointer"
                onClick={() => handleImageClick(index)}
              />
            ))}
          </div>
          <div className='w-full lg:w-[600px] mx-auto mb-5 mt-5 lg:mt-0'>
            <h1 className='font-serif text-2xl text-center mt-2'>Slider</h1>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
              <SwiperSlide className='text-center'>
                <img src="https://preview.colorlib.com/theme/product/images/person_2.jpg" alt="" className='w-[80px] mt-2 rounded-full mx-auto' />
                <br />
                <h1>Adam Aderson</h1>
                <br />
                <p>“There live the blind texts. Separated they live in Bookmarksgrove<br />right at the coast of the Semantics, a large language ocean.”</p>
              </SwiperSlide>
              <SwiperSlide className='text-center'>
                <img src="https://preview.colorlib.com/theme/product/images/person_3.jpg" alt="" className='w-[80px] mt-2 rounded-full mx-auto' />
                <br />
                <h1>Lukas Devlin</h1>
                <br />
                <p>“There live the blind texts. Separated they live in Bookmarksgrove<br /> right at the coast of the Semantics, a large language ocean.”</p>
              </SwiperSlide>
              <SwiperSlide className='text-center'>
                <img src="https://preview.colorlib.com/theme/product/images/person_4.jpg" alt="" className='w-[80px] mt-2 rounded-full mx-auto' />
                <br />
                <h1>Kayla Bryant</h1>
                <br />
                <p>“There live the blind texts. Separated they live in Bookmarksgrove<br /> right at the coast of the Semantics, a large language ocean.”</p>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        {isSwiperVisible && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
            <div className="relative max-w-[90%] max-h-[90%]">
              <Swiper
                initialSlide={swiperIndex}
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
              >
                {galleryImages.map((src, index) => (
                  <SwiperSlide key={index}>
                    <img src={src} alt="" className="w-[700px] h-[400px] mx-auto object-contain" />
                  </SwiperSlide>
                ))}
              </Swiper>
              <button
                onClick={() => setIsSwiperVisible(false)}
                className="absolute cursor-pointer z-[9999] top-2 right-2 px-4 py-2 bg-[#168DC8] text-white rounded-md"
              >
                <X size={32} />
              </button>
            </div>
          </div>
        )}
        <div className='flex flex-col lg:flex-row items-start lg:items-center gap-8 mt-10'>
          <div className='lg:w-[50%]'>
            <h1 className='font-serif text-2xl mt-2'>Video</h1>
            <div className="video-wrapper mt-4">
              <video src={video} controls className="w-full max-w-[700px]  rounded-md"></video>
            </div>
          </div>
          <div className='lg:w-[50%]'>
            <h1 className='text-2xl font-serif'>Check Unordered List</h1><br />
            <p className='flex items-center gap-3'><Check size={32} />Far far away, behind the word</p>
            <p className='flex items-center gap-3'><Check size={32} />Far from the countries Vokalia</p>
            <p className='flex items-center gap-3'><Check size={32} /> Separated they live in Bookmarksgrove</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Element;
