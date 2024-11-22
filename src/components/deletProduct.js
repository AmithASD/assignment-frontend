import React from 'react';
import {
    CModal,
    CModalHeader,
    CModalTitle,
    CModalBody,
    CModalFooter,
    CButton,
} from '@coreui/react';

const DeleteProduct = ({ visible, onClose, onConfirm }) => {
    return (
        <CModal visible={visible} onClose={onClose}>
            <CModalHeader>
                <CModalTitle>ARE YOU SURE?</CModalTitle>
            </CModalHeader>
            <CModalBody>
                <p>You will not be able to undo this action if you proceed!</p>
            </CModalBody>
            <CModalFooter>
                <CButton color="secondary" onClick={onClose}>Cancel</CButton>
                <CButton color="danger" onClick={onConfirm}>YES</CButton>
            </CModalFooter>
        </CModal>
    );
};

export default DeleteProduct;
