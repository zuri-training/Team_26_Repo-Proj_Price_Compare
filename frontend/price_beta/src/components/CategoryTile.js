import React from 'react'
import { BsPlus } from 'react-icons/bs'


const CategoryTile = ({title}) => {
  return (
    <div className='category_tile'>
        <BsPlus/>
        <span>{title}</span>
    </div>
  )
}

export default CategoryTile