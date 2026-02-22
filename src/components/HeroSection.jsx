const HeroSection = () => {
    return (
        <section id="hero" className="min-h-screen relative overflow-hidden pt-24 lg:pt-0">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231F3D36' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
                    {/* Right Side - Content */}
                    <div className="order-2 lg:order-1 text-center lg:text-right animate-fadeInUp">
                        <div className="inline-block bg-accent/10 text-accent px-6 py-2 rounded-full mb-6">
                            <span className="text-sm font-semibold">✨ الخيار الأول للتشطيبات الفاخرة</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 leading-tight">
                            خدمات دهان المنازل
                        </h1>

                        <p className="text-2xl md:text-3xl text-accent font-semibold mb-6">
                            جودة عالية – تشطيبات فاخرة – التزام بالمواعيد
                        </p>

                        <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            نحن نقدم خدمات دهان احترافية بأعلى معايير الجودة، مع فريق من الخبراء المتخصصين في تحويل منزلك إلى تحفة فنية تعكس ذوقك الرفيع
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a href="#contact" className="btn-primary inline-block">
                                احصل على استشارة مجانية
                            </a>
                            <a
                                href="#portfolio"
                                className="bg-white hover:bg-gray-50 text-primary px-8 py-4 rounded-premium-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-primary"
                            >
                                شاهد أعمالنا
                            </a>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 mt-16 max-w-2xl mx-auto lg:mx-0">
                            <div className="text-center lg:text-right">
                                <h3 className="text-4xl font-bold text-accent mb-2">+500</h3>
                                <p className="text-gray-600">مشروع منجز</p>
                            </div>
                            <div className="text-center lg:text-right">
                                <h3 className="text-4xl font-bold text-accent mb-2">+10</h3>
                                <p className="text-gray-600">سنوات خبرة</p>
                            </div>
                            <div className="text-center lg:text-right">
                                <h3 className="text-4xl font-bold text-accent mb-2">100%</h3>
                                <p className="text-gray-600">رضا العملاء</p>
                            </div>
                        </div>
                    </div>

                    {/* Left Side - Image */}
                    <div className="order-1 lg:order-2 animate-fadeInUp">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-primary/20 rounded-premium-lg blur-2xl"></div>
                            <div className="relative rounded-premium-lg overflow-hidden shadow-2xl hover-lift">
                                <img
                                    src="/hero-interior.jpg"
                                    alt="تصميم داخلي فاخر"
                                    className="w-full h-[500px] lg:h-[700px] object-cover"
                                    onError={(e) => {
                                        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="700"%3E%3Crect fill="%23F4EFE7" width="800" height="700"/%3E%3Ctext fill="%231F3D36" font-family="Arial" font-size="24" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3Eتصميم داخلي فاخر%3C/text%3E%3C/svg%3E';
                                    }}
                                />
                                <div className="absolute bottom-0 right-0 left-0 bg-gradient-to-t from-primary/90 to-transparent p-8">
                                    <p className="text-white text-xl font-semibold">تحويل المساحات إلى أعمال فنية</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
                <a href="#services" className="flex flex-col items-center gap-2 text-accent">
                    <span className="text-sm font-medium">اكتشف المزيد</span>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </a>
            </div>
        </section>
    );
};

export default HeroSection;
