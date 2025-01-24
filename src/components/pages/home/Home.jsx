import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { botService } from  '../services/../../../service/botService';
import {
  TITLE_SECTION,
  HERO_DIV,
  LEFT_HERO_DIV,
  LINK_LIST_UL,
  VK_A,
  WATS_A,
  SMS_A,
  CENTER_HERO_DIV,
  RIGHT_HERO_DIV,
  BTN_TOP,
  ICON_TELEGRAM_SPAN,
  EMAIL_A,
  SKYPE_A,
  QUERIES_DIV,
  QUERIES_LIST_TOP_UL,
  QUERIES_LIST_BTM_UL,
} from './Home.styled';

import iconVk from '../../img_icon/iconVk.png';
import iconEmeil from '../../img_icon/iconEmail.png';
import iconWatsApp from '../../img_icon/iconWatsApp.png';
import iconSms from '../../img_icon/iconSms.png';
import iconSkype from '../../img_icon/iconSkype.png';
import iconTelegram from '../../img_icon/iconTelegram.svg';

import fear from './img/Fear.png';
import goals from './img/Goals.png';
import hardTimes from './img/HardTimes.png';
import love from './img/Love.png';
import potential from './img/Potential.png';
import selbstachtung from './img/Selbstachtung.png';

const Home = () => {
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

      alert('Ваш запрос успешно отправлен!');
      close(); // Закрыть модальное окно
    } catch (error) {
      alert('Произошла ошибка при отправке. Попробуйте снова.');
    }
  };




  return (
    <TITLE_SECTION>
      <HERO_DIV>
        <LEFT_HERO_DIV>
          <h3>
            Сделайте шаг <br /> к лучшей жизни <br /> вместе со мной
          </h3>
          <p className="">
            Здесь Вы найдете инструменты и советы, которые помогут Вам раскрыть
            свой потенциал, преодолеть трудности и создать более счастливую
            жизнь. Давайте <span>вместе</span> исследовать мир психологии и{' '}
            <span>делать шаги</span> к лучшей версии себя!
          </p>

          <LINK_LIST_UL>
            <li>
              <VK_A href="/">
                <img src={iconVk} alt="iconVk" />
              </VK_A>
            </li>
            <li>
              <WATS_A href="/">
                <img src={iconWatsApp} alt="watsApp" />
              </WATS_A>
            </li>
            <li>
              <SMS_A href="/">
                <img src={iconSms} alt="iconSms" />
              </SMS_A>
            </li>
          </LINK_LIST_UL>
        </LEFT_HERO_DIV>
        <CENTER_HERO_DIV>
          <Popup
            trigger={
              <button className="w-[160px] h-[160px] rounded-[50%] font-[Manrope] font-semibold leading-[135%] flex justify-center items-center bg-[#FF9F47] text-white justify-self-center self-center hover:bg-[#F47500] transition-all">
                Записаться на консультацию
              </button>
            }
            modal
            nested
            lockScroll
          >
            {close => (
              <div className="modal">
                <button className="close mb-[25px]" onClick={close}>
                  &times;
                </button>
                <div className="header text-[30px] font-medium mb-[30px] leading-[135%]">
                  Хотите записаться на прием?
                </div>
                <div className="content">
                  <form
                    className="grid gap-[25px]"
                    onSubmit={e => submitHandler({ e, close })}
                  >
                    <label className="flex flex-col gap-[15px]">
                      <span>Ваше имя</span>
                      <input
                        name="name"
                        required
                        onChange={handleInputChange}
                        className="min-h-[40px] !p-[5px] border border-solid border-[#CBCAC5]"
                      />
                    </label>
                    <div className="flex flex-col gap-[25px]">
                      <label className="flex flex-col gap-[15px]">
                        <span>Номер телефона</span>
                        <input
                          name="phone"
                          type="number"
                          onChange={handleInputChange}
                          required
                          className="min-h-[40px] !p-[5px] border border-solid border-[#CBCAC5]"
                        />
                      </label>
                      <button className="bg-[#F47500] text-white font-medium min-h-[40px]">
                        Отправить
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </Popup>
        </CENTER_HERO_DIV>
        <RIGHT_HERO_DIV>
          <BTN_TOP>
            <ICON_TELEGRAM_SPAN>
              <img src={iconTelegram} alt="iconTelegram" />
            </ICON_TELEGRAM_SPAN>
            Предлагаю обсудить терапию в мессенджере
          </BTN_TOP>
          <p>
            Привет! Меня зовут Яна Кравченко. Рада видеть на своем сайте! Я
            практикующий психолог. Работаю в интегративном подходе с
            гуманистическим уклоном. У меня вы можете получить как единоразовую
            консультацию по интересующей вас проблеме, так и
            <span> пройти курс</span> длительной психотерапии
          </p>
          <ul>
            <li>
              <EMAIL_A href="/">
                <img src={iconEmeil} alt="iconEmeil" />
              </EMAIL_A>
            </li>
            <li>
              <SKYPE_A href="/">
                <img src={iconSkype} alt="iconSkype" />
              </SKYPE_A>
            </li>
          </ul>
        </RIGHT_HERO_DIV>
      </HERO_DIV>
      <QUERIES_DIV>
        <h3>Основные запросы</h3>
        <QUERIES_LIST_TOP_UL>
          <li>
            <img src={selbstachtung} alt="" />
            <h4>Наладить самооценку</h4>
            <p>
              Помогу превратить недостатки в достоинства, прийти к согласию с
              самим собой, обрести чувство гармонии
            </p>
          </li>
          <li>
            <img src={potential} alt="" />
            <h4>Личносный потенциал</h4>
            <p>
              Вместе раскроем личностный потенциал: лучше узнать себя, свои
              возможности, сильные стороны, улучшить качество жизни
            </p>
          </li>
          <li>
            <img src={goals} alt="" />
            <h4>Жизненые цели</h4>
            <p>
              Найдем ваше призвание, путь к желанной профессии, сформулируем
              жизненные цели, которые принесут пользу
            </p>
          </li>
        </QUERIES_LIST_TOP_UL>
        <QUERIES_LIST_BTM_UL>
          <li>
            <img src={fear} alt="" />
            <h4>Страхи и фобии</h4>
            <p>
              Вместе мы исследуем корни ваших страхов, преодолеемих, я
              предоставлю вам необходимые инструменты техники для управления
            </p>
          </li>
          <li>
            <img src={hardTimes} alt="" />
            <h4>Трудные времена</h4>
            <p>
              Справимся с кризисом или с тяжелой утратой, переживем потерю или
              расставание и построим дальнейшие действия, чтобы избежать этого
            </p>
          </li>
          <li>
            <img src={love} alt="" />
            <h4>Улучшение отношений</h4>
            <p>
              Мы разработаем эффективные коммуникационные навыки, решим
              конфликты инайдем способы понимания вваших отношениях
            </p>
          </li>
        </QUERIES_LIST_BTM_UL>
      </QUERIES_DIV>
    </TITLE_SECTION>
  );
};

export default Home;
