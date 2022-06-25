import { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSortType } from '../store/slices/FilterSlice'

 export const list = [
    {name:'popularity',
    sortTypeProp: 'rating'},
    {name:'price',
    sortTypeProp: 'price'},
    {name:'alphabetic',
    sortTypeProp: 'title'},
    ];
  
const Sort = () => {
  const [isopen, setIsopen] = useState(false)
  const sort = useSelector(state => state.filter.sort)
  const dispatch = useDispatch()
  const sortRef = useRef()

  const handleSortSelection=(i)=>{
    dispatch(setSortType(i))
    setIsopen(false)
  }

  useEffect(() => {
    const handleBodyClick = (event) => {
      if (!event.path.includes(sortRef.current)) setIsopen(false)
    }
    document.body.addEventListener('click', handleBodyClick)

    return () => {
      document.body.removeEventListener('click', handleBodyClick)
    }
  },[])


  return (
          <div className="sort" ref={sortRef} >
              <div className="sort__label" >
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                    fill="#2C2C2C"
                  />
                </svg>
                <b>Filter by:</b>
                <span onClick={()=>setIsopen(!isopen)} >{sort.name}</span>
              </div>
              
               {isopen &&  
               <div className="sort__popup">
                <ul>
                 {list.map((item,i) =>(
                  <li key={i} className={sort.sortTypeProp === item.sortTypeProp ? 'active': ''} onClick={()=>handleSortSelection(item)}>{item.name}</li>
                 ))}
                </ul>
                </div>} 
            </div>
  )
}

export default Sort