import React, { useReducer } from 'react'
const reducer = (state, action) => {
    switch (action) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            throw new Error()
    }
}
const Counter = () => {
    const [count, dispatch] = useReducer(reducer, 2)
    return (
        <div>
            <button  onClick={() => dispatch('INCREMENT')}>+</button>
            {count}
            <button onClick={() => dispatch('DECREMENT')}>-</button>
            {/* <input type="text" placeholder="num" /> */}
      {/* <input type="submit">SUBMIT</input> */}
            </div>
                )
                }
export default Counter;