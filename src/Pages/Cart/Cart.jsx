import React, {useContext } from 'react'
import LayOut from '../../Components/LayOut/LayOut'
import ProductCard from '../../Components/ProductP/ProductCard'
import {DataContext} from '../../Components/DataProvider/DataProvider'
import {Link} from 'react-router-dom'
import classes from './Cart.module.css'
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat'
import { Type } from '../../Utility/Action.type'
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";


function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  const increment = (item) => {
    dispatch({
      type:Type.ADD_TO_BASKET, item
    })
  }
  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id
    })
  }
  return (
    <LayOut>
      <section className={classes.container}>
        <div className= {classes.cart_container}>
          <h2> Hello</h2>
          <h3>Your shopping basket</h3>
          <hr />
          {
            basket?.length == 0 ? (<p>Opps! No item in your cart</p>) : (
              basket?.map((item)=>{
                return (
                  <section className={classes.cart_product}>
                    <ProductCard
                      key={item.name}
                      product={item}
                      renderDesc={true}
                      renderAdd={false}
                      flex={true}
                    />
                    <div className={classes.btn_container}>
                      <button
                        className={classes.btn}
                        onClick={() => increment(item)}>
                        <MdKeyboardArrowUp size={25} />
                      </button>
                      <span>{item.amount}</span>
                      <button
                        className={classes.btn}
                        onClick={() => decrement(item.id)}>
                        <MdKeyboardArrowDown size={25} />
                      </button>
                    </div>
                  </section>
                );
              })
            )
            }
        </div>

        {basket?.length !== 0 && (
          <div className={classes.subtotal}> 
            <div>
              <p>Subtotal({basket.length}items)</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contains a gift </small>
            </span>
            <Link to="/payment"> {""} Continue to checkout </Link>
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Cart