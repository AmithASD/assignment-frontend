import React from 'react';
import {
    CForm,
    CFormLabel,
    CFormInput,
    CFormTextarea,
    CButton,
    CContainer,
    CRow,
    CCol,
} from '@coreui/react';

const AddProduct = () => {
    return (
        <CContainer>
            <h1>
                PRODUCTS <span style={{ color: 'blue' }}>{'>'}</span> <span style={{fontSize:'25px'}}>Add new product</span>
            </h1>
            <br/>
            <CForm>
                <CRow className="mb-3">
                    <CCol md={6}>
                        <CFormLabel htmlFor="sku">SKU</CFormLabel>
                        <CFormInput type="text" id="sku" placeholder="Enter SKU" />
                    </CCol>
                </CRow>
                <CRow className="mb-3">
                    <CCol md={6}>
                        <CFormLabel htmlFor="name">Name</CFormLabel>
                        <CFormInput type="text" id="name" placeholder="Enter Product Name" />
                    </CCol>
                    <CCol md={6}>
                        <CFormLabel htmlFor="qty">QTY</CFormLabel>
                        <CFormInput type="number" id="qty" placeholder="Enter Quantity" />
                    </CCol>
                </CRow>
                <CRow className="mb-3">
                    <CCol>
                        <CFormLabel htmlFor="description">Product Description</CFormLabel>
                        <CFormTextarea
                            id="description"
                            rows="4"
                            placeholder="A small description about the product"
                        ></CFormTextarea>
                    </CCol>
                </CRow>
                <CRow className="mb-3">
                    <CCol>
                        <CFormLabel htmlFor="images">Product Images</CFormLabel>
                        <p>
                            <a href="#add-images" style={{ color: 'blue' }}>
                                Add Images
                            </a>
                        </p>
                        <p>JPEG, PNG, SVG, or GIF (Maximum file size 50MB)</p>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <CButton color="primary" type="submit">
                            Add product
                        </CButton>
                    </CCol>
                </CRow>
            </CForm>
        </CContainer>
    );
};

export default AddProduct;
