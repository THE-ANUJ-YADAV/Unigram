import React from 'react';

const Card = ({ title, subtitle, children, footer, image }) => {
    return (
        <div className="glass-panel animate-fade-in" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            {image && (
                <div style={{ height: '160px', overflow: 'hidden' }}>
                    <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
            )}
            <div style={{ padding: '1.5rem', flex: 1 }}>
                {title && <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.25rem' }}>{title}</h3>}
                {subtitle && <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1rem' }}>{subtitle}</p>}
                <div style={{ color: 'var(--text-muted)' }}>
                    {children}
                </div>
            </div>
            {footer && (
                <div style={{
                    padding: '1rem 1.5rem',
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    background: 'rgba(0,0,0,0.1)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    {footer}
                </div>
            )}
        </div>
    );
};

export default Card;
