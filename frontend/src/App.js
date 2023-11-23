import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/components/home/Home";
import "./App.css";
import Contact from "./pages/contact/Contact";
import Dashboard from "./pages/dashboard/Dashboard";
import Group from "./pages/dashboard/Group";
import Instagram from "./pages/dashboard/Instagram";
import Pages from "./pages/dashboard/Pages";
import PostNotification from "./pages/dashboard/PostNotification";
import Refferals from "./pages/dashboard/Refferals/Refferals";
import Billing from "./pages/dashboard/billing/Billing";
import Email from "./pages/dashboard/email/Email";
import Post3 from "./pages/dashboard/emailtemplate/Post3";
import TemplateEmail from "./pages/dashboard/emailtemplate/TemplateEmail";
import Post from "./pages/dashboard/facebooktemplate/Post";
import TemplateFacebook from "./pages/dashboard/facebooktemplate/TemplateFacebook";
import FaqDashboard from "./pages/dashboard/faq/FaqDashboard";
import Started from "./pages/dashboard/gettingstarted/Started";
import ImageGallery from "./pages/dashboard/imagegallery/ImageGallery";
import Post2 from "./pages/dashboard/instagramtemplate/Post2";
import TemplateInstagram from "./pages/dashboard/instagramtemplate/TemplateInstagram";
import Join from "./pages/dashboard/jointeam/Join";
import Privacy from "./pages/dashboard/privacy-policy/Privacy";
import Profile from "./pages/dashboard/profile/Profile";
import Terms from "./pages/dashboard/terms-service/Terms";
import VideoGallery from "./pages/dashboard/videogallery/VideoGallery";
import Faq from "./pages/faq/Faq";
import GroupManager from "./pages/manager/Group";
import Signin from "./pages/sign-in/Signin";
import SignUp from "./pages/sign-up/SignUp";

