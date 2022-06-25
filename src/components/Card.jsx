import { useState } from "react"
import {useSelector, useDispatch} from 'react-redux'
import {addProduct} from '../store/slices/CartSlice'

const Card = ({id,imageUrl, title, sizes, price}) => {

  const [activeSize, setActiveSize] = useState(0)
  const dispatch= useDispatch()
  
  const cartItems = useSelector(state => state.cart.items.find(obj => obj.id === id))
  const addedItems = cartItems ? cartItems.count : 0;

  const addItem = () =>{
    const item = {
      id,
      title,
      price,
      imageUrl,
      size: sizes[activeSize] 
    }
    dispatch(addProduct(item))

  }
  
  
  return (
    <div className="card">
        <img  className="card__img" src={imageUrl} alt={title} />
        <h3 className="card__title">{title}</h3>
        <div className="card__size">
            {sizes.map((size, i)=> <p key={i} className={activeSize === i ? 'active':''} onClick={()=>setActiveSize(i)} >{size} inch</p> )}
        </div>
        <div className="card__actions">
            <p className="card__actions__price">From ${price}</p>
            <button className="cart-btn cart-btn--action" onClick={addItem}>Add to cart  {addedItems > 0 && <span>{addedItems}</span>} </button>
        </div>
    </div>
  )
}

export default Card