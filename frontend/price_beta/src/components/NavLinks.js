import React from 'react'
import { NavLink } from 'react-router-dom'
import links from '../utils/links'


const NavLinks = ({ toggleSidebar }) => {
  return (
    <div className='nav_links'>
        {
            links.map((link) => {
                const { id, text, path} = link
                return <NavLink
                    to={path}
                    key={id}
                    onClick={toggleSidebar}
                    className={({ isActive }) =>{
                        return isActive ? 'nav-link active' : 'nav-link'
                    }}
                >
                    {text}

                </NavLink>
            })
        }

    </div>
  )
}

export default NavLinks