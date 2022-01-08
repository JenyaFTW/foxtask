import './App.scss';
import { Routes, Route } from 'react-router-dom';

import Home from './views/home/Home';
import Calendar from './views/calendar/Calendar';
import Day from './views/day/Day';
import Tasks from './views/tasks/Tasks';
import Settings from './views/settings/Settings';
import Support from './views/support/Support';
import Login from './views/login/Login';
import Signup from './views/signup/Signup';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';

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
          path="/calendar"
          element={
            <PageLayout>
              <Calendar />
            </PageLayout>
          }
        />
        <Route
          path="/day"
          element={
            <PageLayout>
              <Day />
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
          path="/settings"
          element={
            <PageLayout>
              <Settings />
            </PageLayout>
          }
        />
        <Route
          path="/support"
          element={
            <PageLayout>
              <Support />
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
