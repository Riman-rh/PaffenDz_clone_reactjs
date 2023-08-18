import React,{ useEffect, useState }   from 'react'
import'./Cart.css'
import CartCard from './cartCard/CartCard'
const Cart = ({dispatch, cart}) => {
    const [products, setProducts] = useState([])


    useEffect(()=>{
        if(cart !== null){
            setProducts(cart)
        }
        
    }, [cart])

  return (
    <div className='cart'>
        <div className='cart_header'>
            <img className='cart_header_img' src="/assets/images/pafen.webp" alt="pafen"/>
            <select className="cart_header_select">
                <option value="en">En</option>
                <option value="fr">Fr</option>
                <option value="ar">Ar</option>

            </select>
        </div>
        <div className='cart_wrapper'>
            <div className='cart_section'>
                <form className='client_info'>
                    <h2 className='cart_h2'>Client Information</h2>
                    <div className='client_info_bloc'>
                    <div className='cart_input'>
                        <label className='cart_label'>Firstname</label>
                        <input type="text" name="firstname"/>
                    </div>
                    <div className='cart_input'>
                        <label className='cart_label'>Lastname</label>
                        <input type="text" name="lastname"/>
                    </div>

                    </div>
                    <div className='client_info_bloc'>
                    <div className='cart_input'>
                        <label className='cart_label'>Phone number</label>
                        <input type="text" name="phone"/>
                    </div>
                    <div className='cart_input'>
                        <label className='cart_label'>Address</label>
                        <input type="text" name="address"/>
                    </div>
                    </div>
           
                    <div className='client_select_bloc'>
                    <div className='cart_select'>
                        <label className='cart_label'>State</label>
                        <select>
                            <option></option>
                            <option></option>
                        </select>
                    </div>
                    <div className='cart_select'>
                    <label className='cart_label'>City</label>
                        <select>
                            <option></option>
                            <option></option>
                        </select>
                    </div>
                    </div>
                </form>
                <div className='product_info'>
                    <h2 className='cart_h2'>Product Information</h2>
                    {
                        products?.map((product, index)=>{
                            return <CartCard key={index} dispatch={dispatch} title={product.title} url={product.url} price={product.price} quantity={product.quantity} id={product.id} />
                        })
                    }
                </div>

            </div>
            <div className='order_summary_wrapper'>
                <div className='order_summary'>
                <h2 className='cart_h2'>Order Summary</h2>
                        <div className='order_promo'>
                            <form className='promo_form'> 
                                <label className='cart_label'>Promo code</label>
                                <div className='promo_input_flex'> 
                                    <input className='promo_input' type="text" name="promo_code"/>
                                    <button className='promo_btn'>Apply</button>
                                </div>
                            </form>
                        </div>
                        <div className='product_cost'>
                            <h3 className='cart_h3'>Product Cost</h3>
                            <p className='product_price'>2500 DZD</p>
                        </div>
                        <button className='order_btn'>CONFIRM ORDER</button>
                </div>
                       
                   

                </div>

        </div>

    </div>
  )
}

export default Cart