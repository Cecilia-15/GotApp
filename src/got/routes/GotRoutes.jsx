import { Navigate, Route, Routes } from "react-router-dom";
import { GotPage } from '../pages/GotPage';
import { NavBar } from '../components/NavBar' 
import { GotProvider } from "../context/GotProvider";
import { Houses } from "../pages/Houses";
import { Mapa } from "../pages/Mapa";
import { Search } from "../pages/Search";
import { Fav } from "../pages/Fav"

export const GotRoutes = () => {
    return (
        <>
        <NavBar/>
        <GotProvider>
            <Routes>
                
                <Route path="/" element={ <GotPage/> } />
                
                <Route path="/*" element={<Navigate to='/' />} />

                <Route path="/houses" element={<Houses to='/houses'/>}></Route>

                <Route path="/mapa" element={<Mapa to='/mapa'/>}></Route>

                <Route path="/search" element={<Search />}></Route>

                <Route path="/fav" element={<Fav to='/fav'/>}></Route>
            </Routes>
        </GotProvider>
        </>
    )
}