import { useState } from "react"

const Card = ({imageUrl, title, sizes, price}) => {
  const [value, setValue] = useState(0)
  const [activeSize, setActiveSize] = useState(0)
  
  
  return (
    <div className="card">
        <img  className="card__img" src={imageUrl} alt={title} />
        <h3 className="card__title">{title}</h3>
        <div className="card__size">
            {sizes.map((size, i)=> <p key={i} className={activeSize === i ? 'active':''} onClick={()=>setActiveSize(i)} >{size} inch</p> )}
        </div>
        <div className="card__actions">
            <p className="card__actions__price">From ${price}</p>
            <button className="cart-btn cart-btn--action" onClick={()=>{setValue(value+1)}}>Add to cart  <span>{value}</span> </button>
        </div>
    </div>
  )
}

export default Card