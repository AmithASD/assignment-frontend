import {CButton, CCol, CRow} from "@coreui/react";
import {CIcon} from "@coreui/icons-react";
import React from "react";
import {
    cilZoom,
    cilPen,
    cilTrash,
    cilStar,
} from '@coreui/icons';
import {useNavigate } from "react-router-dom";


const AddButton =() => {
    const navigate = useNavigate();

    const handleClickAddProduct =() => {
        navigate('/add-product');
    }
    const handleCfavoriteProduct =() => {
        navigate('/favorite');
    }
    return(
        <>
            <CRow xs={{ gutter: 0 }} >
                <CCol sm={8} md={8} >
                    <CRow className="mb-5">
                        <CCol sm={8}>
                            <CButton color="primary" size="md" onClick={handleClickAddProduct}>New Product</CButton>
                        </CCol>
                    </CRow>
                </CCol>
                <CCol>
                    <CButton color="primary" variant="outline" type="submit" onClick={handleCfavoriteProduct}><CIcon icon={cilStar}></CIcon></CButton>
                </CCol>
            </CRow>
        </>
    )
}

export default AddButton
