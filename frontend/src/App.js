import './App.scss';

import { Routes, Route, Router } from 'react-router-dom';
import Home from './views/home/Home';
import Calendar from './views/calendar/Calendar';
import Login from './views/login/Login';
import Signup from './views/signup/Signup';
import Tasks from './views/tasks/Tasks';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';

const PageLayout = ({ children }) => (
  <div className="app__wrapper">
    <Sidebar />
    <Header />
    {children}
  </div>
);

const App = () => {
  return (
    <div className="app__container">
      <Routes>
        <Route
          path="/"
          element={
            <PageLayout>
              <Home />
            </PageLayout>
          }
        />
        <Route
          path="/tasks"
          element={
            <PageLayout>
              <Tasks />
            </PageLayout>
          }
        />
        <Route
          path="/calendar"
          element={
            <PageLayout>
              <Calendar />
            </PageLayout>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default App;
