import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPaperPlane, FaWhatsapp, FaEnvelope, FaPhone, FaUser } from 'react-icons/fa';

const Contact = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
        phone: ''
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const createMailToLink = () => {    
        const subject = `رسالة من ${form.name}`;
        const body = `الاسم: ${form.name}\nالبريد الإلكتروني: ${form.email}\nالرسالة:\n${form.message}`;
        return `mailto:haltalkwmy4@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    const WHATSAPP_NUMBER = "+96879166733";
    const createWhatsAppLink = () => {
        const text = `مرحباً، اسمي ${form.name}.\n${form.message}`;
        return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    };

    const iconStyle = { color: '#C9F31D', paddingLeft: '10px', fontSize: '1.7em' };

    return (
        <div className="bg-dark text-white py-5" dir="rtl">
            <div className="container">
                <h2 className="text-center mb-4 display-5 fw-bold">
                    <span className="text-one">تواصل</span> معنا
                </h2>
                
                <p className="text-center text-muted mb-5 fs-5">
                    نرحب بأسئلتك واستفساراتك وسنكون سعداء بالرد عليك في أسرع وقت
                </p>

                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <form className="p-4 rounded-3 bg-secondary bg-opacity-10 border border-secondary border-opacity-25 shadow-lg" onSubmit={(e) => e.preventDefault()}>
                            <div className="mb-4">
                                <label className="form-label text-white-50 mb-2 d-flex align-items-center">
                                    <FaUser style={iconStyle} />
                                    الاسم الكامل
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control bg-dark text-white border-secondary border-opacity-25 py-3"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="أدخل اسمك هنا"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="form-label text-white-50 mb-2 d-flex align-items-center">
                                    <FaEnvelope style={iconStyle} />
                                    البريد الإلكتروني
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control bg-dark text-white border-secondary border-opacity-25 py-3"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="example@domain.com"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="form-label text-white-50 mb-2 d-flex align-items-center">
                                    <FaPaperPlane style={iconStyle} />
                                    الرسالة
                                </label>
                                <textarea
                                    name="message"
                                    className="form-control bg-dark text-white border-secondary border-opacity-25"
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    placeholder="اكتب رسالتك هنا..."
                                />
                            </div>

                            <div className="mb-4">
                                <label className="form-label text-white-50 mb-2 d-flex align-items-center">
                                    <FaPhone style={iconStyle} />
                                    رقم الهاتف
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    className="form-control bg-dark text-white border-secondary border-opacity-25 py-3"
                                    value={form.phone}
                                    onChange={handleChange}
                                    required
                                    placeholder="+201234567890"
                                />
                            </div>

                            <div className="d-flex flex-column flex-md-row justify-content-between gap-3 mt-4">
                                <a href={createMailToLink()} target="_blank" rel="noopener noreferrer" className="text-decoration-none flex-grow-1">
                                    <button
                                        type="button"
                                        className="btn btn-primary  w-100 py-3 fw-bold d-flex align-items-center justify-content-center"
                                    >
                                        <FaEnvelope style={iconStyle} />
                                        إرسال عبر البريد
                                    </button>
                                </a>

                                <a href={createWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="text-decoration-none flex-grow-1">
                                    <button
                                        type="button"
                                        className="btn btn-success w-100 py-3 fw-bold d-flex align-items-center justify-content-center"
                                    >
                                        <FaWhatsapp style={iconStyle} />
                                        إرسال عبر واتساب
                                    </button>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};







export default Contact