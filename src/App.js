import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./Pages/LoginIn";
import SignUp from "./Pages/SignUp";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Login/>} path={"/login"}/>
                    <Route element={<SignUp/>} path={"/signup"}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;