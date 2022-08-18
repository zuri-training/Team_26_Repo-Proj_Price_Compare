import React from "react";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { handleChange } from "../features/allProducts/allProductsSlice";

const SearchBar = () => {

  const { 
    isLoading,
    search
  } = useSelector((store) => store.allProducts)

  const dispatch = useDispatch()
  const handleSearch = (e) => {
    if(isLoading) return

    dispatch(handleChange({ name: e.target.name, value: e.target.value}))
  }


  // get things from global context

  const handleSubmit = (e) => {
    e.preventDefault()
    // if(searchItem) {
    //   searchGithubUser(searchItem)
    // }
  };

  return (
    <section className="">
      <Wrapper className="">
        <form onSubmit={handleSubmit}>
          <div className="search_field">
            <input type="text" placeholder="What product are you shopping for?"
            name='search'
            value={search}
            onChange={handleSearch} />
            <button type="submit" 
              className="search_btn"><MdSearch/></button>
          </div>
        </form>
      </Wrapper>
    </section>
  )
};

const Wrapper = styled.div`
  margin: 38px auto 0;
  width: 50%;
    .search_field {
      display: flex;
      margin-top: 12px;
        
      input {
        width: 596px;
        height: 52px;
        border: 1.2px solid var(--clr-grey5);
        border-radius: var(--borderRadius);
        background: var(--clr-white);
        outline-color: var(--clr-grey5);
        letter-spacing: var(--letterSpacing);
        color: var(--clr-grey4);
      }
      
      input[type=text] {
        padding: 12px 20px;
      }

      button {
        background: transparent;
        border-color: transparent;
        svg{
            font-size: var(--titleLarge);
            color: var(--clr-grey4);
        }
        transition: var(--transition);
        cursor: pointer;
        position: relative;
        right: 40px;
        &:hover {
          svg {
            color: var(--clr-primaryOrange5);
          }
        }
      }
  
    }

    @media screen and (max-width: 428px) {
      margin: 39px 32px;

      .search_field {
        input {
          padding-right: 60px;
        }
        input[type=text] {
          padding: 6px 10px;
        }
      }
    }

`;

export default SearchBar;