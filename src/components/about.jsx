import axios from 'axios';
import React, { useEffect, useState } from 'react';
let data1
let data2
const About = ({
    clickEmotion, faces
}) => {
  const [invest, setInvest] = useState([])
  useEffect(()=> {
   axios.all(
    [
      axios.get('https://api.investing.com/api/financialdata/2186/historical/chart/?interval=PT15M&pointscount=60'),
      axios.get('https://api.investing.com/api/financialdata/1691/historical/chart/?interval=PT15M&pointscount=60')
    ]
   ).then(res => {
    data1 = res[0].data.data
    data2  = res[1].data.data
    setInvest([data1[data1.length - 1][1], data2[data2.length - 1][1]])
    console.log(data1[data1.length - 1][1]);
   })
   
  }, [])
    return (
        <div className="about_us">
        <div className="about_us_body">
          <div className="about_us_body_header">О нас!</div>
          <div className="about_us_body_text">
          Заказывайте через нас любые товары из <b> США </b>и <b>Европы</b>,
          мы выкупим и доставим ваши покупки в целости и сохранности!
            <br /> <br />
            Доставляем товары любой категории, в том числе и  
            <b> санкционные! </b>
            <br /> <br />
            Обращайтесь к нам в <b> любое время </b>, и наши специалисты
            помогут вам быстро и качественно оформить заказ.
          </div>
        </div>
        <div className="about_us_bottom">
          {/* <div className="calculature emotion">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.68848 1C9.68848 0.447715 9.24076 0 8.68848 0C8.13619 0 7.68848 0.447715 7.68848 1V2.92186H5.80527C4.21308 2.92186 2.92236 4.21255 2.92236 5.80471V7.68761H1C0.447715 7.68761 0 8.13533 0 8.68761C0 9.2399 0.447715 9.68761 1 9.68761H2.92236V12.4923H1C0.447715 12.4923 0 12.9401 0 13.4923C0 14.0446 0.447715 14.4923 1 14.4923H2.92236V17.3361C2.92236 18.9282 4.21308 20.2189 5.80527 20.2189H7.68848V22.1409C7.68848 22.6931 8.13619 23.1409 8.68848 23.1409C9.24076 23.1409 9.68848 22.6931 9.68848 22.1409V20.2189H13.4541V22.1409C13.4541 22.6931 13.9018 23.1409 14.4541 23.1409C15.0064 23.1409 15.4541 22.6931 15.4541 22.1409V20.2189H17.3369C18.9291 20.2189 20.2198 18.9282 20.2198 17.3361V14.4923H22.1412C22.6935 14.4923 23.1412 14.0446 23.1412 13.4923C23.1412 12.9401 22.6935 12.4923 22.1412 12.4923H20.2198V9.68761H22.1412C22.6935 9.68761 23.1412 9.2399 23.1412 8.68761C23.1412 8.13533 22.6935 7.68761 22.1412 7.68761H20.2198V5.80471C20.2198 4.21255 18.9291 2.92186 17.3369 2.92186H15.4541V1C15.4541 0.447715 15.0064 0 14.4541 0C13.9018 0 13.4541 0.447715 13.4541 1V2.92186H9.68848V1ZM8.68851 7.72664C8.15778 7.72664 7.72754 8.15687 7.72754 8.68759V14.4533C7.72754 14.984 8.15778 15.4142 8.68851 15.4142H14.4543C14.985 15.4142 15.4153 14.984 15.4153 14.4533V8.68759C15.4153 8.15687 14.985 7.72664 14.4543 7.72664H8.68851Z"
                fill="#344564"
              />
            </svg>
          </div> */}

          <div className="about_us_emotions">
            {faces.map((elem) => (
              <div
                onClick={() => clickEmotion(elem)}
                key={elem.id}
                className={"emotion " + (elem.state && "emotion2")}
              >
                {elem.svg}
              </div>
            ))}
          </div>
         
           {
            invest.length ?  <div className="money"> <div className="monBlock eur">EUR = {invest[1].toString().slice(0,5)} Руб</div>
            <div className="monBlock dol">USD = {invest[0].toString().slice(0,5)} Руб</div></div>
            : null 
          }
          
        </div>
      </div>
    );
};

export default About;