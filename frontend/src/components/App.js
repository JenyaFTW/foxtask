import { Routes, Route } from "react-router";
import Calendar from "../views/Calendar";
import Home from '../views/Home';
import Tasks from "../views/Tasks";
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