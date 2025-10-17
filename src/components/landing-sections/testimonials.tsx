import React from 'react';
import Header from '../ui/header';
import { MockTestimonialsGrid, type TestimonialData } from '../ui/mock-testimonials-grid';

const mockTestimonials: TestimonialData[] = [
    {
        id: "2", 
        name: "David Kim",
        handle: "shopper_dk",
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
        verified: true,
        text: "I love shopping on taja! I upload a photo of what I want, and the AI finds similar products. It's way easier than browsing websites."
    },
    {
        id: "3",
        name: "Michael Rodriguez",
        handle: "owner_electro",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        verified: true,
        text: "The AI image search is amazing. Customers upload a photo, and the bot finds similar products in my catalog. It's like magic!"
    },
    {
        id: "4",
        name: "Priya Patel",
        handle: "grocery_local",
        avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
        verified: true,
        text: "Setup was incredibly easy. I clicked a link to create my account, then started uploading products through WhatsApp. Customers love shopping through chat."
    },
    {
        id: "5",
        name: "Emma Wilson",
        handle: "emma_customer",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
        verified: false,
        text: "Shopping through WhatsApp is so convenient! I can browse, ask questions, and buy without leaving the chat. The AI assistant is super helpful."
    },
    {
        id: "6",
        name: "Ahmed Hassan",
        handle: "decor_seller",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        verified: true,
        text: "Running my store on taja is perfect for my small business. I manage everything from my phone, and customers love the personal touch."
    },
];

const Testimonials = () => {
    return (
        <div className="flex flex-col border-b border-[#252525]">
            <Header title="Testimonials"/>
            <div className="h-[500px] lg:h-[750px] px-[30px] lg:px-[50px] relative " >
                <div
                    style={{
                        height: "100%",
                        "--pattern-fg": "#252525",
                        borderRight: "1px solid #252525",
                        backgroundImage:
                            "repeating-linear-gradient(315deg, #252525 0, #252525 1px, transparent 0, transparent 50%)",
                        backgroundSize: "10px 10px",
                        backgroundAttachment: "fixed",
                    } as React.CSSProperties}
                    className='w-[30px] lg:w-[50px] absolute left-0 top-0'
                />
                <div
                    style={{
                        height: "100%",
                        "--pattern-fg": "#252525",
                        borderLeft: "1px solid #252525",
                        backgroundImage:
                            "repeating-linear-gradient(315deg, #252525 0, #252525 1px, transparent 0, transparent 50%)",
                        backgroundSize: "10px 10px",
                        backgroundAttachment: "fixed",
                    } as React.CSSProperties}
                    className='w-[30px] lg:w-[50px] absolute right-0 top-0'
                />
                <MockTestimonialsGrid
                    testimonials={mockTestimonials}
                    speed="slow"
                    className="h-full"
                />
            </div>
        </div >
    )
}

export default Testimonials