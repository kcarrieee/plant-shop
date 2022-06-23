import { RiShoppingCartLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link className="navbar__logo" to='/'>
          <svg width="25" height="43" viewBox="0 0 43 58" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.26079 57.9989V57.0677C0.26079 45.4094 0.244203 33.7509 0.26079 22.0831C0.272635 16.0554 4.28862 11.089 10.1645 10.1931C12.7471 9.80072 15.4363 10.127 18.2534 10.127V11.1079C18.2534 22.5693 18.2534 34.0307 18.2534 45.4919C18.2534 52.8196 13.0835 57.9611 5.74103 57.9873C3.98061 58.0038 2.20599 57.9989 0.26079 57.9989Z" fill="#00DF9A"/>
          <path d="M24.2534 37.9404V0.000564812C27.5908 0.174749 30.9162 -0.417481 34.142 0.74707C38.8926 2.42821 42.1227 7.05761 42.2125 12.313C42.2766 16.5431 42.2504 20.7733 42.2339 25.0035C42.2029 32.2197 37.6003 37.4453 30.75 37.9431C28.628 38.0725 26.4918 37.9404 24.2534 37.9404Z" fill="#00DF9A"/>
          </svg>
          Plant shop
        </Link>
        <div>
           <div className="search">
           <input type="text" placeholder=" "/>
            <div>
                <svg>
                    <use xlinkHref="#path"/>
                </svg>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" style={{display: 'none'}}>
            <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 28" id="path">
                <path d="M32.9418651,-20.6880772 C37.9418651,-20.6880772 40.9418651,-16.6880772 40.9418651,-12.6880772 C40.9418651,-8.68807717 37.9418651,-4.68807717 32.9418651,-4.68807717 C27.9418651,-4.68807717 24.9418651,-8.68807717 24.9418651,-12.6880772 C24.9418651,-16.6880772 27.9418651,-20.6880772 32.9418651,-20.6880772 L32.9418651,-29.870624 C32.9418651,-30.3676803 33.3448089,-30.770624 33.8418651,-30.770624 C34.08056,-30.770624 34.3094785,-30.6758029 34.4782612,-30.5070201 L141.371843,76.386562" transform="translate(83.156854, 22.171573) rotate(-225.000000) translate(-83.156854, -22.171573)"></path>
            </symbol>
        </svg>
        </div>
        <Link className="navbar__btn" to='/cart'>
        <button className="cart-btn" >
           $200 
         <RiShoppingCartLine />
        </button>
        </Link>
    </nav>
  )
}

export default Navbar