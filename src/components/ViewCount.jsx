import React from 'react'
import { useSelector } from 'react-redux'

function ViewCount() {
    const count = useSelector(state => state.count.count)
  return (
    <div>
      <h2>Count : {count}</h2>
    </div>
  )
}

export default ViewCount
