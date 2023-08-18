import React, {useState, useEffect} from 'react'
import { ACTIONS } from '../../../App'
const CartCard = ({dispatch,title, url, price, quantity, id}) => {
    const [count, setCount] = useState(1)
    useEffect(()=>{
        setCount(quantity)
    },[])
    function handlePlus(){
      setCount(prevCount=> prevCount + 1)
      dispatch({type:ACTIONS.UPDATE_QUANTITY, payload:{id:id}})
    }
    function handleReduce(){
      if (count>1){
          setCount(prevCount => prevCount - 1)
          dispatch({type:ACTIONS.REDUCE_QUANTITY, payload:{id:id}})
      }
    }
  return (
    <div className='productCart_card'>
    <div className='productCart_inf'>
        <img className='productCart_img' src={url} />
            <div className='productCart_infleft'>
                <a href="#" >{title}</a>
                <h4 className='productCart_price'>{price} DZD</h4>
                <button className="productCart_btn" onClick={()=>dispatch({type:ACTIONS.DELETE_QUANTITY, payload:{id:id}})}>Remove</button>
            </div>
        </div>
        <div className='productCart_count'>
                <button className='btn_reduce' onClick={handleReduce}>
                    -
                </button>
                <span className='productCart_quantity'>{count}</span>
                <button className='btn_plus' onClick={handlePlus}>
                    +
                </button>


        </div>

    </div>
  )
}

export default CartCard