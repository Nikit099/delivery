import React, { useState } from "react"
import "../styles/advantages.css"
import TextAdvant from "../UI/textAdvant"
const Advantages = ({ setBelmo, belmo }) => {
  const [advant, setAdvant] = useState([
    {
      title: "Быстрая обработка посылок",
      body: "Посылка обрабатывается на наших складах в течении 24 часов после поступления на склад.",
    },
    {
      title: "Самая низкая комиссия на выкуп товара",
      body: "Оплачиваем товар в течении 1 часа с момента подачи вами заявки! Комиссия на выкуп товара от 5% от стоимости товара!",
    },
    {
      title: "Партнерство",
      body: "Мы сотрудничаем с самыми крупными логистическими компаниями - это позволяет доставлять товары в РФ практически из любой точки мира, а также предложить вам лучшие условия доставки!",
    },
  ])
  return (
    <div className="fatherAdvant">
      <div className="blockAdvantFon"></div>
      <div className="blockAdvant">
        <div className="leftAdvant">
          <div className="titleAdvant">Приемущества</div>
          <div className="aroundsAdvant">
            <div className="aroundAdvant around1">
              <svg
                width="54"
                height="58"
                viewBox="0 0 54 58"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M53.5832 17.6138V41.107C53.5821 42.137 53.3086 43.1485 52.7902 44.0402C52.2718 44.9319 51.5266 45.6724 50.6295 46.1874L29.9535 57.934C29.7227 58.0665 29.484 58.1828 29.239 58.2826C28.5474 58.5642 27.8748 57.9851 27.8748 57.2384V30.6027C27.8748 30.1653 28.1086 29.7613 28.4877 29.5432L51.9294 16.0613C52.5676 15.6943 53.3947 15.9742 53.5105 16.7013C53.5584 17.0021 53.5829 17.3072 53.5832 17.6138ZM50.9642 14.5976C51.6222 14.2192 51.7797 13.3281 51.166 12.8813C50.9941 12.7562 50.815 12.64 50.6295 12.5335L29.9535 0.786872C29.0555 0.271383 28.0368 0 26.9998 0C25.9629 0 24.9442 0.271383 24.0461 0.786872L3.37021 12.5335C3.18469 12.6399 3.00567 12.7561 2.83381 12.8812C2.22015 13.328 2.37759 14.2191 3.0356 14.5975L26.3907 28.0296C26.7679 28.2466 27.2321 28.2466 27.6094 28.0296L50.9642 14.5976ZM0.489226 16.7011C0.605058 15.974 1.43208 15.6941 2.07034 16.0612L25.512 29.543C25.8911 29.7611 26.1248 30.1651 26.1248 30.6025V57.2384C26.1248 57.9851 25.4523 58.5642 24.7607 58.2826C24.5157 58.1828 24.2769 58.0665 24.0461 57.934L3.37021 46.1874C2.47306 45.6724 1.72789 44.9319 1.20946 44.0402C0.691029 43.1485 0.417566 42.137 0.416504 41.107V17.6138C0.41682 17.3071 0.441303 17.0019 0.489226 16.7011Z"
                    fill="#D6E1ED"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_i_457_1177"
                    x="0.416504"
                    y="0"
                    width="55.1665"
                    height="60.355"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="2" dy="2" />
                    <feGaussianBlur stdDeviation="2.5" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.66875 0 0 0 0 0.70125 0 0 0 0 0.75 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_457_1177"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <div className="aroundAdvant around2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.75 7.5C5.82107 7.5 7.5 5.82107 7.5 3.75C7.5 1.67893 5.82107 0 3.75 0C1.67893 0 0 1.67893 0 3.75C0 5.82107 1.67893 7.5 3.75 7.5ZM23.2071 0.792893C23.5976 1.18342 23.5976 1.81658 23.2071 2.20711L2.20711 23.2071C1.81658 23.5976 1.18342 23.5976 0.792893 23.2071C0.402369 22.8166 0.402369 22.1834 0.792893 21.7929L21.7929 0.792893C22.1834 0.402369 22.8166 0.402369 23.2071 0.792893ZM24 20.25C24 22.3211 22.3211 24 20.25 24C18.1789 24 16.5 22.3211 16.5 20.25C16.5 18.1789 18.1789 16.5 20.25 16.5C22.3211 16.5 24 18.1789 24 20.25Z"
                    fill="#D6E1ED"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_i_457_1172"
                    x="0"
                    y="0"
                    width="26"
                    height="26"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="2" dy="2" />
                    <feGaussianBlur stdDeviation="2.5" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.66875 0 0 0 0 0.70125 0 0 0 0 0.75 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_457_1172"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <div className="aroundAdvant around3">
              <svg
                width="34"
                height="31"
                viewBox="0 0 34 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M31.5682 8.67997H23.9385V30.167H31.5682C32.8108 30.167 33.8182 29.1597 33.8182 27.917V10.93C33.8182 9.68732 32.8108 8.67997 31.5682 8.67997ZM26.9658 14.1614C26.9658 13.8508 27.2176 13.5989 27.5283 13.5989H30.2283C30.5389 13.5989 30.7908 13.8508 30.7908 14.1614V16.8614C30.7908 17.1721 30.5389 17.4239 30.2283 17.4239H27.5283C27.2176 17.4239 26.9658 17.1721 26.9658 16.8614V14.1614ZM26.9658 22.0364C26.9658 21.7258 27.2176 21.4739 27.5283 21.4739H30.2283C30.5389 21.4739 30.7908 21.7258 30.7908 22.0364V24.7364C30.7908 25.0471 30.5389 25.2989 30.2283 25.2989H27.5283C27.2176 25.2989 26.9658 25.0471 26.9658 24.7364V22.0364Z"
                    fill="#D6E1ED"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.2334 0.855957C1.99076 0.855957 0.983398 1.86331 0.983398 3.10596V27.917C0.983398 29.1596 1.99076 30.167 3.2334 30.167H18.4812C19.7238 30.167 20.7312 29.1596 20.7312 27.917V3.10596C20.7312 1.86332 19.7238 0.855957 18.4812 0.855957H3.2334ZM12.6012 6.28646C12.6012 5.9758 12.853 5.72396 13.1637 5.72396H15.8637C16.1743 5.72396 16.4262 5.9758 16.4262 6.28646V8.98646C16.4262 9.29712 16.1743 9.54896 15.8637 9.54896H13.1637C12.853 9.54896 12.6012 9.29712 12.6012 8.98646V6.28646ZM5.28839 6.28647C5.28839 5.97581 5.54023 5.72397 5.85089 5.72397H8.55089C8.86155 5.72397 9.11339 5.97581 9.11339 6.28647V8.98647C9.11339 9.29713 8.86155 9.54897 8.55089 9.54897H5.85089C5.54023 9.54897 5.28839 9.29713 5.28839 8.98647V6.28647ZM5.85117 13.599C5.54051 13.599 5.28867 13.8508 5.28867 14.1615V16.8615C5.28867 17.1721 5.54051 17.424 5.85117 17.424H8.55117C8.86183 17.424 9.11367 17.1721 9.11367 16.8615V14.1615C9.11367 13.8508 8.86183 13.599 8.55117 13.599H5.85117ZM5.28867 22.0364C5.28867 21.7258 5.54051 21.4739 5.85117 21.4739H8.55117C8.86183 21.4739 9.11367 21.7258 9.11367 22.0364V24.7364C9.11367 25.0471 8.86183 25.2989 8.55117 25.2989H5.85117C5.54051 25.2989 5.28867 25.0471 5.28867 24.7364V22.0364ZM13.1637 13.599C12.853 13.599 12.6012 13.8508 12.6012 14.1615V16.8615C12.6012 17.1721 12.853 17.424 13.1637 17.424H15.8637C16.1743 17.424 16.4262 17.1721 16.4262 16.8615V14.1615C16.4262 13.8508 16.1743 13.599 15.8637 13.599H13.1637ZM12.6012 22.0364C12.6012 21.7258 12.853 21.4739 13.1637 21.4739H15.8637C16.1743 21.4739 16.4262 21.7258 16.4262 22.0364V24.7364C16.4262 25.0471 16.1743 25.2989 15.8637 25.2989H13.1637C12.853 25.2989 12.6012 25.0471 12.6012 24.7364V22.0364Z"
                    fill="#D6E1ED"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_i_457_1176"
                    x="0.983398"
                    y="0.855957"
                    width="34.835"
                    height="31.311"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="2" dy="2" />
                    <feGaussianBlur stdDeviation="2.5" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.66875 0 0 0 0 0.70125 0 0 0 0 0.75 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_457_1176"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <a href="#top">
              <div
                onClick={() => setBelmo(!belmo)}
                className="aroundAdvant aroundPay"
              >
                <svg
                  width="33"
                  height="30"
                  viewBox="0 0 33 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 1.5C0 0.671573 0.671573 0 1.5 0H3.65767C5.72258 0 7.5225 1.40534 8.02331 3.40859L8.29616 4.5H27.9041C31.3375 4.5 33.5004 8.18796 31.8352 11.1854L27.6685 18.6854C26.8748 20.114 25.369 21 23.7348 21H12.8423C10.7774 21 8.9775 19.5947 8.47669 17.5914L5.11288 4.1362C4.94595 3.46845 4.34597 3 3.65767 3H1.5C0.671573 3 0 2.32843 0 1.5Z"
                      fill="#D6E1ED"
                    />
                    <path
                      d="M13.5 27C13.5 28.6569 12.1569 30 10.5 30C8.84315 30 7.5 28.6569 7.5 27C7.5 25.3431 8.84315 24 10.5 24C12.1569 24 13.5 25.3431 13.5 27Z"
                      fill="#D6E1ED"
                    />
                    <path
                      d="M28.5 27C28.5 28.6569 27.1569 30 25.5 30C23.8431 30 22.5 28.6569 22.5 27C22.5 25.3431 23.8431 24 25.5 24C27.1569 24 28.5 25.3431 28.5 27Z"
                      fill="#D6E1ED"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_i_428_235"
                      x="0"
                      y="0"
                      width="34.4082"
                      height="32"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dx="2" dy="2" />
                      <feGaussianBlur stdDeviation="2.5" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.66875 0 0 0 0 0.70125 0 0 0 0 0.75 0 0 0 1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="shape"
                        result="effect1_innerShadow_428_235"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
            </a>
          </div>
        </div>
        <div className="rightAdvant">
          {advant.map((elem) => (
            <TextAdvant {...elem} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Advantages
