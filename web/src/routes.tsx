import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MapOrphanage from "./pages/MapOrphanage";
import Orphanage from "./pages/Orphanage";
<<<<<<< HEAD
import CreateOrphanage from "./pages/CreateOrphanage";
=======
>>>>>>> 772a0a2c48294177d0318eafdb6919e862751654

export default function Router() {

  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/orphanages" Component={MapOrphanage} />
        <Route path="/orphanage/:id" Component={Orphanage} />
<<<<<<< HEAD
        <Route path="/create-orphanages" Component={CreateOrphanage} />
=======
        <Route path="/create-orphanages" Component={Home} />
>>>>>>> 772a0a2c48294177d0318eafdb6919e862751654
      </Routes>
    </BrowserRouter>
  )
}