import Card from './Card'
import SkeletonLoader from './SkeletonLoader'

const CardList = ({data, isLoading}) => {

  

  return (
    <div className='grid'>
       {isLoading 
       ? [...new Array(6)].map((_, index) => < SkeletonLoader key={index}/>)
       : data.map(item => <Card key={item.id} {...item}/>)}
    </div>
  )
}

export default CardList