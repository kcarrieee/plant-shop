import {useState, useEffect} from 'react'
import CardList from '../components/CardList'
import Categories from '../components/Categories'
import Sort from '../components/Sort'
import { useContext } from 'react'
import { SearchContext } from '../App'

const Home = () => {
  const [dataShop, setDataShop] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [categoryId, setCategoryId] = useState(0)
  const [sortType, setSortType] = useState({
    name:'popularity',
    sortTypeProp: 'rating'
  })
   const { search } = useContext(SearchContext)
  

    useEffect(()=>{

    const categoryParam = categoryId > 0 ? `category=${categoryId}`: ''
    const sortParam  = sortType.sortTypeProp
    const searchParam = search ? `&search=${search}` : ''

    const fetchData = async()=>{
    setIsLoading(true)
    const res = await fetch(`https://628cbf62a3fd714fd0389a06.mockapi.io/items?${categoryParam}&sortBy=${sortParam}&order=desc${searchParam}`)
    const data = await res.json()
    setDataShop(data)
    setIsLoading(false)
    }
    fetchData()
    // eslint-disable-next-line
  },[categoryId,sortType,search])

  return (
    <>
      <div className='category-wrapper'>
          <Categories activeCategory={categoryId} handleSetCategory={(i)=>setCategoryId(i)}/>
          <Sort activeSortType={sortType} handleSetSort={(i)=>setSortType(i)}/>
        </div>
        <CardList data={dataShop} isLoading={isLoading} />
    </>
  )
}

export default Home