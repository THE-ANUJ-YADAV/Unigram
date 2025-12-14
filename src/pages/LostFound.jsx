import React, { useState } from 'react';
import Card from '../components/Card';
import Modal from '../components/Modal';
import { Search, Plus, MapPin, Calendar } from 'lucide-react';

const LostFound = () => {
    const [activeTab, setActiveTab] = useState('lost');
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Initial Mock Data
    const [items, setItems] = useState([
        { id: 1, type: 'lost', title: 'Blue Water Bottle', location: 'Library', date: 'Today', desc: 'Lost a blue Milton water bottle near the reference section.' },
        { id: 2, type: 'found', title: 'Car Keys', location: 'Parking Lot', date: 'Yesterday', desc: 'Found a set of keys with a Honda keychain.' },
        { id: 3, type: 'lost', title: 'ID Card', location: 'Canteen', date: '2 days ago', desc: 'Lost my student ID card (Roll: 12345).' },
        { id: 4, type: 'found', title: 'Umbrella', location: 'Main Gate', date: '3 days ago', desc: 'Black umbrella found near the security desk.' },
    ]);

    // Form State
    const [formData, setFormData] = useState({
        title: '',
        location: '',
        type: 'lost',
        desc: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            id: items.length + 1,
            ...formData,
            date: 'Just now'
        };
        setItems([newItem, ...items]);
        setIsModalOpen(false);
        setFormData({ title: '', location: '', type: 'lost', desc: '' }); // Reset form
    };

    const filteredItems = items.filter(item => item.type === activeTab);

    return (
        <div className="animate-fade-in">
            <header className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end' }}>
                <div>
                    <h1 className="page-title">Lost & Found</h1>
                    <p className="page-subtitle">Report lost items or help others find theirs.</p>
                </div>
                <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
                    <Plus size={18} />
                    <span>Post Item</span>
                </button>
            </header>

            <div style={{ marginBottom: '2rem', display: 'flex', gap: '1rem' }}>
                <button
                    className={`btn ${activeTab === 'lost' ? 'btn-primary' : 'btn-outline'} `}
                    onClick={() => setActiveTab('lost')}
                >
                    Lost Items
                </button>
                <button
                    className={`btn ${activeTab === 'found' ? 'btn-primary' : 'btn-outline'} `}
                    onClick={() => setActiveTab('found')}
                >
                    Found Items
                </button>
            </div>

            <div className="grid-cards">
                {filteredItems.map(item => (
                    <Card
                        key={item.id}
                        title={item.title}
                        subtitle={`${item.location} • ${item.date} `}
                        footer={<button className="btn btn-outline" style={{ width: '100%', fontSize: '0.875rem' }}>Contact</button>}
                    >
                        <p>{item.desc}</p>
                    </Card>
                ))}
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Post Lost/Found Item"
            >
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>Type</label>
                        <select
                            name="type"
                            value={formData.type}
                            onChange={handleInputChange}
                            className="input-field"
                            style={{ background: 'var(--background)' }}
                        >
                            <option value="lost">Lost Item</option>
                            <option value="found">Found Item</option>
                        </select>
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>Item Name</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            placeholder="e.g. Blue Water Bottle"
                            className="input-field"
                            required
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>Location</label>
                        <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleInputChange}
                            placeholder="e.g. Library 2nd Floor"
                            className="input-field"
                            required
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>Description</label>
                        <textarea
                            name="desc"
                            value={formData.desc}
                            onChange={handleInputChange}
                            placeholder="Provide more details..."
                            className="input-field"
                            rows="4"
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                        Post Item
                    </button>
                </form>
            </Modal>
        </div>
    );
};

export default LostFound;
