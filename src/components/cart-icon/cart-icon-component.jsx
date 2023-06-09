import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'
import {useContext} from 'react'
import {CartContext} from '../../context/cart.context'

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext)
  const {cartItems} = useContext(CartContext)
  const toggle = () => setIsCartOpen(!isCartOpen)

  return(
    <div className='cart-icon-container' onClick={toggle}>
      <ShoppingIcon className='shopping-icon'/>
      <span className='item-count'>
        {cartCount}
      </span>
    </div>
  )

}
export default CartIcon
