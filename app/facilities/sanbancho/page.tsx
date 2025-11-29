
'use client';

import Link from 'next/link';

export default function SanbanchoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ナビゲーション */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="font-bold text-2xl text-green-800">やすらぎの家</Link>
            <Link href="/" className="text-gray-700 hover:text-orange-600 font-medium transition-colors cursor-pointer">
              ホームに戻る
            </Link>
          </div>
        </div>
      </nav>

      {/* ヘッダー */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
            三番町施設
          </h1>
          <p className="text-xl text-gray-600 mb-8">静岡市葵区三番町23-6</p>
          <div className="bg-green-100 inline-block px-8 py-4 rounded-full">
            <p className="text-green-700 font-semibold text-lg">定員6名／入居5名（残1室）</p>
          </div>
        </div>
      </section>

      {/* 外観 */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-12 text-center">外観</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <img 
              src="https://readdy.ai/api/search-image?query=Urban%20group%20home%20building%20in%20city%20center%2C%20modern%20multi-story%20residential%20facility%2C%20accessible%20entrance%20with%20ramp%2C%20clean%20contemporary%20design%2C%20well-maintained%20urban%20setting%20with%20street%20access&width=600&height=400&seq=sanbancho-exterior-1&orientation=landscape"
              alt="三番町施設 外観1"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
            <img 
              src="https://readdy.ai/api/search-image?query=Group%20home%20facility%20entrance%20with%20clear%20signage%2C%20barrier-free%20access%2C%20modern%20building%20facade%20in%20Japanese%20city%20center%2C%20professional%20disability%20support%20facility%20design&width=600&height=400&seq=sanbancho-exterior-2&orientation=landscape"
              alt="三番町施設 外観2"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* 内観 */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-12 text-center">内観</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <img 
                src="https://readdy.ai/api/search-image?query=Spacious%20group%20home%20common%20area%20with%20comfortable%20seating%2C%20modern%20interior%20design%2C%20accessible%20layout%2C%20natural%20lighting%2C%20welcoming%20community%20space%20for%20residents%20and%20staff%20interaction&width=500&height=350&seq=sanbancho-common&orientation=landscape"
                alt="共用スペース"
                className="w-full h-64 object-cover rounded-2xl shadow-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-green-800">共用スペース</h3>
            </div>
            <div className="text-center">
              <img 
                src="https://readdy.ai/api/search-image?query=Modern%20group%20home%20dining%20area%20with%20accessible%20tables%20and%20chairs%2C%20bright%20and%20clean%20eating%20space%2C%20barrier-free%20design%2C%20comfortable%20dining%20environment%20for%20residents%20with%20disabilities&width=500&height=350&seq=sanbancho-dining&orientation=landscape"
                alt="ダイニングエリア"
                className="w-full h-64 object-cover rounded-2xl shadow-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-green-800">ダイニングエリア</h3>
            </div>
            <div className="text-center">
              <img 
                src="https://readdy.ai/api/search-image?query=Accessible%20bathroom%20in%20group%20home%20facility%2C%20modern%20fixtures%2C%20grab%20bars%2C%20barrier-free%20design%2C%20clean%20and%20safe%20bathing%20area%20for%20residents%20with%20disabilities&width=500&height=350&seq=sanbancho-bathroom&orientation=landscape"
                alt="浴室"
                className="w-full h-64 object-cover rounded-2xl shadow-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-green-800">浴室</h3>
            </div>
          </div>
        </div>
      </section>

      {/* アクセス */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-12 text-center">アクセス</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-3xl border border-green-100 shadow-sm">
              <h3 className="text-2xl font-semibold text-green-800 mb-6">所在地・交通</h3>
              <div className="space-y-4 text-gray-700">
                <p><strong>住所：</strong>静岡市葵区三番町23-6</p>
                <p><strong>最寄り駅：</strong>JR東海道線「静岡駅」より徒歩12分</p>
                <p><strong>バス停：</strong>「三番町」バス停より徒歩2分</p>
                <p><strong>駐車場：</strong>あり（2台分）</p>
                <p><strong>周辺環境：</strong>市街地中心部、商業施設・医療機関が充実</p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-3xl overflow-hidden shadow-sm">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3273.123456789!2d138.123456!3d34.987654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDU5JzE1LjYiTiAxMzjCsDA3JzI0LjQiRQ!5e0!3m2!1sja!2sjp!4v1234567890123"
                width="100%" 
                height="300" 
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="三番町施設の地図"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 施設詳細 */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-12 text-center">施設詳細</h2>
          <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm">
            <table className="w-full text-gray-700">
              <tr className="border-b border-gray-200">
                <td className="py-4 font-semibold w-1/3 text-lg">定員</td>
                <td className="py-4 text-lg">6名</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-4 font-semibold text-lg">居室数</td>
                <td className="py-4 text-lg">6畳6室</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-4 font-semibold text-lg">建物構造</td>
                <td className="py-4 text-lg">鉄筋コンクリート造3階建て</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-4 font-semibold text-lg">主な設備</td>
                <td className="py-4 text-lg leading-relaxed">
                  • 全室個室（各個室にエアコン、ベッド完備）<br />
                  • 広々とした共用リビング<br />
                  • システムキッチン、浴室、洗面所<br />
                  • 洗濯機、冷蔵庫、WiFi完備<br />
                  • エレベーター完備<br />
                  • 駐車場2台分
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-4 font-semibold text-lg">開設年月</td>
                <td className="py-4 text-lg">2022年10月</td>
              </tr>
            </table>
          </div>
        </div>
      </section>

      {/* お問い合わせ */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-8">三番町施設へのお問い合わせ</h2>
          <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-3xl border border-orange-100 shadow-sm">
            <p className="text-lg text-gray-700 mb-6">見学のご予約やご質問など、お気軽にお問い合わせください。</p>
            <div className="space-y-2 text-gray-700 mb-8">
              <p className="text-xl font-bold text-green-800">TEL：054-260-4730</p>
              <p>受付時間：平日 9:00〜18:00</p>
            </div>
            <Link href="/" className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-colors cursor-pointer whitespace-nowrap">
              ホームに戻る
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
