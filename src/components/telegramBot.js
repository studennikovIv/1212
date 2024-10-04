import axios from 'axios';
import Notiflix from 'notiflix';

const botToken = '5960606258:AAHIJ5954eyEVZwcN6ViN__vRjbHT9ScuGU';
const chatId = '1006143980';

export const sendMessage = (name, tel) => {
  const axiosInstance = axios.post(
    `https://api.telegram.org/bot${botToken}/sendMessage`,
    {
      chat_id: chatId,
      text: `
      Ім'я: ${name},
      Номер: ${tel},
      `,
    }
  );

  axiosInstance
    .then(response => {
      Notiflix.Notify.success(
        `Все пройшло успішно, чекайте на дзвінок від менеджера.`,
        {
          timeout: 7000,
          position: 'left-bottom',
        }
      );
      return response.data;
    })
    .catch(error => {
      Notiflix.Notify.failure(`${error}`);
      return error;
    });
};
