import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MapOrphanage from "./pages/MapOrphanage";
import Orphanage from "./pages/Orphanage";
import CreateOrphanage from "./pages/CreateOrphanage";

export default function Router() {

  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/orphanages" Component={MapOrphanage} />
        <Route path="/orphanages/:id" Component={Orphanage} />
        <Route path="/orphanages/create" Component={CreateOrphanage} />
      </Routes>
    </BrowserRouter>
  )
}