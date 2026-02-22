const WhyChooseUs = () => {
    const features = [
        {
            icon: (
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
            ),
            title: 'جودة عالية',
            description: 'نستخدم أفضل أنواع الدهانات والمواد العالمية'
        },
        {
            icon: (
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
            ),
            title: 'تشطيبات فاخرة',
            description: 'نهتم بأدق التفاصيل لنمنحك نتيجة مثالية'
        },
        {
            icon: (
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: 'التزام بالمواعيد',
            description: 'نحترم وقتك ونلتزم بمواعيد التسليم المحددة'
        },
        {
            icon: (
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            title: 'فريق محترف',
            description: 'فنيون مدربون وذوو خبرة طويلة في المجال'
        },
        {
            icon: (
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
            ),
            title: 'مواد عالية الجودة',
            description: 'نستورد أفضل المواد من علامات تجارية موثوقة'
        },
        {
            icon: (
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: 'ضمان شامل',
            description: 'نقدم ضمان على جميع أعمالنا لراحة بالك'
        },
    ];

    return (
        <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #1F3D36 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fadeInUp">
                    <div className="inline-block bg-accent/10 text-accent px-6 py-2 rounded-full mb-4">
                        <span className="text-sm font-semibold">لماذا نحن الأفضل</span>
                    </div>
                    <h2 className="section-title">لماذا تختارنا؟</h2>
                    <p className="section-subtitle max-w-3xl mx-auto">
                        نجمع بين الخبرة والاحترافية والجودة لنقدم لك أفضل خدمة دهان في المملكة
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="text-center group"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Icon */}
                            <div className="inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full mb-6 text-accent group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                                {feature.icon}
                            </div>

                            {/* Content */}
                            <h3 className="text-2xl font-bold text-primary mb-4">
                                {feature.title}
                            </h3>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Stats Bar */}
                <div className="mt-20 bg-gradient-to-r from-primary to-primary/90 rounded-premium-lg p-12 shadow-2xl">
                    <div className="grid md:grid-cols-4 gap-8 text-center text-white">
                        <div>
                            <h3 className="text-5xl font-bold mb-2">+500</h3>
                            <p className="text-lg opacity-90">مشروع منجز</p>
                        </div>
                        <div>
                            <h3 className="text-5xl font-bold mb-2">+10</h3>
                            <p className="text-lg opacity-90">سنوات خبرة</p>
                        </div>
                        <div>
                            <h3 className="text-5xl font-bold mb-2">100%</h3>
                            <p className="text-lg opacity-90">رضا العملاء</p>
                        </div>
                        <div>
                            <h3 className="text-5xl font-bold mb-2">24/7</h3>
                            <p className="text-lg opacity-90">دعم فني</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
