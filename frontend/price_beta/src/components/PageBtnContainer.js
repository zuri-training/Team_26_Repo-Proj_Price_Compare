import React from 'react'
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { changePage } from '../features/allProducts/allProductsSlice'

const PageBtnContainer = () => {
    const { numOfPages, page } = useSelector((store) => store.allProducts)
    const dispatch = useDispatch()

    
    const pages = Array.from({ length: numOfPages}, (_, index) =>{
        return index + 1
    })

    const nextPage = () => {
        let newPage = page + 1
        if (newPage > numOfPages) {
            newPage = 1
        }
        dispatch(changePage(newPage))
    }

    const prevPage = () => {
        let newPage = page - 1
        if (newPage < 1) {
            newPage = numOfPages
        }
        dispatch(changePage(newPage))
    }
  return (
    <PageBtnWrapper>
        <button
            type='button'
            className='prev_btn'
            onClick={prevPage}
        >
            <HiChevronDoubleLeft/>
            Prev
        </button>
        <div className='btn_container'>
            {pages.map((pageNumber) => {
                return (
                    <button
                        type='button'
                        key={pageNumber}
                        onClick={() => dispatch(changePage(pageNumber))}
                        className={pageNumber === page ? 'pageBtn active': 'pageBtn'}
                    >
                        {pageNumber}
                    </button>
                )
            })}
        </div>

        <button
            type='button'
            className='next_btn'
            onClick={nextPage}
        >
            <HiChevronDoubleRight/>
            Next
        </button>

    </PageBtnWrapper>
  )
}

const PageBtnWrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: end;
    flex-wrap: wrap;
    gap: 1rem;
    height: 6rem;
    margin-top: 2rem;
    
    .btn_container {
        background: var(--clr-secondaryOrange);
        border-radius: var(--borderRadius);
    }
    .pageBtn {
        background: transparent;
        border-color: transparent;
        width: 50px;
        height: 40px;
        font-weight: 700;
        font-size: 1.25rem;
        color: var(--clr-text-black);
        border-radius: var(--borderRadius);
        transition: var(--transition);
        cursor: pointer;
    }
    .active {
        background: var(--clr-primaryOrange5);
        color: var(--clr-white);
    }
    .prev_btn, .next_btn {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        width: 100px;
        height: 40px;
        background: var(--clr-white);
        border-color: transparent;
        border-radius: var(--borderRadius);
        color: var(--clr-text-black);
        letter-spacing: var(--letterSpacing);
        cursor: pointer;
        transition: var(--transition);
    }

    .prev_btn:hover, .next_btn:hover {
        background: var(--clr-primaryOrange5);
        color: var(--clr-white);
    }

`

export default PageBtnContainer