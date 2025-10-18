import React from 'react';
import Header from '../ui/header';
import { MockTestimonialsGrid, type TestimonialData } from '../ui/mock-testimonials-grid';

const mockTestimonials: TestimonialData[] = [
    {
        id: "1", 
        name: "David Kim",
        handle: "shopper_dk",
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
        verified: true,
        text: "I love shopping on taja! I upload a photo of what I want, and the AI finds similar products. It's way easier than browsing websites."
    },
    {
        id: "2",
        name: "Michael Rodriguez",
        handle: "owner_electro",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        verified: true,
        text: "The AI image search is amazing. Customers upload a photo, and the bot finds similar products in my catalog. It's like magic!"
    },
    {
        id: "3",
        name: "Priya Patel",
        handle: "grocery_local",
        avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
        verified: true,
        text: "Setup was incredibly easy. I clicked a link to create my account, then started uploading products through WhatsApp. Customers love shopping through chat."
    },
    {
        id: "4",
        name: "Emma Wilson",
        handle: "emma_customer",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
        verified: false,
        text: "Shopping through WhatsApp is so convenient! I can browse, ask questions, and buy without leaving the chat. The AI assistant is super helpful."
    },
    {
        id: "5",
        name: "Ahmed Hassan",
        handle: "decor_seller",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        verified: true,
        text: "Running my store on taja is perfect for my small business. I manage everything from my phone, and customers love the personal touch."
    },
    {
        id: "6",
        name: "Sarah Johnson",
        handle: "fashion_boutique",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
        verified: true,
        text: "My fashion boutique's sales doubled since using Taja. Customers love browsing my collection through WhatsApp and getting instant product recommendations from the AI."
    },
    {
        id: "7",
        name: "Carlos Mendez",
        handle: "electronics_store",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
        verified: true,
        text: "The secure payment system on Taja gives my customers confidence. No more payment disputes or chargebacks. Orders are processed instantly and safely."
    },
    {
        id: "8",
        name: "Lisa Chen",
        handle: "home_decor",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        verified: true,
        text: "As a busy mom, I love shopping through WhatsApp. I can browse products, ask questions, and place orders while managing my kids. So convenient!"
    },
    {
        id: "9",
        name: "James Thompson",
        handle: "sports_gear",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        verified: true,
        text: "The AI product search by image is incredible! I just send a photo of sports equipment I need, and it finds exactly what I'm looking for in seconds."
    },
    {
        id: "10",
        name: "Maria Garcia",
        handle: "beauty_supplies",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
        verified: true,
        text: "My beauty supply business grew 400% since joining Taja. The automated order tracking keeps customers informed, and they love the personal shopping experience."
    },
    {
        id: "11",
        name: "Alex Kumar",
        handle: "tech_gadgets",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        verified: true,
        text: "No more complex e-commerce websites to maintain. Taja handles everything through WhatsApp. My customers prefer the conversational shopping experience."
    },
    {
        id: "12",
        name: "Sophie Williams",
        handle: "health_wellness",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
        verified: true,
        text: "The AI customer support bot answers 90% of questions instantly. I can focus on growing my business instead of responding to the same inquiries repeatedly."
    },
    {
        id: "13",
        name: "Robert Lee",
        handle: "automotive_parts",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        verified: true,
        text: "Finding the right car parts used to be a nightmare. Now customers just send a photo of their vehicle, and the AI finds compatible parts instantly."
    },
    {
        id: "14",
        name: "Jennifer Davis",
        handle: "bookstore_owner",
        avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
        verified: true,
        text: "My bookstore's inventory management is now automated. The AI tracks what's in stock and notifies customers about new arrivals. Sales have never been better!"
    },
    {
        id: "15",
        name: "Mark Anderson",
        handle: "customer_service",
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
        verified: false,
        text: "The order tracking feature is amazing. I get real-time updates about my purchases and delivery status. No more wondering where my package is!"
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