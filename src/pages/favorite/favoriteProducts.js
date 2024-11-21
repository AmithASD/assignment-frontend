import React from 'react';
import {
    CButton,
    CCol,
    CContainer,
    CForm,
    CFormInput,
    CRow,
    CTable, CTableBody, CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow
} from "@coreui/react";
import {CIcon} from "@coreui/icons-react";
import {cilPen, cilStar, cilTrash, cilZoom} from "@coreui/icons";
import AddButton from "../../components/addButton";

const FavoriteProduct = () => {
    return(
        <>
            <h1>Favorite Products</h1>
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
                            <CButton color="primary" size="sm" variant="outline">
                                <CIcon icon={cilPen} />
                            </CButton>{' '}
                            <CButton color="danger" size="sm" variant="outline">
                                <CIcon icon={cilTrash} />
                            </CButton>{' '}
                            <CButton color="warning" size="sm" variant="outline">
                                <CIcon icon={cilStar} />
                            </CButton>
                        </CTableDataCell>
                    </CTableRow>
                </CTableBody>
            </CTable>
        </>
    )
}

export default FavoriteProduct
