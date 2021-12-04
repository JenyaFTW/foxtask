import { Routes, Route } from "react-router";
import Calendar from "../views/Calendar";
import Home from '../views/Home';
import Login from "../views/Login";
import Signup from "../views/Signup";
import Tasks from "../views/Tasks";
import Sidebar from "./sidebar/Sidebar";

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