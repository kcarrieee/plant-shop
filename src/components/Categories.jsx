import { useState } from "react"

const Categories = () => {
  const categoryArr = ['All','Rare','Green','Bright','Big leafs']
  const [activeCategory, setActiveCategory] = useState(0)

  return (
       <div className="categories">
          <ul>
              {categoryArr.map((item, i) =>(
                <li 
                  key={i} 
                  className={activeCategory === i ? 'active': ''} 
                  onClick={()=>{setActiveCategory(i)}}
                  >{item}</li>
              ))}
          </ul>
        </div>
  )
}

export default Categories