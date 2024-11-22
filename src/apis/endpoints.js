export const baseUrl = "http://localhost:3001/api/";


// Auth
export const SIGN_UP = `${baseUrl}auth/register`;
export const LOG_IN = `${baseUrl}auth/login`;

// Product
export const FETCH_PRODUCTS = `${baseUrl}product/get-data`;
export const FETCH_FAVORITE_PRODUCTS = `${baseUrl}product/get-favorite-data`;
export const SAVE_PRODUCT = `${baseUrl}product/save-data`;
export const EDIT_PRODUCTS = `${baseUrl}product/edit-product`;
export const DELETE_PRODUCTS = `${baseUrl}product/delete-data`;
export const TOGGLE_FAVORITE__PRODUCTS = `${baseUrl}product/toggle-favorite`;