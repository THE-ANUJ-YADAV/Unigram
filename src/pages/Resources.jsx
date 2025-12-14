import React, { useState } from 'react';
import Card from '../components/Card';
import Modal from '../components/Modal';
import { FileText, Download, Filter, Plus, Upload } from 'lucide-react';

const Resources = () => {
    const [activeTab, setActiveTab] = useState('pyqs');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [resources, setResources] = useState([
        { id: 1, type: 'pyqs', title: 'Data Structures End Sem', subject: 'CS201', year: '2023' },
        { id: 2, type: 'notes', title: 'Operating Systems Unit 1', subject: 'CS202', author: 'John Doe' },
        { id: 3, type: 'pyqs', title: 'Mathematics III Mid Sem', subject: 'MA201', year: '2022' },
        { id: 4, type: 'notes', title: 'DBMS Handwritten Notes', subject: 'CS204', author: 'Jane Smith' },
    ]);

    const [formData, setFormData] = useState({
        title: '',
        subject: '',
        type: 'pyqs',
        yearOrAuthor: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newResource = {
            id: resources.length + 1,
            title: formData.title,
            subject: formData.subject,
            type: formData.type,
            // Map the generic field to specific property based on type
            ...(formData.type === 'pyqs' ? { year: formData.yearOrAuthor } : { author: formData.yearOrAuthor })
        };
        setResources([newResource, ...resources]);
        setIsModalOpen(false);
        setFormData({ title: '', subject: '', type: 'pyqs', yearOrAuthor: '' });
    };

    const filteredResources = resources.filter(item => item.type === activeTab);

    return (
        <div className="animate-fade-in">
            <header className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end' }}>
                <div>
                    <h1 className="page-title">Resources</h1>
                    <p className="page-subtitle">Access previous year questions and study notes.</p>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
                        <Upload size={18} />
                        <span>Upload</span>
                    </button>
                </div>
            </header>

            <div style={{ marginBottom: '2rem', display: 'flex', gap: '1rem', borderBottom: '1px solid var(--border)' }}>
                <button
                    onClick={() => setActiveTab('pyqs')}
                    style={{
                        padding: '1rem',
                        color: activeTab === 'pyqs' ? 'var(--primary)' : 'var(--text-muted)',
                        borderBottom: activeTab === 'pyqs' ? '2px solid var(--primary)' : '2px solid transparent',
                        fontWeight: 600,
                        background: 'transparent'
                    }}
                >
                    PYQs
                </button>
                <button
                    onClick={() => setActiveTab('notes')}
                    style={{
                        padding: '1rem',
                        color: activeTab === 'notes' ? 'var(--primary)' : 'var(--text-muted)',
                        borderBottom: activeTab === 'notes' ? '2px solid var(--primary)' : '2px solid transparent',
                        fontWeight: 600,
                        background: 'transparent'
                    }}
                >
                    Notes
                </button>
            </div>

            <div className="grid-cards">
                {filteredResources.map(item => (
                    <Card
                        key={item.id}
                        title={item.title}
                        subtitle={item.type === 'pyqs' ? `${item.subject} • ${item.year}` : `${item.subject} • By ${item.author}`}
                        footer={
                            <button className="btn btn-primary" style={{ width: '100%', fontSize: '0.875rem' }}>
                                <Download size={16} />
                                <span>Download PDF</span>
                            </button>
                        }
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)' }}>
                            <FileText size={40} strokeWidth={1} />
                            <div>
                                <div style={{ fontSize: '0.875rem' }}>PDF Document</div>
                                <div style={{ fontSize: '0.75rem' }}>2.4 MB</div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Upload Resource"
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
                            <option value="pyqs">PYQ (Question Paper)</option>
                            <option value="notes">Notes</option>
                        </select>
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            placeholder="e.g. Data Structures Mid Sem"
                            className="input-field"
                            required
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>Subject Code/Name</label>
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            placeholder="e.g. CS201"
                            className="input-field"
                            required
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                            {formData.type === 'pyqs' ? 'Year' : 'Author'}
                        </label>
                        <input
                            type="text"
                            name="yearOrAuthor"
                            value={formData.yearOrAuthor}
                            onChange={handleInputChange}
                            placeholder={formData.type === 'pyqs' ? "e.g. 2023" : "e.g. John Doe"}
                            className="input-field"
                            required
                        />
                    </div>

                    <div style={{ border: '2px dashed var(--border)', padding: '2rem', textAlign: 'center', borderRadius: 'var(--radius)', color: 'var(--text-muted)' }}>
                        <Upload size={24} style={{ marginBottom: '0.5rem' }} />
                        <p>Click to upload PDF</p>
                        <p style={{ fontSize: '0.75rem' }}>(Mock Upload)</p>
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                        Upload
                    </button>
                </form>
            </Modal>
        </div>
    );
};

export default Resources;
