import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
    CCloseButton,
    CSidebar,
    CSidebarBrand,
    CSidebarFooter,
    CSidebarHeader,
    CSidebarToggler,
} from '@coreui/react'
import {CIcon} from '@coreui/icons-react'

import { AppSidebarNav } from './AppSidebarNav'

// sidebar nav config
import navigation from '../_nav'

const AppSidebar = () => {
    // const dispatch = useDispatch()
    // const sidebarShow = useSelector((state) => state.sidebarShow)

    return (
        <CSidebar
            className="border-end"
            colorScheme="dark"
            position="fixed"
            // visible={sidebarShow}
        >
            <CSidebarHeader className="border-bottom">
                <CSidebarBrand to="/">
                    {/*<CIcon customClassName="sidebar-brand-full" icon={logo} height={32} />*/}
                    {/*<CIcon customClassName="sidebar-brand-narrow" icon={sygnet} height={32} />*/}
                </CSidebarBrand>
                <CCloseButton
                    className="d-lg-none"
                    dark
                />
            </CSidebarHeader>
            <AppSidebarNav items={navigation} />s
            <CSidebarFooter className="border-top d-none d-lg-flex">
                <CSidebarToggler
                />
            </CSidebarFooter>
        </CSidebar>
    )
}

export default AppSidebar
