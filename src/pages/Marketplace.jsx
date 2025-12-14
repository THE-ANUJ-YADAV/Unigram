import React, { useState } from 'react';
import Card from '../components/Card';
import Modal from '../components/Modal';
import { ShoppingBag, Tag, Plus } from 'lucide-react';

const Marketplace = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [items, setItems] = useState([
        { id: 1, title: 'Engineering Graphics Drafter', price: '₹500', seller: 'Rahul K.', image: 'https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&w=400&q=80' },
        { id: 2, title: 'Scientific Calculator fx-991EX', price: '₹800', seller: 'Sneha M.', image: 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?auto=format&fit=crop&w=400&q=80' },
        { id: 3, title: 'First Year Books Set', price: '₹1200', seller: 'Amit S.', image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80' },
        { id: 4, title: 'Study Table Lamp', price: '₹300', seller: 'Priya R.', image: 'https://images.unsplash.com/photo-1534234828563-023996657bb0?auto=format&fit=crop&w=400&q=80' },
    ]);

    const [formData, setFormData] = useState({
        title: '',
        price: '',
        image: ''
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
            seller: 'You', // Mock current user
            image: formData.image || 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=400&q=80' // Default image
        };
        setItems([newItem, ...items]);
        setIsModalOpen(false);
        setFormData({ title: '', price: '', image: '' });
    };

    return (
        <div className="animate-fade-in">
            <header className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end' }}>
                <div>
                    <h1 className="page-title">Marketplace</h1>
                    <p className="page-subtitle">Buy and sell items within the community.</p>
                </div>
                <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
                    <Plus size={18} />
                    <span>Sell Item</span>
                </button>
            </header>

            <div className="grid-cards">
                {items.map(item => (
                    <Card
                        key={item.id}
                        title={item.title}
                        subtitle={`Sold by ${item.seller}`}
                        image={item.image}
                        footer={
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                                <span style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--success)' }}>{item.price}</span>
                                <button className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>Buy Now</button>
                            </div>
                        }
                    >
                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                            <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}>Used</span>
                            <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}>Negotiable</span>
                        </div>
                    </Card>
                ))}
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Sell an Item"
            >
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>Item Name</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            placeholder="e.g. Scientific Calculator"
                            className="input-field"
                            required
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>Price (₹)</label>
                        <input
                            type="text"
                            name="price"
                            value={formData.price}
                            onChange={handleInputChange}
                            placeholder="e.g. 500"
                            className="input-field"
                            required
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>Image URL (Optional)</label>
                        <input
                            type="url"
                            name="image"
                            value={formData.image}
                            onChange={handleInputChange}
                            placeholder="https://..."
                            className="input-field"
                        />
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                        List Item
                    </button>
                </form>
            </Modal>
        </div>
    );
};

export default Marketplace;
