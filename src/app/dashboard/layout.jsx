import React from 'react';

const DashboardLayout = ({children}) => {
    return (
        <div>
            <div>
                <h1>Dashboard Sidebar</h1>
            </div>
            {children}
        </div>
    );
};

export default DashboardLayout;