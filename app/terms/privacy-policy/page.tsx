"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Footer from '@/components/pages/footer';

const TermsPage = () => {
const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

return (
    <div className="bg-[#121214] text-zinc-100 min-h-screen">
    <header className="bg-[#1B1B1F] py-6">
        <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-7xl font-bold">FreeServer v3 隱私政策</h1>
        </div>
    </header>

    <main className="container mx-auto px-4 py-20">
        <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 0.8 }}
        className="space-y-12"
        >
        <div>
            <h2 className="text-4xl font-semibold mb-4">一、總則</h2>
            <p className="text-xl">
                本隱私權政策描述了 FreeServer  (下稱我們、本行號、本網站) 如何收集、使用和分享您在我們網站 (包括 freeserver.tw、www.freeserver.tw、dash.freeserver.tw、panel.freeserver.tw 或其他 FreeServer 所屬之網域(*.freeserver.tw)）。
                <br/>
                通過使用我們的任何服務、我們的網站、控制面板或其他方式，均代表您同意本隱私權政策的全部內容。
            </p>
        </div>

        <div>
            <h2 className="text-4xl font-semibold mb-4">二、個人資料的蒐集、處理及利用方式</h2>
            <ol className="list-decimal list-inside space-y-4 text-xl">
                <li>當您造訪本網站或使用本網站所提供之功能服務時，我們將視該服務功能性質，請您提供必要的個人資料，並在該特定目的範圍內處理及利用您的個人資料。</li>
                <li>本網站在您使用服務信箱、問卷調查等互動性功能時，會保留您所提供的姓名、電子郵件地址、聯絡方式及使用時間等。</li>
                <li>於一般瀏覽時，伺服器會自行記錄相關行徑，包括您使用連線設備之IP位址、使用時間、使用的瀏覽器、瀏覽及點選資料記錄等，做為我們增進網站服務的參考依據。</li>
                <li>我們還可能從第三方服務接收有關您帳戶的數據，並將其與我們擁有的有關您的數據進行調整、合併或比較。</li>
            </ol>
        </div>

        <div>
            <h2 className="text-4xl font-semibold mb-4">三、資料之保護</h2>
            <p className="text-xl mb-4">
            我們將採取合理措施保護您個人的資料免遭丟失、濫用和未經授權的訪問、分享、更改或破壞，但我們將不承擔任何責任。
            </p>
        </div>

        <div>
            <h2 className="text-4xl font-semibold mb-4">四、Cookie 之使用</h2>
            <ol className="list-decimal list-inside space-y-4 text-xl">
                為了提供您最佳的服務，本網站會在您的電腦中放置並取用我們的Cookie，若您不願接受Cookie的寫入，您可在您使用的瀏覽器功能項中設定隱私權等級為高，即可拒絕Cookie的寫入，但可能會致使網站某些功能無法正常執行，或無法提供您服務。
            </ol>
        </div>

        <div>
            <h2 className="text-4xl font-semibold mb-4">五、其他</h2>
            <ol className="list-decimal list-inside space-y-4 text-xl">
            <li>本網站隱私權保護政策將因應需求隨時進行修正，修正後的條款將刊登於本網站上。</li>
            <li>有任何問題，請使用 Discord 中的 ModMail 功能與我們聯繫。</li>
            </ol>
        </div>
        </motion.section>
    </main>

    <Footer />
    </div>
);
};

export default TermsPage;