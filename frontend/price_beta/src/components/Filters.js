import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context'
import { getUniqueValues, formatPrice } from '../utils/helpers'
import { FaCheck } from 'react-icons/fa'

const Filters = () => {
  const {
    filters:{
      text,
      category,
      company,
      color,
      min_price,
      max_price,
      price,
      shipping
    },
    updateFilters,
    clearFilters,
    all_products
  } = useFilterContext()

  const categories = getUniqueValues(all_products, 'category')
  const companies = getUniqueValues(all_products, 'company')
  const colors = getUniqueValues(all_products, 'colors')

  return <Wrapper>
    <div className='content'>
      <form 
        onSubmit={(e) => e.preventDefault()}
      >
        {/* Search Input start */}
        <div className='form-control'>
          <input
            type='text'
            name='text' // matches the text in the filter.state from filter_context
            placeholder='search'
            className='search-input'
            value={text}
            onChange={updateFilters}
          />
        </div>
        {/* Search Input end */}

        {/* Start of Category */}
        <div className='form-control'>
          <h5>Category</h5>
          <div>
            {categories.map((c, index) => { //c represent categories
              return <button 
                key={index}
                onClick={updateFilters}
                type='button'
                name='category'
                className={`${
                  category === c.toLowerCase() ? 'active'
                  : null
                }`}
                >
                  {c}
                </button>
            })}
          </div>
        </div>
        {/* End of Category */}

        {/* Start of Company Filter */}
        <div className='form-control'>
          <h5>Company</h5>
          <select
            name='company'
            value={company}
            onChange={updateFilters}
            className='company'
          >
            {companies.map((c, index) => {
              return (
                <option 
                  key={index}
                  value={c}
                >
                  {c}
                </option>
              )
            } )}
          </select>
        </div>
        {/* End of Company Filter */}

        {/* Start of Color Filter */}
        <div className='form-control'>
          <h5>Colors</h5>
          <div className='colors'>
            {colors.map((c, index) => {
              if (c === 'all') {
                return (
                <button
                  key={index}
                  name='color'
                  onClick={updateFilters}
                  data-color='all'
                  className={`${ color === 'all' ? 'all-btn active'
                  : 'all-btn'
                  }`}> all
                </button>
                )
              }
              return (
                <button
                  key={index}
                  name='color'
                  style={{ background: c }}
                  className={`${
                    color === c ? 'color-btn active' :
                    'color-btn'
                  }`}
                  data-color={c}
                  onClick={updateFilters}
                  >
                    {color === c ? <FaCheck /> : null }
                  </button>
              )
            })}
          </div>
        </div>
        {/* End of Color Filter */}

        {/* Start of Price filter */}
        <div className='form-control'>
          <h5>Price</h5>
          <p className='price'>{formatPrice(price)}</p>
          <input 
            type='range'
            name='price'
            onChange={updateFilters}
            min={min_price}
            max={max_price}
            value={price}
          />  
        </div>
        {/* End of Price filter */}

        {/* Start of Shipping Filter */}
        <div className='form-control shipping'>
          <label htmlFor='shipping'> free shipping</label>
          <input type='checkbox' name='shipping' id='shipping'
            onChange={updateFilters}
            checked={shipping}
          />
        </div>
        {/* End of Shipping Filter */}
      </form>
      <button type='button' className='clear-btn'
        onClick={clearFilters}>
          {' '}
          clear filters
        </button>
    </div>
  </Wrapper>
}

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
      font-size: var(--bodyLarge);
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-background);
    border-radius: var(--radius);
    border-color: var(--clr-grey3);
    letter-spacing: var(--letterSpacing);
    width: 200px;
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--letterSpacing);
    color: var(--clr-grey6);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-primaryOrange5);
  }
  .company {
    background: var(--clr-background);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
    text-transform: capitalize;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    background: var(--clr-primaryOrange4);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`

export default Filters