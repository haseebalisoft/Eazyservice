import { useState } from 'react';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        location: '',
        serviceType: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitMessage('تم إرسال طلبك بنجاح! سنتواصل معك قريباً.');
            setFormData({
                name: '',
                phone: '',
                location: '',
                serviceType: '',
                message: ''
            });

            setTimeout(() => setSubmitMessage(''), 5000);
        }, 1500);
    };

    const serviceTypes = [
        'دهان داخلي',
        'دهان خارجي',
        'دهان فلل وشقق',
        'تشطيبات حديثة',
        'إصلاح الجدران',
        'أخرى'
    ];

    return (
        <section id="contact" className="py-20 lg:py-32 bg-lightBg relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C6A96B' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Left Side - Contact Info */}
                    <div className="animate-fadeInUp">
                        <div className="inline-block bg-accent/10 text-accent px-6 py-2 rounded-full mb-4">
                            <span className="text-sm font-semibold">تواصل معنا</span>
                        </div>
                        <h2 className="section-title">احصل على عرض سعر مخصص</h2>
                        <p className="text-lg md:text-xl text-gray-600 mb-8">
                            املأ النموذج وسنتواصل معك خلال 24 ساعة لتقديم استشارة مجانية وعرض سعر مخصص
                        </p>

                        {/* Contact Cards */}
                        <div className="space-y-6 mb-8">
                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/966500000000"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="card-premium p-6 flex items-center gap-4 hover-lift group"
                            >
                                <div className="w-16 h-16 bg-green-500 rounded-premium flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600 mb-1">واتساب</p>
                                    <p className="text-xl font-bold text-primary" dir="ltr">+966 50 000 0000</p>
                                </div>
                            </a>

                            {/* Phone */}
                            <div className="card-premium p-6 flex items-center gap-4">
                                <div className="w-16 h-16 bg-accent rounded-premium flex items-center justify-center text-white">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600 mb-1">اتصل بنا</p>
                                    <p className="text-xl font-bold text-primary" dir="ltr">+966 50 000 0000</p>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="card-premium p-6 flex items-center gap-4">
                                <div className="w-16 h-16 bg-primary rounded-premium flex items-center justify-center text-white">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600 mb-1">الموقع</p>
                                    <p className="text-xl font-bold text-primary">الرياض، المملكة العربية السعودية</p>
                                </div>
                            </div>

                            {/* Working Hours */}
                            <div className="card-premium p-6 flex items-center gap-4">
                                <div className="w-16 h-16 bg-accent/20 rounded-premium flex items-center justify-center text-accent">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600 mb-1">ساعات العمل</p>
                                    <p className="text-xl font-bold text-primary">السبت - الخميس: 8 ص - 8 م</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className="animate-fadeInUp">
                        <div className="card-premium p-8 lg:p-10">
                            <h3 className="text-3xl font-bold text-primary mb-6">
                                أرسل طلبك الآن
                            </h3>

                            {submitMessage && (
                                <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-premium mb-6">
                                    {submitMessage}
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name */}
                                <div>
                                    <label className="block text-textDark font-semibold mb-2">
                                        الاسم الكامل *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-6 py-4 border-2 border-gray-200 rounded-premium focus:border-accent focus:outline-none transition-colors duration-300 text-lg"
                                        placeholder="أدخل اسمك الكامل"
                                    />
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="block text-textDark font-semibold mb-2">
                                        رقم الجوال *
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-6 py-4 border-2 border-gray-200 rounded-premium focus:border-accent focus:outline-none transition-colors duration-300 text-lg"
                                        placeholder="05xxxxxxxx"
                                        dir="ltr"
                                    />
                                </div>

                                {/* Location */}
                                <div>
                                    <label className="block text-textDark font-semibold mb-2">
                                        الموقع *
                                    </label>
                                    <input
                                        type="text"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-6 py-4 border-2 border-gray-200 rounded-premium focus:border-accent focus:outline-none transition-colors duration-300 text-lg"
                                        placeholder="المدينة / الحي"
                                    />
                                </div>

                                {/* Service Type */}
                                <div>
                                    <label className="block text-textDark font-semibold mb-2">
                                        نوع الخدمة *
                                    </label>
                                    <select
                                        name="serviceType"
                                        value={formData.serviceType}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-6 py-4 border-2 border-gray-200 rounded-premium focus:border-accent focus:outline-none transition-colors duration-300 text-lg"
                                    >
                                        <option value="">اختر نوع الخدمة</option>
                                        {serviceTypes.map((type, index) => (
                                            <option key={index} value={type}>{type}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block text-textDark font-semibold mb-2">
                                        تفاصيل المشروع
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        className="w-full px-6 py-4 border-2 border-gray-200 rounded-premium focus:border-accent focus:outline-none transition-colors duration-300 text-lg resize-none"
                                        placeholder="أخبرنا عن مشروعك..."
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'جاري الإرسال...' : 'إرسال الطلب'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
