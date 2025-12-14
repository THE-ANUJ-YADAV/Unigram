import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import LostFound from './pages/LostFound';
import Resources from './pages/Resources';
import Announcements from './pages/Announcements';
import Marketplace from './pages/Marketplace';
import HelpingHands from './pages/HelpingHands';

function App() {
    const location = useLocation();
    const isLoginPage = location.pathname === '/login';

    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={
                <Layout>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/lost-found" element={<LostFound />} />
                        <Route path="/resources" element={<Resources />} />
                        <Route path="/announcements" element={<Announcements />} />
                        <Route path="/marketplace" element={<Marketplace />} />
                        <Route path="/helping-hands" element={<HelpingHands />} />
                    </Routes>
                </Layout>
            } />
        </Routes>
    );
}

export default App;
