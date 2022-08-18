import React from 'react'
import { useFilterContext } from '../context/filter_context'
import { BsFillGridFill, BsList } from 'react-icons/bs'
import styled from 'styled-components'
const Sort = () => {
  const { 
    filtered_products: products,
    grid_view,
    setGridView,
    setListView,
    sort,
    updateSort 
  } = useFilterContext()


  return (
    <Wrapper>
      <div className='btn-container'>
        <button 
          type='button' 
          className={`${grid_view ? 'active' : null} `}
          onClick={setGridView}
        >
          <BsFillGridFill />
        </button>
        <button 
          type='button' 
          className={`${!grid_view ? 'active' : null} `}
          onClick={setListView}  
        >
          <BsList />
        </button>
      </div>
      <p>{products.length} products found</p>
      <hr />
      <form>
        <label htmlFor='sort'>sort by</label>
        <select 
          name='sort' 
          id='sort' 
          className='sort-input'
          value={sort}
          onChange={updateSort}
        >
          <option value='price-lowest'>price (lowest)</option>
          <option value='price-highest'>price (highest)</option>
          <option value='name-a'>name (a-z)</option>
          <option value='name-z'>name (z-a)</option>

        </select>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  margin-bottom: 2rem;
  column-gap: 2rem;
  @media (max-width: 576px) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.75rem;
    .btn-container {
      width: 50px;
    }
    label {
      display: inline-block;
      margin-right: 0.5rem;
    }
  }
  @media (min-width: 768px) {
    column-gap: 2rem;
  }
  p {
    text-transform: capitalize;
    margin: 0;
  }
  hr {
    border: none;
    background: var(--clr-primaryOrange5);
    width: -webkit-fill-available;
  }
  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.5rem;
    button {
      background: transparent;
      border: 1px solid var(--clr-grey3);
      color: var(--clr-primaryOrange5);
      width: 2rem;
      border-radius: var(--radius);
      height: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      svg {
        font-size: 9rem;
      }
    }
    .active {
      background: var(--clr-primaryOrange5);
      color: var(--clr-white);
    }
  }

  .sort-input {
    background: var(--clr-background);
    border-color: transparent;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
  }
  label {
    font-size: 1rem;
    text-transform: capitalize;
  }
`

export default Sort