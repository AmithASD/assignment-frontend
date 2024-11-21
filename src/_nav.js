import React from 'react'
import CIcon from '@coreui/icons-react'
import {
    cilGroup,
    cilNewspaper,
    cilUserFollow,
    cilSearch,
    cilSpeedometer,
    cilStar,
    cilNotes,
    cilChatBubble,
    cilHighlighter,
    cilUserX,
    cilZoom
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
    // {
    //     component: CNavItem,
    //     name: 'DASHBOARD',
    //     to: '/products',
    //     icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    // },
    {
        component: CNavItem,
        name: 'PRODUCTS',
        to: '/',
        icon: <CIcon icon={cilUserFollow} customClassName="nav-icon" />,
    },
    {
        component: CNavItem,
        name: 'FAVORITE',
        to: '/favorite',
        icon: <CIcon icon={cilUserX} customClassName="nav-icon" />,
    },
]

export default _nav
