import React, { Children, useState } from "react"
import Carusel from "../UI/carusel"

const PAGE_WIDTH = 378
const Slider = () => {
  const [offset, setOffset] = useState(0)
  const [titleFoto, setTitleFoto] = useState([
    { name: "Сумка Шанель", count: "459" },
    { name: "Часы Rolex", count: "1599" },
    { name: "Духи TomFord", count: "289" },
    { name: "iPhone 14 Pro", count: "1299" },
  ])
  const handleClickLeft = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + PAGE_WIDTH
      return Math.min(newOffset, 0)
    })
  }
  const getTitle = () => {
    const count = offset / 378
    return titleFoto[-count].name
  }
  const getCount = () => {
    const count = offset / 378
    return titleFoto[-count].count
  }
  const handleClickRight = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - PAGE_WIDTH
      const maxOffset = -(PAGE_WIDTH * (titleFoto.length - 1))
      console.log()
      return Math.max(newOffset, maxOffset)
    })
  }
  return (
    <div className="slider">
      <div className="topSL">
        <div onClick={handleClickLeft} className="btnSl btnLeft">
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
        <Carusel offset={offset}>
          <img src={require("../img/symka.png")} alt="bage" />
          <img src={require("../img/clockHand.png")} alt="bage" />
          <img src={require("../img/tomFord.png")} alt="bage" />
          <img src={require("../img/iphone.png")} alt="bage" />
        </Carusel>
        <div onClick={handleClickRight} className="btnSl btnRigth">
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
      <div className="bottomSL">
        <div className="title">{getTitle()}</div>
        <div className="line">
          <svg
            width="251"
            height="3"
            viewBox="0 0 251 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="1.31134e-07"
              y1="1.5"
              x2="251"
              y2="1.50002"
              stroke="#344564"
              stroke-width="3"
            />
          </svg>
        </div>
        <div className="coast">{getCount()}$</div>
      </div>
    </div>
  )
}

export default Slider
