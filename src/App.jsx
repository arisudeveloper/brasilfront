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

import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
    <BrowserRouter>
      <UserStorage>
        <Routes>
          <Route path="/brasilfront/" element={<Home />}></Route>
          <Route
            path="/brasilfront/experiences"
            element={<Experiences />}
          ></Route>
          <Route path="/brasilfront/aboutus" element={<About />}></Route>
          <Route
            path="/brasilfront/sensations"
            element={<Sensations />}
          ></Route>
          <Route
            path="/brasilfront/sensations/grp-fit"
            element={<GrpFit />}
          ></Route>
          <Route
            path="/brasilfront/sensations/luxury"
            element={<Luxury />}
          ></Route>
          <Route path="/brasilfront/sensations/mice" element={<Mice />}></Route>
          <Route
            path="/brasilfront/sensations/exclusive"
            element={<Exclusive />}
          ></Route>
          <Route
            path="/brasilfront/sensations/workation"
            element={<Workation />}
          ></Route>
          <Route
            path="/brasilfront/sensations/hotels"
            element={<Hotels />}
          ></Route>
          <Route path="/brasilfront/services" element={<Services />}></Route>
          <Route path="/brasilfront/clients" element={<Clients />}></Route>
          <Route path="/brasilfront/iglta" element={<Iglta />}></Route>
          <Route
            path="/brasilfront/panel-de-clientes"
            element={<Register />}
          ></Route>
          <Route path="/brasilfront/login" element={<Login />}></Route>
          <Route path="/brasilfront/pending" element={<PagePending />}></Route>
          <Route
            path="/brasilfront/forgot-pass"
            element={<ForgotPass />}
          ></Route>
          <Route
            path="/brasilfront/privacy-policy"
            element={<PrivacyPolicy />}
          ></Route>
          <Route
            path="/brasilfront/reset-pass/:token"
            element={<ResetPass />}
          ></Route>
          <Route
            path="/brasilfront/initial"
            element={
              <PrivateRoute>
                <Initial />
              </PrivateRoute>
            }
          ></Route>

          <Route
            path="/brasilfront/home-production"
            element={<HomeProd />}
          ></Route>

          <Route
            path="/brasilfront/fit-production"
            element={<FitProd />}
          ></Route>

          <Route
            path="/brasilfront/group-production"
            element={<GRProd />}
          ></Route>

          <Route path="/brasilfront/home-hotels" element={<HomeHtl />}></Route>

          <Route
            path="/brasilfront/northeast-hotels"
            element={<NortheastHtl />}
          ></Route>

          <Route
            path="/brasilfront/southeast-hotels"
            element={<SoutheastHtl />}
          ></Route>

          <Route
            path="/brasilfront/south-hotels"
            element={<SouthHtl />}
          ></Route>

          <Route
            path="/brasilfront/admin"
            element={
              <PrivateRouteAdmin>
                <Admin />
              </PrivateRouteAdmin>
            }
          ></Route>
        </Routes>
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;
