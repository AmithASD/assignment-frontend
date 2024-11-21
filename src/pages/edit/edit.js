import React, { useState } from 'react';
import {
    CForm,
    CFormLabel,
    CFormInput,
    CFormTextarea,
    CButton,
    CContainer,
    CRow,
    CCol,
    CCard,
    CCardBody,
    CCardImage,
    CCardFooter,
} from '@coreui/react';

const EditProduct = () => {
    // Example data
    const [productData, setProductData] = useState({
        sku: '#CA354',
        name: 'Product-name',
        qty: 25,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ut lectus a risus a nibh massa ut leo.',
        images: [
            { id: 1, src: '/path/to/image1.jpg', isMain: true },
            { id: 2, src: '/path/to/image2.jpg', isMain: false },
            { id: 3, src: '/path/to/image3.jpg', isMain: false },
        ],
    });

    // Handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProductData({ ...productData, [name]: value });
    };

    // Handle set main image
    const handleSetMainImage = (id) => {
        setProductData({
            ...productData,
            images: productData.images.map((img) =>
                img.id === id ? { ...img, isMain: true } : { ...img, isMain: false }
            ),
        });
    };

    // Handle remove image
    const handleRemoveImage = (id) => {
        setProductData({
            ...productData,
            images: productData.images.filter((img) => img.id !== id),
        });
    };

    // Handle save changes
    const handleSaveChanges = () => {
        console.log('Product updated:', productData);
        // Add API integration here to save the changes
    };

    return (
        <CContainer>
            <h1>
                PRODUCTS <span style={{ color: 'blue' }}>{'>'}</span> Edit product
            </h1>
            <CForm>
                <CRow className="mb-3">
                    <CCol md={6}>
                        <CFormLabel htmlFor="sku">SKU</CFormLabel>
                        <CFormInput
                            type="text"
                            id="sku"
                            name="sku"
                            value={productData.sku}
                            readOnly
                        />
                    </CCol>
                </CRow>
                <CRow className="mb-3">
                    <CCol md={6}>
                        <CFormLabel htmlFor="name">Name</CFormLabel>
                        <CFormInput
                            type="text"
                            id="name"
                            name="name"
                            value={productData.name}
                            onChange={handleInputChange}
                        />
                    </CCol>
                    <CCol md={6}>
                        <CFormLabel htmlFor="qty">QTY</CFormLabel>
                        <CFormInput
                            type="number"
                            id="qty"
                            name="qty"
                            value={productData.qty}
                            onChange={handleInputChange}
                        />
                    </CCol>
                </CRow>
                <CRow className="mb-3">
                    <CCol>
                        <CFormLabel htmlFor="description">Product Description</CFormLabel>
                        <CFormTextarea
                            id="description"
                            name="description"
                            rows="4"
                            value={productData.description}
                            onChange={handleInputChange}
                        />
                    </CCol>
                </CRow>
                <CRow className="mb-3">
                    <CCol>
                        <CFormLabel>Product Images</CFormLabel>
                        <div className="d-flex flex-wrap">
                            {productData.images.map((image) => (
                                <CCard key={image.id} style={{ width: '100px', margin: '0 10px' }}>
                                    <CCardImage orientation="top" src={image.src} alt="Product" />
                                    <CCardBody className="text-center">
                                        <CButton
                                            color={image.isMain ? 'success' : 'primary'}
                                            size="sm"
                                            onClick={() => handleSetMainImage(image.id)}
                                        >
                                            {image.isMain ? 'Main Image' : 'Set as Main'}
                                        </CButton>
                                    </CCardBody>
                                    <CCardFooter>
                                        <CButton
                                            color="danger"
                                            size="sm"
                                            onClick={() => handleRemoveImage(image.id)}
                                        >
                                            Remove
                                        </CButton>
                                    </CCardFooter>
                                </CCard>
                            ))}
                        </div>
                        <p className="mt-2">
                            <CButton color="link">Edit Images</CButton>
                        </p>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <CButton color="primary" onClick={handleSaveChanges}>
                            Save changes
                        </CButton>
                    </CCol>
                </CRow>
            </CForm>
        </CContainer>
    );
};

export default EditProduct;

