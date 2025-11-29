'use client';

import Link from 'next/link';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link href="/" className="text-blue-800 hover:text-blue-900 text-lg font-semibold">
            ← やすらぎの家に戻る
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-blue-800 mb-8">運営会社情報</h1>
        
        <div className="bg-white rounded-2xl shadow-sm p-8 border border-blue-100">
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-blue-800 mb-3">会社概要</h2>
              <table className="w-full text-blue-700">
                <tr className="border-b border-blue-200">
                  <td className="py-3 font-medium w-32">会社名</td>
                  <td className="py-3">株式会社ライフリスト</td>
                </tr>
                <tr className="border-b border-blue-200">
                  <td className="py-3 font-medium">事業内容</td>
                  <td className="py-3">
                    ・地域密着型不動産賃貸業<br />
                    ・障がい者グループホーム運営
                  </td>
                </tr>
                <tr className="border-b border-blue-200">
                  <td className="py-3 font-medium">所在地</td>
                  <td className="py-3">静岡市を中心とした地域</td>
                </tr>
              </table>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-blue-800 mb-3">施設情報</h2>
              <table className="w-full text-blue-700">
                <tr className="border-b border-blue-200">
                  <td className="py-3 font-medium w-32">施設名</td>
                  <td className="py-3">障がい者グループホーム やすらぎの家</td>
                </tr>
                <tr className="border-b border-blue-200">
                  <td className="py-3 font-medium">所在地</td>
                  <td className="py-3">
                    〒422-8036<br />
                    静岡県静岡市駿河区敷地2-26-2 左京ビル201
                  </td>
                </tr>
                <tr className="border-b border-blue-200">
                  <td className="py-3 font-medium">電話番号</td>
                  <td className="py-3">054-260-4730</td>
                </tr>
                <tr className="border-b border-blue-200">
                  <td className="py-3 font-medium">定員</td>
                  <td className="py-3">5名</td>
                </tr>
                <tr className="border-b border-blue-200">
                  <td className="py-3 font-medium">サービス種別</td>
                  <td className="py-3">共同生活援助（グループホーム）</td>
                </tr>
              </table>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-blue-800 mb-3">事業理念</h2>
              <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-xl border border-blue-100">
                <p className="text-blue-700 leading-relaxed mb-4">
                  私たちは、障がいをお持ちの方が地域社会の中で自分らしく生活できるよう、
                  一人ひとりの個性と尊厳を大切にした支援を提供いたします。
                </p>
                <p className="text-blue-700 leading-relaxed">
                  「やすらぎの家」を通じて、利用者様が安心して暮らせる居場所を提供し、
                  自立に向けた歩みを心を込めてサポートしてまいります。
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-blue-800 mb-3">お問い合わせ</h2>
              <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-xl border border-blue-100">
                <p className="text-blue-700 mb-2">
                  <strong>障がい者グループホーム やすらぎの家</strong>
                </p>
                <p className="text-blue-700 mb-2">
                  〒422-8036 静岡県静岡市駿河区敷地2-26-2 左京ビル201
                </p>
                <p className="text-blue-700 mb-2">
                  TEL：054-260-4730
                </p>
                <p className="text-blue-700">
                  運営：株式会社ライフリスト
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-blue-200">
              <p className="text-blue-600 text-sm text-center">
                © 2024 株式会社ライフリスト. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}