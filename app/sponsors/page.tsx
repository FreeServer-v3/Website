"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Gift, Star} from 'lucide-react';
import { useRouter } from 'next/navigation';
import Footer from '@/components/pages/footer';

interface Sponsor {
    id: number;
    name: string;
    tier: string;
    logo: string;
    link: string;
}

interface Ad {
    name: string;
    url: string;
    image: string;
    text: string;
}

const initialSponsors: Sponsor[] = [
    { id: 1, name: 'NAF 商城', tier: 'Gold', logo: '/assets/sponsors/nafstore.webp', link: 'https://nafstore.net' },
    { id: 2, name: '簡單資訊有限公司', tier: 'Gold', logo: '/assets/sponsors/404-network-infor.webp', link: 'https://portal.simple.taipei/' },
    { id: 3, name: 'CRE0809', tier: 'Gold', logo: '/assets/sponsors/cre0809.webp', link: 'https://www.cre0809.com/' },
    { id: 4, name: 'Nelson' ,tier: 'Silver', logo: '/assets/sponsors/nelsonGX_head.png', link: 'https://nelsongx.com/' },
    { id: 5, name: 'CheapServer', tier: 'Special', logo: '/assets/sponsors/cheapserver-white.png', link: 'https://cheapserver.tw/' },
];

const tierColors: { [key: string]: string } = {
    Gold: 'text-yellow-400',
    Silver: 'text-gray-300',
    Bronze: 'text-orange-600',
    Special: 'text-blue-300',
    Ad: 'text-zinc-400'
};

const SponsorCard = ({ sponsor, index }: { sponsor: Sponsor, index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={`bg-[#1B1B1F] p-6 rounded-lg shadow-lg hover:shadow-orange-500/30 transition-shadow duration-300`}
        onClick={() => window.open(sponsor.link, '_blank')}
        style={{ cursor: 'pointer' }}
    >
        <img src={sponsor.logo} alt={`${sponsor.name} logo`} className="w-full h-32 object-contain mb-4" />
        <h3 className="text-2xl font-semibold mb-2 text-center">{sponsor.name}</h3>
        {sponsor.tier !== 'Ad' && (
            <p className={`${tierColors[sponsor.tier]} font-medium text-center`}>
                {sponsor.tier === 'Gold' ? '黃金' : sponsor.tier === 'Silver' ? '白銀' : sponsor.tier === 'Bronze' ? '青銅' : '特別'}贊助者
            </p>
        )}
        {sponsor.tier === 'Ad' && (
            <>
                <p className="text-zinc-400 font-medium text-center mb-2">廣告贊助商</p>
            </>
        )}
    </motion.div>
);


const TierSection = ({ tier, sponsors }: { tier: string, sponsors: any[] }) => (
    <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16"
    >
        <h2 className={`text-4xl font-bold mb-8 flex items-center justify-center ${tierColors[tier]}`}>
            <Star className="mr-2" /> {tier === 'Gold' ? '黃金' : tier === 'Silver' ? '白銀' : tier === 'Bronze' ? '青銅' : tier === 'Ad' ? '廣告' : '特別'}贊助者
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sponsors.map((sponsor, index) => (
                <SponsorCard key={sponsor.id} sponsor={sponsor} index={index} />
            ))}
        </div>
    </motion.section>
);

const SponsorsListPage = () => {
    const [sponsors, setSponsors] = useState<Sponsor[]>(initialSponsors);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://cdn.freeserver.tw/ad/list.json')
            .then(response => response.json())
            .then((data: Ad[]) => {
                const adSponsors = data.map((ad, index) => ({
                    id: initialSponsors.length + index + 1,
                    name: ad.name,
                    tier: 'Ad',
                    logo: ad.image,
                    link: ad.url,
                    text: ad.text
                }));
                setSponsors([...initialSponsors, ...adSponsors]);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching ads:', error);
                setIsLoading(false);
            });
    }, []);

    const sponsorsByTier = sponsors.reduce((acc: { [key: string]: Sponsor[] }, sponsor) => {
        if (!acc[sponsor.tier]) {
            acc[sponsor.tier] = [];
        }
        acc[sponsor.tier].push(sponsor);
        return acc;
    }, {});

    const router = useRouter();

    const tiers = ['Gold', 'Silver', 'Bronze', 'Special', 'Ad'];

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

            <main className="container mx-auto pt-20 pb-20">
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div className="py-4" />
                    <h1 className="text-4xl md:text-7xl font-bold mb-4">贊助者名單</h1>
                    <p className="text-xl mb-8">歡迎聯絡我們成為贊助者 {'<'}3</p>
                    <Button
                        className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-3 rounded-full"
                        onClick={() => router.push('/donate')}
                    >
                        贊助我們!
                    </Button>
                </motion.section>

                {isLoading ? (
                    <p className="text-center">載入中...</p>
                ) : (
                    <>
                        {tiers.map(tier => (
                            sponsorsByTier[tier] && sponsorsByTier[tier].length > 0 && (
                                <TierSection key={tier} tier={tier} sponsors={sponsorsByTier[tier]} />
                            )
                        ))}
                    </>
                )}

                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mt-20"
                >
                    <h2 className="text-4xl font-bold mb-4">想要讓我們活更久嗎?</h2>
                    <p className="text-xl mb-8">加入贊助者名單來幫助我們!</p>
                    <Button
                        className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-3 rounded-full"
                        onClick={() => router.push('/donate')}
                    >
                        <Gift className="mr-2 h-5 w-5" />
                        贊助我們
                    </Button>
                </motion.section>
            </main>

            <Footer />
        </div>
    );
};

export default SponsorsListPage;
