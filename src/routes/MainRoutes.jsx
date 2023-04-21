import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Inicio, Comics, ComicsDetails} from "../pages"
import { NavBarComponent } from "../components";

export const MainRoutes = () => {
  return (
    <Router>
       <NavBarComponent/>
        <Routes>
            <Route exact path="/" element={<Inicio />}/>
            <Route exact path="/comics" element={<Comics />}/>
            <Route exact path="/comics/:productId" element={<ComicsDetails />}/>
        </Routes>
    </Router>
  )
}
