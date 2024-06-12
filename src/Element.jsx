import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { X } from '@phosphor-icons/react';

const Element = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isSwiperVisible, setIsSwiperVisible] = useState(false);
  const [swiperIndex, setSwiperIndex] = useState(0);

  const toggleShow = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
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
        <div className="mt-14" style={{ maxWidth: '450px' }}>
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
        <h1 className="text-2xl font-serif font-bold pt-4">Gallery</h1>
        <br />
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
        {isSwiperVisible ? (
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
                onClick={() => setIsSwiperVisible(isSwiperVisible ? false : true)}
                className="absolute cursor-pointer z-[9999]  top-2 right-2 px-4 py-2 bg-[#168DC8] text-white rounded-md"
              >
                <X size={32} />
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default Element;
