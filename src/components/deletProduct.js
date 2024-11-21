import React, { useState } from 'react';
import {
    CModal,
    CModalHeader,
    CModalTitle,
    CModalBody,
    CModalFooter,
    CButton,
} from '@coreui/react';

const DeleteProduct = () => {
    const [visible, setVisible] = useState(true);
    return (
        <>
            <CModal visible={visible} onClose={() => setVisible(false)}>
                <CModalHeader>
                    <CModalTitle>ARE YOU SURE?</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <p>You will not be able to undo this action if you proceed!</p>
                </CModalBody>
                <CModalFooter>
                    <CButton color="secondary" onClick={() => setVisible(false)}>Cancel</CButton>
                    <CButton color="danger" onClick={() => { /* Add delete logic here */ }}>Delete</CButton>
                </CModalFooter>
            </CModal>
        </>
    );
}

export default DeleteProduct;

