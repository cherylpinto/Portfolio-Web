import React from 'react'
import NavLink from './NavLink'

const MenuOverlay = ({links,setIsOpen}) => {
  return (
    <ul className='flex flex-col py-4 items-center'>
      {
        links.map((link, index) => (
          <li key={index}>
            <NavLink href={link.path} title={link.title} setIsOpen={setIsOpen}></NavLink>
          </li>
        ))
      }
    </ul>
  )
}

export default MenuOverlay
