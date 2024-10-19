"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, GlobeLock } from 'lucide-react';

const containerVariants = {
hidden: { opacity: 0 },
visible: { 
    opacity: 1,
    transition: { 
    staggerChildren: 0.2,
    delayChildren: 0.3
    }
}
};

const itemVariants = {
hidden: { opacity: 0, y: 20 },
visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 100 }
}
};

const iconVariants = {
hidden: { rotate: -180, opacity: 0 },
visible: { 
    rotate: 0, 
    opacity: 1,
    transition: { 
    type: 'spring',
    stiffness: 200,
    damping: 10
    }
}
};

const pulseAnimation = {
scale: [1, 1.05, 1],
transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
}
};

export default function NoVPN() {
return (
    <div className="min-h-screen bg-[#121214] text-zinc-100 flex flex-col items-center justify-center p-4 overflow-hidden">
    <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center"
    >
        <motion.div
        variants={iconVariants}
        animate={pulseAnimation}
        >
        <GlobeLock className="w-32 h-32 text-orange-500 mx-auto mb-8"/>
        </motion.div>
        
        <motion.h1 
        variants={itemVariants}
        className="text-4xl md:text-7xl font-bold mb-4"
        >
        No VPN
        </motion.h1>
        
        <motion.p 
        variants={itemVariants}
        className="text-xl md:text-2xl mb-8"
        >
        請關閉 VPN 以使用FreeServer，若有判定錯誤請到Discord回報
        </motion.p>
        
        <motion.div
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex justify-center"
        >
        <Link href="/">
            <Button
            className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-3 rounded-full flex items-center"
            >
            <ArrowLeft className="mr-2 h-5 w-5" />
            回到主頁!
            </Button>
        </Link>
        </motion.div>
    </motion.div>
    
    <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ delay: 1, duration: 1 }}
    >
        {[...Array(20)].map((_, index) => (
        <motion.div
            key={index}
            className="absolute bg-orange-500 rounded-full"
            style={{
            width: Math.random() * 10 + 5,
            height: Math.random() * 10 + 5,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            }}
            animate={{
            y: [0, Math.random() * 100 - 50],
            x: [0, Math.random() * 100 - 50],
            opacity: [0.3, 1, 0.3],
            }}
            transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: 'reverse',
            }}
        />
        ))}
    </motion.div>
    </div>
);
}