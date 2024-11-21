import React, {useEffect, useReducer, useRef} from 'react'
import { NavLink } from 'react-router-dom'
import {
useSelector,
useDispatch,
} from 'react-redux'
import {
    CContainer,
    CDropdown,
    CDropdownItem,
    CDropdownMenu,
    CDropdownToggle,
    CHeader,
    CHeaderNav,
    CHeaderToggler,
    CNavLink,
    CNavItem,
    useColorModes,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
    cilBell,
    cilContrast,
    cilEnvelopeOpen,
    cilList,
    cilMenu,
    cilMoon,
    cilSun,
} from '@coreui/icons'

import { AppHeaderDropdown } from './AppHeaderDropdown'

const AppHeader = () => {
    const headerRef = useRef()
    // const { colorMode, setColorMode } = useColorModes('coreui-free-react-admin-template-theme')

    // const dispatch = useDispatch()
    const dispatch = useReducer()
    // const sidebarShow = useSelector((state) => state.sidebarShow)


    return (
        <CHeader position="sticky" className="mb-4 p-0" ref={headerRef}>
            <CContainer className="border-bottom px-4" fluid>
                <CHeaderToggler
                    // onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
                    style={{ marginInlineStart: '-14px' }}
                >
                    <CIcon icon={cilMenu} size="lg" />
                </CHeaderToggler>
                <CHeaderNav className="d-none d-md-flex">
                    <CNavItem>
                        <CNavLink to="/" as={NavLink}>
                            Dashboard
                        </CNavLink>
                    </CNavItem>
                </CHeaderNav>
                <CHeaderNav className="ms-auto">
                    <CNavItem>
                        <CNavLink href="#">
                            <p>LoggedIn Role: <span>Branch User</span></p>
                        </CNavLink>
                    </CNavItem>
                </CHeaderNav>
                <CHeaderNav>
                    {/* <li className="nav-item py-1">
            <div className="vr h-100 mx-2 text-body text-opacity-75"></div>
          </li> */}
                    <li className="nav-item py-1">
                        <div className="vr h-100 mx-2 text-body text-opacity-75"></div>
                    </li>
                    <AppHeaderDropdown />
                </CHeaderNav>
            </CContainer>
            <CContainer className="px-4" fluid>
            </CContainer>
        </CHeader>
    )
}

export default AppHeader
