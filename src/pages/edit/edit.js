import React, {useEffect, useState} from 'react';
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
import API_ENDPOINT from "../../apis/config";
import {useParams} from "react-router-dom";
import {EDIT_PRODUCTS, FETCH_PRODUCTS, SAVE_PRODUCT} from "../../apis/endpoints";

const EditProduct = () => {
    // Example data

    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [productData, setProductData] = useState('');
    const [formData, setFormData] = useState({
        sku: '',
        name: '',
        qty: '',
        description: '',
        images: null,
    });

    const fetchProductDataById = async () => {
        try {
            const response = await API_ENDPOINT.get(`${FETCH_PRODUCTS}/${id}`);
            setProductData(response.data);
            console.log('productData edit  ===============>>>', productData)
            setLoading(false);
        } catch (error) {
            console.error("Error fetching product data:", error);
        }
    };

    useEffect(() => {
        fetchProductDataById();
    }, [id]);

    if (!productData) {
        return <p>Loading...</p>;
    }

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setProductData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle save changes
    const handleSaveChanges = async (e) => {
        e.preventDefault();

        try {
            const response = await API_ENDPOINT.post(`${EDIT_PRODUCTS}/${id}`, productData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });
            console.log('Product updated successfully:', response.data);
            alert('Product updated successfully!');
            setLoading(false);
        } catch (error) {
            console.error('Error updating product:', error);
            alert('Failed to update product. Please try again.');
        }
    };

    // Handle set main image
    const handleSetMainImage = (id) => {
        setProductData({
            ...productData,
            images: productData.images.map((img) =>
                img.id === id ? {...img, isMain: true} : {...img, isMain: false}
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

    // Handle file upload change
    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        console.log("Selected files:", files);
        setFormData((prevData) => ({
            ...prevData,
            images: files,
        }));
    };

    if (loading) {
        return <> Loading.....</>
    }

    return (
        <CContainer>
            <h1>
                PRODUCTS <span style={{color: 'blue'}}>{'>'}</span> Edit product
            </h1>
            <CForm onSubmit={handleSaveChanges}>
                <CRow className="mb-3">
                    <CCol md={6}>
                        <CFormLabel htmlFor="sku">SKU</CFormLabel>
                        <CFormInput
                            type="text"
                            id="sku"
                            name="sku"
                            value={productData.sku}
                            readOnly
                            // onChange={handleChange}
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
                            {/*{productData.images.map((image) => (*/}
                                <CCard key={productData.id} style={{width: '100px', margin: '0 10px'}}>
                                    <CCardImage orientation="top" src={productData.src} alt="Product"/>
                                    <CCardBody className="text-center">
                                        <CButton
                                            color={productData.isMain ? 'success' : 'primary'}
                                            size="sm"
                                            onClick={() => handleSetMainImage(productData.id)}
                                            onChange={handleFileChange}
                                        >
                                            {productData.isMain ? 'Main Image' : 'Set as Main'}
                                        </CButton>
                                    </CCardBody>
                                    <CCardFooter>
                                        <CButton
                                            color="danger"
                                            size="sm"
                                            onClick={() => handleRemoveImage(productData.id)}
                                            onChange={handleFileChange}
                                        >
                                            Remove
                                        </CButton>
                                    </CCardFooter>
                                </CCard>
                            {/*))}*/}
                        </div>
                        <p className="mt-2">
                            <CButton color="link">Edit Images</CButton>
                        </p>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <CButton color="primary" type='submit'>
                            Save changes
                        </CButton>
                    </CCol>
                </CRow>
            </CForm>
        </CContainer>
    );
};

export default EditProduct;

