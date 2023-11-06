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
        <Route path="/orphanage/:id" Component={Orphanage} />
        <Route path="/create-orphanages" Component={CreateOrphanage} />
      </Routes>
    </BrowserRouter>
  )
}