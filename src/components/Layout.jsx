import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
    LayoutDashboard,
    Search,
    BookOpen,
    Megaphone,
    ShoppingBag,
    HeartHandshake,
    LogOut,
    Menu,
    X
} from 'lucide-react';

const Layout = ({ children }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    const navItems = [
        { path: '/', label: 'Dashboard', icon: LayoutDashboard },
        { path: '/lost-found', label: 'Lost & Found', icon: Search },
        { path: '/resources', label: 'Resources', icon: BookOpen },
        { path: '/announcements', label: 'Announcements', icon: Megaphone },
        { path: '/marketplace', label: 'Buy & Sell', icon: ShoppingBag },
        { path: '/helping-hands', label: 'Helping Hands', icon: HeartHandshake },
    ];

    const handleLogout = () => {
        // Mock logout
        navigate('/login');
    };

    return (
        <div className="layout" style={{ display: 'flex', minHeight: '100vh' }}>
            {/* Sidebar */}
            <aside
                className={`glass-panel ${isMobileMenuOpen ? 'mobile-open' : ''}`}
                style={{
                    width: '260px',
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'fixed',
                    height: '96vh',
                    top: '2vh',
                    left: '1rem',
                    zIndex: 50,
                    transition: 'transform 0.3s ease',
                    '@media (max-width: 768px)': {
                        transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-120%)'
                    }
                }}
            >
                <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{
                        width: '40px',
                        height: '40px',
                        background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                        fontSize: '1.2rem'
                    }}>U</div>
                    <h1 style={{ fontSize: '1.5rem', fontWeight: '700', letterSpacing: '-0.5px' }}>Unigram</h1>
                </div>

                <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    padding: '0.75rem 1rem',
                                    borderRadius: 'var(--radius)',
                                    color: isActive ? 'white' : 'var(--text-muted)',
                                    background: isActive ? 'rgba(99, 102, 241, 0.1)' : 'transparent',
                                    border: isActive ? '1px solid rgba(99, 102, 241, 0.2)' : '1px solid transparent',
                                    transition: 'all 0.2s'
                                }}
                            >
                                <Icon size={20} color={isActive ? 'var(--primary)' : 'currentColor'} />
                                <span style={{ fontWeight: isActive ? 500 : 400 }}>{item.label}</span>
                            </Link>
                        );
                    })}
                </nav>

                <button
                    onClick={handleLogout}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius)',
                        color: 'var(--error)',
                        background: 'rgba(239, 68, 68, 0.1)',
                        marginTop: 'auto'
                    }}
                >
                    <LogOut size={20} />
                    <span>Logout</span>
                </button>
            </aside>

            {/* Mobile Toggle */}
            <button
                className="mobile-toggle glass-panel"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                style={{
                    position: 'fixed',
                    top: '1rem',
                    right: '1rem',
                    zIndex: 60,
                    padding: '0.5rem',
                    display: 'none' // Hidden on desktop via CSS media query usually, but inline styles are tricky. 
                    // I'll add a media query in index.css for this or just leave it visible for now.
                }}
            >
                {isMobileMenuOpen ? <X /> : <Menu />}
            </button>

            {/* Main Content */}
            <main style={{
                flex: 1,
                marginLeft: '280px',
                padding: '2rem',
                minHeight: '100vh'
            }}>
                {children}
            </main>
        </div>
    );
};

export default Layout;
