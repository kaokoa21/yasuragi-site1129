'use client';

import Link from 'next/link';

export default function Privacy() {
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
          <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">プライバシーポリシー</h1>
          <div className="w-16 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="bg-white rounded-3xl shadow-sm p-8 md:p-10 border border-orange-100">
          <div className="space-y-10">
            <div>
              <h2 className="text-xl font-bold text-green-800 mb-4 border-l-4 border-orange-500 pl-3">基本方針</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                障がい者グループホーム やすらぎの家（以下「当事業所」という）は、利用者様およびご家族の個人情報の保護を重要な責務と認識し、
                個人情報の保護に関する法律（個人情報保護法）および関連法令を遵守し、
                適切な個人情報の管理・保護に努めます。
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-green-800 mb-4 border-l-4 border-orange-500 pl-3">個人情報の収集について</h2>
              <p className="text-gray-700 leading-relaxed mb-3 text-lg">
                当事業所では、以下の目的で個人情報を収集いたします：
              </p>
              <ul className="text-gray-700 space-y-2 list-disc pl-6 text-lg">
                <li>障害福祉サービスの提供</li>
                <li>サービス利用計画の作成・変更</li>
                <li>利用料金の請求・管理</li>
                <li>緊急時の連絡</li>
                <li>サービス向上のための調査・分析</li>
                <li>法令に基づく行政機関への報告</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-green-800 mb-4 border-l-4 border-orange-500 pl-3">収集する個人情報の種類</h2>
              <ul className="text-gray-700 space-y-2 list-disc pl-6 text-lg">
                <li>氏名、住所、電話番号、メールアドレス</li>
                <li>生年月日、性別</li>
                <li>障害者手帳の種類・等級</li>
                <li>受給者証の内容</li>
                <li>健康状態・医療情報</li>
                <li>家族構成・緊急連絡先</li>
                <li>その他サービス提供に必要な情報</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-green-800 mb-4 border-l-4 border-orange-500 pl-3">個人情報の利用について</h2>
              <p className="text-gray-700 leading-relaxed mb-3 text-lg">
                収集した個人情報は、以下の目的で利用いたします：
              </p>
              <ul className="text-gray-700 space-y-2 list-disc pl-6 text-lg">
                <li>グループホームサービスの提供</li>
                <li>個別支援計画の作成・実施・評価</li>
                <li>医療機関・関係機関との連携</li>
                <li>緊急時の対応</li>
                <li>サービス利用料の請求・管理</li>
                <li>行政機関への報告・連絡</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-green-800 mb-4 border-l-4 border-orange-500 pl-3">個人情報の第三者提供について</h2>
              <p className="text-gray-700 leading-relaxed mb-3 text-lg">
                当事業所は、以下の場合を除き、本人の同意なく個人情報を第三者に提供することはありません：
              </p>
              <ul className="text-gray-700 space-y-2 list-disc pl-6 text-lg">
                <li>法令に基づく場合</li>
                <li>人の生命、身体または財産の保護のために必要がある場合</li>
                <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合</li>
                <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-green-800 mb-4 border-l-4 border-orange-500 pl-3">個人情報の管理について</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                当事業所は、個人情報の紛失、破壊、改ざん、漏えい等を防止するため、
                適切な安全管理措置を講じます。また、職員に対する個人情報保護に関する教育・研修を実施し、
                個人情報の適切な取り扱いの徹底を図ります。
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-green-800 mb-4 border-l-4 border-orange-500 pl-3">個人情報の開示・訂正・削除について</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                利用者様は、当事業所が保有する個人情報について、開示、訂正、削除を求めることができます。
                ご希望の場合は、本人確認の上、適切に対応いたします。
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-green-800 mb-4 border-l-4 border-orange-500 pl-3">個人情報保護責任者</h2>
              <p className="text-gray-700 text-lg">
                個人情報保護責任者：株式会社ライフリスト<br />
                連絡先：054-260-4730
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-green-800 mb-4 border-l-4 border-orange-500 pl-3">お問い合わせ</h2>
              <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
                <p className="text-gray-700 text-lg">
                  個人情報の取り扱いに関するお問い合わせは下記までご連絡ください：<br />
                  <br />
                  <strong>障がい者グループホーム やすらぎの家</strong><br />
                  電話：054-260-4730<br />
                  〒422-8036 静岡県静岡市駿河区敷地2-26-2 左京ビル201<br />
                  運営：株式会社ライフリスト
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-green-800 mb-4 border-l-4 border-orange-500 pl-3">プライバシーポリシーの変更</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                当事業所は、法令の変更等に伴い、本プライバシーポリシーを変更することがあります。
                重要な変更については、ウェブサイト等でお知らせいたします。
              </p>
            </div>

            <div className="pt-8 border-t border-orange-100 text-right">
              <p className="text-gray-500 text-sm">
                制定日：2024年1月1日<br />
                最終更新日：2024年1月1日
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