export const getItemsLS = (key) => JSON.parse(localStorage.getItem(key))
export const setItemsLS = (key,value) => localStorage.setItem(key,JSON.stringify(value))