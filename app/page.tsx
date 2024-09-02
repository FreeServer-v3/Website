"use client"
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Github, Menu, X, Server, Code, Users, CircleDollarSign, HandCoins } from 'lucide-react'
import Link from 'next/link'
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useRouter } from "next/navigation";
import Footer from '@/components/pages/footer'

export default function Component() {
const [isMenuOpen, setIsMenuOpen] = useState(false)
const [activeSection, setActiveSection] = useState('hero')
const router = useRouter();

const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
}

useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
        setActiveSection(entry.target.id)
        }
    })
    }, { threshold: 0.5 })

    document.querySelectorAll('section[id]').forEach((section) => {
    observer.observe(section)
    })

    return () => observer.disconnect()
}, [])

const particlesInit = async (engine: any) => {
    await loadFull(engine);
};

return (
    <div className="min-h-screen bg-[#121214] text-zinc-100 overflow-hidden">
        <div className="fixed inset-0 z-0">
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
            background: {
                color: {
                value: "#18181b",
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
                },
                modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
                },
            },
            particles: {
                color: {
                value: "#f97316",
                },
                links: {
                color: "#f97316",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
                },
                move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 2,
                straight: false,
                },
                number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 80,
                },
                opacity: {
                value: 0.5,
                },
                shape: {
                type: "circle",
                },
                size: {
                value: { min: 1, max: 5 },
                },
            },
            detectRetina: true,
            }}
        />
        </div>

    <div className="relative z-10">
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#1B1B1F]/80 backdrop-blur-md shadow-md">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-4"
        >
            <img src="/assets/freeserverv3.png" alt="FreeServer Logo" className="h-8 w-8" />
            <a href="/" className="text-xl font-bold">FreeServer v3</a>
        </motion.div>
        <div className="hidden md:flex space-x-4">
            {['關於', '服務', '開始使用', '社群', '常見問題', '聯絡我們'].map((section) => (
            <motion.div
                key={section}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                <Button
                variant="ghost"
                onClick={() => scrollTo(section)}
                className={activeSection === section ? 'text-orange-500' : ''}
                >
                {section.charAt(0).toUpperCase() + section.slice(1).replace('-', ' ')}
                </Button>
            </motion.div>
            ))}
        </div>
        <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
        </div>
        </nav>
        <AnimatePresence>
        {isMenuOpen && (
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="md:hidden bg-[#1B1B1F] py-2"
            >
            {['關於', '服務', '開始使用', '社群', '常見問題', '聯絡我們'].map((section) => (
                <Button
                    key={section}
                    variant="ghost"
                    className="w-full text-left"
                    onClick={() => scrollTo(section)}
                >
                {section.charAt(0).toUpperCase() + section.slice(1).replace('-', ' ')}
                </Button>
            ))}
            </motion.div>
        )}
        </AnimatePresence>
    </header>

    <main className="pt-16">
        <section id="hero" className="min-h-screen flex items-center justify-center relative bg-[#121214]">
        <div className="container mx-auto px-4 text-center z-10">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-600"
            >
            FreeServer 免費伺服
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl mb-8"
            >
            不用錢的伺服器(應該啦)
            </motion.p>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
            <motion.button
                className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-3 rounded-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollTo('開始使用')}
            >
            創建伺服器
            </motion.button>

            </motion.div>
        </div>
        </section>

        <section id="關於" className="py-20 bg-[#1B1B1F]">
        <div className="container mx-auto px-4">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8}}
                className="text-4xl font-bold mb-8 text-center"
            >
            關於我們
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <h3 className="text-2xl font-semibold mb-4">學生主導的專案</h3>
                <p className="text-lg">FreeServer v3 是由一群熱愛技術的學生所創立和維護的專案。我們的目標是為開發者和愛好者提供免費、高品質的伺服器託管服務。</p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <h3 className="text-2xl font-semibold mb-4">硬體規格</h3>
                <p className="text-lg">我們於台灣的是方宏鼎機房、香港的 Mega Gateway 機房皆設有節點，使用高效能的 EPYC 7002 / Intel Xeon Gold CPU，提供穩定的服務。</p>
            </motion.div>
            </div>
            <div className="py-10" />
            <div className="container mx-auto text-center items-center">
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <h3 className="text-2xl font-semibold mb-4">贊助我們!</h3>
                    <p className="text-lg">我們的服務基本都是免費的，如果你想支持我們，可以考慮贊助我們!</p><br/>
                    <div className="flex justify-center space-x-6">
                    <Button onClick={() => router.push("/donate")} className="bg-yellow-600 hover:bg-yellow-500 text-white px-8 py-3 rounded-full text-lg flex items-center">
                        <CircleDollarSign className="mr-2 h-6 w-6" />
                        贊助我們!
                    </Button>
                    <Button onClick={() => router.push("/sponsors")} className="bg-zinc-700 hover:bg-zinc-600 text-white px-8 py-3 rounded-full text-lg flex items-center">
                        <HandCoins className="mr-2 h-6 w-6" />
                        贊助者名單
                    </Button>
                    </div>
                </motion.div>
            </div>
        </div>
        </section>

        <section id="服務" className="py-20">
        <div className="container mx-auto px-4">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-bold mb-12 text-center"
            >
            我們的服務
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
            {[
                { icon: Server, title: '多種伺服器類型', description: '提供免費的 Minecraft 遊戲伺服器主機、Discord 機器人、網站託管等多種伺服器類型' },
                { icon: Code, title: '多語言支援', description: '支援 Python、JavaScript、Java、Go 等多種程式語言' },
                { icon: Users, title: '社群支援', description: '活躍的 Discord 社群，隨時提供技術支援和交流' }
            ].map((service, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="bg-[#1B1B1F] p-6 rounded-lg shadow-lg hover:shadow-orange-500/20 transition-shadow duration-300"
                >
                    <service.icon className="h-12 w-12 text-orange-500 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p>{service.description}</p>
                </motion.div>
            ))}
            </div>
        </div>
        </section>

        <section id="開始使用" className="py-20 bg-[#1B1B1F]">
        <div className="container mx-auto px-4">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-bold mb-12 text-center"
            >
            如何使用
            </motion.h2>
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex items-center mb-8"
                >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-2xl font-bold mr-4">
                        1
                    </div>
                    <p className="text-xl">前往 <a href="https://dash.freeserver.tw" className="text-orange-300 underline">dash.freeserver.tw</a> 註冊</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex items-center mb-8"
                >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-2xl font-bold mr-4">
                        2
                    </div>
                    <p className="text-xl">開始使用!</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex items-center mb-8"
                >
                    <p className="text-xl">關於更多詳細的教學，可以在 <a href="https://docs.freeserver.tw" className="text-orange-300 underline">docs.freeserver.tw</a> 中查看</p>
                </motion.div>
            </div>
        </div>
        </section>

        <section id="社群" className="py-20">
        <div className="container mx-auto px-4 text-center">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-bold mb-8"
            >
                開源社群
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl mb-12"
            >
                我們的網頁與 Discord Bot 皆在 GitHub 上開源<br/>
                加入我們的 Discord 伺服器，與其他用戶交流，獲得支援，分享您的專案！
            </motion.p>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex justify-center space-x-6"
            >
                <Button onClick={() => window.open("https://discord.gg/k5GgFFxN2Q", "_blank")} className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full text-lg flex items-center">
                    <img src="/assets/discord.svg" alt="Discord Logo" className="h-6 w-6 mr-2" />
                    加入 Discord
                </Button>
                <Button onClick={() => window.open("https://github.com/FreeServer-v3")} className="bg-zinc-700 hover:bg-zinc-600 text-white px-8 py-3 rounded-full text-lg flex items-center">
                    <Github className="mr-2 h-6 w-6" />
                    查看 GitHub
                </Button>
            </motion.div>
        </div>
        </section>

        <section id="常見問題" className="py-20 bg-[#1B1B1F]">
        <div className="container mx-auto px-4">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-bold mb-12 text-center"
            >
                常見問題
            </motion.h2>
            <div className="max-w-3xl mx-auto space-y-8">
            {[
                { q: 'FreeServer 真的完全免費嗎？', a: '這是一個很好的問題，你覺得很多免費服務是真的免費嗎? 也許是，但我知道的是 FreeServer 沒有一個月是回本的。趕緊贊助我們!' },
                { q: '我可以託管任何類型的內容嗎？', a: '只要你的東西不違法或違反我們的服務條款，你想放啥都可以。' },
                { q: '我的服務好像不能託管', a: '如果你找不到合適的伺服器類型，可以在我們的 Discord 伺服器上提出建議，或與我們聯繫。' }
            ].map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                    <h3 className="text-2xl font-semibold mb-2">{item.q}</h3>
                    <p className="text-lg text-zinc-300">{item.a}</p>
                </motion.div>
            ))}
            </div>
        </div>
        </section>

        <section id="聯絡我們" className="py-20">
        <div className="container mx-auto px-4">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-bold mb-12 text-center"
            >
                聯絡我們
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl mb-12 text-center"
            >
                您可以加入我們的 Discord 或發信給主要維運者 hi@nelsongx.com 聯繫我們。 
            </motion.p>
        </div>
        </section>
    </main>

    <div className="text-center text-3xl py-10 bg-neutral-900">
        "你已經滑到底了。快去創伺服器!"<br/>
        --愛因斯坦，沒有說過
    </div>

    <Footer />
    </div>
    </div>
)
}