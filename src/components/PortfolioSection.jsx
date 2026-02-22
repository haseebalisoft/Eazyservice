import { useState } from 'react';

const PortfolioSection = () => {
    const [activeTab, setActiveTab] = useState('all');

    const projects = [
        {
            id: 1,
            category: 'interior',
            title: 'صالة معيشة فاخرة',
            location: 'الرياض',
            image: '/gallery-living.jpg',
            beforeAfter: true
        },
        {
            id: 2,
            category: 'exterior',
            title: 'واجهة فيلا عصرية',
            location: 'جدة',
            image: '/gallery-exterior.jpg',
            beforeAfter: false
        },
        {
            id: 3,
            category: 'interior',
            title: 'غرفة نوم رئيسية',
            location: 'الدمام',
            image: '/gallery-bedroom.jpg',
            beforeAfter: false
        },
        {
            id: 4,
            category: 'villa',
            title: 'فيلا سكنية كاملة',
            location: 'الخبر',
            image: '/gallery-villa.jpg',
            beforeAfter: true
        },
        {
            id: 5,
            category: 'interior',
            title: 'مجلس رجال',
            location: 'الرياض',
            image: '/gallery-majlis.jpg',
            beforeAfter: false
        },
        {
            id: 6,
            category: 'exterior',
            title: 'واجهة مبنى تجاري',
            location: 'جدة',
            image: '/gallery-villa.jpg',
            beforeAfter: false
        },
    ];

    const tabs = [
        { id: 'all', label: 'الكل' },
        { id: 'interior', label: 'داخلي' },
        { id: 'exterior', label: 'خارجي' },
        { id: 'villa', label: 'فلل' },
    ];

    const filteredProjects = activeTab === 'all'
        ? projects
        : projects.filter(p => p.category === activeTab);

    return (
        <section id="portfolio" className="py-20 lg:py-32 bg-lightBg relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fadeInUp">
                    <div className="inline-block bg-accent/10 text-accent px-6 py-2 rounded-full mb-4">
                        <span className="text-sm font-semibold">معرض الأعمال</span>
                    </div>
                    <h2 className="section-title">أعمالنا المميزة</h2>
                    <p className="section-subtitle max-w-3xl mx-auto">
                        شاهد مجموعة من مشاريعنا الناجحة التي حولت المساحات إلى تحف فنية
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-8 py-3 rounded-premium-lg font-semibold text-lg transition-all duration-300 ${activeTab === tab.id
                                ? 'bg-accent text-white shadow-lg scale-105'
                                : 'bg-white text-textDark hover:bg-accent/10 hover:text-accent'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className="card-premium overflow-hidden group cursor-pointer"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Image */}
                            <div className="relative h-80 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    onError={(e) => {
                                        e.target.src = `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="320"%3E%3Crect fill="%23F4EFE7" width="400" height="320"/%3E%3Ctext fill="%231F3D36" font-family="Arial" font-size="18" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3E${project.title}%3C/text%3E%3C/svg%3E`;
                                    }}
                                />
                                <div className="gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                {/* Before/After Badge */}
                                {project.beforeAfter && (
                                    <div className="absolute top-4 right-4 bg-accent text-white px-4 py-2 rounded-premium text-sm font-semibold">
                                        قبل وبعد
                                    </div>
                                )}

                                {/* Hover Content */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="text-center text-white p-6">
                                        <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                        <p className="text-lg font-semibold">عرض التفاصيل</p>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <div className="flex items-center gap-2 text-gray-600">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span>{project.location}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                    <a href="#contact" className="btn-primary">
                        ابدأ مشروعك الآن
                    </a>
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
