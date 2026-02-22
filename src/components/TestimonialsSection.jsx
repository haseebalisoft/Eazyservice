import { useState } from 'react';

const TestimonialsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            name: 'أحمد المالكي',
            city: 'الرياض',
            rating: 5,
            text: 'خدمة ممتازة واحترافية عالية. الفريق محترف جداً والنتيجة فاقت توقعاتي. أنصح بهم بشدة!',
            image: '👨‍💼'
        },
        {
            name: 'فاطمة العتيبي',
            city: 'جدة',
            rating: 5,
            text: 'تعاملهم راقي جداً والتزامهم بالمواعيد رائع. دهنوا فيلتي بأقل من أسبوع والنتيجة خيالية.',
            image: '👩‍💼'
        },
        {
            name: 'محمد السعيد',
            city: 'الدمام',
            rating: 5,
            text: 'جودة الدهان عالية جداً والأسعار مناسبة. شكراً لكم على الخدمة المميزة.',
            image: '👨'
        },
        {
            name: 'نورة القحطاني',
            city: 'الخبر',
            rating: 5,
            text: 'أفضل شركة دهان تعاملت معها. الفريق محترف والنتيجة أكثر من رائعة. شكراً جزيلاً!',
            image: '👩'
        },
        {
            name: 'خالد الشمري',
            city: 'الرياض',
            rating: 5,
            text: 'دقة في المواعيد واحترافية في العمل. سعيد جداً بالنتيجة وأنصح الجميع بالتعامل معهم.',
            image: '👨‍💻'
        },
    ];

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const renderStars = (rating) => {
        return [...Array(rating)].map((_, i) => (
            <svg key={i} className="w-6 h-6 text-accent fill-current" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
        ));
    };

    return (
        <section id="testimonials" className="py-20 lg:py-32 bg-gradient-to-br from-primary to-primary/90 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fadeInUp">
                    <div className="inline-block bg-white/10 text-white px-6 py-2 rounded-full mb-4">
                        <span className="text-sm font-semibold">آراء العملاء</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        ماذا يقول عملاؤنا
                    </h2>
                    <p className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto">
                        رضا عملائنا هو أولويتنا، اقرأ تجاربهم معنا
                    </p>
                </div>

                {/* Testimonials Slider */}
                <div className="max-w-5xl mx-auto">
                    <div className="relative">
                        {/* Main Testimonial Card */}
                        <div className="bg-white rounded-premium-lg p-8 lg:p-12 shadow-2xl">
                            <div className="flex flex-col items-center text-center">
                                {/* Avatar */}
                                <div className="w-24 h-24 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center text-4xl mb-6">
                                    {testimonials[currentIndex].image}
                                </div>

                                {/* Rating */}
                                <div className="flex gap-1 mb-6">
                                    {renderStars(testimonials[currentIndex].rating)}
                                </div>

                                {/* Quote */}
                                <div className="mb-8">
                                    <svg className="w-12 h-12 text-accent/20 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                    </svg>
                                    <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-6">
                                        "{testimonials[currentIndex].text}"
                                    </p>
                                </div>

                                {/* Author */}
                                <div>
                                    <h4 className="text-2xl font-bold text-primary mb-2">
                                        {testimonials[currentIndex].name}
                                    </h4>
                                    <div className="flex items-center justify-center gap-2 text-gray-600">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span className="text-lg">{testimonials[currentIndex].city}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Buttons */}
                        <button
                            onClick={prevTestimonial}
                            className="absolute top-1/2 -right-6 lg:-right-16 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-all duration-300 hover:scale-110"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={nextTestimonial}
                            className="absolute top-1/2 -left-6 lg:-left-16 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-all duration-300 hover:scale-110"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-3 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                        ? 'bg-white w-8'
                                        : 'bg-white/30 hover:bg-white/50'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
