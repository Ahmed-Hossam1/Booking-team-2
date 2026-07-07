import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Horehome from "./features/home/Horehome";
import Homework    from "./features/home/Homework";
import Findcard   from "./features/home/Findcard";
import Docterhome   from "./features/home/docterhome";
import Reviews   from "./features/home/Reviews";
import FAQ   from "./features/home/FQa";
import Footer  from "./features/home/Footer";


import ChooseSpecialistPage from "./features/chooseSpecialist/components/ChooseSpecialistPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<><Horehome /> <Homework/>   <Findcard/> <Docterhome/> 
          <Reviews/>  <FAQ/>
          </>} />
        </Route>
        

        <Route
          path="/choose-specialist"
          element={<ChooseSpecialistPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
import { RouterProvider } from "react-router-dom";
import { AppProviders } from "@/app/providers/AppProviders";
import { router } from "@/app/index";

const App = () => {
  return (
    <AppProviders>
      <RouterProvider router={router} />
    </AppProviders>
  );
};

export default App;
