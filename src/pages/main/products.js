import React from 'react';
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

const Products = () => {
    const navigate = useNavigate();


    const handleEditProduct = () => {
        navigate('/edit-product');
    }

    const handleDeleteProduct = () => {
        navigate('/delete');
    }

    return (
        <>
            <h1> Products</h1>
            <CContainer>
                <CRow>
                    <CCol md={9}>
                        <CForm className="d-flex">
                            <CFormInput
                                className="me-2"
                                type="search"
                                placeholder="Search for Products"
                                required
                            />
                            <CCol xs={2} md={2}>
                                <CButton color="primary" type="submit"><CIcon icon={cilZoom}></CIcon>Search</CButton>
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
                    <CTableRow>
                        <CTableHeaderCell scope="row">#CA24</CTableHeaderCell>
                        <CTableDataCell>URL</CTableDataCell>
                        <CTableDataCell>Book</CTableDataCell>
                        <CTableDataCell>$24.00</CTableDataCell>
                        <CTableDataCell>
                            <CButton color="primary" size="sm" variant="outline" onClick={handleEditProduct}>
                                <CIcon icon={cilPen}/>
                            </CButton>{' '}
                            <CButton color="danger" size="sm" variant="outline" onClick={handleDeleteProduct}>
                                <CIcon icon={cilTrash}/>
                            </CButton>{' '}
                            <CButton color="warning" size="sm" variant="outline">
                                <CIcon icon={cilStar}/>
                            </CButton>
                        </CTableDataCell>
                    </CTableRow>
                </CTableBody>
            </CTable>
        </>
    )

}

export default Products
