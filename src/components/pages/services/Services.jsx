import React, { useState, useRef } from 'react';
import iconPlus from '../../img_icon/plus.svg';
import Popup from 'reactjs-popup';
import { botService } from  '../services/../../../service/botService';
import 'reactjs-popup/dist/index.css';
const SERVICE_DATA =
{
  categories: [
    {
      name: "Для каждого",
      services: [
        { name: "Разовая сессия (Онлайн)", price: "5999 ₽", additionalInfo: "Откройте дверь к лучшей версии себя с абонементом на месяц! Все будет происходить так: <span> 4 онлайн-встречи и каждая будет длиться час </span>. Там Вы встретите поддержку, понимание Вас самих и решения для вашего внутреннего комфорта" },
        { name: "Абонемент на месяц", price: "5999 ₽", additionalInfo: "Откройте дверь к лучшей версии себя с абонементом на месяц! Все будет происходить так: <span> 4 онлайн-встречи и каждая будет длиться час </span>. Там Вы встретите поддержку, понимание Вас самих и решения для вашего внутреннего комфорта" },
        { name: "Консультация", price: "5999 ₽", additionalInfo: "Откройте дверь к лучшей версии себя с абонементом на месяц! Все будет происходить так: <span> 4 онлайн-встречи и каждая будет длиться час </span>. Там Вы встретите поддержку, понимание Вас самих и решения для вашего внутреннего комфорта" }
      ]
    },
    {
      name: "Семья",
      services: [
        { name: "Разовая сессия (Онлайн)", price: "5999 ₽", additionalInfo: "Откройте дверь к лучшей версии себя с абонементом на месяц! Все будет происходить так: <span> 4 онлайн-встречи и каждая будет длиться час </span>. Там Вы встретите поддержку, понимание Вас самих и решения для вашего внутреннего комфорта" },
        { name: "Абонемент на месяц", price: "5999 ₽", additionalInfo: "Откройте дверь к лучшей версии себя с абонементом на месяц! Все будет происходить так: <span> 4 онлайн-встречи и каждая будет длиться час </span>. Там Вы встретите поддержку, понимание Вас самих и решения для вашего внутреннего комфорта" }
      ]
    },
    {
      name: "По желанию",
      services: [
        { name: "Разбор сновидения", price: "5999 ₽", additionalInfo: "Откройте дверь к лучшей версии себя с абонементом на месяц! Все будет происходить так: <span> 4 онлайн-встречи и каждая будет длиться час </span>. Там Вы встретите поддержку, понимание Вас самих и решения для вашего внутреннего комфорта" },
        { name: "Проверка Вас на МАК", price: "5999 ₽", additionalInfo: "Откройте дверь к лучшей версии себя с абонементом на месяц! Все будет происходить так: <span> 4 онлайн-встречи и каждая будет длиться час </span>. Там Вы встретите поддержку, понимание Вас самих и решения для вашего внутреннего комфорта" }
      ]
    }
  ]
};

