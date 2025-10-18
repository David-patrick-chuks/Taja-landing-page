
import { Share2, Shield, Upload } from "lucide-react";
import Features from "../ui/features";
import Header from "../ui/header";

const data = [
    {
        id: 1,
        title: "1. Start with WhatsApp",
        content:
            "Click the link to create your account, then start chatting with the taja bot on WhatsApp.",
        image: "/assets/whatsapp.png",
        icon: <Upload className="w-6 h-6 text-primary" />,
    },
    {
        id: 2,
        title: "2. Upload & Search",
        content:
            "Sellers upload product photos and videos. Customers search by uploading images/videos or describing what they want using AI.",
        image: "/assets/upload.png",
        icon: <Shield className="w-6 h-6 text-primary" />,
    },
    {
        id: 3,
        title: "3. Shop & Sell",
        content:
            "Complete purchases through chat. Get digital receipts. Manage your store all in WhatsApp.",
        image: "/assets/shop.png",    
        icon: <Share2 className="w-6 h-6 text-primary" />,
    },
];

export default function HowItWorks() {
    return (
        <div id="HIW" className="border-b border-[#252525]">
            <Header title="From setup to success in 3 simple steps"/>
            <div className="w-full relative px-[30px] lg:px-[50px]">
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
                    className='w-[30px] lg:w-[50px] absolute right-0 top-0 '
                />
                <Features data={data} />
            </div>
        </div>
    );
}
