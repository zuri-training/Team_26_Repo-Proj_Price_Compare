export const addUserToLocalStorage = (user) => {
    localStorage.setItem('user', JSON.stringify(user))
}

export const removeUserFromLocalStorage = () => {
    localStorage.removeItem('user')
}

export const getUserFromLocalStorage = () => {
    const result = localStorage.getItem('user')
    // const user = result ? JSON.parse(result) : null
    return result
}

export const addTokensToLocalStorage = (tokens) => {
    localStorage.setItem('tokens', JSON.stringify(tokens))
}

export const removeTokensFromLocalStorage = (tokens) => {
    localStorage.removeItem('tokens')
}

export const getTokensFromLocalStorage = (tokens) => {
    localStorage.getItem('tokens')
}