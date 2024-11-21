import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'

// routes config
import routes from '../routes'

const AppContent = () => {
    return (
        <CContainer className="px-4" lg>
            <Suspense fallback={<CSpinner color="primary" />}>
                <Routes>
                    {routes.map((route, idx) => {
                        return (
                            route.element && (
                                <Route
                                    key={idx}
                                    path={route.path}
                                    exact={route.exact}
                                    name={route.name}
                                    element={<route.element />}
                                />
                            )
                        )
                    })}
                    <Route path="/" element={<Navigate to="products" replace />} />
                    <Route path="/products" element={<Navigate to="products" replace />} />
                    <Route path="/add-products" element={<Navigate to="AddProducts" replace />} />
                    <Route path="/edit-products" element={<Navigate to="EditProducts" replace />} />
                    <Route path="/favorite" element={<Navigate to="FavoriteProducts" replace />} />
                    <Route path="/search" element={<Navigate to="SearchProducts" replace />} />
                    <Route path="/delete" element={<Navigate to="DeleteProducts" replace />} />
                </Routes>
            </Suspense>
        </CContainer>
    )
}

export default React.memo(AppContent)