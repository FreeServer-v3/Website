"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import Footer from '@/components/pages/footer';
import { useRouter } from 'next/navigation';

const TermsPage = () => {
    const router = useRouter()

    return (
        <div className="min-h-screen bg-[#121214] text-zinc-100">
            <main className="container mx-auto px-4 py-40">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <h1 className="text-4xl md:text-7xl font-bold mb-8">服務條款 & 隱私政策</h1>
                    <p className="text-xl mb-12">
                        查看我們的條款。
                    </p>
                    
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                            <Button
                            className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-3 rounded-full flex items-center"
                            onClick={() => router.push('/terms/terms-of-service')}
                        >
                        服務條款 (ToS)
                        <ExternalLink className="ml-2 h-5 w-5" />
                        </Button>
                        
                        <Button
                            className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-3 rounded-full flex items-center"
                            onClick={() => router.push('/terms/privacy-policy')}
                        >
                        隱私政策 (PP)
                        <ExternalLink className="ml-2 h-5 w-5" />
                        </Button>
                    </div>
                </motion.div>
            </main>
        <Footer />
        </div>
    );
};

export default TermsPage;