import React from 'react'
import {
    CAvatar,
    CBadge,
    CButton,
    CDropdown,
    CDropdownDivider,
    CDropdownHeader,
    CDropdownItem,
    CDropdownMenu,
    CDropdownToggle,
} from '@coreui/react'
import {
    cilAccountLogout
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import avatar from '../assets/images/avatars/3.jpg'


export  const AppHeaderDropdown = () => {
    return (
        <CDropdown variant="nav-item">
            <CDropdownToggle placement="bottom-end" className="py-0 pe-0" caret={true}>
                <CAvatar src={avatar} size="md" />
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
                <CDropdownHeader className="bg-body-secondary fw-semibold mb-2"></CDropdownHeader>
                <CDropdownItem href="#">
                    {/* <CIcon icon={cilBell} className="me-2" /> */}
                    Amith
                </CDropdownItem>
                <CDropdownItem href="#">
                    <CIcon icon={cilAccountLogout} className="me-2" />
                    <CButton>
                        Sign Out
                    </CButton>
                </CDropdownItem>
            </CDropdownMenu>
        </CDropdown>
    )
}
