// AdminRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminLayout from '../../../components/layout/AdminLayout'; // Import the AdminLayout component
import AdminHome from '../dashboard/main/AdminHome';
import User from '../dashboard/user/User';
import Manager from '../dashboard/manager/Manager';
import Help from '../dashboard/help-support/Help';
import Doc from '../dashboard/documentation/Doc';
import Payment from '../dashboard/payment/Payment';
import Reports from '../dashboard/reports/Reports';
import Setting from '../dashboard/setting/Setting';
import Activity from '../dashboard/activity/Activity';
import Management from '../dashboard/account-management/Management';
import Monitoring from '../dashboard/monitoring/Monitoring';
import Notification from '../dashboard/notification/Notification';
import ImageUpload from '../dashboard/image-upload/ImageUpload';
import VideoUpload from '../dashboard/video-upload/VideoUpload';
import Instagram from '../dashboard/instagram/Instagram2';
import Instagram2 from '../dashboard/instagram/Instagram2';
import Facebook2 from '../dashboard/facebook/Facebook2';

const AdminRoutes = () => {
    return (
        <AdminLayout>
            <Routes>
                <Route index element={<AdminHome />} />
                <Route path={'/user-management'} element={<User />} />
                <Route path={'/manager-management'} element={<Manager />} />
                <Route path={'/support-help-desk'} element={<Help />} />
                <Route path={'/help-documentation'} element={<Doc />} />
                <Route path={'/payment-subscription'} element={<Payment />} />
                <Route path={'/report-analytics'} element={<Reports />} />
                <Route path={'/settings'} element={<Setting />} />
                <Route path={'/all-activities'} element={<Activity />} />
                <Route path={'/notifications'} element={<Notification />} />
                <Route path={'/logout-account-management'} element={<Management />} />
                <Route path={'/system-health-monitoring'} element={<Monitoring />} />
                <Route path={'/image-upload'} element={<ImageUpload />} />
                <Route path={'/video-upload'} element={<VideoUpload />} />
                <Route path={'/instagram'} element={<Instagram2 />} />
                <Route path={'/facebook'} element={<Facebook2 />} />
            </Routes>
        </AdminLayout>
    );
};

export default AdminRoutes;
