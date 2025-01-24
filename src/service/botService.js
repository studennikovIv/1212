import { request } from './request';
import Notiflix from 'notiflix';

class BotApi {
  _botToken = '6175964793:AAFU_yX2YGSWvbfBjSdhy2wdNQBss0WN0A0';
  _chatId = '-1001877977361';

  sendMessage = async (tel, streat, house, coments, food, total, kafe) => {
    //TODO replace this map to store
    let res = [];

    food.map(({ name, span }) => {
      return (res += [`${name} - ${span}, `]);
    });

    try {
      await request.post(`/bot${this._botToken}/sendMessage`, {
        chat_id: this._chatId,
        text: `Имя: ${kafe}  
Номер телефона: ${tel}
            `,
      });

      Notiflix.Notify.success(
        `Ваша заявка отправлена, я скоро с Вами свяжусь`,
        {
          timeout: 3000,
        }
      );
    } catch (error) {
      Notiflix.Notify.failure(`${error}`);
      return error;
    }
  };
}

export const botService = new BotApi();
