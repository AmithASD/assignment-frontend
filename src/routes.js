import React from 'react'
// import Products from "./pages/main/products";
// import AddProduct from "./pages/add/AddProduct";
// import EditProduct from "./pages/edit/edit";
// import FavoriteProduct from "./pages/favorite/favoriteProducts";
// import SearchProduct from "./pages/search/search";
// import DeleteProduct from "./components/deletProduct";

const Products = React.lazy(() => import('../src/pages/main/products'));
const AddProduct = React.lazy(() => import('../src/pages/add/AddProduct'));
const EditProduct = React.lazy(() => import('../src/pages/edit/edit'));
const FavoriteProduct = React.lazy(() => import('../src/pages/favorite/favoriteProducts'));
const SearchProduct = React.lazy(() => import('../src/pages/search/search'));

const routes = [
    { path: '/', exact: true, name: 'Products' },
    { path: '/products', name: 'Products', element: Products },
    { path: '/add-product', name: 'AddProducts', element: AddProduct },
    { path: '/edit-product/:id', name: 'EditProducts', element: EditProduct },
    { path: '/favorite', name: 'FavoriteProducts', element: FavoriteProduct },
    { path: '/search', name: 'SearchProducts', element: SearchProduct },
]

export default routes
