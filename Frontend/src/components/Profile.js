import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const username = "User"; // Replace with actual username if available

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLogout = () => {
        // Add logout functionality here
        console.log("User logged out");
    };

    return (
        <div className="profile-container">
            <img
                src="path/to/profile_icon.png"
                alt="Profile Icon"
                className="profile-icon"
                onClick={toggleDropdown}
            />
            {isDropdownOpen && (
                <div className="profile-dropdown">
                    <p className="profile-username">{username}</p>
                    <button className="logout-button" onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
};

export default Profile;
