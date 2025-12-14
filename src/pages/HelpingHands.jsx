import React, { useState } from 'react';
import Card from '../components/Card';
import Modal from '../components/Modal';
import { HeartHandshake, MessageCircle, Plus } from 'lucide-react';

const HelpingHands = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [requests, setRequests] = useState([
        { id: 1, title: 'Need help with React Project', author: 'Alex', type: 'Academic', desc: 'Stuck with state management in my final year project. Need someone to guide me.' },
        { id: 2, title: 'Blood Donor Needed', author: 'Sarah', type: 'Emergency', desc: 'Urgent requirement for O+ blood at City Hospital.' },
        { id: 3, title: 'Roommate for Flat', author: 'Mike', type: 'Accommodation', desc: 'Looking for a roommate for a 2BHK flat near the campus.' },
    ]);

    const [formData, setFormData] = useState({
        title: '',
        type: 'Academic',
        desc: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRequest = {
            id: requests.length + 1,
            ...formData,
            author: 'You' // Mock current user
        };
        setRequests([newRequest, ...requests]);
        setIsModalOpen(false);
        setFormData({ title: '', type: 'Academic', desc: '' });
    };

    return (
        <div className="animate-fade-in">
            <header className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end' }}>
                <div>
                    <h1 className="page-title">Helping Hands</h1>
                    <p className="page-subtitle">Connect with others to give or receive help.</p>
                </div>
                <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
                    <Plus size={18} />
                    <span>Ask for Help</span>
                </button>
            </header>

            <div className="grid-cards">
                {requests.map(item => (
                    <Card
                        key={item.id}
                        title={item.title}
                        subtitle={`Posted by ${item.author} • ${item.type}`}
                        footer={
                            <button className="btn btn-outline" style={{ width: '100%', gap: '0.5rem' }}>
                                <MessageCircle size={18} />
                                <span>Offer Help</span>
                            </button>
                        }
                    >
                        <p>{item.desc}</p>
                        <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
                            <span style={{
                                fontSize: '0.75rem',
                                padding: '0.25rem 0.75rem',
                                borderRadius: '1rem',
                                background: item.type === 'Emergency' ? 'rgba(239, 68, 68, 0.2)' : 'rgba(99, 102, 241, 0.2)',
                                color: item.type === 'Emergency' ? 'var(--error)' : 'var(--primary)',
                                fontWeight: 600
                            }}>
                                {item.type}
                            </span>
                        </div>
                    </Card>
                ))}
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Request Help"
            >
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            placeholder="e.g. Need notes for Math"
                            className="input-field"
                            required
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>Type</label>
                        <select
                            name="type"
                            value={formData.type}
                            onChange={handleInputChange}
                            className="input-field"
                            style={{ background: 'var(--background)' }}
                        >
                            <option value="Academic">Academic</option>
                            <option value="Emergency">Emergency</option>
                            <option value="Accommodation">Accommodation</option>
                            <option value="Transport">Transport</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>Description</label>
                        <textarea
                            name="desc"
                            value={formData.desc}
                            onChange={handleInputChange}
                            placeholder="Describe what you need help with..."
                            className="input-field"
                            rows="4"
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                        Post Request
                    </button>
                </form>
            </Modal>
        </div>
    );
};

export default HelpingHands;
