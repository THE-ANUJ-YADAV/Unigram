import React from 'react';
import Card from '../components/Card';
import { Megaphone, Calendar } from 'lucide-react';

const Announcements = () => {
    const announcements = [
        { id: 1, title: 'Annual Tech Fest 2024', date: 'Nov 25, 2024', category: 'Event', content: 'Registration for the annual tech fest is now open. Visit the official website to register.' },
        { id: 2, title: 'Library Maintenance', date: 'Nov 24, 2024', category: 'Notice', content: 'The library will remain closed on Sunday for maintenance work.' },
        { id: 3, title: 'Scholarship Applications', date: 'Nov 20, 2024', category: 'Scholarship', content: 'Applications for the merit scholarship are due by the end of this month.' },
    ];

    return (
        <div className="animate-fade-in">
            <header className="page-header">
                <h1 className="page-title">Announcements</h1>
                <p className="page-subtitle">Stay updated with the latest news and events.</p>
            </header>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {announcements.map(item => (
                    <div key={item.id} className="glass-panel" style={{ padding: '1.5rem', display: 'flex', gap: '1.5rem' }}>
                        <div style={{
                            padding: '1rem',
                            background: 'rgba(99, 102, 241, 0.1)',
                            borderRadius: 'var(--radius)',
                            color: 'var(--primary)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            minWidth: '80px'
                        }}>
                            <Megaphone size={24} />
                            <span style={{ fontSize: '0.75rem', marginTop: '0.5rem', fontWeight: 600 }}>{item.category}</span>
                        </div>
                        <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>{item.title}</h3>
                                <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                    <Calendar size={14} />
                                    {item.date}
                                </span>
                            </div>
                            <p style={{ color: 'var(--text-muted)' }}>{item.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Announcements;
