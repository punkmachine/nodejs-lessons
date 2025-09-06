import './trainer-server'
import { request } from 'undici';

async function getBitcoinRate() {
    const currency = "RUB";
    const timeFrame = "last";

    const { body } = await request('https://www.blockchain.com/ru/ticker');

    const rateData: any = await body.json();
    const rateAmount = rateData[currency][timeFrame];
    const date = new Date().toLocaleString("ru-RU", { timeZone: 'Europe/Moscow'})
    const message = `Сейчас ${date}. Курс BTC ${rateAmount} ${currency}`

    console.log(message);

    return rateAmount;
}

setInterval(getBitcoinRate, 10000);