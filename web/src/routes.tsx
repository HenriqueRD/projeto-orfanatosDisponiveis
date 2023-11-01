import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MapOrphanage from "./pages/MapOrphanage";

export default function Router() {

  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/orphanages" Component={MapOrphanage} />
        <Route path="/orphanege/:id" Component={MapOrphanage} />
        <Route path="/create-orphanages" Component={Home} />
      </Routes>
    </BrowserRouter>
  )
}