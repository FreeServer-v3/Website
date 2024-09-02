import Link from "next/link"

export default function Footer() {
    return (
        <>
        <footer className="bg-[#1B1B1F] py-12 relative z-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between items-center">
                    <div className="w-full md:w-1/3 mb-8 md:mb-0">
                        <img src="/assets/freeserverv3.png" alt="FreeServer Logo" className="h-12 w-12 mb-4" />
                        <p className="text-zinc-400">&copy; 2024 FreeServer v3 保留所有權利</p>
                    </div>
                    <div className="w-full md:w-1/3 mb-8 md:mb-0">
                        <h3 className="text-xl font-semibold mb-4">快速連結</h3>
                        <ul className="space-y-2">
                            <li><Link href="/donate" className="text-zinc-400 hover:text-orange-500 transition-colors">贊助我們</Link></li>
                            <li><Link href="/terms/terms-of-service" className="text-zinc-400 hover:text-orange-500 transition-colors">服務條款</Link></li>
                            <li><Link href="/terms/privacy-policy" className="text-zinc-400 hover:text-orange-500 transition-colors">隱私政策</Link></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/3">
                        <h3 className="text-xl font-semibold mb-4">這個頁面在 GitHub 上開源。</h3>
                        <div className="flex space-x-4">
                            {[
                                { href: 'https://github.com/FreeServer-v3/Website', icon: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z' },
                            ].map((social, index) => (
                            <Link key={index} href={social.href} className="text-zinc-400 hover:text-orange-500 transition-colors">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d={social.icon} clipRule="evenodd" />
                                </svg>
                            </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}