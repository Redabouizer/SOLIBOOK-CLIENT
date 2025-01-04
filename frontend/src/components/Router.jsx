import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import AdvancedFeature from "../pages/AdvancedFeature";
import GeneralFeature from "../pages/GeneralFeature";
import Product from "../pages/Products/Product";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import AuthLayout from "../pages/Layout/AuthLayout";
import MainLayout from "../pages/Layout/MainLayout";
import Error403 from "../pages/Error/403";
import Error404 from "../pages/Error/404";
import Gallery from "../pages/Gallery/Gallery";
// import Profile from "../pages/Profile/Profile";
import MultipleInsert from "../pages/MultipleInsert/MultipleInsert";
import Home from "../pages/Clients/pages/Home.jsx";
import Signup from "../pages/Login/Signup.jsx";
import ClientSignup from "../pages/Login/ClientSignup.jsx";
import Profile from "../pages/Clients/Profile/Profile.jsx";
import Sidebar from "../pages/Clients/Profile/Sidebar.jsx";
import Appointments from "../pages/Clients/Profile/Appointments.jsx";
import Settings from "../pages/Clients/Profile/Settings.jsx";

export default function Router() {
    return (
        <Routes>
            <Route path="/403" element={<Error403 />} />
            <Route
                exact
                path="/"
                element={
                    <AuthLayout>
                        <Login />
                    </AuthLayout>
                }
            />
            <Route
                exact
                path="/register"
                element={
                    <AuthLayout>
                        <Register />
                    </AuthLayout>
                }
            />
            <Route
                exact
                path="/dashboard"
                element={
                    <MainLayout>
                        <Dashboard />
                    </MainLayout>
                }
            />
            <Route
                exact
                path="/general-feature"
                element={
                    <MainLayout>
                        <GeneralFeature />
                    </MainLayout>
                }
            />
            <Route
                exact
                path="/advanced-feature"
                element={
                    <MainLayout>
                        <AdvancedFeature />
                    </MainLayout>
                }
            />
            <Route
                exact
                path="/products"
                element={
                    <MainLayout>
                        <Product />
                    </MainLayout>
                }
            />
            <Route
                exact
                path="/gallery"
                element={
                    <MainLayout>
                        <Gallery />
                    </MainLayout>
                }
            />
            {/* <Route
                exact
                path="/profile/info"
                element={
                    <MainLayout>
                        <Profile />
                    </MainLayout>
                }
            /> */}
            <Route
                exact
                path="/multiple-insert"
                element={
                    <MainLayout>
                        <MultipleInsert />
                    </MainLayout>
                }
            />

            <Route
                exact
                path="/home"
                element={
                    <Home />
                }
            />

            <Route
                exact
                path="/profile"
                element={
                    <Sidebar>
                        <Profile />
                    </Sidebar>
                    
                }
            />
            <Route
                exact
                path="/lg"
                element={
                    <Signup />
                }
            />
            <Route
                exact
                path="/ClientSignup"
                element={
                    <ClientSignup />
                }
            />
            {/* <Route
                exact
                path="/Profile"
                element={
                    <Profile />
                }
            /> */}
            <Route
                exact
                path="/appointments"
                element={
                    <Sidebar>
                        <Appointments />
                    </Sidebar>
                }
            />
            <Route
                exact
                path="/settings"
                element={
                    <Sidebar>
                        <Settings />
                    </Sidebar>
                }
            />
            
            <Route path="*" element={<Error404 />} />
        </Routes>
    );
}
