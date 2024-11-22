import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
import API_ENDPOINT from '../../apis/config';
import { LOG_IN } from '../../apis/endpoints';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Validate form inputs
    const validateForm = () => {
        const newErrors = {};
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.password) newErrors.password = 'Password is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            const response = await API_ENDPOINT.post(LOG_IN, formData);
            const data = response.data;

            // Save token and user ID in local storage
            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.userId);

            // Redirect on successful login
            if (response.status === 200) {
                window.location.href = '/';
            }
        } catch (error) {
            console.error('Error logging in:', error);
            setErrors({ form: 'Login failed. Please check your credentials.' });
        }
    };

    return (
        <div className="login-background min-vh-100 d-flex align-items-center">
            <CContainer>
                <CRow className="justify-content-end">
                    <CCol md={5} lg={5} className="login-form">
                        <CCard className="p-4">
                            <CCardBody>
                                <CForm onSubmit={handleSubmit} noValidate>
                                    <h1>Login</h1>
                                    <p className="text-body-secondary">Sign in to your account</p>
                                    {/* Display form-level error */}
                                    {errors.form && (
                                        <div className="text-danger mb-3">{errors.form}</div>
                                    )}

                                    {/* Email Input */}
                                    <CInputGroup className="mb-3">
                                        <CInputGroupText>
                                            <CIcon icon={cilUser} />
                                        </CInputGroupText>
                                        <CFormInput
                                            name="email"
                                            type="email"
                                            placeholder="Email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                        {errors.email && (
                                            <div className="text-danger">{errors.email}</div>
                                        )}
                                    </CInputGroup>

                                    {/* Password Input */}
                                    <CInputGroup className="mb-4">
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
                                        {errors.password && (
                                            <div className="text-danger">{errors.password}</div>
                                        )}
                                    </CInputGroup>

                                    {/* Submit and Links */}
                                    <CRow>
                                        <CCol xs={6}>
                                            <CButton
                                                color="primary"
                                                className="px-4"
                                                type="submit"
                                            >
                                                Login
                                            </CButton>
                                        </CCol>
                                        <CCol xs={6} className="text-right">
                                            <CButton color="link" className="px-0">
                                                Forgot password?
                                            </CButton>
                                        </CCol>
                                        <CCol xs={12} className="text-center mt-3">
                                            Don't have an account?{' '}
                                            <Link to="/register">Sign Up</Link>
                                        </CCol>
                                    </CRow>
                                </CForm>
                            </CCardBody>
                        </CCard>
                    </CCol>
                </CRow>
            </CContainer>
        </div>
    );
};

export default Login;
