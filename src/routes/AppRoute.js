import {Routes, Route, Navigate, BrowserRouter} from "react-router-dom";
import Home from "../pages/Home";
import Characters from "../pages/Characters";
import Houses from "../pages/Houses";





function AppRoute ()
{
  return (
      
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/characters" element={<Characters/>}/>
      <Route path="/houses" element={<Houses/>}/>
      <Route path="*" element={<Navigate to={"/"} />}/>
      </Routes>
     
  );
}

export default AppRoute;