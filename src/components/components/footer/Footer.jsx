import {
  BG_DIV,
  FOOTER_SECTION,
  FOOTER_DIV,
  FOOTER_TOP_DIV,
  LOGO_IMG,
  LIST_DIV,
  TELEGRAM_A,
  VK_A,
  WA_A,
  LIST_UL,
  SMS_A,
  EMAIL_A,
  SKYPE_A,
  TEXT_DIV,
  FOOTER_BOTTOM_DIV,
  COPIRATE_P,
  FORM_DIV,
} from './Footer.styled';

import logo from '../../logo.svg';
import iconVk from '../../img_icon/iconVk.png';
import iconEmeil from '../../img_icon/iconEmail.png';
import iconWatsApp from '../../img_icon/iconWatsApp.png';
import iconSms from '../../img_icon/iconSms.png';
import iconSkype from '../../img_icon/iconSkype.png';
import iconTelegram from '../../img_icon/iconTelegram.svg';
import sendSms from '../../img_icon/tg2.png';

const Footer = () => {
  return (
    <BG_DIV>
      <FOOTER_SECTION>
        <FOOTER_DIV>
          <FOOTER_TOP_DIV>
            <LOGO_IMG src={logo} alt="logo" />
            <LIST_DIV>
              <ul>
                <li>
                  <TELEGRAM_A href="/">
                    <img src={iconTelegram} alt="TG" />
                  </TELEGRAM_A>
                </li>
                <li>
                  <VK_A href="/">
                    <img src={iconVk} alt="VK" />
                  </VK_A>
                </li>
                <li>
                  <WA_A href="/">
                    <img src={iconWatsApp} alt="WA" />
                  </WA_A>
                </li>
              </ul>
              <LIST_UL>
                <li>
                  <SMS_A href="/">
                    <img src={iconSms} alt="SMS" />
                  </SMS_A>
                </li>
                <li>
                  <EMAIL_A href="/">
                    <img src={iconEmeil} alt="email" />
                  </EMAIL_A>
                </li>
                <li>
                  <SKYPE_A href="/">
                    <img src={iconSkype} alt="skype" />
                  </SKYPE_A>
                </li>
              </LIST_UL>
            </LIST_DIV>
            <TEXT_DIV>
              <h4>Получайте первыми новости!</h4>
              <p>
                Оставьте свою почту, чтобы уведомления об новинках пришли
                незамедлительно
              </p>
            </TEXT_DIV>
          </FOOTER_TOP_DIV>
          <FOOTER_BOTTOM_DIV>
            <p>Политика конфиденциальности</p>
            <COPIRATE_P>2023 Все права защищены</COPIRATE_P>
            <FORM_DIV>
              <input type="text" placeholder="Ваша почта" />
              <button>
                <img src={sendSms} alt="SMS" />
              </button>
            </FORM_DIV>
          </FOOTER_BOTTOM_DIV>
        </FOOTER_DIV>
      </FOOTER_SECTION>
    </BG_DIV>
  );
};
export default Footer;
