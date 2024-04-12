import { useEffect, useState } from 'react'
import { VscError } from 'react-icons/vsc'
import CartItem from '../components/cart-items'
import { Link } from 'react-router-dom'

const cartItems = [
  {
    productId: 'dfjbf',
    photo:
      'https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4',
    name: 'MacBook',
    price: 3000,
    quantity: 4,
    stock: 10
  }
]
const subTotal = 8451
const tax = Math.round(subTotal * 0.018)
const shipping = 200
const discount = 400
const total = subTotal + tax + shipping

const Cart = () => {
  const [couponCode, setCouponCode] = useState<string>('')
  const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false)

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if (Math.random() > 0.5) setIsValidCouponCode(true)
      else setIsValidCouponCode(false)
    }, 1000)

    return () => {
      clearTimeout(timeOutId)
      setIsValidCouponCode(false)
    }
  }, [couponCode])

  return (
    <div className='cart'>
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <CartItem key={index} cartItem={item} />
          ))
        ) : (
          <h1>No Items Added</h1>
        )}
      </main>
      <aside>
        <p>SubTotal: Rs{subTotal}</p>
        <p>Shipping Charges: Rs{shipping}</p>
        <p>Tax: Rs{tax}</p>
        <p>
          Discount: <em> - RS.{discount}</em>
        </p>
        <b>Total: Rs. {total}</b>

        <input
          type='text'
          value={couponCode}
          onChange={e => setCouponCode(e.target.value)}
          placeholder='Coupon Code'
        />
        {couponCode &&
          (isValidCouponCode ? (
            <span className='green'>
              Rs. {discount} off using the <code>{couponCode}</code>
            </span>
          ) : (
            <span className='red'>
              <VscError /> Invalid Coupon Code
            </span>
          ))}

        {cartItems.length > 0 && <Link to={`/shipping`}>Checkout</Link>}
      </aside>
    </div>
  )
}

export default Cart
