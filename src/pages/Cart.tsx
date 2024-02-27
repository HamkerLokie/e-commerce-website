import { useEffect, useState } from 'react'
import { VscError } from 'react-icons/vsc'

const cartItems = []
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
        {/* {cartItems.map((item) => {
      <></>
    })} */}
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
      </aside>
    </div>
  )
}

export default Cart
