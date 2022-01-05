import './App.css';

import { Routes, Route, Router } from "react-router-dom";
import Home from './views/home/Home';
import Calendar from "./views/calendar/Calendar";
import Login from "./views/login/Login";
import Signup from "./views/signup/Signup";
import Tasks from "./views/tasks/Tasks";
import Sidebar from "./components/sidebar/Sidebar";

const SidebarLayout = ({ children }) => (
    <div className="app">
        <Sidebar />
        {children}
    </div>
);

const App = () => {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<SidebarLayout><Home /></SidebarLayout>} />
                <Route path="/tasks" element={<SidebarLayout><Tasks /></SidebarLayout>} />
                <Route path="/calendar" element={<SidebarLayout><Calendar /></SidebarLayout>} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </div>
    );
};

export default App;