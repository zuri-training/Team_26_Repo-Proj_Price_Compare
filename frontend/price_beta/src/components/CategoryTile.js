import React from 'react'
import { BsPlus } from 'react-icons/bs'
import { Link } from 'react-router-dom'


const CategoryTile = ({title, path}) => {
  return (
    <div className='category_tile'>
        <BsPlus/>
        <Link to={path}>{title}</Link>
    </div>
  )
}

export default CategoryTile