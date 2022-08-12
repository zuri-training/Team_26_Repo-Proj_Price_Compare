import React from 'react'
import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa';
import NavLinks from './NavLinks';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSidebar } from '../features/user/userSlice';

const SmallSidebar = () => {
    const { isSidebarOpen } = useSelector((store) => store.user)
    const dispatch = useDispatch();
    const toggle = () => {
        dispatch(toggleSidebar())
    }
  return (
    <SidebarContainer>
        <div className={isSidebarOpen ? 'sidebar-container show-sidebar'
        : 'sidebar-container'   
    }>
        <div className="content">
            <button className='close-btn' onClick={toggle}>
                <FaTimes/>
            </button>
            <NavLinks toggleSidebar={toggle}/>
        </div>

        </div>
    </SidebarContainer>
  )
}

const SidebarContainer = styled.aside`
    @media (min-width: 992px) {
        display: none;
    }

    .sidebar-container {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: -1;
        opacity: 0;
        // transition: var(--transition);
    } 
    
    .show-sidebar {
        z-index: 99;
        opacity: 1;
    }

    .content {
    background: var(--clr-background);
    width: var(--fluid-width);
    height: 95vh;
    border-radius: var(--borderRadius);
    padding: 4rem 2rem;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    }
    .close-btn {
    position: absolute;
    top: 10px;
    left: 10px;
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    color: var(--clr-primaryOrange5);
    cursor: pointer;
    }
    .nav-links {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    }
    .nav-link {
    display: flex;
    align-items: center;
    color: var(--clr-text-black);
    padding: 1rem 0;
    text-transform: capitalize;
    // transition: var(--transition);
    }
    .nav-link:hover {
    color: var(--clr-primaryOrange5);
    }
    .nav-link:hover .icon {
    color: var(--primary-500);
    }
    .icon {
    font-size: 1.5rem;
    margin-right: 1rem;
    display: grid;
    place-items: center;
    // transition: var(--transition);
    }
    .active {
    color: var(--clr-primaryOrange5);
    }
    .active .icon {
    color: var(--clr-primaryOrange5);
    }


`

export default SmallSidebar