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
                <h1 className="text-4xl md:text-7xl font-bold">FreeServer v3 服務條款</h1>
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
                    FreeServer、免費伺服 或 FreeServer v3 (下稱我們、本服務、本網站、本平台) 係依據本條款提供本平台各項服務。當您註冊完成或開始使用 FreeServer 服務時，即表示您已閱讀、了解並同意接受本條款之所有內容。如果您不同意本條款的所有內容，您應立即停止使用本服務。
                </p>
                <p className="text-xl mt-4">
                    如未滿十八歲之未成年人使用本平台，應得法定代理人同意，並遵守本服務條款及相關法律規定。
                </p>
                <p className="text-xl mt-4">
                    年滿十八歲之成年人需自行負完全的行為能力責任，當繼續使用 FreeServer 提供之服務時，即視為您的法定代理人已閱讀、瞭解並同意接受本服務條款之所有內容及其後續的修改或變更。
                </p>
                <p className="text-xl mt-4">
                    您使用我們的服務即表示您同意我們按照隱私政策收集和使用您的個人資料。我們高度重視您的隱私權，並承諾依照適用的數據保護法規處理您的個人資料。請詳細閱讀我們網站上的隱私政策，以了解我們如何收集、使用、保護和披露您的個人資料。
                </p>
            </div>

            <div>
                <h2 className="text-4xl font-semibold mb-4">二、服務使用</h2>
                <ol className="list-decimal list-inside space-y-4 text-xl">
                    <li>除本服務另有明確書面許可，您無權且不能向任何第三方出租、租賃、出售服務訪問權限。</li>
                    <li>您必須按所規定之範圍用途，合理使用與我們提供之服務。</li>
                    <li>您使用本服務，不得妨礙他人使用或影響本服務系統之正常運作。如有違反，本服務得逕行暫停用戶使用或終止其使用。</li>
                    <li>您在使用期間干擾其他客戶的服務或造成硬體或可用資源造成過多負擔，我們可能會對您的服務額外施加限制或暫時中止連線。</li>
                    <li>本服務會監控產品或服務的使用，並且如果我們認為您過度使用主機資源，我們將保留權利進行額外限制或暫時中止連線。</li>
                    <li>用戶應尊重他人的智慧財產權，不得在本服務上傳、分享或使用侵犯他人著作權、商標權或其他智慧財產權的內容。本服務有權根據權利人的通知移除侵權內容。</li>
                    <li>因任何原因用戶無法使用由本服務直接提供之服務，本服務不負任何賠償責任。</li>
                    <li>用戶應理解並同意本服務可以自行決定拒絕或允許您使用服務，包括刪除伺服器、封鎖您的帳號，且無需提供任何理由或通知。</li>
                    <li>在本服務進行消費與退款行為時，本服務基於政府法令或供應商需要您上傳數項身分證明文件，未完善上傳及核對者，本服務有權決定拒絕您使用我們的服務。</li>
                    <li>在使用期間，我們發現您有使用任何不實資料或疑似盜用他人身分等，本服務有權利繼續提供服務，並視情況移交有關機關處置。</li>
                </ol>
            </div>

            <div>
                <h2 className="text-4xl font-semibold mb-4">三、禁止使用</h2>
                <p className="text-xl mb-4">
                可以在下面找到您使用本服務時，所禁止內容列表，其中包括但不限於以下內容：
                </p>
                <ul className="list-disc list-inside space-y-2 text-xl">
                    <li>各種加密貨幣挖礦 (包括但不限於比特幣、以太坊之挖礦)。</li>
                    <li>兒童色情內容、色情內容。</li>
                    <li>惡意程式、病毒、漏洞的利用。</li>
                    <li>傳輸或散佈電腦病毒。</li>
                    <li>恐怖活動、垃圾郵件或網絡釣魚。</li>
                    <li>端口掃描、暴力破解或任何其他駭客嘗試。</li>
                    <li>DDoS、DoS、Booters、Network Flood 或類似的網絡攻擊活動。</li>
                    <li>提供賭博資訊或以任何方式引誘他人參與賭博、吸食或濫用毒品。</li>
                    <li>從事不法交易行為或張貼虛假不實、引人犯罪之訊息。</li>
                    <li>從事違反公共秩序、善良風俗、及法律所禁止之行為。</li>
                    <li>暴力、賭博、詐騙、侵權、攻擊與發送垃圾訊息。</li><br/>
                    遭系統或其他用戶濫用回報到上述任何一項都將導致立即停權，恕不另行通知。
                </ul>
            </div>

            <div>
                <h2 className="text-4xl font-semibold mb-4">四、收費與伺服器週期續約</h2>
                <ol className="list-decimal list-inside space-y-4 text-xl">
                    <li>本服務提供基本的免費服務，同時也提供進階服務選項。</li>
                    <li>進階服務系指獲得免費服務之額外資源，其可通過使用"FreeCoin"訂閱獲得。</li>
                    <li>"FreeCoin"可通過以下方式獲得:
                    a、完成特定任務(如邀請用戶到 Discord 伺服器、每日簽到等)
                    b、購買禮品卡</li>
                    <li>禮品卡的購買視為對本服務的贊助，購買者將獲得相應的"FreeCoin"回饋。</li>
                    <li>本服務保留隨時調整"FreeCoin"獲取方式、兌換比例及進階服務內容的權利。</li>
                    <li>對於使用"FreeCoin"訂閱的進階服務，系統會在每次週期開始前自動扣除用戶的"FreeCoin"餘額；如用戶未在到期日前續訂，服務將自動降級為基本免費服務，並將所有已創建伺服器之資源更改為最小值；服務降級可能導致部分資料無法訪問或丟失，本服務不對此負責</li>
                    <li>無論是免費服務或進階服務，伺服器開啟後皆需每 30 天至管理面板中續約。</li>
                    <li>若用戶沒有在 30 天內續約，伺服器將在 30 天後自動停權。</li>
                    <li>用戶可在伺服器停權後 3 天內進行續約，否則伺服器將被刪除，所有資料將無法恢復。</li>
                </ol>
            </div>

            <div>
                <h2 className="text-4xl font-semibold mb-4">五、其他</h2>
                <ol className="list-decimal list-inside space-y-4 text-xl">
                <li>本服務保留隨時修改本條款的權利，修改後將公佈於網站上，本平台不負任何通知責任。</li>
                <li>用戶使用本服務所生之一切紛爭以臺灣臺北地方法院為第一審管轄法院。</li>
                <li>如用戶與本服務之間發生任何爭議，雙方應本著誠信原則先行協商解決。如協商不成，則依法向臺灣臺北地方法院提起訴訟。</li>
                <li>另行公告之條款或相關規定亦均併入屬於本條款之一部分。</li>
                </ol>
            </div>
            </motion.section>
        </main>

        <Footer />
        </div>
    );
};

export default TermsPage;