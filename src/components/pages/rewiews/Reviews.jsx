import React, { useState, useRef, useEffect } from 'react';
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


const ReviewSlide = ({ testimonial }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [textHeight, setTextHeight] = useState('110px');
  const textRef = useRef(null);
  const [showButton, setShowButton] = useState(false); // Состояние для кнопки
  const swiperSlide = useSwiperSlide();
  useEffect(() => {
    setIsExpanded(false)
  }, [swiperSlide]);

  useEffect(() => {
    if (textRef.current.scrollHeight > 110) {
      setShowButton(true); // Показываем кнопку, если текст больше 110px
    } else {
      setShowButton(false); // Скрываем кнопку, если текст меньше или равен 110px
    }
  }, [testimonial.text]); // Проверяем длину текста при изменении отзыва

  
  console.log(swiperSlide);
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
    <div className="p-[30px]transition-all">
      <div className="flex items-center mb-[30px]">
        <img className="w-[40px] h-[40px] object-cover mr-[20px]" src={placeholderReviewsIcon} alt="Pla" />
        <div className="font-['Noto_Serif'] text-[20px]">{testimonial.author}</div>
        <div className="relative ml-auto">
          <div className="flex gap-[10px]">
            {/* Display gray stars */}
            {[...Array(5)].map((_, index) => (
              <img key={index} src={starGray} alt="Star" />
            ))}
          </div>
          <div className="absolute top-0 left-0 flex gap-[10px]">
            {/* Display gold stars based on rating */}
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
          <button className="flex gap-[20px] items-center text-[#CBCAC5]  hover:text-[#FF9F47] transition-all" onClick={toggleHeight}>
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
    </div>
  );
};


