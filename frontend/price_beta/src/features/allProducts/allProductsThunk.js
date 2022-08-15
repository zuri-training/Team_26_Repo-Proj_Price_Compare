import customFetch, { checkForUnauthorizedResponse } from "../../utils/axios";

export const getAllProductsThunk = async(_, thunkAPI) => {
    // console.log(thunkAPI)
    const {page, search} = thunkAPI.getState().allProducts
    let url = `/api/product?page=${page}&search${search};`

    if (search) {
        url = url + `&search=${search}`
    }
    try {
        const resp = await customFetch.get(url)
        // console.log(resp)
        return resp.data;
    } catch (error) {
        return checkForUnauthorizedResponse(error, thunkAPI)
    }
}