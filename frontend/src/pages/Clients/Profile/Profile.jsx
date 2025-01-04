import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { getTokenWithExpiration } from "../../Auth/Session";
import UserInfo from './info_Profile/UserInfo';
import UserDetails from './info_Profile/UserDetails';
import AddressSection from './info_Profile/AddressSection';
import appConfig from "../../../config/appConfig";

function Profile() {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const yourAuthToken = getTokenWithExpiration("token");

        if (!yourAuthToken) {
            Swal.fire({
                title: 'Authentication Required',
                text: 'Please log in to access your profile.',
                icon: 'warning',
            });
            setLoading(false);
            return;
        }

        // Fetch user profile data to get user ID
        axios.get(`${appConfig.baseurlAPI}/profile`, {
            headers: { 'Authorization': `Bearer ${yourAuthToken}` }
        })
        .then(response => {
            console.log("Profile data response:", response.data);
            const userId = response.data.data.id; // Assuming the user ID is in the 'data' object
            console.log("Fetched user ID:", userId);

            // Now fetch user details using the userId
            return axios.get(`${appConfig.baseurlAPI}/client/${userId}`, {
                headers: { 'Authorization': `Bearer ${yourAuthToken}` }
            });
        })
        .then(response => {
            console.log("Fetched user details:", response.data);
            setUserData(response.data);
            setLoading(false);
        })
        .catch(error => {
            console.error("Error fetching user data:", error);
            Swal.fire({
                title: 'Error',
                text: 'Failed to fetch user data.',
                icon: 'error',
            });
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }
    if (!userData) {
        return <div>No user data available.</div>;
    }

    return (
        <div>
            <UserInfo userData={userData} />
            <UserDetails userData={userData} />
            <AddressSection address={userData.address} />
        </div>
    );
}

export default Profile;
