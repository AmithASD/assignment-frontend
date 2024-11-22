import React, {useEffect, useState} from 'react';
import {
    CTable,
    CTableHead,
    CTableRow,
    CTableHeaderCell,
    CTableBody,
    CTableDataCell,
} from '@coreui/react'
import {
    CContainer,
    CRow,
    CCol,
    CForm,
    CFormLabel,
    CFormInput,
    CButton,
} from '@coreui/react'
import {CIcon} from '@coreui/icons-react'
import {
    cilZoom,
    cilPen,
    cilTrash,
    cilStar,
} from '@coreui/icons';
import AddButton from "../../components/addButton";
import {useNavigate} from "react-router-dom";
import API_ENDPOINT from "../../apis/config";
import {DELETE_PRODUCTS, FETCH_PRODUCTS, TOGGLE_FAVORITE__PRODUCTS} from "../../apis/endpoints";
import DeleteProduct from "../../components/deletProduct";

const Products = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    const handleEditProduct = (id) => {
        console.log("clicked the edit id =============>>>", id)
        navigate(`/edit-product/${id}`);
    };

    const ProductsData = async () => {
        try {
            const response = await API_ENDPOINT.get(FETCH_PRODUCTS);
            const DataList = response.data;
            setProducts(DataList);
            console.log("products ==== =====>>>", products);
        } catch (error) {
            console.error('Error:', error);
            navigate('/login');
        }
    }

    const handleOpenDeleteModal = (id) => {
        setSelectedProductId(id);
        setModalVisible(true);
    };

    const handleDeleteProduct = async () => {
        try {
            await API_ENDPOINT.delete(`${DELETE_PRODUCTS}/${selectedProductId}`);
            setProducts((prev) => prev.filter((product) => product._id !== selectedProductId));
            alert('Product deleted successfully');
        } catch (error) {
            console.error('Error deleting product:', error);
            alert('Failed to delete product');
        } finally {
            setModalVisible(false);
        }
    };

    const handleToggleFavorite = async (id) => {
        try {
            const response = await API_ENDPOINT.post(`${TOGGLE_FAVORITE__PRODUCTS}/${id}`);

            setProducts((prev) =>
                prev.map((product) =>
                    product._id === id ? {...product, isFavorite: response.data.isFavorite} : product
                )
            );
        } catch (error) {
            console.error('Error toggling favorite status:', error);
            alert('Failed to update favorite status');
        }
    };

    useEffect(() => {
        ProductsData();
    }, []);

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        navigate(`/search?query=${searchQuery}`);
    };

    return (
        <>
            <h1> Products</h1>
            <CContainer>
                <CRow>
                    <CCol md={9}>
                        <CForm className="d-flex" onSubmit={handleSearchSubmit}>
                            <CFormInput
                                className="me-2"
                                type="search"
                                placeholder="Search for Products"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <CCol xs={2} md={2}>
                                <CButton color="primary" type="submit">
                                    <CIcon icon={cilZoom}/> Search
                                </CButton>
                            </CCol>
                        </CForm>
                    </CCol>
                    <CCol xs={6} md={3}>
                        <AddButton/>
                    </CCol>
                </CRow>
            </CContainer>

            <CTable>
                <CTableHead>
                    <CTableRow>
                        <CTableHeaderCell scope="col">SKU</CTableHeaderCell>
                        <CTableHeaderCell scope="col">IMAGE</CTableHeaderCell>
                        <CTableHeaderCell scope="col">PRODUCT NAME</CTableHeaderCell>
                        <CTableHeaderCell scope="col">PRICE</CTableHeaderCell>
                        <CTableHeaderCell scope="col">options</CTableHeaderCell>
                    </CTableRow>
                </CTableHead>
                <CTableBody>
                    {products.map((value, index) => (
                        <CTableRow>
                            <CTableHeaderCell scope="row">{value.sku}</CTableHeaderCell>
                            <CTableDataCell>
                                <img
                                    // src={`data:${value.image["type"]};base64,${value.img.data}`}
                                    // src={`data:image/png;base64,${value.i}`}
                                    src={value.imgBase64}
                                    style={{ maxWidth: '100px', maxHeight: '100px' }}
                                />
                            </CTableDataCell>
                            <CTableDataCell>{value.name}</CTableDataCell>
                            <CTableDataCell>{value.price}  $</CTableDataCell>
                            <CTableDataCell>
                                <CButton
                                    color="primary"
                                    size="sm"
                                    variant="outline"
                                    onClick={() => handleEditProduct(value._id)}
                                >
                                    <CIcon icon={cilPen}/>
                                </CButton>

                                <CButton color="danger" size="sm" variant="outline"
                                         onClick={() => handleOpenDeleteModal(value._id)}>
                                    <CIcon icon={cilTrash}/>
                                </CButton>{' '}
                                <CButton
                                    color="warning"
                                    size="sm"
                                    variant="outline"
                                    onClick={() => handleToggleFavorite(value._id)}
                                    style={{
                                        color: value.isFavorite ? 'blue' : undefined,
                                    }}
                                >
                                    <CIcon icon={cilStar}/>
                                </CButton>
                            </CTableDataCell>
                        </CTableRow>
                    ))}
                </CTableBody>
            </CTable>
            <DeleteProduct
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                onConfirm={handleDeleteProduct}
            />
        </>
    )

}

export default Products
