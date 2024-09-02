"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Gift, Megaphone, ShoppingCart } from 'lucide-react';
import Footer from '@/components/pages/footer';

const DonationPage = () => {
return (
    <div className="bg-[#121214] text-zinc-100 min-h-screen">
        <header className="fixed top-0 left-0 right-0 bg-[#1B1B1F]/50 backdrop-blur-md z-10">
            <nav className="container mx-auto py-4">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center space-x-4"
                >
                    <img src="/assets/freeserverv3.png" alt="FreeServer Logo" className="h-8 w-8" />
                    <a href="/" className="text-xl font-bold">FreeServer v3</a>
                </motion.div>
            </nav>
        </header>

        <main className="container mx-auto px-4 pt-20">
            <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="py-20"
            >
            <h2 className="text-4xl md:text-7xl font-bold mb-8 text-center">贊助支持</h2>
            <p className="text-xl text-center mb-12">您的支持是我們持續前進的動力。選擇以下方式支持 FreeServer v3：</p>

            <div className="grid md:grid-cols-3 gap-8">
                <DonationCard
                icon={<Gift className="h-12 w-12 text-orange-500" />}
                title="直接贊助"
                description="選擇金、銀、銅級別贊助，支持我們的發展。"
                buttonText="立即贊助"
                buttonLink="https://forms.gle/5Rd3h6TnkNv2Jnbh9"
                />
                <DonationCard
                icon={<ShoppingCart className="h-12 w-12 text-orange-500" />}
                title="購買 FreeCoin"
                description="贊助我們的同時，拿到 FreeCoin 作為回饋。"
                buttonText="前往商店"
                buttonLink="https://nafstore.net/p/freeserver-freecoin-giftcard/"
                />
                <DonationCard
                icon={<Megaphone className="h-12 w-12 text-orange-500" />}
                title="購買廣告"
                description="在我們的網站上購買廣告，推廣您的服務。"
                buttonText="購買廣告"
                buttonLink="https://forms.gle/5Rd3h6TnkNv2Jnbh9"
                />
                {/* <DonationCard
                icon={<Code className="h-12 w-12 text-orange-500" />}
                title="貢獻技術"
                description="加入我們的 GitHub 專案，用您的技術支持我們。"
                buttonText="參與專案"
                buttonLink="https://github.com/FreeServer-v3"
                /> */}
            </div>
            </motion.section>
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mt-20 py-10"
            >
                <h2 className="text-4xl font-bold mb-4">查看贊助者名單</h2>
                <p className="text-xl mb-8">感謝他們讓我們活更久!</p>
                <Button
                    className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-3 rounded-full"
                    onClick={() => window.location.href = '/sponsors'}
                >
                    <Gift className="mr-2 h-5 w-5" />
                    贊助名單
                </Button>
            </motion.section>
            <div className="py-10" />
        </main>
        <Footer />
    </div>
);
};

const DonationCard = ({ icon, title, description, buttonText, buttonLink }: { icon: React.ReactNode, title: string, description: string, buttonText: string, buttonLink: string }) => {
return (
    <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-[#1B1B1F] p-6 rounded-lg shadow-lg hover:shadow-orange-500/20 transition-shadow duration-300"
    >
        <div className="flex justify-center mb-4">{icon}</div>
        <h3 className="text-2xl font-bold mb-4 text-center">{title}</h3>
        <p className="text-lg mb-6 text-center">{description}</p>
        <div className="text-center">
            <Button
            className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-3 rounded-full"
            onClick={() => window.location.href = buttonLink}
            >
            {buttonText}
            </Button>
        </div>
    </motion.div>
);
};

export default DonationPage;