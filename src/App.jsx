import Home from './pages/Home/Home';
import Experiences from './pages/Experiences/Experiences';
import About from './pages/About/About';
import Sensations from './pages/Sensations/Sensations';
import GrpFit from './pages/Sensations/GroupsIndividuals/GroupsIndividuals';
import Luxury from './pages/Sensations/Luxury/Luxury';
import Mice from './pages/Sensations/Mice/Mice';
import Exclusive from './pages/Sensations/Exclusive/Exclusive';
import Workation from './pages/Sensations/Workation/Workation';
import Hotels from './pages/Sensations/Hotels/Hotels';
import Services from './pages/Services/Services';
import Iglta from './pages/IGLTA/Iglta';
import Clients from './pages/Clients/Clients';

import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import PagePending from './pages/PagePending/PagePending';
import Initial from './pages/PrivatePages/Initial/Initial';

import FitProd from './pages/PrivatePages/Products/FitProd';
import GRProd from './pages/PrivatePages/Products/GRProd';

import HomeHtl from './pages/PrivatePages/RegionHotels/HomeHtl';
import HomeProd from './pages/PrivatePages/Products/HomeProd';

import NortheastHtl from './pages/PrivatePages/RegionHotels/NortheastHtl';
import SoutheastHtl from './pages/PrivatePages/RegionHotels/SoutheastHtl';
import SouthHtl from './pages/PrivatePages/RegionHotels/SouthHtl';

import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Admin from './pages/Admin/Admin';

import ForgotPass from './pages/ForgotPass/ForgotPass';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';

import ResetPass from './pages/ResetPass/ResetPass';
import { UserStorage } from './context/UserContext';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PrivateRouteAdmin from './PrivateRoute/PrivateRouteAdmin';

function App() {
  return (
    <HashRouter basename="/brasilfront">
      <UserStorage>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/experiences" element={<Experiences />}></Route>
          <Route path="/aboutus" element={<About />}></Route>
          <Route path="/sensations" element={<Sensations />}></Route>
          <Route path="/sensations/grp-fit" element={<GrpFit />}></Route>
          <Route path="/sensations/luxury" element={<Luxury />}></Route>
          <Route path="/sensations/mice" element={<Mice />}></Route>
          <Route path="/sensations/exclusive" element={<Exclusive />}></Route>
          <Route path="/sensations/workation" element={<Workation />}></Route>
          <Route path="/sensations/hotels" element={<Hotels />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/clients" element={<Clients />}></Route>
          <Route path="/iglta" element={<Iglta />}></Route>
          <Route path="/panel-de-clientes" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/pending" element={<PagePending />}></Route>
          <Route path="/forgot-pass" element={<ForgotPass />}></Route>
          <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
          <Route path="/reset-pass/:token" element={<ResetPass />}></Route>
          <Route
            path="/initial"
            element={
              <PrivateRoute>
                <Initial />
              </PrivateRoute>
            }
          ></Route>

          <Route path="/home-production" element={<HomeProd />}></Route>

          <Route path="/fit-production" element={<FitProd />}></Route>

          <Route path="/group-production" element={<GRProd />}></Route>

          <Route path="/home-hotels" element={<HomeHtl />}></Route>

          <Route path="/northeast-hotels" element={<NortheastHtl />}></Route>

          <Route path="/southeast-hotels" element={<SoutheastHtl />}></Route>

          <Route path="/south-hotels" element={<SouthHtl />}></Route>

          <Route
            path="/admin"
            element={
              <PrivateRouteAdmin>
                <Admin />
              </PrivateRouteAdmin>
            }
          ></Route>
        </Routes>
      </UserStorage>
    </HashRouter>
  );
}

export default App;
