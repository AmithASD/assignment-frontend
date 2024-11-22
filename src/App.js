import {BrowserRouter, Route, Routes} from "react-router-dom";
// import Products from "./pages/main/products";
// import AddProduct from "./pages/add/AddProduct";
// import EditProduct from "./pages/edit/edit";
// import FavoriteProduct from "./pages/favorite/favoriteProducts";
// import SearchProduct from "./pages/search/search";
// import DeleteProduct from "./components/deletProduct";
import React from 'react'
import DefaultLayout from "./layout/DefaultLayout";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
//
// const Products = React.lazy(() => import('./pages/main/products'));
// const AddProduct = React.lazy(() => import('./pages/add/AddProduct'));
// const EditProduct = React.lazy(() => import('./pages/edit/edit'));
// const FavoriteProduct = React.lazy(() => import('./pages/favorite/favoriteProducts'));
// const SearchProduct = React.lazy(() => import('./pages/search/search'));
// const DeleteProduct = React.lazy(() => import('./components/deletProduct'));
// const DefaultLayout =React.lazy(() => import('./layout/DefaultLayout'))

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/*<Route path="/" element={<Products/>}/>*/}
                {/*<Route path="/add-product" element={<AddProduct/>}/>*/}
                {/*<Route path="/edit-product" element={<EditProduct/>}/>*/}
                {/*<Route path="/favorite" element={<FavoriteProduct/>}/>*/}
                {/*<Route path="/search" element={<SearchProduct/>}/>*/}
                {/*<Route path="/delete" element={<DeleteProduct/>}/>*/}

                <Route path="*" name="Products" element={<DefaultLayout />} />
                <Route path="/login"  element={<Login />} />
                <Route path="/register"  element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
