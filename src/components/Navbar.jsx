import { RiShoppingCartLine } from 'react-icons/ri'
import SearchInput from './SearchInput'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'

const Navbar = () => {
  const {items, totalPrice} = useSelector(state => state.cart)
  const totalCount = items.reduce((acc, cur)=> acc + cur.count, 0)
  return (
    <nav className="navbar">
        <Link className="navbar__logo" to='/'>
          <svg width="25" height="43" viewBox="0 0 43 58" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.26079 57.9989V57.0677C0.26079 45.4094 0.244203 33.7509 0.26079 22.0831C0.272635 16.0554 4.28862 11.089 10.1645 10.1931C12.7471 9.80072 15.4363 10.127 18.2534 10.127V11.1079C18.2534 22.5693 18.2534 34.0307 18.2534 45.4919C18.2534 52.8196 13.0835 57.9611 5.74103 57.9873C3.98061 58.0038 2.20599 57.9989 0.26079 57.9989Z" fill="#00DF9A"/>
          <path d="M24.2534 37.9404V0.000564812C27.5908 0.174749 30.9162 -0.417481 34.142 0.74707C38.8926 2.42821 42.1227 7.05761 42.2125 12.313C42.2766 16.5431 42.2504 20.7733 42.2339 25.0035C42.2029 32.2197 37.6003 37.4453 30.75 37.9431C28.628 38.0725 26.4918 37.9404 24.2534 37.9404Z" fill="#00DF9A"/>
          </svg>
          Plant shop
        </Link>
        <SearchInput/>
        <Link className="navbar__btn" to='/cart'>
        <button className="cart-btn" >
           ${totalPrice}
         <RiShoppingCartLine />
         ({totalCount})
        </button>
        </Link>
    </nav>
  )
}

export default Navbar