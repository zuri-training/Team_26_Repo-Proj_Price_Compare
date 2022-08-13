import {
    LOAD_PRODUCTS,
    SET_LISTVIEW,
    SET_GRIDVIEW,
    UPDATE_SORT,
    SORT_PRODUCTS,
    UPDATE_FILTERS,
    FILTER_PRODUCTS,
    CLEAR_FILTERS,
  } from "../actions";
  
  const filter_reducer = (state, action) => {
    if (action.type === LOAD_PRODUCTS) {
      let maxPrice = action.payload.map((p) => p.price)
      maxPrice = Math.max(...maxPrice)
      return {
        ...state,
        all_products: [...action.payload],
        filtered_products: [...action.payload],
        filters: {
          ...state.filters,
          max_price: maxPrice,
          price: maxPrice
        }
      };
    }
    if (action.type === SET_GRIDVIEW) {
      return {
        ...state,
        grid_view: true
      }
    }
    if (action.type === SET_LISTVIEW) {
      return {
        ...state,
        grid_view: false
      }
    }
    if (action.type === UPDATE_SORT) {
      return {
        ...state,
        sort: action.payload
      }
    }
    if (action.type === SORT_PRODUCTS) {
      const { sort, filtered_products} = state
      let tempProducts = [...filtered_products];
      if (sort === 'price-lowest') {
        // tempProducts = tempProducts.sort((a,b) => a.price - b.price)
        tempProducts = tempProducts.sort((a,b) => {
          if (a.price < b.price) {
            return -1
          }
          if (a.price > b.price) {
            return 1
          }
          return 0
        })    
      }
      if (sort === 'price-highest') {
        // tempProducts = tempProducts.sort((a,b) => b.price - a.price)      
        tempProducts = tempProducts.sort((a,b) => {
          if (a.price > b.price) {
            return 1
          }
          if (a.price < b.price) {
            return -1
          }
          return 0
        }) 
      }
      if (sort === 'name-a') {
        tempProducts = tempProducts.sort((a,b) => {
          return a.name.localeCompare(b.name)
        })
      }
      if (sort === 'name-z') {
        tempProducts = tempProducts.sort((a,b) => {
          return b.name.localeCompare(a.name)
        })
      }
      return {
        ...state,
        filtered_products: tempProducts
      }
    }
    if (action.type === UPDATE_FILTERS) {
      const { name, value } = action.payload
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value
        }
      }
    }
    if (action.type === FILTER_PRODUCTS) {
      const { all_products } = state
      const {
        text,
        category,
        company,
        color,
        price,
        shipping
      } = state.filters
  
      let tempProducts = [...all_products]
  
      // Start filtering
      // For Text
      if (text) {
        tempProducts = tempProducts.filter((product) => {
          return product.name.toLowerCase().startsWith(text)
        })
      }
      // For Category
      if (category !== 'all') {
        tempProducts = tempProducts.filter((product) => {
          return product.category === category
        })
      }
      // For Company
      if (company !== 'all') {
        tempProducts = tempProducts.filter((product) => {
          return product.company === company
        })
      }
  
      // For Colors
      if (color !== 'all') {
        tempProducts = tempProducts.filter((product) => {
          return product.colors.find((c) => c === color)
        })
      }
  
      // For Price
      tempProducts = tempProducts.filter((product) => {
        return product.price <= price
      })
  
      // For Shipping
      if (shipping) {
        tempProducts = tempProducts.filter((product) => product.shipping === true)
      }
      
      return {
        ...state,
        filtered_products: tempProducts
      }
    }
    if (action.type === CLEAR_FILTERS ) {
      return {
        ...state,
        filters: {
          ...state.filters,
          text: '',
          company: 'all',
          category: 'all',
          color: 'all',
          price: state.filters.max_price,
          shipping: false
        }
      }
    }
  
    // return state;
    throw new Error(`No Matching "${action.type}" - action type`);
  };
  
  export default filter_reducer;