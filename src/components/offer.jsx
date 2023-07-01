import React from "react"
import Product from "./product"

const Offer = ({
  setChangesInputs,
  setBelmo,
  handleFormSubmit,
  belmo,
  values
}) => {
  console.log(handleFormSubmit);
  return (
    <div
      className="blackBack"
      onClick={(e) => {
        if (e.target.className === "blackBack") {
          setBelmo(!belmo)
        }
      }}
    >
      <div className="offer">
        <div className="offer_head">
          <div className="offer_head_text">Оформить сделку</div>
          <div className="offer_head_dot"></div>
        </div>
        <Product values={values} setChangesInputs={setChangesInputs} handleFormSubmit={handleFormSubmit} />
      </div>
    </div>
  )
}

export default Offer
