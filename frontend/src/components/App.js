import { Routes, Route } from "react-router";
import Home from '../views/Home';
import Sidebar from "./sidebar/Sidebar";

const App = () => {
    return (
        <div className="app fullheight">
            <Sidebar />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    );
};

export default App;