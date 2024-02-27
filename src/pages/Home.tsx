import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

const Home = () => {

  const addToCartHandler = () => {

  }
  return (
    <div className='home'>
      <section></section>

      <h1>
        Latest Products{' '}
        <Link className='findmore' to={'/search'}>
          More
        </Link>
      </h1>

      <main>
        <ProductCard
          productId='dnds'
          name='MacBook'
          price={500000}
          stock={45}
          photo='https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4'
          handler={addToCartHandler}
        />
      </main>
    </div>
  )
}

export default Home
