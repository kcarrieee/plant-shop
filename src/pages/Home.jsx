import {useState, useEffect} from 'react'
import CardList from '../components/CardList';
import Categories from '../components/Categories';
import Sort from '../components/Sort';

const Home = () => {
  const [dataShop, setDataShop] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    const fetchData = async()=>{
    const res = await fetch('https://628cbf62a3fd714fd0389a06.mockapi.io/items')
    const data = await res.json()
    setDataShop(data)
    setIsLoading(false)
    }
    fetchData()
  },[])

  return (
    <>
      <div className='category-wrapper'>
          <Categories/>
          <Sort/>
        </div>
        <CardList data={dataShop} isLoading={isLoading} />
    </>
  )
}

export default Home