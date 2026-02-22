const ProcessSection = () => {
    const steps = [
        {
            number: '01',
            title: 'معاينة الموقع',
            description: 'نقوم بزيارة الموقع لتقييم العمل المطلوب وأخذ القياسات الدقيقة',
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
            )
        },
        {
            number: '02',
            title: 'اختيار الألوان',
            description: 'نساعدك في اختيار الألوان المناسبة مع تقديم عينات مجانية',
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
            )
        },
        {
            number: '03',
            title: 'التنفيذ',
            description: 'فريقنا المحترف يبدأ العمل بدقة واحترافية عالية',
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
            )
        },
        {
            number: '04',
            title: 'التسليم النهائي',
            description: 'نسلمك المشروع بعد التأكد من جودة العمل ورضاك التام',
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
    ];

    return (
        <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-lightBg to-transparent"></div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fadeInUp">
                    <div className="inline-block bg-accent/10 text-accent px-6 py-2 rounded-full mb-4">
                        <span className="text-sm font-semibold">كيف نعمل</span>
                    </div>
                    <h2 className="section-title">خطوات العمل</h2>
                    <p className="section-subtitle max-w-3xl mx-auto">
                        نتبع منهجية احترافية لضمان تقديم أفضل خدمة لك
                    </p>
                </div>

                {/* Steps */}
                <div className="relative">
                    {/* Connection Line */}
                    <div className="hidden lg:block absolute top-1/2 right-0 left-0 h-1 bg-gradient-to-l from-accent via-primary to-accent transform -translate-y-1/2 opacity-20"></div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="relative"
                                style={{ animationDelay: `${index * 0.15}s` }}
                            >
                                {/* Card */}
                                <div className="card-premium p-8 text-center hover-lift relative z-10">
                                    {/* Number Badge */}
                                    <div className="absolute -top-6 right-1/2 transform translate-x-1/2 w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                                        {step.number}
                                    </div>

                                    {/* Icon */}
                                    <div className="mt-8 mb-6 inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full text-accent">
                                        {step.icon}
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-2xl font-bold text-primary mb-4">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Arrow (Desktop only) */}
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -left-3 transform -translate-y-1/2 z-20">
                                        <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                    <p className="text-xl text-gray-700 mb-6">
                        جاهز لبدء مشروعك؟
                    </p>
                    <a href="#contact" className="btn-primary">
                        تواصل معنا الآن
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
