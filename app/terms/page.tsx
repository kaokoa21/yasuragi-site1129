'use client';

import Link from 'next/link';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link href="/" className="text-green-800 hover:text-green-600 transition-colors text-lg font-bold flex items-center gap-2">
            <i className="ri-arrow-left-line"></i> やすらぎの家に戻る
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">運営会社情報</h1>
          <div className="w-16 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="bg-white rounded-3xl shadow-sm p-8 md:p-10 border border-orange-100">
          <div className="space-y-12">
            <div>
              <h2 className="text-xl font-bold text-green-800 mb-6 border-l-4 border-orange-500 pl-3">会社概要</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-gray-700 leading-relaxed border-collapse">
                  <tbody>
                    <tr className="border-b border-orange-100">
                      <td className="py-4 font-bold w-32 md:w-48 align-top text-green-800">会社名</td>
                      <td className="py-4">株式会社ライフリスト</td>
                    </tr>
                    <tr className="border-b border-orange-100">
                      <td className="py-4 font-bold align-top text-green-800">事業内容</td>
                      <td className="py-4">
                        ・地域密着型不動産賃貸業<br />
                        ・障がい者グループホーム運営
                      </td>
                    </tr>
                    <tr className="border-b border-orange-100">
                      <td className="py-4 font-bold align-top text-green-800">所在地</td>
                      <td className="py-4">静岡市を中心とした地域</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-green-800 mb-6 border-l-4 border-orange-500 pl-3">施設情報</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-gray-700 leading-relaxed border-collapse">
                  <tbody>
                    <tr className="border-b border-orange-100">
                      <td className="py-4 font-bold w-32 md:w-48 align-top text-green-800">施設名</td>
                      <td className="py-4">障がい者グループホーム やすらぎの家</td>
                    </tr>
                    <tr className="border-b border-orange-100">
                      <td className="py-4 font-bold align-top text-green-800">所在地</td>
                      <td className="py-4">
                        〒422-8036<br />
                        静岡県静岡市駿河区敷地2-26-2 左京ビル201
                      </td>
                    </tr>
                    <tr className="border-b border-orange-100">
                      <td className="py-4 font-bold align-top text-green-800">電話番号</td>
                      <td className="py-4">054-260-4730</td>
                    </tr>
                    <tr className="border-b border-orange-100">
                      <td className="py-4 font-bold align-top text-green-800">定員</td>
                      <td className="py-4">5名</td>
                    </tr>
                    <tr className="border-b border-orange-100">
                      <td className="py-4 font-bold align-top text-green-800">サービス種別</td>
                      <td className="py-4">共同生活援助（グループホーム）</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-green-800 mb-4 border-l-4 border-orange-500 pl-3">事業理念</h2>
              <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl border border-orange-100 shadow-sm">
                <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                  私たちは、障がいをお持ちの方が地域社会の中で自分らしく生活できるよう、
                  一人ひとりの個性と尊厳を大切にした支援を提供いたします。
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  「やすらぎの家」を通じて、利用者様が安心して暮らせる居場所を提供し、
                  自立に向けた歩みを心を込めてサポートしてまいります。
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-green-800 mb-4 border-l-4 border-orange-500 pl-3">お問い合わせ</h2>
              <div className="bg-green-50 p-8 rounded-2xl border border-green-100 shadow-sm text-center md:text-left">
                <p className="text-green-800 font-bold text-xl mb-4">
                  障がい者グループホーム やすらぎの家
                </p>
                <div className="space-y-2 text-gray-700 text-lg">
                  <p>〒422-8036 静岡県静岡市駿河区敷地2-26-2 左京ビル201</p>
                  <p className="text-2xl font-bold text-green-800 my-2">TEL：054-260-4730</p>
                  <p className="text-sm text-gray-500 mt-4">運営：株式会社ライフリスト</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-orange-100 text-center">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} 株式会社ライフリスト. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* フッター (簡易版) */}
      <footer className="bg-green-800 text-white py-8 text-center mt-12">
        <p className="text-green-200">© {new Date().getFullYear()} やすらぎの家. All rights reserved.</p>
      </footer>
    </div>
  );
}