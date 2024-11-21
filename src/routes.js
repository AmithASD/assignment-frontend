import React from 'react'
import Products from "./pages/main/products";
import AddProduct from "./pages/add/AddProduct";
import EditProduct from "./pages/edit/edit";
import FavoriteProduct from "./pages/favorite/favoriteProducts";
import SearchProduct from "./pages/search/search";
import DeleteProduct from "./components/deletProduct";

const routes = [
    { path: '/', exact: true, name: 'Products' },
    { path: '/products', name: 'Products', element: Products },
    { path: '/add-product', name: 'AddProducts', element: AddProduct },
    { path: '/edit-product', name: 'EditProducts', element: EditProduct },
    { path: '/favorite', name: 'FavoriteProducts', element: FavoriteProduct },
    { path: '/search', name: 'SearchProducts', element: SearchProduct },
    { path: '/delete', name: 'DeleteProducts', element: DeleteProduct },
]

export default routes
