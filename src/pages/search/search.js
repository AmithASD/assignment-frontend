import React, { useEffect, useState } from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {
    CContainer,
    CRow,
    CCol,
    CCard,
    CCardBody,
    CCardTitle,
    CCardText,
    CButton, CForm, CFormInput,
} from '@coreui/react';
import API_ENDPOINT from '../../apis/config';
import { FETCH_PRODUCTS } from '../../apis/endpoints';
import {CIcon} from "@coreui/icons-react";
import {cilZoom} from "@coreui/icons";
import AddButton from "../../components/addButton";

const SearchProduct = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [results, setResults] = useState([]);

    const fetchResults = async (query) => {
        try {
            const response = await API_ENDPOINT.get(FETCH_PRODUCTS);
            const filteredResults = response.data.filter((product) =>
                product.name.toLowerCase().includes(query.toLowerCase())
            );
            setResults(filteredResults);
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const query = params.get('query') || '';
        setSearchQuery(query);
        fetchResults(query);
    }, [location.search]);

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        navigate(`/search?query=${searchQuery}`);
    };


    return (
        <CContainer className="mt-5">
            <CRow className="mb-4">
                <CCol>
                    <h1>PRODUCTS</h1>
                </CCol>
            </CRow>
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
                                <CIcon icon={cilZoom} /> Search
                            </CButton>
                        </CCol>
                    </CForm>
                </CCol>
                <CCol xs={6} md={3}>
                    <AddButton/>
                </CCol>
            </CRow>
            <CRow>
                <CCol>
                    <p>
                        {results.length} results found for{' '}
                        <strong>'{searchQuery || 'All'}'</strong>
                    </p>
                </CCol>
            </CRow>
            <CRow>
                {results.map((product) => (
                    <CCol md={12} className="mb-3" key={product._id}>
                        <CCard>
                            <CCardBody>
                                <CCardTitle>
                                    <span style={{ color: 'blue' }}>{product.sku}</span> {product.name}
                                </CCardTitle>
                                <CCardText>Price: ${product.price}</CCardText>
                                <CButton color="link" className="float-end">
                                    Details
                                </CButton>
                            </CCardBody>
                        </CCard>
                    </CCol>
                ))}
            </CRow>
        </CContainer>
    );
};

export default SearchProduct;
