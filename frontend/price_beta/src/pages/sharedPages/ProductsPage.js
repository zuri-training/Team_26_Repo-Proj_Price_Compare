import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { PageBtnContainer, ProductCard, SearchBar } from '../../components'
import { LoadingCenter } from '../../components/Loading'
import { getAllProducts } from '../../features/allProducts/allProductsSlice'

const ProductsPage = () => {
  const {
    products,
    isLoading,
    page,
    search,
    numOfPages,
    totalProducts
  } = useSelector((store) => store.allProducts)

  const dispatch = useDispatch()

  useEffect(() => {
    setTimeout(() => {
      dispatch(getAllProducts())
    }, 2000)
  }, [page, search])

  if (isLoading) {
    return <LoadingCenter center />
  }

  if (products.length === 0) {
    return (
      <div className='section section-center'>
        <h2>No Products to display...</h2>
      </div>
    )
  }

  return (
    <>
      <SearchBar/>
      <ProductsPageWrapper className=''>
        <h4 className='section-center'>
          {totalProducts} Product{products.length > 1 && 's'} available{' '}
        </h4>
        <div className='section-center products-container'>
          {products.map((singleProduct) => {
            const {id, category, product, brand, price, image_url, store, product_url, available} = singleProduct
            return <ProductCard
              key={id}
              brand={brand}
              price={price}
              image_url={image_url}
              product_url={product_url}
              available={available}
              product={product}
              store={store}
              category={category}              
              />
          })
          }
        </div>
        {numOfPages > 1 && <PageBtnContainer/>}
      </ProductsPageWrapper>
    </>
  )
}

const ProductsPageWrapper = styled.div`
  margin: 40px 0 20px;
  padding: 0 72px;

  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
    margin-top: 20px;
  }

  @media screen and (max-width: 428px) {
    padding: 0;
    margin-top: 20px;
  }

  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`

export default ProductsPage