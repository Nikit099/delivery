import React, { useState } from 'react';
import Review from './review';
import '../styles/reviews.css'
import CaruselRev from '../UI/caruselRev';
const PAGE_WIDTH = 617

const Reviews = () => {
    const [review, setReview] = useState([
        {
            name: 'Дмитрий',
            desc: 'Покупка прошла успешно! Ответственно подходят к делу! Очень оперативно! Молодцы! Рекомендую👍🏻👍🏻👍🏻',
            rating: [1, 1, 1, 1, 1],
            logo: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM12.875 5C12.875 4.51675 12.4832 4.125 12 4.125C11.5168 4.125 11.125 4.51675 11.125 5V6.125H10.3333C9.46219 6.125 8.64003 6.49633 8.04374 7.1352C7.44937 7.77204 7.125 8.62363 7.125 9.5C7.125 10.3764 7.44937 11.228 8.04374 11.8648C8.64003 12.5037 9.46219 12.875 10.3333 12.875H11.125V16.125H8C7.51675 16.125 7.125 16.5168 7.125 17C7.125 17.4832 7.51675 17.875 8 17.875H11.125V19C11.125 19.4832 11.5168 19.875 12 19.875C12.4832 19.875 12.875 19.4832 12.875 19V17.875H13.6667C14.5378 17.875 15.36 17.5037 15.9563 16.8648C16.5506 16.228 16.875 15.3764 16.875 14.5C16.875 13.6236 16.5506 12.772 15.9563 12.1352C15.36 11.4963 14.5378 11.125 13.6667 11.125H12.875V7.875H15.3333C15.8166 7.875 16.2083 7.48325 16.2083 7C16.2083 6.51675 15.8166 6.125 15.3333 6.125H12.875V5ZM10.3333 7.875H11.125V11.125H10.3333C9.9668 11.125 9.60198 10.9695 9.32309 10.6707C9.0423 10.3699 8.875 9.94971 8.875 9.5C8.875 9.05029 9.0423 8.63011 9.32309 8.32926C9.60198 8.03045 9.9668 7.875 10.3333 7.875ZM12.875 16.125V12.875H13.6667C14.0332 12.875 14.398 13.0305 14.6769 13.3293C14.9577 13.6301 15.125 14.0503 15.125 14.5C15.125 14.9497 14.9577 15.3699 14.6769 15.6707C14.398 15.9695 14.0332 16.125 13.6667 16.125H12.875Z" fill="#344564"/>
            </svg>
            
            ,
            date: '11 Мая'
        },
         {
            name: 'Ася',
            desc: 'Спасибо большое, посылку получила. Все быстро и качественно. Ещё не раз будем обращаться.',
            rating: [1, 1, 1, 1, 0],
            logo: <svg width="30" height="32" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Design_Directions/Fill/HTML">
            <g id="Shape">
            <path d="M18.6232 9.76953C18.8558 9.04618 18.3683 8.10428 17.748 7.83302C17.1277 7.56176 16.0657 7.81334 15.8331 8.53669L11.5996 21.7019C11.3669 22.4253 11.8615 23.3844 12.4818 23.6556C13.1021 23.9269 14.157 23.6581 14.3896 22.9348L18.6232 9.76953Z" fill="#344564"/>
            <path d="M9.54755 10.5464C9.85277 11.2155 9.77511 12.2528 9.11329 12.7186L4.77228 15.8993L9.20338 19.0088C9.97839 19.6138 9.85277 20.6301 9.54755 21.2992C9.24233 21.9684 8.30131 22.4805 7.60403 21.9438L1.44973 17.2679C1.12619 17.0126 0.928223 16.3956 0.928223 15.8993C0.928223 15.4029 1.12619 14.8457 1.44973 14.5903L7.47698 9.95544C8.12745 9.49298 9.19485 9.77312 9.54755 10.5464Z" fill="#344564"/>
            <path d="M20.6045 21.3527C20.2993 20.6836 20.3769 19.6463 21.0387 19.1805L25.3797 15.9998L20.9487 12.8903C20.1736 12.2853 20.2993 11.269 20.6045 10.5999C20.9097 9.93071 21.8507 9.41863 22.548 9.95533L28.7023 14.6312C29.0258 14.8865 29.2238 15.5035 29.2238 15.9998C29.2238 16.4962 29.0258 17.0534 28.7023 17.3088L22.6751 21.9437C22.0246 22.4061 20.9572 22.126 20.6045 21.3527Z" fill="#344564"/>
            </g>
            </g>
            </svg>,
            date: '25 Апреля'
        },
        {
            name: 'Василий Лобойко',
            desc: 'Выражаю огромную благодарность за покупку и доставку необходимых запчастей , все пришло , сроки очень быстрые , СПАСИБО!',
            rating: [1, 1, 1, 1, 1],
            logo: <svg width="29" height="32" viewBox="0 0 29 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Design_Directions/Fill/CSS">
            <g id="Shape">
            <path d="M18.4715 27.0892C17.7493 27.1333 17.1622 26.4567 17.1622 25.6368C17.1622 24.8168 17.779 24.2718 18.4586 23.9913C19.0452 23.7491 19.1405 23.1819 19.1405 21.9592V19.5811C19.1405 17.277 20.7213 16.1801 21.1 15.9504C21.1246 15.9355 21.1182 15.8916 21.0908 15.8863C21.0876 15.8856 21.0845 15.8844 21.0817 15.8826C19.622 14.9499 19.1405 14.068 19.1405 12.6941V9.80268C19.1405 8.57582 19.0436 8.03245 18.444 7.80808C17.7663 7.55449 17.1621 7.0092 17.1622 6.20005C17.1622 5.39092 17.7419 4.72281 18.4541 4.77403C20.7855 4.94168 22.4064 5.75478 22.4064 9.13555L22.4064 11.3835C22.4064 12.3956 22.5814 13.0809 23.0185 13.4943C23.7685 14.2037 24.6958 14.8905 24.6958 15.9979C24.6958 17.1053 23.7685 17.7921 23.0185 18.5015C22.5814 18.9149 22.4064 19.6002 22.4064 20.6123V22.8514C22.4064 26.2238 20.7935 26.9473 18.4715 27.0892Z" fill="#344564"/>
            <path d="M9.75221 4.76718C10.4743 4.72304 11.0615 5.39969 11.0615 6.21962C11.0615 7.03955 10.4446 7.58457 9.76512 7.8651C9.17847 8.10729 9.08313 8.67447 9.08313 9.89724L9.08313 12.2753C9.08313 14.5794 7.50232 15.6763 7.12363 15.906C7.0991 15.9209 7.10544 15.9647 7.13286 15.9701C7.13604 15.9708 7.13917 15.972 7.14198 15.9738C8.60166 16.9065 9.08313 17.7884 9.08313 19.1623L9.08313 22.0537C9.08313 23.2806 9.18006 23.8239 9.77968 24.0483C10.4574 24.3019 11.0615 24.8472 11.0615 25.6563C11.0615 26.4655 10.4818 27.1336 9.76956 27.0824C7.43822 26.9147 5.81725 26.1016 5.81725 22.7208L5.81725 20.4729C5.81725 19.4608 5.64225 18.7754 5.20517 18.3621C4.45518 17.6527 3.52783 16.9658 3.52783 15.8585C3.52783 14.7511 4.45518 14.0643 5.20517 13.3549C5.64225 12.9415 5.81725 12.2562 5.81725 11.2441L5.81725 9.00496C5.81725 5.63258 7.43018 4.9091 9.75221 4.76718Z" fill="#344564"/>
            </g>
            </g>
            </svg>
            ,
            date: '29 Октября'

        },
        {
          name: 'Василий Лобойко',
          desc: 'Выражаю огромную благодарность за покупку и доставку необходимых запчастей , все пришло , сроки очень быстрые , СПАСИБО!',
          rating: [1, 1, 1, 1, 1],
          logo: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM7.60864 13.2176C8.03793 13.003 8.55933 13.1743 8.77813 13.6002L8.7786 13.601C8.78091 13.6052 8.78688 13.6159 8.79671 13.6321C8.81644 13.6646 8.85136 13.7188 8.90307 13.7877C9.00679 13.926 9.17549 14.1201 9.42156 14.317C9.90259 14.7018 10.7125 15.1252 11.9999 15.1252C13.2874 15.1252 14.0973 14.7018 14.5783 14.317C14.8244 14.1201 14.9931 13.926 15.0968 13.7877C15.1485 13.7188 15.1835 13.6646 15.2032 13.6321C15.213 13.6159 15.219 13.6052 15.2213 13.601L15.2218 13.6001C15.2225 13.5988 15.2226 13.5987 15.222 13.5997L15.2218 13.6001C15.4406 13.1743 15.962 13.003 16.3913 13.2176C16.8235 13.4337 16.9987 13.9593 16.7826 14.3916L15.9999 14.0002C16.7826 14.3916 16.7823 14.392 16.7821 14.3925L16.7816 14.3935L16.7805 14.3956L16.7781 14.4004L16.772 14.4122L16.7618 14.4312L16.7547 14.4444C16.7409 14.4695 16.7224 14.5018 16.6991 14.5403C16.6524 14.6172 16.5857 14.7192 16.4968 14.8377C16.3193 15.0745 16.0505 15.3804 15.6716 15.6835C14.9026 16.2987 13.7125 16.8752 11.9999 16.8752C10.2874 16.8752 9.0973 16.2987 8.32834 15.6835C7.94941 15.3804 7.68061 15.0745 7.50307 14.8377C7.41416 14.7192 7.34752 14.6172 7.30084 14.5403C7.27747 14.5018 7.25903 14.4695 7.24522 14.4444C7.23832 14.4318 7.23256 14.4211 7.22793 14.4122L7.2218 14.4004L7.21936 14.3956L7.21829 14.3935L7.21779 14.3925C7.21756 14.392 7.21732 14.3916 7.99995 14.0002L7.21732 14.3916C7.00121 13.9593 7.1764 13.4337 7.60864 13.2176ZM16 9C16 9.55228 15.5523 10 15 10C14.4477 10 14 9.55228 14 9C14 8.44772 14.4477 8 15 8C15.5523 8 16 8.44772 16 9ZM9 10C9.55228 10 10 9.55228 10 9C10 8.44772 9.55228 8 9 8C8.44772 8 8 8.44772 8 9C8 9.55228 8.44772 10 9 10Z" fill="#344564"/>
          </svg>
          
          
          ,
          date: '29 Октября'

      }
    ])
    const [offset, setOffset] = useState(0)
    const handleClickLeft = () => {
        setOffset((currentOffset) => {
          const newOffset = currentOffset + PAGE_WIDTH
          return Math.min(newOffset, 0)
        })
      }
      const handleClickRight = () => {
        setOffset((currentOffset) => {
          const newOffset = currentOffset - PAGE_WIDTH
          const maxOffset = -(PAGE_WIDTH * (review.length - 1))
          console.log()
          return Math.max(newOffset, maxOffset)
        })
      }



    return (
        <div className='mainReviws' >
            <div className="titleRev">Отзывы</div>
            <div className="sliderRev">
                <div onClick={handleClickLeft} className="btnRev BtnRevLeft">
                    <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.94837 4.86079L21.6561 13.0473C22.3366 13.5005 22.3366 14.4993 21.6561 14.9525L9.94837 23.139C9.18671 23.6463 8.1665 23.1009 8.1665 22.1864L8.1665 5.8134C8.1665 4.89898 9.18671 4.35357 9.94837 4.86079Z"
              fill="#344564"
            />
                    </svg>
                </div>
               <CaruselRev offset={offset}>
                    {
                        review.map(elem => <Review {...elem} /> )
                    }
               </CaruselRev>
                   
                <div onClick={handleClickRight} className="btnRev BtnRevRight">
                <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.94837 4.86079L21.6561 13.0473C22.3366 13.5005 22.3366 14.4993 21.6561 14.9525L9.94837 23.139C9.18671 23.6463 8.1665 23.1009 8.1665 22.1864L8.1665 5.8134C8.1665 4.89898 9.18671 4.35357 9.94837 4.86079Z"
              fill="#344564"
            />
          </svg>
                </div>
            </div>
        </div>
    );
};

export default Reviews;