import React from 'react'
import { useParams } from 'react-router-dom'

const ItemDetail = () => {
const {id} = useParams();
console.log (id)
  return (
    <div>ItemDetail</div>
  )
}

export default ItemDetail