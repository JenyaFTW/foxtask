import { Routes, Route } from "react-router";
import Home from '../views/Home/Home';
import Tasks from "../views/Tasks/Tasks";
import Calendar from "../views/Calendar/Calendar";
import Sidebar from "./sidebar/Sidebar";

const App = () => {
    return (
        <div className="app fullheight">
            <Sidebar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/calendar" element={<Calendar />} />
            </Routes>
        </div>
    );
};

export default App;