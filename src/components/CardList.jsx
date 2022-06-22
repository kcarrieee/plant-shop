import { useState } from 'react'
import Card from './Card'
import Data from '../data/data.json'

const CardList = () => {
  const [data, setData] = useState(Data)

  return (
    <div className='grid'>
        {data.map(item => (<Card key={item.id} {...item}/>))}  
    </div>
  )
}

export default CardList