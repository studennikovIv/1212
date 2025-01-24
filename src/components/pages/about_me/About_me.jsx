import React, {useState} from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {
  ABOUT_ME_DIV,
  BOT2_ABOUT_ME_DIV,
  BOT_ABOUT_ME_DIV,
  LEFT_CONTENT_BOT_DIV,
  RIGHT_CONTENT_BOT_DIV,
  RIGHT_TEXT_DIV,
  TITLE_SECTION,
  TOP_ABOUT_ME_DIV,
} from './About_me.styled';

import aboutMeImage from './aboutMe.jpg';

const AboutMe = () => {
  const [valueNumber, setValueNumber] = useState('');
  const [valueName, setValueName] = useState('');
  
  
  
  const nameChange = (e) => {
    setValueName(e.target.value); 
  };
  const numberChange = (e) => {
    setValueNumber(e.target.value)
  }


  const submitHandler = ({ e, close }) => {
    e.preventDefault();
    // Обработка формы
    console.log('Форма отправлена');
    close();
  };

  return (
    <TITLE_SECTION>
      <ABOUT_ME_DIV>
        <h3>Обо мне</h3>
        <TOP_ABOUT_ME_DIV>
          <p>
            Привет! <span> Я — психолог-консультант.</span> <br /> Зовут меня
            Кравченко Яна Юрьевна. <br />
            В работе я придерживаюсь принципов гуманистической психологии. Это
            означает, что во главу личности я ставлю такие качества, как:
            свобода выбора, сознательность, автономия, творчество и др. Особенно
            важным считаю индивидуальный подход: глубокое погружение
            во внутренний мир человека, его систему ценностей, потребностей
            и мотивов, формирующих жизненный путь; обязательный учет уникального
            жизненного контекста — такой подход позволяет определить природные
            задатки и сильные стороны личности, которые будут служить человеку
            внутренней опорой. Люди имеют различный личностный склад, жизненные
            обстоятельства и другие проблемы. Поэтому, для каждого человека
            подходит определенное направление психологической работы.
            Я использую техники разных направлений: когнитивно-поведенческой
            терапии, психоанализа и т. д.
          </p>
          <img src={aboutMeImage} alt="aboutMeImage" />
          <RIGHT_TEXT_DIV>
            <h4>Образование</h4>
            <ul>
              <li>“Восточно-Европейский Институт Психоанализа”</li>
              <li>“Психоанализ для жизни”</li>
              <li>“МАК-терапия” в психологической практике</li>
              <li>
                “Работа психолога с кризисными состояниями, их последствиями и
                ретравматизацией”
              </li>
              <li>“Логотерапия: представление о человеке”</li>
            </ul>
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
                  <div className="header text-[30px] font-medium mb-[30px]  leading-[135%]">
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
                          onChange={nameChange}
                          required
                          className="min-h-[40px] !p-[5px] border border-solid border-[#CBCAC5]"
                        />
                      </label>
                      <div className="flex flex-col gap-[25px]">
                        <label className="flex flex-col gap-[15px]">
                          <span>Номер телефона</span>
                          <input
                            type="number"
                            onChange={numberChange}
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
          </RIGHT_TEXT_DIV>
        </TOP_ABOUT_ME_DIV>
        <BOT_ABOUT_ME_DIV>
          <h4>Условия работы</h4>
          <BOT2_ABOUT_ME_DIV>
            <LEFT_CONTENT_BOT_DIV>
              <h5>Запросы</h5>
              <p>
                В моей работе я готова рассматривать и помогать вам в различных
                запросах и темах, включая, но не ограничиваясь следующим:
              </p>
              <ul>
                <li>Эмоциональные трудности и стресс</li>
                <li>Проблемы в отношениях и семейные вопросы</li>
                <li>Развитие</li>
                <li>Преодоление зависимостей</li>
                <li>Поиск решений для конкретных жизненных ситуаций</li>
              </ul>
            </LEFT_CONTENT_BOT_DIV>
            <RIGHT_CONTENT_BOT_DIV>
              <h5>Контракт и договоренности</h5>
              <p>
                Перед началом работы, мы заключаем контракт, который четко
                определяет условия сотрудничества. В них входят:
              </p>
              <ul>
                <li>Длительность сотрудничества</li>
                <li>Частота и продолжительность сессий</li>
                <li>Стоимость и методы оплаты</li>
                <li>Конфиденциальность информации и ее обработка</li>
                <li>Ответственность сторон</li>
                <li>Возможность изменения или расторжения контракта</li>
              </ul>
            </RIGHT_CONTENT_BOT_DIV>
          </BOT2_ABOUT_ME_DIV>
        </BOT_ABOUT_ME_DIV>
      </ABOUT_ME_DIV>
    </TITLE_SECTION>
  );
};

export default AboutMe;
