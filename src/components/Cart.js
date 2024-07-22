import { useDispatch, useSelector } from "react-redux"
import ItemLists from "./ItemLists"
import { clearCart } from "../utils/cartSlice"

export default Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)

    const dispatch = useDispatch()

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return (<div className="text-center m-10 p-10">
        <h1 className="text-xl font-bold">Cart</h1>
        <div className="6/12 m-auto">
            <button className="p-2 m-2 rounded-xl bg-black text-white" onClick={handleClearCart}>Clear Cart</button>
            {cartItems.length === 0 && <h1>Your Cart is Empty. Please add items to your Cart</h1>}
            <ItemLists itemCards={cartItems} />
        </div>
    </div>)

}