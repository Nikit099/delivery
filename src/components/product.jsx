import React from 'react';

const Product = ({handleFormSubmit,  values, setChangesInputs}) => {
    
    return (
<div className="product">
          <div className="titleProduct">Товар 1</div>

          <form onSubmit={(e) => handleFormSubmit(e)}>

            <div className="blockInp">
            <label htmlFor="text">Имя Фамилия</label>
            <input value={values[0].body} onChange={(e) => setChangesInputs(e, values[0].title)} type="text" name="" id="" />
            </div>

            <div className="bigBlockInp">
            <div className="blockInp">
            <label htmlFor="text">Телефон</label>
            <input  value={values[1].body} onChange={(e) => setChangesInputs(e, values[1].title)}  className="bigInp" type="text" name="" id="" />
            </div> 

            <div className="blockInp">
            <label  htmlFor="text">Валюта</label>
            <input  value={values[2].body} onChange={(e) => setChangesInputs(e, values[2].title)}  className="litlInp" type="text" name="" id="" />
            </div> 
            </div>

            {/* {opacity && (
              <div className="list">
                {select.map((i) => (
                  <div onClick={() => choseSelect(i)} className="select">
                    {i}
                  </div>
                ))}
              </div>
            )} */}

            <div className="bigBlockInp">
            <div className="blockInp">
            <label htmlFor="text">Стоимость</label>
            <input  value={values[3].body} onChange={(e) => setChangesInputs(e, values[3].title)}  className="litlInp" type="text" name="" id=""  />
            </div>

            <div className="blockInp">
            <label htmlFor="text">Промокод</label>
            <input  value={values[5].body} onChange={(e) => setChangesInputs(e, values[5].title)}  className="bigInp" type="text" name="" id="" />
            </div>
            </div>


            <div className="blockInp">
            <label htmlFor="text">Ссылка на товар</label>
            <input  value={values[4].body} onChange={(e) => setChangesInputs(e, values[4].title)}  type="text" name="" id="" />
            </div>

           
            <div className="blockInp">
            <label htmlFor="">Комментарий</label>
            <textarea  value={values[6].body} onChange={(e) => setChangesInputs(e, values[6].title)}  name="" id="" cols="30" rows="10"></textarea>
            </div>

            <img src={require("../img/Line.png")} alt="" />
            <div className="addProduct">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.00824 2.229C9.56775 2.229 10.0289 2.68546 10.0289 3.24638L10.0291 7.99011H14.7581C15.3176 7.99011 15.7712 8.44482 15.7712 9.00574C15.7712 9.56665 15.3176 10.0214 14.7581 10.0214H10.0291L10.029 14.7521C10.029 15.313 9.57547 15.7678 9.01597 15.7678C8.45646 15.7678 8.0029 15.313 8.0029 14.7521L8.003 10.0214H3.25608C2.69657 10.0214 2.22949 9.55265 2.22949 8.99174C2.22949 8.43082 2.69657 7.99011 3.25608 7.99011H8.003L8.00274 3.24638C8.00274 2.68546 8.44874 2.229 9.00824 2.229Z"
                  fill="#9E5726"
                />
              </svg>
            </div>
            <button className="offer_pay_button">Заказать</button>

          </form>
        </div>
    );
};

export default Product;