const Rewiews = () => {
  const testimonials = [
    { id: 1, author: 'allrus', rating: 2, text: 'С Яной мы обсуждали многие проблемы и она мне нравилась тем, что Яна абсолютно ко всему, чтобы я не говорил относилась безоценочно. При этом, мне всегда было интересно услышать её точку зрения. Нередко мнение моей собеседницы приводило к тому, что я смотрел на ситуацию с другой стороны, о которой даже и не мог бы подумать сам. Её поддержка, умение слушать, выдержать, её способность хорошо валидировать мои переживания — являлось для меня отличной опорой. Можно сказать, Яна для меня была и психологом, а самое главное — другом. А её эрудированность по теме психологии всегда меня поражали. Я ей искренне и безмерно буду всегда благодарен за уделённое мне время, за помощь, за направление, за поддержку. У этого человека очень много энергии, эмпатии, желания развиваться и помогать людям. Горячо рекомендую!', date: new Date('2024-09-15') },
    { id: 2, author: 'allrus', rating: 5, text: 'С Яной мы обсуждали многие проблемы и она мне нравилась тем, что Яна абсолютно ко всему, чтобы я не говорил относилась безоценочно. При этом, мне всегда было интересно услышать её точку зрения. Нередко мнение моей собеседницы приводило к тому, что я смотрел на ситуацию с другой стороны, о которой даже и не мог бы подумать сам. Её поддержка, умение слушать, выдержать, её способность хорошо валидировать мои переживания — являлось для меня отличной опорой. Можно сказать, Яна для меня была и психологом, а самое главное — другом. А её эрудированность по теме психологии всегда меня поражали. Я ей искренне и безмерно буду всегда благодарен за уделённое мне время, за помощь, за направление, за поддержку. У этого человека очень много энергии, эмпатии, желания развиваться и помогать людям. Горячо рекомендую!', date: new Date('2024-09-15') },
    { id: 3, author: 'allrus', rating: 5, text: 'С Яной мы обсуждали многие проблемы и она мне нравилась тем, что Яна абсолютно ко всему, чтобы я не говорил относилась безоценочно. При этом, мне всегда было интересно услышать её точку зрения. Нередко мнение моей собеседницы приводило к тому, что я смотрел на ситуацию с другой стороны, о которой даже и не мог бы подумать сам. Её поддержка, умение слушать, выдержать, её способность хорошо валидировать мои переживания — являлось для меня отличной опорой. Можно сказать, Яна для меня была и психологом, а самое главное — другом. А её эрудированность по теме психологии всегда меня поражали. Я ей искренне и безмерно буду всегда благодарен за уделённое мне время, за помощь, за направление, за поддержку. У этого человека очень много энергии, эмпатии, желания развиваться и помогать людям. Горячо рекомендую!', date: new Date('2024-09-15') },
    { id: 4, author: 'allrus', rating: 5, text: 'С Яной мы обсуждали многие проблемы и она мне нравилась те', date: new Date('2024-05-15') },
    { id: 5, author: 'allrus', rating: 2, text: 'С Яной мы обсуждали многие проблемы и она мне нравилась тем, что Яна абсолютно ко всему, чтобы я не говорил относилась безоценочно. При этом, мне всегда было интересно услышать её точку зрения. Нередко мнение моей собеседницы приводило к тому, что я смотрел на ситуацию с другой стороны, о которой даже и не мог бы подумать сам. Её поддержка, умение слушать, выдержать, её способность хорошо валидировать мои переживания — являлось для меня отличной опорой. Можно сказать, Яна для меня была и психологом, а самое главное — другом. А её эрудированность по теме психологии всегда меня поражали. Я ей искренне и безмерно буду всегда благодарен за уделённое мне время, за помощь, за направление, за поддержку. У этого человека очень много энергии, эмпатии, желания развиваться и помогать людям. Горячо рекомендую!', date: new Date('2024-09-15') },
    { id: 6, author: 'allrus', rating: 5, text: 'С Яной мы обсуждали многие проблемы и она мне нравилась тем, что Яна абсолютно ко всему, чтобы я не говорил относилась безоценочно. При этом, мне всегда было интересно услышать её точку зрения. Нередко мнение моей собеседницы приводило к тому, что я смотрел на ситуацию с другой стороны, о которой даже и не мог бы подумать сам. Её поддержка, умение слушать, выдержать, её способность хорошо валидировать мои переживания — являлось для меня отличной опорой. Можно сказать, Яна для меня была и психологом, а самое главное — другом. А её эрудированность по теме психологии всегда меня поражали. Я ей искренне и безмерно буду всегда благодарен за уделённое мне время, за помощь, за направление, за поддержку. У этого человека очень много энергии, эмпатии, желания развиваться и помогать людям. Горячо рекомендую!', date: new Date('2024-02-15') },
    { id: 7, author: 'allrus', rating: 5, text: 'С Яной мы обсуждали многие проблемы и она мне нравилась тем, что Яна абсолютно ко всему, чтобы я не говорил относилась безоценочно. При этом, мне всегда было интересно услышать её точку зрения. Нередко мнение моей собеседницы приводило к тому, что я смотрел на ситуацию с другой стороны, о которой даже и не мог бы подумать сам. Её поддержка, умение слушать, выдержать, её способность хорошо валидировать мои переживания — являлось для меня отличной опорой. Можно сказать, Яна для меня была и психологом, а самое главное — другом. А её эрудированность по теме психологии всегда меня поражали. Я ей искренне и безмерно буду всегда благодарен за уделённое мне время, за помощь, за направление, за поддержку. У этого человека очень много энергии, эмпатии, желания развиваться и помогать людям. Горячо рекомендую!', date: new Date('2024-09-15') },
    { id: 8, author: 'allrus', rating: 2, text: 'С Яной мы обсуждали многие проблемы и она мне нравилась тем, что Яна абсолютно ко всему, чтобы я не говорил относилась безоценочно. При этом, мне всегда было интересно услышать её точку зрения. Нередко мнение моей собеседницы приводило к тому, что я смотрел на ситуацию с другой стороны, о которой даже и не мог бы подумать сам. Её поддержка, умение слушать, выдержать, её способность хорошо валидировать мои переживания — являлось для меня отличной опорой. Можно сказать, Яна для меня была и психологом, а самое главное — другом. А её эрудированность по теме психологии всегда меня поражали. Я ей искренне и безмерно буду всегда благодарен за уделённое мне время, за помощь, за направление, за поддержку. У этого человека очень много энергии, эмпатии, желания развиваться и помогать людям. Горячо рекомендую!', date: new Date('2024-09-15') },
  ];
  const [selectedOption, setSelectedOption] = useState(options[0]);

  function submitHandler({ e, close }) {
    e.preventDefault()
    close()
  }
  const [filteredTestimonials, setFilteredTestimonials] = useState(testimonials);
  useEffect(() => {
    const filterTestimonials = () => {
      let filtered = [...testimonials];
      const oneMonthInMs = 30 * 24 * 60 * 60 * 1000; // Один месяц в миллисекундах
      const currentDate = new Date();

      if (selectedOption.value === 'Положительные') {
        filtered = filtered.filter(testimonial => testimonial.rating >= 4);
      } else if (selectedOption.value === 'Негативные') {
        filtered = filtered.filter(testimonial => testimonial.rating <= 2);
      } else if (selectedOption.value === 'Новые') {
        // Фильтрация "новых" — если дата отзыва меньше месяца назад
        filtered = filtered.filter(testimonial => (currentDate - new Date(testimonial.date)) <= oneMonthInMs);
      } else if (selectedOption.value === 'Старые') {
        // Фильтрация "старых" — если дата отзыва больше месяца назад
        filtered = filtered.filter(testimonial => (currentDate - new Date(testimonial.date)) > oneMonthInMs);
      }

      setFilteredTestimonials(filtered);
    };

    filterTestimonials();
  }, [selectedOption]); // Добавил зависимости для правильной работы useEffect

  return (
    <div className="font-['Manrope']">
      <br /><br /><br /><br /><br /><br /><br /><br />
      <div className="max-lg:px-[15px] container !mb-[65px] grid grid-cols-[150px_1fr_150px] max-md:grid-cols-[1fr_150px] max-md:gap-[5px]">
        <div className="w-[150px] max-md:hidden"></div>
        <h2 className="max-md:text-[25px] font-['Noto_Serif'] mx-auto font-medium flex items-center text-[30px] w-[100%] max-w-[460px] before:content-[''] before:w-[100%] before:block before:h-[1px] before:bg-[currentColor] before:mr-[30px] max-md:before:mr-[15px] after:content-[''] after:w-[100%] after:block after:h-[1px] after:bg-[currentColor] after:ml-[30px] max-md:after:ml-[15px]">
          Отзывы
        </h2>
        <Select
          isSearchable={false}
          classNamePrefix="react-select"
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
          className="z-[100]"
        />
      </div>
      <Swiper className="" spaceBetween={50} modules={[Navigation]}  
        breakpoints={{
          1024: {
            spaceBetween: 250,
          },
        }}
      navigation={{
        prevEl: ".button-prev",
        nextEl: ".button-next",
        disabledClass: "button-disabled"
      }}

        onSlideChange={() => { }}
        initialSlide={1}
        centeredSlides={true} slidesPerView={"auto"} >
        <button className="max-md:w-[30px] max-md:h-[30px] max-md:left-[5px] max-2xl:left-[200px] z-[100] absolute top-[50%] translate-y-[-50%] left-[490px] w-[40px] h-[40px] flex justify-center items-center button-prev" type="button"><img src={arrowLeft} alt="" /></button>
        <button className="max-md:w-[30px] max-md:h-[30px] max-md:right-[5px] max-2xl:right-[200px] z-[100] absolute top-[50%] translate-y-[-50%] right-[490px] w-[40px] h-[40px] flex justify-center items-center button-next" type="button"><img src={arrowRight} alt="" /></button>

        {filteredTestimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id} className="w-[640px] max-md:w-[calc(100vw-75px)] bg-white">
            <ReviewSlide testimonial={testimonial} />
          </SwiperSlide>
        ))}

      </Swiper>
      <Popup
        trigger={<button className="max-md:ml-[30px] max-md:mt-[30px] max-md:mb-[100px] bg-white relative z-[110] mb-[220px] mt-[-35px] ml-[435px]  text-center font-semibold border border-solid border-[#FF9F47] w-[160px] h-[160px] rounded-[50%] font-[Manrope]  leading-[135%] flex justify-center items-center  hover:text-white justify-self-center self-center hover:bg-[#F47500] hover:border-[#F47500] transition-all circle" >
          Добавить <br /> отзыв
        </button>}
        modal
        nested
        lockScroll
      >
        {close => (
          <div className="modal">
            <button className="close mb-[25px]" onClick={close}>
              &times;
            </button>
            <div className="header text-[30px] font-medium mb-[30px]  leading-[135%]"> Хотите оставить отзыв ? </div>
            <div className="content">
              <form className="grid gap-[25px]" onSubmit={(e) => submitHandler({ e, close })}>
                <label className="flex flex-col gap-[15px]">
                  <span>Текст вашего отзыва</span>
                  <textarea required rows={5} className="min-h-[40px] !p-[5px] border border-solid border-[#CBCAC5]" />
                </label>
                <div className="flex flex-col gap-[25px]">
                  <label className="flex flex-col gap-[15px]" >
                    <span>Ваша оценка</span>
                    <select required className="min-h-[40px] !p-[5px] border border-solid border-[#CBCAC5]" name="" id="">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </label>
                  <button className="bg-[#F47500] text-white font-medium min-h-[40px]">Оставить отзыв</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </Popup>

    </div>
  );
};

export default Rewiews;
