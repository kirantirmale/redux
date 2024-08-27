import React from 'react'
import { useDispatch } from 'react-redux'
import { DecrementCount, IncrementCount } from '../Redux/Action/counterAction'

const ChangeState = () => {
    const dispatch = useDispatch()
  return (
    <div>
      <button onClick={() => dispatch(IncrementCount())}>INCREMENT</button>
      <button onClick={() => dispatch(DecrementCount())}>DECREMENT</button>
    </div>
  )
}

export default ChangeState
