import React, { useState } from 'react';
import {
    CButton,
    CCard,
    CCardBody,
    CCol,
    CContainer,
    CForm,
    CFormInput,
    CInputGroup,
    CInputGroupText,
    CRow,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilLockLocked, cilUser } from '@coreui/icons';
import {SIGN_UP} from "../../apis/endpoints";

const Register = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        repeatPassword: '',
        userName: '',
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const apiUrl = SIGN_UP;

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.repeatPassword) {
            return;
        }

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password,
                    userName: formData.userName,
                }),
            });

            if (response.ok) {
                console.log('User signed up successfully');
                window.location.href = '/';
            } else {
                const data = await response.json();
                console.error(data.message);
            }
        } catch (error) {
            console.error('Error signing up:', error);
        }
    };

    return (
        <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
            <CContainer>
                <CRow className="justify-content-center">
                    <CCol md={9} lg={7} xl={6}>
                        <CCard className="mx-4">
                            <CCardBody className="p-4">
                                <CForm onSubmit={handleSubmit}>
                                    <h1>Register</h1>
                                    <p className="text-body-secondary">Create your account</p>

                                    {/* Username Input */}
                                    <CInputGroup className="mb-3">
                                        <CInputGroupText>
                                            <CIcon icon={cilUser} />
                                        </CInputGroupText>
                                        <CFormInput
                                            name="userName"
                                            placeholder="Username"
                                            value={formData.userName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </CInputGroup>

                                    {/* Email Input */}
                                    <CInputGroup className="mb-3">
                                        <CInputGroupText>@</CInputGroupText>
                                        <CFormInput
                                            name="email"
                                            placeholder="Email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </CInputGroup>

                                    {/* Password Input */}
                                    <CInputGroup className="mb-3">
                                        <CInputGroupText>
                                            <CIcon icon={cilLockLocked} />
                                        </CInputGroupText>
                                        <CFormInput
                                            name="password"
                                            type="password"
                                            placeholder="Password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            required
                                        />
                                    </CInputGroup>

                                    {/* Repeat Password Input */}
                                    <CInputGroup className="mb-4">
                                        <CInputGroupText>
                                            <CIcon icon={cilLockLocked} />
                                        </CInputGroupText>
                                        <CFormInput
                                            name="repeatPassword"
                                            type="password"
                                            placeholder="Repeat Password"
                                            value={formData.repeatPassword}
                                            onChange={handleChange}
                                            required
                                        />
                                    </CInputGroup>

                                    {/* Submit Button */}
                                    <div className="d-grid">
                                        <CButton color="success" type="submit">
                                            Create Account
                                        </CButton>
                                    </div>
                                </CForm>

                                {/* Link to Login */}
                                <CCol xs={6} className="text-right">
                                    Already have an account? <a href="/login">Sign In</a>
                                </CCol>
                            </CCardBody>
                        </CCard>
                    </CCol>
                </CRow>
            </CContainer>
        </div>
    );
};

export default Register;
