import React from 'react';
import '../styles/ourHelp.css'
const OurHelp = ({setBelmo, belmo,}) => {
    return (
        <div className='ourHelp'>
            <div className="leftService">
                <div className="titleService">Наши услуги</div>
                <div className="leftElemService">
                <div className="cutOutElem elemCut1">Работаем с оптовыми заказами, оформляем и доставляем карго из Турции.
                    Участвуем от вашего лица в аукционах.</div>
                <div className="cutOutElem elemCut2">Покупайте санкционные товары Америке, и указывайте в магазине наш адрес. Таможенное оформление и надежная доставка товаров до вашего дома – полностью на нас.</div>
                <div className="cutOutElem elemCut3">Мы берем на себя всё оформление бумаг, коммуникации с продавцом и даже оплату (выгодно, если магазин не принимает российские карты). Вы даете нам ссылку – и наши мастера шопинга выкупают товары за вас.
                <img className='trees' src={require('../img/trees.png')} alt=''/>
                </div>
                </div>
                <a href="#top">
                <div onClick={() => setBelmo(!belmo)} className="bigPayBtn"> 
                    <svg
                width="33"
                height="30"
                viewBox="0 0 33 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 1.5C0 0.671573 0.671573 0 1.5 0H3.65767C5.72258 0 7.5225 1.40534 8.02331 3.40859L8.29616 4.5H27.9041C31.3375 4.5 33.5004 8.18796 31.8352 11.1854L27.6685 18.6854C26.8748 20.114 25.369 21 23.7348 21H12.8423C10.7774 21 8.9775 19.5947 8.47669 17.5914L5.11288 4.1362C4.94595 3.46845 4.34597 3 3.65767 3H1.5C0.671573 3 0 2.32843 0 1.5Z"
                    fill="#9E5726"
                />
                <path
                    d="M13.5 27C13.5 28.6569 12.1569 30 10.5 30C8.84315 30 7.5 28.6569 7.5 27C7.5 25.3431 8.84315 24 10.5 24C12.1569 24 13.5 25.3431 13.5 27Z"
                    fill="#9E5726"
                />
                <path
                    d="M28.5 27C28.5 28.6569 27.1569 30 25.5 30C23.8431 30 22.5 28.6569 22.5 27C22.5 25.3431 23.8431 24 25.5 24C27.1569 24 28.5 25.3431 28.5 27Z"
                    fill="#9E5726"
                />
                    </svg>
                </div>
                </a>
                <img className='road' src={require('../img/road.png')} alt="" />
             
            </div>
            <div className="rightService">
                <img className='sky' src={require('../img/sky.png')} alt="" />
                <div className="sun">
                    <div className="countPay">4 8 3</div>
                    <div className="titleCountPay">Успешных заказов</div>
                </div>
            </div>
        </div>
    );
};

export default OurHelp;