const Services = () => {

  const [formValues, setFormValues] = useState({ name: '', phone: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const submitHandler = async ({ e, close }) => {
    e.preventDefault();
    const { name, phone } = formValues;

    try {
      // Вызов botService для отправки сообщения
      await botService.sendMessage(
        phone, // Телефон
        'Не указано', // Улица (или добавьте поле для него)
        'Не указано', // Дом (или добавьте поле для него)
        'Запрос на консультацию', // Комментарий
        [{ name: 'Консультация', span: 1 }], // Условный товар
        0, // Итоговая сумма
        name // Имя клиента
      );

      
      close(); // Закрыть модальное окно
    } catch (error) {
      alert('Произошла ошибка при отправке. Попробуйте снова.');
    }
  };







  const [activeServiceIndex, setActiveServiceIndex] = useState(null);
  const [height, setHeight] = useState('0px');
  const contentRef = useRef(null);

  const handleServiceClick = (categoryIndex, serviceIndex) => {
    const currentIndex = `${categoryIndex}-${serviceIndex}`;
    if (activeServiceIndex === currentIndex) {
      setHeight('0px'); // Закрыть
      setActiveServiceIndex(null);
    } else {
      setActiveServiceIndex(currentIndex);
      setHeight(`${contentRef.current.scrollHeight}px`); // Открыть
    }
  };


  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="container font-['Noto_Serif']">
        <h2 className="font-medium mb-[65px] flex items-center text-[30px] w-[100%] max-w-[460px] before:content-[''] before:w-[100%] before:block before:h-[1px] before:bg-[currentColor] before:mr-[30px] after:content-[''] after:w-[100%] after:block after:h-[1px] after:bg-[currentColor] after:ml-[30px]">Услуги</h2>
        <div className="grid grid-cols-2 gap-[190px_260px] max-md:grid-cols-1 max-md:gap-[30px]">
          {SERVICE_DATA.categories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-[24px] mb-[65px] font-medium">{category.name}</h3>
              <div className="grid gap-[35px]">
                {category.services.map((service, serviceIndex) => (
                  <div onClick={() => handleServiceClick(categoryIndex, serviceIndex)} className={`cursor-pointer [&:not(:last-child)]:border-b-[1px] [&:not(:last-child)]:border-solid [&:not(:last-child)]:border-[#CBCAC5] [&.open]:!border-transparent transition-all ${activeServiceIndex === `${categoryIndex}-${serviceIndex}` && "open"} `} key={serviceIndex}>
                    <div className="flex pb-[35px]" >
                      <div className="flex-grow text-[20px]">{service.name}</div>
                      <div className={`[&.open]:rotate-45 transition-transform flex-shrink-0 flex justify-center items-center ml-[20px] w-[20px] h-[20px] ${activeServiceIndex === `${categoryIndex}-${serviceIndex}` ? "open" : ""} `}>
                        <img src={`${iconPlus}`} alt="" />
                      </div>
                    </div>
                    <div
                      ref={contentRef}
                      style={{ height: activeServiceIndex === `${categoryIndex}-${serviceIndex}` ? height : '0px' }}
                      className={`transition-height  duration-300 ease-in-out overflow-hidden additional-info [&_span]:text-[#40C3BA]`}
                    >
                      <div
                        dangerouslySetInnerHTML={{ __html: service.additionalInfo }}
                        className={`[&.open]:text-white font-[Manrope] leading-[135%]`}
                      />
                      <div className="font-medium text-[24px] text-right mt-[20px]">{service.price}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
         
          <Popup
            trigger={ <button className="w-[160px] h-[160px] rounded-[50%] font-[Manrope] font-semibold leading-[135%] flex justify-center items-center bg-[#FF9F47] text-white justify-self-center self-center hover:bg-[#F47500] transition-all" >
              Записаться на консультацию
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
                <div className="header text-[30px] font-medium mb-[30px]  leading-[135%]">Хотите записать на прием ? </div>
                <div className="content">
                  <form className="grid gap-[25px]" onSubmit={(e) => submitHandler({ e, close })}>
                    <label className="flex flex-col gap-[15px]">
                      <span>Ваше имя</span>
                      <input
                        name="name"
                        required
                        onChange={handleInputChange}
                        className="min-h-[40px] !p-[5px] border border-solid border-[#CBCAC5]"
                      />                    </label>
                    <div className="flex flex-col gap-[25px]">
                    <label className="flex flex-col gap-[15px]">
                      <span>Номер телефона</span>
                      <input
                          name="phone"
                          type="number"
                          onChange={handleInputChange}
                          required
                          className="min-h-[40px] !p-[5px] border border-solid border-[#CBCAC5]"
                        />                    </label>
                      <button className="bg-[#F47500] text-white font-medium min-h-[40px]">Отправить</button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </Popup>
        </div>
      </div>
    </>
  );
};

export default Services;
