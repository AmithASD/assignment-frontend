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
} from '@coreui/react';
import axios from 'axios';
import API_ENDPOINT from "../../apis/config";
import {SAVE_PRODUCT} from "../../apis/endpoints";
import { FaArrowLeft } from 'react-icons/fa';
import {useNavigate} from "react-router-dom";

const AddProduct = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/products');
    };
    // State to hold form data
    const [formData, setFormData] = useState({
        sku: '',
        name: '',
        qty: '',
        description: '',
        image: null,
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        console.log(`Field updated: ${id}, Value: ${value}`);
        setFormData((prevData) => ({
            ...prevData,
            [id]: value, // Ensure this matches state keys (sku, name, qty, description)
        }));
    };

// Handle file upload change
    const handleFileChange = (e) => {
        // const files = Array.from(e.target.files);
        const files = e.target.files[0]
        console.log("Selected files:", files);
        setFormData((prevData) => ({
            ...prevData,
            image: files,
        }));
    };

// Handle form submission
    const addProduct = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('sku', formData.sku);
        data.append('name', formData.name);
        data.append('qty', formData.qty);
        data.append('price', formData.price);
        data.append('description', formData.description);
        data.append('images', formData.image);

        // if (formData.image) {
        //     formData.image.forEach((file) => data.append('images', file));
        // }

        // Log FormData entries
        console.log("FormData content:");
        for (let pair of data.entries()) {
            console.log(`${pair[0]}: ${pair[1]}`);
        }

        try {
            const response = await API_ENDPOINT.post(SAVE_PRODUCT, data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Product added successfully:', response.data);
            alert('Product added successfully!');
            navigate('/products')
        } catch (error) {
            console.error('Error adding product:', error);
            alert('Failed to add product. Please try again.');
        }
    };

    return (
        <CContainer>
            <CButton
                color="secondary"
                variant="outline"
                className="mb-3"
                onClick={handleBack}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                }}
            >
                <FaArrowLeft /> {/* Optional Arrow Icon */}
                Back
            </CButton>
            <h1>
                PRODUCTS <span style={{ color: 'blue' }}>{'>'}</span>{' '}
                <span style={{ fontSize: '25px' }}>Add new product</span>
            </h1>
            <br />
            <CForm onSubmit={addProduct}>
                <CRow className="mb-3">
                    <CCol md={6}>
                        <CFormLabel htmlFor="sku">SKU</CFormLabel>
                        <CFormInput
                            type="text"
                            id="sku"
                            placeholder="Enter SKU"
                            value={formData.sku}
                            onChange={handleChange}
                            required
                        />
                    </CCol>
                </CRow>
                <CRow className="mb-3">
                    <CCol md={6}>
                        <CFormLabel htmlFor="name">Product Name</CFormLabel>
                        <CFormInput
                            type="text"
                            id="name"
                            placeholder="Enter Product Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </CCol>
                    <CCol md={6}>
                        <CFormLabel htmlFor="qty">QTY</CFormLabel>
                        <CFormInput
                            type="number"
                            id="qty"
                            placeholder="Enter Quantity"
                            value={formData.qty}
                            onChange={handleChange}
                            required
                        />
                    </CCol>
                    <CCol md={6}>
                        <CFormLabel htmlFor="qty">Price</CFormLabel>
                        <CFormInput
                            type="text"
                            id="price"
                            placeholder="Price"
                            value={formData.price}
                            onChange={handleChange}
                            required
                        />
                    </CCol>
                </CRow>
                <CRow className="mb-3">
                    <CCol>
                        <CFormLabel htmlFor="description">Product Description</CFormLabel>
                        <CFormTextarea
                            id="description"
                            rows="4"
                            placeholder="A small description about the product"
                            value={formData.description}
                            onChange={handleChange}
                        ></CFormTextarea>
                    </CCol>
                </CRow>
                <CRow className="mb-3">
                    <CCol>
                        <CFormLabel htmlFor="images">Product Images</CFormLabel>
                        <CFormInput
                            type="file"
                            id="image"
                            multiple
                            onChange={handleFileChange}
                            accept="image/jpeg, image/png, image/svg+xml, image/gif"
                        />
                        <p>JPEG, PNG, SVG, or GIF (Maximum file size 50MB)</p>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <CButton color="primary" type="submit">
                            Add Product
                        </CButton>
                    </CCol>
                </CRow>
            </CForm>
        </CContainer>
    );
};

export default AddProduct;
