import { useEffect, useRef, useState } from "react"
import "./App.css"
import "./svg.css"
import axios from "axios"
import Offer from "./components/offer"
import About from "./components/about"
import Slider from "./components/slider"
import OurHelp from "./components/ourHelp"
import Advantages from "./components/advantages"
import Reviews from "./components/reviews"
import Footer from "./components/footer"
import HowWork from "./components/howWork"
function App() {
  const [faces, setFaces] = useState([
    {
      id: 1,
      state: false,
      svg: (
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
            d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM15 10C15.5523 10 16 9.55228 16 9C16 8.44772 15.5523 8 15 8C14.4477 8 14 8.44772 14 9C14 9.55228 14.4477 10 15 10ZM10 9C10 9.55228 9.55228 10 9 10C8.44772 10 8 9.55228 8 9C8 8.44772 8.44772 8 9 8C9.55228 8 10 8.44772 10 9ZM7.60864 16.7826C8.03793 16.9973 8.55932 16.8259 8.77813 16.4001C8.7774 16.4014 8.77732 16.4016 8.77789 16.4005L8.77956 16.3973L8.7809 16.3946L8.7817 16.3931L8.78212 16.3922C8.7808 16.3948 8.77947 16.3975 8.77813 16.4001C8.77827 16.3998 8.77842 16.3995 8.7786 16.3992C8.78091 16.395 8.78688 16.3844 8.79671 16.3682C8.81644 16.3357 8.85136 16.2814 8.90307 16.2125C9.00679 16.0742 9.17549 15.8801 9.42156 15.6833C9.90259 15.2984 10.7125 14.875 11.9999 14.875C13.2874 14.875 14.0973 15.2984 14.5783 15.6833C14.8244 15.8801 14.9931 16.0742 15.0968 16.2125C15.1485 16.2814 15.1835 16.3357 15.2032 16.3682C15.213 16.3844 15.219 16.395 15.2213 16.3992C15.2215 16.3995 15.2216 16.3998 15.2218 16.4001C15.2221 16.4007 15.2223 16.4011 15.2224 16.4012L15.222 16.4005L15.2203 16.3973L15.219 16.3946L15.2182 16.3931L15.2178 16.3922C15.2191 16.3949 15.2204 16.3975 15.2218 16.4001C15.4406 16.8259 15.962 16.9973 16.3913 16.7826C16.8235 16.5665 16.9987 16.0409 16.7826 15.6087L15.9999 16C16.7826 15.6087 16.7823 15.6082 16.7821 15.6077L16.7816 15.6068L16.7805 15.6046L16.7781 15.5998L16.772 15.588C16.7673 15.5792 16.7616 15.5684 16.7547 15.5559C16.7409 15.5308 16.7224 15.4984 16.6991 15.46C16.6524 15.3831 16.5857 15.2811 16.4968 15.1625C16.3193 14.9258 16.0505 14.6199 15.6716 14.3167C14.9026 13.7016 13.7125 13.125 11.9999 13.125C10.2874 13.125 9.0973 13.7016 8.32834 14.3167C7.94941 14.6199 7.68061 14.9258 7.50307 15.1625C7.41416 15.2811 7.34752 15.3831 7.30084 15.46C7.27747 15.4984 7.25903 15.5308 7.24522 15.5559C7.23832 15.5684 7.23256 15.5792 7.22793 15.588L7.2218 15.5998L7.21936 15.6046L7.21829 15.6068L7.21779 15.6077C7.21756 15.6082 7.21732 15.6087 7.99995 16L7.21732 15.6087C7.00121 16.0409 7.1764 16.5665 7.60864 16.7826Z"
            fill="#344564"
          />
        </svg>
      ),
    },
    {
      id: 2,
      state: false,
      svg: (
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
            d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM8 14.125C7.51675 14.125 7.125 14.5168 7.125 15C7.125 15.4832 7.51675 15.875 8 15.875H16C16.4832 15.875 16.875 15.4832 16.875 15C16.875 14.5168 16.4832 14.125 16 14.125H8ZM16 9C16 9.55228 15.5523 10 15 10C14.4477 10 14 9.55228 14 9C14 8.44772 14.4477 8 15 8C15.5523 8 16 8.44772 16 9ZM9 10C9.55228 10 10 9.55228 10 9C10 8.44772 9.55228 8 9 8C8.44772 8 8 8.44772 8 9C8 9.55228 8.44772 10 9 10Z"
            fill="#344564"
          />
        </svg>
      ),
    },
    {
      id: 3,
      state: false,
      svg: (
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
            d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM7.60864 13.2176C8.03793 13.003 8.55933 13.1743 8.77813 13.6002L8.7786 13.601C8.78091 13.6052 8.78688 13.6159 8.79671 13.6321C8.81644 13.6646 8.85136 13.7188 8.90307 13.7877C9.00679 13.926 9.17549 14.1201 9.42156 14.317C9.90259 14.7018 10.7125 15.1252 11.9999 15.1252C13.2874 15.1252 14.0973 14.7018 14.5783 14.317C14.8244 14.1201 14.9931 13.926 15.0968 13.7877C15.1485 13.7188 15.1835 13.6646 15.2032 13.6321C15.213 13.6159 15.219 13.6052 15.2213 13.601L15.2218 13.6001C15.2225 13.5988 15.2226 13.5987 15.222 13.5997L15.2218 13.6001C15.4406 13.1743 15.962 13.003 16.3913 13.2176C16.8235 13.4337 16.9987 13.9593 16.7826 14.3916L15.9999 14.0002C16.7826 14.3916 16.7823 14.392 16.7821 14.3925L16.7816 14.3935L16.7805 14.3956L16.7781 14.4004L16.772 14.4122L16.7618 14.4312L16.7547 14.4444C16.7409 14.4695 16.7224 14.5018 16.6991 14.5403C16.6524 14.6172 16.5857 14.7192 16.4968 14.8377C16.3193 15.0745 16.0505 15.3804 15.6716 15.6835C14.9026 16.2987 13.7125 16.8752 11.9999 16.8752C10.2874 16.8752 9.0973 16.2987 8.32834 15.6835C7.94941 15.3804 7.68061 15.0745 7.50307 14.8377C7.41416 14.7192 7.34752 14.6172 7.30084 14.5403C7.27747 14.5018 7.25903 14.4695 7.24522 14.4444C7.23832 14.4318 7.23256 14.4211 7.22793 14.4122L7.2218 14.4004L7.21936 14.3956L7.21829 14.3935L7.21779 14.3925C7.21756 14.392 7.21732 14.3916 7.99995 14.0002L7.21732 14.3916C7.00121 13.9593 7.1764 13.4337 7.60864 13.2176ZM16 9C16 9.55228 15.5523 10 15 10C14.4477 10 14 9.55228 14 9C14 8.44772 14.4477 8 15 8C15.5523 8 16 8.44772 16 9ZM9 10C9.55228 10 10 9.55228 10 9C10 8.44772 9.55228 8 9 8C8.44772 8 8 8.44772 8 9C8 9.55228 8.44772 10 9 10Z"
            fill="#344564"
          />
        </svg>
      ),
    },
  ])
  const [flag, setFlag] = useState(0)
  const [popap, setPopap] = useState(false)
  const bollRef = useRef(popap)
  bollRef.current = popap
  const [opacity, setOpacity] = useState(false)
  const [select] = useState(["", "АмериканВодка", "war with russia", "tresh"])
  const [values, setValues] = useState([
    { title: "Имя", body: "" },
    { title: "Телефон", body: "" },
    { title: "Валюта", body: "" },
    { title: "Стоимость", body: "" },
    { title: "Ссылка на товар", body: "" },
    { title: "Промокод", body: "" },
    { title: "Комментарий", body: "" },
  ])
  const [belmo, setBelmo] = useState(false)

  useEffect(() => {
    if (flag !== 0) {
      setPopap(true)
      const timer = setTimeout(() => {
        setPopap(!bollRef.current)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [flag])
  function clickEmotion(elem) {
    setFaces(
      faces.map((i) =>
        i.id === elem.id ? { ...i, state: !i.state } : { ...i, state: false }
      )
    )
  }
  function choseSelect(i) {
    setOpacity(!opacity)
    setValues(
      values.map((e) => (e.title === "Магазин" ? { ...e, body: i } : { ...e }))
    )
  }

  function setChangesInputs(e, title) {
    setValues(
      values.map((elem) =>
        elem.title === title ? { ...elem, body: e.target.value } : { ...elem }
      )
    )
  }

  const handleFormSubmit = (e) => {
    let count = 0
    e.preventDefault()

    values.forEach((i) => {
      if (i.body && i.title !== "Промокод" && i.title !== "Комментарий") {
        count++
      }
    })
    if (count === 5) {
      axios.post("https://649ff10fed3c41bdd7a6d9db.mockapi.io/Buyers", values)
      setValues([
        { title: "Имя", body: "" },
        { title: "Телефон", body: "" },
        { title: "Валюта", body: "" },
        { title: "Стоимость", body: "" },
        { title: "Ссылка на товар", body: "" },
        { title: "Промокод", body: "" },
        { title: "Комментарий", body: "" },
      ])
      setFlag(flag + 1)
      setBelmo(!belmo)
    }
  }
  return (
    <div className={belmo ? "App hidden" : "App"}>
      {belmo && (
        <Offer
          handleFormSubmit={handleFormSubmit}
          setBelmo={setBelmo}
          belmo={belmo}
          setChangesInputs={setChangesInputs}
          values={values}
        />
      )}
      <div className="container">
        <div className="head">
          <div className="logo">
            <img src={require("./img/logo.png")} alt="logo"></img>
          </div>
          {popap && (
            <div className="good_done">
              <div className="done_text"> Заявка отправлена </div>
              <svg
                width="24"
                height="19"
                viewBox="0 0 24 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="3.14386"
                  height="15.6879"
                  rx="1.57193"
                  transform="matrix(0.634552 -0.77288 0.634552 0.77288 0 6.2981)"
                  fill="url(#paint0_linear_100_718)"
                />
                <rect
                  width="3.14386"
                  height="20.7749"
                  rx="1.57193"
                  transform="matrix(0.634552 0.77288 -0.634552 0.77288 21.2744 0)"
                  fill="url(#paint1_linear_100_718)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_100_718"
                    x1="1.10035"
                    y1="4.70637"
                    x2="4.64616"
                    y2="5.59259"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.243718" stop-color="#F2B067" />
                    <stop offset="1" stop-color="#F59326" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_100_718"
                    x1="1.10035"
                    y1="6.23247"
                    x2="4.73808"
                    y2="6.91904"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.243718" stop-color="#F2B067" />
                    <stop offset="1" stop-color="#F59326" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          )}
          <div className="btnOffer" onClick={() => setBelmo(!belmo)}>
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
        </div>
        <div className="body">
          <div className="topBlock">
            <Slider />
            <About faces={faces} clickEmotion={clickEmotion} />
          </div>
          <OurHelp setBelmo={setBelmo} belmo={belmo} />
          <Advantages setBelmo={setBelmo} belmo={belmo} />
          <HowWork />

          <Reviews />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
