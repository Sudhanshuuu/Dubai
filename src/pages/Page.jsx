import { Suspense, useState, lazy, createContext } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "../components/Loading";
import AdminRealEstate from "./AdminPages/AdminRealEstate/AdminRealEstate";
import AdminBuyRealEstate from "./AdminPages/AdminBuyRealEstate/AdminBuyRealEstate";
import AdminRentRealEstate from "./AdminPages/AdminRentRealEstate/AdminRentRealEstate";
import AdminCommercialRealEstate from "./AdminPages/AdminCommercialEstate/AdminCommercialEstate";
import AdminContact from "./AdminPages/AdminContact/AdminContact";
import AdminHolidayRealEstate from "./AdminPages/AdminHolidayRealEstate/AdminHolidayRealEstate";
import Detail from "./Detail/Detail";
import BuyRealEstate from "./BuyRealEstate/BuyRealEstate";
import RentRealEstate from "./RentRealEstate/RentRealEstate";
import CommercialRealEstate from "./CommercialRealEstate/CommercialRealEstate";
import HolidayRealEstate from "./HolidayRealEstate/HolidayRealEstate";
import AdminNewProject from "./AdminPages/AdminNewProject/AdminNewProject";
import NewProjects from "./NewProjects/NewProjects";
import Career from "./Career/Career";
import AdminCareer from "./AdminPages/AdminCareer/AdminCareer";
import Privacy from "./Privacy/Privacy";
import Area from "./Area/Area";
import DetailArea from "./DetailArea/DetailArea";

const Home = lazy(() => import("./Home/Home"));
const About = lazy(() => import("./About/About"));
const Video = lazy(() => import("./Video/Video"));
const Communities = lazy(() => import("./Communities/Communities"));
const Review = lazy(() => import("./Review/Review"));
const Team = lazy(() => import("./Team/Team"));
const Contact = lazy(() => import("./Contact/Contact"));
const GeneralEnquiry = lazy(() => import("./GeneralEnquiry/GeneralEnquiry"));
const ListProperty = lazy(() => import("./ListProperty/ListProperty"));
const Login = lazy(() => import("../components/AdminPanel/Login/Login"));
const AdminDashboard = lazy(() => import("./AdminPages/AdminDashboard/AdminDashboard"));
const AdminEnquiry = lazy(() => import("./AdminPages/AdminEnquiry/AdminEnquiry"));
const AdminListProperty = lazy(() => import("./AdminPages/AdminListProperty/AdminListProperty"));

export const AuthContext = createContext();

function Page() {
    const [isLoggedIn, setLoggedIn] = useState(false);

    return (
        <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/aboutUs" element={<About />} />
                    <Route path="/video" element={<Video />} />
                    <Route path="/communities" element={<Communities />} />
                    <Route path="/review" element={<Review />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/enquiry" element={<GeneralEnquiry />} />
                    <Route path="/listProperty" element={<ListProperty />} />
                    <Route path="/property/:id" element={<Detail />} />
                    <Route path="/buyRealEstate" element={<BuyRealEstate />} />
                    <Route path="/rentRealEstate" element={<RentRealEstate/>} />
                    <Route path="/commercialRealEstate" element={<CommercialRealEstate/>} />
                    <Route path="/holidayRealEstate" element={<HolidayRealEstate/>} />
                    <Route path="/newProjects" element={<NewProjects/>} />
                    <Route path="/career" element={<Career/>} />
                    <Route path="/privacy" element={<Privacy/>} />
                    <Route path="/area/:location" element={<DetailArea/>} />
                    <Route path="/area" element={<Area/>} />
                </Routes>
                <Routes>
                    {isLoggedIn ? (
                        <>
                            <Route path="/admin/home" element={<AdminDashboard />} />
                            <Route path="/admin/enquiry" element={<AdminEnquiry />} />
                            <Route path="/admin/contact" element={<AdminContact />} />
                            <Route path="/admin/listProperty" element={<AdminListProperty />} />
                            <Route path="/admin/realEstate" element={<AdminRealEstate />} />
                            <Route path="/admin/buyRealEstate" element={<AdminBuyRealEstate />} />
                            <Route path="/admin/rentRealEstate" element={<AdminRentRealEstate />} />
                            <Route path="/admin/commercialRealEstate" element={<AdminCommercialRealEstate />} />
                            <Route path="/admin/holidayRealEstate" element={<AdminHolidayRealEstate />} />
                            <Route path="/admin/newProjects" element={<AdminNewProject/>} />
                            <Route path="/admin/career" element={<AdminCareer/>} />
                        </>
                    ) : (
                        <Route path="/admin/*" element={<Login />} />
                    )}
                </Routes>
            </Suspense>
        </AuthContext.Provider>
    );
}

export default Page;
