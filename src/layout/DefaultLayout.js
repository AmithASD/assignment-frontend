import React from 'react'
// import {  AddButton,AppHeader,} from '../components/index'
import AppHeader from "../components/AppHeader";
import AppContent from "../components/AppContent";
import AppSidebar from "../components/AppSidebar";

const DefaultLayout = () => {
    return (
        <div>
            <div className="wrapper d-flex flex-column min-vh-100">
                <AppHeader/>
                <AppSidebar/>
                <div className="body flex-grow-1">
                    <AppContent/>
                </div>
            </div>
        </div>
    )
}

export default DefaultLayout