import { Toaster } from "react-hot-toast";
import AdminPrivateRoute from "./pages/AdminPrivateRoute";
import PublicRoute from "./pages/PublicRoute";
import UserPrivateRoute from "./pages/UserPrivateRoute";
import Management from "./pages/admin/dashboard/account-management/Management";
import Activity from "./pages/admin/dashboard/activity/Activity";
import AddManager from "./pages/admin/dashboard/add-manager/AddManager";
import AddUser from "./pages/admin/dashboard/add-user/AddUser";
import Doc from "./pages/admin/dashboard/documentation/Doc";
import Facebook2 from "./pages/admin/dashboard/facebook/Facebook2";
import Help from "./pages/admin/dashboard/help-support/Help";
import ImageUpload from "./pages/admin/dashboard/image-upload/ImageUpload";
import Instagram2 from "./pages/admin/dashboard/instagram/Instagram2";
import Manager from "./pages/admin/dashboard/manager/Manager";
import Monitoring from "./pages/admin/dashboard/monitoring/Monitoring";
import Notification from "./pages/admin/dashboard/notification/Notification";
import Payment from "./pages/admin/dashboard/payment/Payment";
import Reports from "./pages/admin/dashboard/reports/Reports";
import Setting from "./pages/admin/dashboard/setting/Setting";
import User from "./pages/admin/dashboard/user/User";
import VideoUpload from "./pages/admin/dashboard/video-upload/VideoUpload";
import AdminRoutes from "./pages/admin/routes/AdminRoutes";
import Overview from "./pages/dashboard/Overview";
import ContactDash from "./pages/dashboard/contact/ContactDash";
import Facebook from "./pages/dashboard/facebooktempteam/Facebook";
import Image from "./pages/dashboard/imagesteam/Image";
import InstagramTemp from "./pages/dashboard/instatempteam/InstagramTemp";
import TeamPage from "./pages/dashboard/teampage/TeamPage";
import Videos from "./pages/dashboard/videostemp/Videos";
import ForgetPassword from "./pages/forget-password/ForgetPassword";
import InstagramManager from "./pages/manager/Instagram";
import ManagerMain from "./pages/manager/ManagerDashboard";
import OverviewManager from "./pages/manager/Overview";
import ManagerPages from "./pages/manager/Pages";
import PostNotificationManager from "./pages/manager/PostNotification";
import BillingManager from "./pages/manager/billing/BillingManager";
import ContactManager from "./pages/manager/contact/ContactDash";
import PostManager from "./pages/manager/facebooktemplate/Post";
import TemplateFacebookManager from "./pages/manager/facebooktemplate/TemplateFacebook";
import FacebookManager from "./pages/manager/facebooktempteam/Facebook";
import FaqManager from "./pages/manager/faq/FaqDashboard";
import StartedManager from "./pages/manager/gettingstarted/Started";
import ImageGalleryManager from "./pages/manager/imagegallery/ImageGallery";
import ImageManagerTeam from "./pages/manager/imagesteam/Image";
import Post2Manager from "./pages/manager/instagramtemplate/Post2";
import TemplateInstagramManager from "./pages/manager/instagramtemplate/TemplateInstagram";
import JoinManager from "./pages/manager/jointeam/Join";
import PrivacyManager from "./pages/manager/privacy-policy/Privacy";
import ProfileManager from "./pages/manager/profile/Profile";
import TeamPageManager from "./pages/manager/teampage/TeamPage";
import TermsManager from "./pages/manager/terms-service/Terms";
import VideoGalleryManager from "./pages/manager/videogallery/VideoGallery";
import VideosManagerTeam from "./pages/manager/videostemp/Videos";
import ResetPassword from "./pages/reset-password/ResetPassword";

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route
            path="/sign-up"
            element={
              <PublicRoute>
                <SignUp />
              </PublicRoute>
            }
          />
          <Route
            path="/sign-in"
            element={
              <PublicRoute>
                <Signin />
              </PublicRoute>
            }
          />
          <Route
            path="/forget-password/email"
            element={
              <PublicRoute>
                <ForgetPassword />
              </PublicRoute>
            }
          />
          <Route
            path="/reset-password/:token"
            element={
              <PublicRoute>
                <ResetPassword />
              </PublicRoute>
            }
          />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />

          {/* dashboard route */}
          <Route
            path="/dashboard/group"
            element={
              <UserPrivateRoute>
                <Group />
              </UserPrivateRoute>
            }
          />
          <Route
            path="/dashboard/pages"
            element={
              <UserPrivateRoute>
                <Pages />
              </UserPrivateRoute>
            }
          />
          <Route
            path="/dashboard/contact"
            element={
              <UserPrivateRoute>
                <ContactDash />
              </UserPrivateRoute>
            }
          />
          <Route
            path="/dashboard/instagram"
            element={
              <UserPrivateRoute>
                <Instagram />
              </UserPrivateRoute>
            }
          />
          <Route
            path="/dashboard/post-notification"
            element={
              <UserPrivateRoute>
                <PostNotification />
              </UserPrivateRoute>
            }
          />
          <Route
            path="/dashboard/overview"
            element={
              <UserPrivateRoute>
                <Overview />
              </UserPrivateRoute>
            }
          />
          <Route
            path="/dashboard/facebooktemplate/facebook-template"
            element={
              <UserPrivateRoute>
                <TemplateFacebook />
              </UserPrivateRoute>
            }
          />
          <Route
            path="/dashboard/facebooktemplate/post"
            element={
              <UserPrivateRoute>
                <Post />
              </UserPrivateRoute>
            }
          />
          <Route
            path="/dashboard/instagramtemplate/instagram-template"
            element={
              <UserPrivateRoute>
                <TemplateInstagram />
              </UserPrivateRoute>
            }
          />
          <Route
            path="/dashboard/instagramtemplate/post"
            element={
              <UserPrivateRoute>
                <Post2 />
              </UserPrivateRoute>
            }
          />
          <Route
            path="/dashboard/emailtemplate/email-template"
            element={
              <UserPrivateRoute>
                <TemplateEmail />
              </UserPrivateRoute>
            }
          />
          <Route
            path="/dashboard/emailtemplate/post"
            element={
              <UserPrivateRoute>
                <Post3 />
              </UserPrivateRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <UserPrivateRoute>
                <Dashboard />
              </UserPrivateRoute>
            }
          />
          <Route
            path="/dashboard/imagegallery/image-gallery"
            element={
              <UserPrivateRoute>
                <ImageGallery />
              </UserPrivateRoute>
            }
          />
          <Route
            path="/dashboard/team/image"
            element={
              <UserPrivateRoute>
                <Image />
              </UserPrivateRoute>
            }
          />
          <Route
            path="/dashboard/team/videos"
            element={
              <UserPrivateRoute>
                <Videos />
              </UserPrivateRoute>
            }
          />
          <Route
            path="/dashboard/imagegallery/video-gallery"
            element={
              <UserPrivateRoute>
                <VideoGallery />
              </UserPrivateRoute>
            }
          />
          <Route
            path="/dashboard/jointeam/join-team"
            element={
              <UserPrivateRoute>
                <Join />
              </UserPrivateRoute>
            }
          />
          <Route path="/dashboard/team/team-page" element={<TeamPage />} />
          <Route
            path="/dashboard/team/facebook-template"
            element={
              <UserPrivateRoute>
                <Facebook />
              </UserPrivateRoute>
            }
          />
          <Route
            path="/dashboard/team/instagram-template"
            element={
              <UserPrivateRoute>
                <InstagramTemp />
              </UserPrivateRoute>
            }
          />
          <Route
            path="/dashboard/profile/profile"
            element={
              <UserPrivateRoute>
                <Profile />
              </UserPrivateRoute>
            }
          />
          <Route
            path="/dashboard/Refferals/refferal"
            element={
              <UserPrivateRoute>
                <Refferals />
              </UserPrivateRoute>
            }
          />
          <Route
            path="/dashboard/billing"
            element={
              <UserPrivateRoute>
                <Billing />
              </UserPrivateRoute>
            }
          />
          <Route
            path="/dashboard/getting-started"
            element={
              <UserPrivateRoute>
                <Started />
              </UserPrivateRoute>
            }
          />
          <Route
            path="/dashboard/faq"
            element={
              <UserPrivateRoute>
                <FaqDashboard />
              </UserPrivateRoute>
            }
          />
          <Route
            path="/dashboard/privacy-policy/privacy"
            element={
              <UserPrivateRoute>
                <Privacy />
              </UserPrivateRoute>
            }
          />
          <Route
            path="/dashboard/terms-service/terms"
            element={
              <UserPrivateRoute>
                <Terms />
              </UserPrivateRoute>
            }
          />
          <Route
            path="/dashboard/email"
            element={
              <UserPrivateRoute>
                <Email />
              </UserPrivateRoute>
            }
          />

          {/* manager  */}
          <Route
            path="/manager/group"
            element={
              <UserPrivateRoute>
                <GroupManager />
              </UserPrivateRoute>
            }
          />
          <Route
            path="/manager/pages"
            element={
              <UserPrivateRoute>
                <ManagerPages />
              </UserPrivateRoute>
            }
          />
          <Route
            path="/manager/contact"
            element={
              <UserPrivateRoute>
                <ContactManager />
              </UserPrivateRoute>
            }
          />
          <Route
            path="/manager/instagram"
            element={
              <UserPrivateRoute>
                <InstagramManager />
              </UserPrivateRoute>
            }
          />
          <Route
            path="/manager/post-notification"
            element={
              <UserPrivateRoute>
                <PostNotificationManager />
              </UserPrivateRoute>
            }
          />
          <Route
            path="/manager/overview"
            element={
              <UserPrivateRoute>
                <OverviewManager />
              </UserPrivateRoute>
            }
          />
          <Route
            path="/manager/facebooktemplate/facebook-template"
            element={
              <UserPrivateRoute>
                <TemplateFacebookManager />
              </UserPrivateRoute>
            }
          />
          <Route
            path="/manager/facebooktemplate/post"
            element={
              <UserPrivateRoute>
                <PostManager />
              </UserPrivateRoute>
            }
          />
          <Route
            path="/manager/instagramtemplate/instagram-template"
            element={
              <UserPrivateRoute>
                <TemplateInstagramManager />
              </UserPrivateRoute>
            }
          />
          <Route
            path="/manager/instagramtemplate/post"
            element={
              <UserPrivateRoute>
                <Post2Manager />
              </UserPrivateRoute>
            }
          />

          <Route
            path="/Manager"
            element={
              <UserPrivateRoute>
                <ManagerMain />
              </UserPrivateRoute>
            }
          />
          <Route
            path="/manager/imagegallery/image-gallery"
            element={
              <UserPrivateRoute>
                <ImageGalleryManager />
              </UserPrivateRoute>
            }
          />
          <Route
            path="/manager/team/image"
            element={
              <UserPrivateRoute>
                <ImageManagerTeam />
              </UserPrivateRoute>
            }
          />
          <Route
            path="/manager/team/videos"
            element={
              <UserPrivateRoute>
                <VideosManagerTeam />
              </UserPrivateRoute>
            }
          />
          <Route
            path="/manager/imagegallery/video-gallery"
            element={
              <UserPrivateRoute>
                <VideoGalleryManager />
              </UserPrivateRoute>
            }
          />
          <Route
            path="/manager/jointeam/join-team"
            element={
              <UserPrivateRoute>
                <JoinManager />
              </UserPrivateRoute>
            }
          />
          <Route
            path="/manager/team/team-page"
            element={
              <UserPrivateRoute>
                <TeamPageManager />
              </UserPrivateRoute>
            }
          />
          <Route
            path="/manager/team/facebook-template"
            element={
              <UserPrivateRoute>
                <FacebookManager />
              </UserPrivateRoute>
            }
          />
          <Route
            path="/manager/team/instagram-template"
            element={<UserPrivateRoute></UserPrivateRoute>}
          />
          <Route
            path="/manager/profile/profile"
            element={
              <UserPrivateRoute>
                <ProfileManager />
              </UserPrivateRoute>
            }
          />
          <Route
            path="/dashboard/Refferals/refferal"
            element={
              <UserPrivateRoute>
                <Refferals />
              </UserPrivateRoute>
            }
          />
          <Route
            path="/manager/billing"
            element={
              <UserPrivateRoute>
                <BillingManager />
              </UserPrivateRoute>
            }
          />
          <Route
            path="/manager/getting-started"
            element={
              <UserPrivateRoute>
                <StartedManager />
              </UserPrivateRoute>
            }
          />

          <Route path="/manager/faq" element={<FaqManager />} />
          <Route
            path="/manager/privacy-policy/privacy"
            element={<PrivacyManager />}
          />
          <Route
            path="/manager/terms-service/terms"
            element={<TermsManager />}
          />

          {/* admin  */}
          <Route
            path="/admin"
            element={
              <AdminPrivateRoute>
                <AdminRoutes />
              </AdminPrivateRoute>
            }
          />
          <Route
            path="/user-management"
            element={
              <AdminPrivateRoute>
                <User />
              </AdminPrivateRoute>
            }
          />
          <Route
            path={"/manager-management"}
            element={
              <AdminPrivateRoute>
                <Manager />
              </AdminPrivateRoute>
            }
          />
          <Route
            path={"/support-help-desk"}
            element={
              <AdminPrivateRoute>
                <Help />
              </AdminPrivateRoute>
            }
          />
          <Route
            path={"/help-documentation"}
            element={
              <AdminPrivateRoute>
                <Doc />
              </AdminPrivateRoute>
            }
          />
          <Route
            path={"/payment-subscription"}
            element={
              <AdminPrivateRoute>
                <Payment />
              </AdminPrivateRoute>
            }
          />
          <Route
            path={"/report-analytics"}
            element={
              <AdminPrivateRoute>
                <Reports />
              </AdminPrivateRoute>
            }
          />
          <Route
            path={"/settings"}
            element={
              <AdminPrivateRoute>
                <Setting />
              </AdminPrivateRoute>
            }
          />
          <Route
            path={"/all-activities"}
            element={
              <AdminPrivateRoute>
                <Activity />
              </AdminPrivateRoute>
            }
          />
          <Route
            path={"/logout-account-management"}
            element={
              <AdminPrivateRoute>
                <Management />
              </AdminPrivateRoute>
            }
          />
          <Route
            path={"/system-health-monitoring"}
            element={
              <AdminPrivateRoute>
                <Monitoring />
              </AdminPrivateRoute>
            }
          />
          <Route
            path={"/notifications"}
            element={
              <AdminPrivateRoute>
                <Notification />
              </AdminPrivateRoute>
            }
          />
          <Route
            path={"/content-template"}
            element={
              <AdminPrivateRoute>
                <AdminRoutes />
              </AdminPrivateRoute>
            }
          />
          <Route
            path={"/image-upload"}
            element={
              <AdminPrivateRoute>
                <ImageUpload />
              </AdminPrivateRoute>
            }
          />
          <Route
            path={"/video-upload"}
            element={
              <AdminPrivateRoute>
                <VideoUpload />
              </AdminPrivateRoute>
            }
          />
          <Route
            path={"/instagram"}
            element={
              <AdminPrivateRoute>
                <Instagram2 />
              </AdminPrivateRoute>
            }
          />
          <Route
            path={"/facebook"}
            element={
              <AdminPrivateRoute>
                <Facebook2 />
              </AdminPrivateRoute>
            }
          />
          <Route
            path={"/add-user"}
            element={
              <AdminPrivateRoute>
                <AddUser />
              </AdminPrivateRoute>
            }
          />
          <Route
            path={"/add-manager"}
            element={
              <AdminPrivateRoute>
                <AddManager />
              </AdminPrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;