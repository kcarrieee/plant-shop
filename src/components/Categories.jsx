
const Categories = ({activeCategory, handleSetCategory}) => {
  const categoryArr = ['All','Rare','Green','Bright','Big leafs']

  return (
       <div className="categories">
          <ul>
              {categoryArr.map((item, i) =>(
                <li 
                  key={i} 
                  className={activeCategory === i ? 'active': ''} 
                  onClick={()=>{handleSetCategory(i)}}
                  >{item}</li>
              ))}
          </ul>
        </div>
  )
}

export default Categories