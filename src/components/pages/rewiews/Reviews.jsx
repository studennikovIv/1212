import React, { useState, useRef, useEffect, useMemo } from 'react';
import Select from 'react-select';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import placeholderReviewsIcon from "../../img_icon/placeholderReviews.png";
import starGray from "../../img_icon/startGray.svg";
import starGold from "../../img_icon/starGold.svg";
import arrowLeft from "../../img_icon/arrow-left.svg";
import arrowRight from "../../img_icon/arrow-right.svg";
import { useSwiperSlide } from 'swiper/react';
import "swiper/css/navigation";
import { Navigation } from "swiper";

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const options = [
  { value: 'Положительные', label: 'Положительные' },
  { value: 'Негативные', label: 'Негативные' },
  { value: 'Новые', label: 'Новые' },
  { value: 'Старые', label: 'Старые' },
];

const ReviewSlide = ({ testimonial, onOpenPopup }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [textHeight, setTextHeight] = useState('110px');
  const textRef = useRef(null);
  const [showButton, setShowButton] = useState(false);
  const swiperSlide = useSwiperSlide();

  useEffect(() => {
    setIsExpanded(false);
  }, [swiperSlide]);

  useEffect(() => {
    if (textRef.current.scrollHeight > 110) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, [testimonial.text]);

  useEffect(() => {
    if (isExpanded) {
      setTextHeight(`${textRef.current.scrollHeight}px`);
    } else {
      setTextHeight('110px');
    }
  }, [isExpanded]);

  const toggleHeight = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="p-[30px] transition-all">
      <div className="flex items-center mb-[30px]">
        <img className="w-[40px] h-[40px] object-cover mr-[20px]" src={placeholderReviewsIcon} alt="Pla" />
        <div className="font-['Noto_Serif'] text-[20px]">{testimonial.author}</div>
        <div className="relative ml-auto">
          <div className="flex gap-[10px]">
            {[...Array(5)].map((_, index) => (
              <img key={index} src={starGray} alt="Star" />
            ))}
          </div>
          <div className="absolute top-0 left-0 flex gap-[10px]">
            {[...Array(testimonial.rating)].map((_, index) => (
              <img key={index} src={starGold} alt="Star" />
            ))}
          </div>
        </div>
      </div>

      <div
        ref={textRef}
        className="leading-[135%] overflow-hidden transition-all duration-500"
        style={{ height: textHeight }}
      >
        {testimonial.text}
      </div>

      <div className="flex justify-between mt-[30px]">
        {showButton && (
          <button className="flex gap-[20px] items-center text-[#CBCAC5] hover:text-[#FF9F47] transition-all" onClick={toggleHeight}>
            <span>{isExpanded ? 'Свернуть' : 'Читать больше'}</span>
            <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12.3356 2.01194L14.4904 4.16673H1.50228C1.47351 4.16673 1.44509 4.16823 1.41708 4.17106C0.996862 4.21373 0.668945 4.56864 0.668945 5.00006C0.668945 5.46031 1.04204 5.83339 1.50228 5.83339H14.4904L12.3356 7.98823C12.0102 8.31364 12.0102 8.84131 12.3356 9.16673C12.6611 9.49223 13.1887 9.49223 13.5142 9.16673L17.0915 5.58931C17.417 5.26389 17.417 4.73623 17.0915 4.41081L13.5142 0.833437C13.1887 0.507995 12.6611 0.507995 12.3356 0.833437C12.2949 0.874112 12.2593 0.917953 12.2288 0.964162C12.0153 1.28762 12.0508 1.72719 12.3356 2.01194Z"
                fill="currentColor"
              />
            </svg>
          </button>
        )}
        <div className="ml-auto text-[#CBCAC5]">{new Date(testimonial.date).toLocaleDateString('ru-RU', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        })}</div>
      </div>

      {/* Button to open Popup */}
      <button onClick={onOpenPopup} className="mt-4 text-[#FF9F47]">Open More Info</button>
    </div>
  );
};

const Rewiews = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const testimonials = useMemo(() => [
    { id: 1, author: 'allrus', rating: 2, text: 'С Яной мы обсуждали многие проблемы...', date: new Date('2024-09-15') },
    { id: 2, author: 'allrus', rating: 5, text: 'С Яной мы обсуждали многие проблемы...', date: new Date('2024-09-15') },
    { id: 3, author: 'allrus', rating: 5, text: 'С Яной мы обсуждали многие проблемы...', date: new Date('2024-09-15') },
    { id: 4, author: 'allrus', rating: 5, text: 'С Яной мы обсуждали многие проблемы...', date: new Date('2024-09-15') },
    { id: 5, author: 'allrus', rating: 5, text: 'С Яной мы обсуждали многие проблемы...', date: new Date('2024-09-15') },
  ], []);

  return (
    <div className="py-[50px]">
      <Select options={options} defaultValue={options[0]} className="mb-[30px]" />
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.next',
          prevEl: '.prev',
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <ReviewSlide testimonial={testimonial} onOpenPopup={() => setPopupOpen(true)} />
          </SwiperSlide>
        ))}
        <div className="prev flex justify-center items-center absolute top-[50%] left-[10px] -translate-y-[50%] bg-[#FFFFFF] rounded-full p-[5px] cursor-pointer">
          <img src={arrowLeft} alt="Left" />
        </div>
        <div className="next flex justify-center items-center absolute top-[50%] right-[10px] -translate-y-[50%] bg-[#FFFFFF] rounded-full p-[5px] cursor-pointer">
          <img src={arrowRight} alt="Right" />
        </div>
      </Swiper>

      {/* Popup for additional information */}
      <Popup open={isPopupOpen} onClose={() => setPopupOpen(false)}>
        <div className="p-4">
          <h2>Additional Information</h2>
          <p>Here you can provide more details about the review or any other content.</p>
          <button onClick={() => setPopupOpen(false)}>Close</button>
        </div>
      </Popup>
    </div>
  );
};

export default Rewiews;
