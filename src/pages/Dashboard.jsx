import React from 'react';
import Card from '../components/Card';
import { Bell, Calendar, TrendingUp } from 'lucide-react';

const Dashboard = () => {
    return (
        <div className="animate-fade-in">
            <header className="page-header">
                <h1 className="page-title">Dashboard</h1>
                <p className="page-subtitle">Welcome back, Student! Here's what's happening today.</p>
            </header>

            <div className="grid-cards" style={{ marginBottom: '2rem' }}>
                <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ padding: '1rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '50%', color: 'var(--success)' }}>
                        <TrendingUp size={24} />
                    </div>
                    <div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>12</div>
                        <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>New Resources</div>
                    </div>
                </div>
                <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ padding: '1rem', background: 'rgba(245, 158, 11, 0.1)', borderRadius: '50%', color: 'var(--warning)' }}>
                        <Bell size={24} />
                    </div>
                    <div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>5</div>
                        <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Unread Notices</div>
                    </div>
                </div>
                <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ padding: '1rem', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '50%', color: 'var(--primary)' }}>
                        <Calendar size={24} />
                    </div>
                    <div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>3</div>
                        <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Upcoming Events</div>
                    </div>
                </div>
            </div>

            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>Recent Activity</h2>
            <div className="grid-cards">
                <Card
                    title="Lost Calculator"
                    subtitle="Lost & Found • 2 hours ago"
                    footer={<span style={{ color: 'var(--primary)', fontSize: '0.875rem' }}>View Details</span>}
                >
                    <p>Found a scientific calculator in Room 304. Please claim it from the office.</p>
                </Card>
                <Card
                    title="Physics Mid-Sem PYQ"
                    subtitle="Resources • 5 hours ago"
                    footer={<span style={{ color: 'var(--primary)', fontSize: '0.875rem' }}>Download</span>}
                >
                    <p>Uploaded the 2023 Physics mid-semester question paper with solutions.</p>
                </Card>
                <Card
                    title="Coding Club Meetup"
                    subtitle="Announcements • 1 day ago"
                    footer={<span style={{ color: 'var(--primary)', fontSize: '0.875rem' }}>Register</span>}
                >
                    <p>Join us this Friday for a workshop on Web Development basics.</p>
                </Card>
            </div>
        </div>
    );
};

export default Dashboard;
