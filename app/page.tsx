"use client";

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaHeart, FaFileAlt, FaHandshake, FaBed } from 'react-icons/fa';
import { BiBowlRice } from 'react-icons/bi';
import dynamic from 'next/dynamic';

const LeafletMap = dynamic(() => import('../components/LeafletMap'), {
  ssr: false,
  loading: () => <div className="w-full h-full min-h-[400px] bg-gray-100 animate-pulse rounded-3xl flex items-center justify-center text-gray-400">地図を読み込み中...</div>
});

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* ナビゲーションメニュー */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <h1 className="text-xl md:text-2xl font-bold text-green-800 tracking-tight font-zen-maru">
                やすらぎの家
              </h1>
            </div>

            {/* デスクトップメニュー */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('facilities')} className="text-gray-600 hover:text-orange-500 font-medium text-lg transition-colors">施設の空き状況</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-orange-500 font-medium text-lg transition-colors">ごあいさつ</button>
              <button onClick={() => scrollToSection('daily-flow')} className="text-gray-600 hover:text-orange-500 font-medium text-lg transition-colors">1日の流れ</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-orange-500 font-medium text-lg transition-colors">サービス</button>
              <button onClick={() => scrollToSection('flow')} className="text-gray-600 hover:text-orange-500 font-medium text-lg transition-colors">ご利用手続き</button>
              <button onClick={() => scrollToSection('facility-intro')} className="text-gray-600 hover:text-orange-500 font-medium text-lg transition-colors">施設紹介</button>
              <button onClick={() => scrollToSection('recruit')} className="text-gray-600 hover:text-orange-500 font-medium text-lg transition-colors">採用情報</button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-bold shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
              >
                お問い合わせ
              </button>
            </div>

            {/* モバイルメニューボタン */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-600 hover:text-orange-500 transition-colors p-2">
                {isMenuOpen ? (
                  <i className="ri-close-line text-3xl"></i>
                ) : (
                  <i className="ri-menu-line text-3xl"></i>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg animate-fade-in-down">
            <div className="px-6 py-4 space-y-4">
              <button onClick={() => scrollToSection('facilities')} className="block w-full text-left py-3 text-gray-600 font-medium text-lg border-b border-gray-50">施設の空き状況</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left py-3 text-gray-600 font-medium text-lg border-b border-gray-50">ごあいさつ</button>
              <button onClick={() => scrollToSection('daily-flow')} className="block w-full text-left py-3 text-gray-600 font-medium text-lg border-b border-gray-50">1日の流れ</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left py-3 text-gray-600 font-medium text-lg border-b border-gray-50">サービス</button>
              <button onClick={() => scrollToSection('flow')} className="block w-full text-left py-3 text-gray-600 font-medium text-lg border-b border-gray-50">ご利用手続き</button>
              <button onClick={() => scrollToSection('facility-intro')} className="block w-full text-left py-3 text-gray-600 font-medium text-lg border-b border-gray-50">施設紹介</button>
              <button onClick={() => scrollToSection('recruit')} className="block w-full text-left py-3 text-gray-600 font-medium text-lg border-b border-gray-50">採用情報</button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-center bg-orange-500 text-white py-3 rounded-xl font-bold shadow-md mt-4"
              >
                お問い合わせ
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-br from-orange-100 via-orange-50 to-yellow-50 py-16 px-6 md:py-24 mt-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/ヒーロー画像②.png")' }}
        ></div>
        <div className="absolute inset-0 bg-white/60"></div>
        <div className="relative max-w-7xl mx-auto z-10">
          <div className="text-center max-w-4xl mx-auto">
            <img
              alt="やすらぎの家 ロゴ"
              className="mx-auto mb-6 max-w-xl w-full h-auto drop-shadow-lg"
              src="/やすらぎの家ロゴ背景透明.png"
            />

            <div className="mb-8">
              {/* Text removed as per request */}
            </div>

            <p className="text-2xl md:text-3xl text-gray-700 mb-8 font-light leading-relaxed drop-shadow-sm">
              穏やかに、自分らしく暮らせる居場所
            </p>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              無料見学・ご相談はこちら
            </button>
          </div>
        </div>
      </section>

      {/* 施設の空き状況 */}
      <section id="facilities" className="py-16 px-6 bg-white/80 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-green-800 mb-12 font-zen-maru">施設の空き状況</h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Map Area - Left on PC, Top on Mobile */}
            <div className="w-full h-full min-h-[400px] rounded-3xl overflow-hidden shadow-md border border-gray-200">
              <LeafletMap />
            </div>

            {/* Cards List - Right on PC, Bottom on Mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <button
                onClick={() => scrollToSection('shikiji-detail')}
                className="bg-white p-7 rounded-3xl border border-gray-200 shadow-sm text-center flex flex-col hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className="space-y-2 flex-1 w-full">
                  <p className="text-xl font-bold text-green-800">やすらぎの家 敷地</p>
                  <p className="text-sm font-medium text-gray-600 mb-2">駿河区敷地2-26-2 左京ビル201</p>

                  <div className="bg-orange-500 p-4 rounded-2xl mt-3 shadow-md flex items-center justify-center">
                    <p className="text-white text-2xl font-bold">残り1室</p>
                  </div>

                  {/* Capacity Breakdown */}
                  <div className="mt-4 bg-gray-50 p-3 rounded-xl text-left text-sm space-y-2">
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <span className="font-bold text-gray-700">本体</span>
                      <span className="font-medium text-gray-600">定員5名 (<span className="text-red-600 font-bold">入居4名</span>)</span>
                    </div>
                    <div className="flex justify-between items-center pt-1">
                      <span className="font-bold text-gray-700">サテライト</span>
                      <span className="font-medium text-gray-600">定員2名 (入居2名)</span>
                    </div>
                  </div>

                  <div className="mt-4 text-green-600 font-medium">
                    <i className="ri-arrow-down-line text-lg"></i>
                  </div>
                </div>
              </button>

              <button
                onClick={() => scrollToSection('sanbancho-detail')}
                className="bg-white p-7 rounded-3xl border border-gray-200 shadow-sm text-center flex flex-col hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className="space-y-2 flex-1 w-full">
                  <p className="text-xl font-bold text-green-800">やすらぎの家 三番町</p>
                  <p className="text-sm font-medium text-gray-600 mb-2">葵区三番町23-6</p>

                  <div className="bg-gray-400 p-4 rounded-2xl mt-3 shadow-md flex items-center justify-center">
                    <p className="text-white text-2xl font-bold">満室</p>
                  </div>

                  {/* Capacity Breakdown */}
                  <div className="mt-4 bg-gray-50 p-3 rounded-xl text-left text-sm space-y-2">
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <span className="font-bold text-gray-700">本体</span>
                      <span className="font-medium text-gray-600">定員6名 (入居6名)</span>
                    </div>
                    <div className="flex justify-between items-center pt-1">
                      <span className="font-bold text-gray-700">サテライト</span>
                      <span className="font-medium text-gray-600">定員2名 (入居2名)</span>
                    </div>
                  </div>

                  <div className="mt-4 text-green-600 font-medium">
                    <i className="ri-arrow-down-line text-lg"></i>
                  </div>
                </div>
              </button>

              <button
                onClick={() => scrollToSection('petit-oga-detail')}
                className="bg-white p-7 rounded-3xl border border-gray-200 shadow-sm text-center flex flex-col hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className="space-y-2 flex-1 w-full">
                  <p className="text-xl font-bold text-green-800">やすらぎの家 小鹿</p>
                  <p className="text-sm font-medium text-gray-600 mb-2">駿河区小鹿2-39-1 プチ小鹿</p>

                  <div className="bg-orange-500 p-4 rounded-2xl mt-3 shadow-md flex items-center justify-center">
                    <p className="text-white text-2xl font-bold">残り4室</p>
                  </div>

                  {/* Capacity Breakdown */}
                  <div className="mt-4 bg-gray-50 p-3 rounded-xl text-left text-sm space-y-2">
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <span className="font-bold text-gray-700">本体</span>
                      <span className="font-medium text-gray-600">定員6名 (<span className="text-red-600 font-bold">入居4名</span>)</span>
                    </div>
                    <div className="flex justify-between items-center pt-1">
                      <span className="font-bold text-gray-700">サテライト</span>
                      <span className="font-medium text-gray-600">定員2名 (<span className="text-red-600 font-bold">入居0名</span>)</span>
                    </div>
                  </div>

                  <div className="mt-4 text-green-600 font-medium">
                    <i className="ri-arrow-down-line text-lg"></i>
                  </div>
                </div>
              </button>

              <button
                onClick={() => scrollToSection('nakada-detail')}
                className="bg-white p-7 rounded-3xl border border-gray-200 shadow-sm text-center flex flex-col hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className="space-y-2 flex-1 w-full">
                  <p className="text-xl font-bold text-green-800">やすらぎの家 中田</p>
                  <p className="text-sm font-medium text-gray-600 mb-2">駿河区中田1-9-21</p>

                  <div className="bg-blue-600 p-4 rounded-2xl mt-3 shadow-md flex items-center justify-center">
                    <p className="text-white text-lg font-bold">2026年4月OPEN予定！</p>
                  </div>

                  {/* Capacity Breakdown */}
                  <div className="mt-4 bg-gray-50 p-3 rounded-xl text-left text-sm space-y-2">
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <span className="font-bold text-gray-700">本体</span>
                      <span className="font-medium text-gray-600">定員5名</span>
                    </div>
                  </div>

                  <div className="mt-4 text-green-600 font-medium">
                    <i className="ri-arrow-down-line text-lg"></i>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ごあいさつ */}
      <section id="about" className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
              ごあいさつ
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            <div className="order-2 lg:order-1 lg:col-span-1 h-full">
              {/* 画像を配置するスペース（1/3） */}
              <div className="w-full h-full bg-transparent rounded-3xl border-2 border-dashed border-gray-300 flex items-center justify-center min-h-[300px]">
                <p className="text-gray-400 text-sm">画像を配置</p>
              </div>
            </div>
            <div className="order-1 lg:order-2 lg:col-span-2">
              <div className="bg-gradient-to-br from-orange-50 to-white p-8 md:p-10 rounded-3xl shadow-sm border border-orange-100 relative overflow-hidden">
                <div className="space-y-4 text-xl md:text-2xl leading-relaxed text-gray-700">
                  <p>
                    私たちライフリスト株式会社は、静岡市を中心に地域密着型不動産賃貸業を運営しております。
                  </p>
                  <p>
                    この度、静岡市駿河区敷地に障がいのある方のグループホーム「やすらぎの家」を開設する運びとなりました。「やすらぎの家」は障がいをお持ちで、将来は自立した生活を営みたいと希望される方が少人数での共同生活や地域社会との交流を通し、ここから新しいスタートを切るための障がい者支援施設として設立されたグループホーム（共同生活援助）です。利用者様はここで、当法人のスタッフと共同生活を営みながら、それぞれの個性を活かし安全・快適に暮らしていただく事ができます。
                  </p>
                  <p>
                    私たちは、「やすらぎの家」で暮らす全ての利用者様、お一人おひとりの生活を尊重し、ここに暮らしながら、それぞれの「自立」の実現に向かう夢を、心を込めて支援させていただきます。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1日の流れ */}
      <section id="daily-flow" className="py-12 px-6 relative overflow-hidden min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto relative">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
              1日の大まかな流れ
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>

          <div className="w-full grid lg:grid-cols-2 gap-8 items-stretch">
            {/* スケジュール */}
            <div className="w-full">
              <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-3xl p-6 shadow-lg border border-orange-200 h-full relative">
                <div className="space-y-2">
                  <div className="flex items-center gap-4">
                    <div className="text-green-800 font-bold text-2xl md:text-3xl flex-shrink-0 w-20">
                      6:30
                    </div>
                    <div className="text-green-800 font-semibold text-lg md:text-xl">
                      リビング・ダイニング開散　起床支援
                    </div>
                  </div>

                  <div className="flex items-center gap-4 relative">
                    <div className="text-green-800 font-bold text-2xl md:text-3xl flex-shrink-0 w-20">
                      7:30
                    </div>
                    <div className="text-green-800 font-semibold text-lg md:text-xl">
                      朝食（朝食提供）
                    </div>
                    {/* Breakfast Icon */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-24 h-24 bg-white/50 rounded-full flex items-center justify-center shadow-sm hidden md:flex">
                      <BiBowlRice className="text-5xl text-orange-500" />
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-green-800 font-bold text-2xl md:text-3xl flex-shrink-0 w-20">
                      9:00
                    </div>
                    <div className="text-green-800 font-semibold text-lg md:text-xl">
                      出発（お見送り）
                    </div>
                  </div>

                  <div className="flex items-center justify-center py-6">
                    <div className="text-green-800 font-semibold text-lg md:text-xl">
                      ～日中通所先～
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-green-800 font-bold text-2xl md:text-3xl flex-shrink-0 w-20">
                      16:00
                    </div>
                    <div className="text-green-800 font-semibold text-lg md:text-xl">
                      帰宅
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-green-800 font-bold text-2xl md:text-3xl flex-shrink-0 w-20">
                      18:00
                    </div>
                    <div className="text-green-800 font-semibold text-lg md:text-xl">
                      夕食（夕食提供）
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-green-800 font-bold text-2xl md:text-3xl flex-shrink-0 w-20">
                      19:00
                    </div>
                    <div className="text-green-800 font-semibold text-lg md:text-xl">
                      入浴（順番制）　服薬・相談支援他
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-green-800 font-bold text-2xl md:text-3xl flex-shrink-0 w-20">
                      21:00
                    </div>
                    <div className="text-green-800 font-semibold text-lg md:text-xl">
                      リビング・ダイニング閉所
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-green-800 font-bold text-2xl md:text-3xl flex-shrink-0 w-20">
                      22:00
                    </div>
                    <div className="text-green-800 font-semibold text-lg md:text-xl">
                      就寝　消灯
                    </div>
                  </div>
                </div>

                {/* イラスト配置エリア */}
                <div className="absolute bottom-6 right-6 w-24 h-24 bg-white/50 rounded-full flex items-center justify-center shadow-sm">
                  <FaBed className="text-5xl text-orange-500" />
                </div>
              </div>
            </div>

            {/* 画像エリア - 2つの画像を配置（ジグザグ・高さ合わせ） */}
            <div className="w-full flex flex-col justify-between h-full py-2">
              {/* 1 (Left) */}
              <div className="w-3/4 self-start aspect-video bg-transparent rounded-3xl border-2 border-dashed border-gray-300 flex items-center justify-center">
                <p className="text-gray-400 text-sm px-4 text-center">世話人と利用者の会話の様子1</p>
              </div>

              {/* 2 (Right) */}
              <div className="w-3/4 self-end aspect-video bg-transparent rounded-3xl border-2 border-dashed border-gray-300 flex items-center justify-center">
                <p className="text-gray-400 text-sm px-4 text-center">食事の様子</p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-br from-orange-100 to-orange-50 p-6 rounded-2xl border border-orange-200 shadow-sm">
            <p className="text-gray-700 text-center leading-relaxed text-lg md:text-xl font-medium">
              ※上記は一般的な流れです。利用者様の個別のニーズや日中活動の時間に合わせて柔軟に対応いたします。
            </p>
          </div>
        </div>
      </section>

      {/* ご利用いただける主なサービス */}
      <section id="services" className="py-12 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
              ご利用いただける主なサービス
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          </div>

          {/* サービスカテゴリ */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* カード1: 生活・健康サポート */}
            <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-3xl p-6 border border-orange-200 shadow-lg">
              <h3 className="text-2xl font-bold text-green-800 mb-4 text-center">
                生活・健康サポート
              </h3>

              {/* イラスト配置エリア */}
              {/* Icon Area */}
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center shadow-sm">
                  <FaHeart className="text-5xl text-orange-500" />
                </div>
              </div>

              {/* サービスリスト */}
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 text-xl mt-0.5">•</span>
                  <span className="text-green-800 font-semibold text-lg">健康管理・金銭管理</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 text-xl mt-0.5">•</span>
                  <span className="text-green-800 font-semibold text-lg">服薬管理</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 text-xl mt-0.5">•</span>
                  <span className="text-green-800 font-semibold text-lg">食事の提供（朝・夕）</span>
                </li>
              </ul>
            </div>

            {/* カード2: 相談・手続きサポート */}
            <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-3xl p-6 border border-orange-200 shadow-lg">
              <h3 className="text-2xl font-bold text-green-800 mb-4 text-center">
                相談・手続きサポート
              </h3>

              {/* イラスト配置エリア */}
              {/* Icon Area */}
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center shadow-sm">
                  <FaFileAlt className="text-5xl text-orange-500" />
                </div>
              </div>

              {/* サービスリスト */}
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 text-xl mt-0.5">•</span>
                  <span className="text-green-800 font-semibold text-lg">各種相談</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 text-xl mt-0.5">•</span>
                  <span className="text-green-800 font-semibold text-lg">行政関係他各種手続き支援</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 text-xl mt-0.5">•</span>
                  <span className="text-green-800 font-semibold text-lg">日中活動に伴う関係機関との連絡調整支援</span>
                </li>
              </ul>
            </div>

            {/* カード3: 安心・交流 */}
            <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-3xl p-6 border border-orange-200 shadow-lg">
              <h3 className="text-2xl font-bold text-green-800 mb-4 text-center">
                安心・交流
              </h3>

              {/* イラスト配置エリア */}
              {/* Icon Area */}
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center shadow-sm">
                  <FaHandshake className="text-5xl text-orange-500" />
                </div>
              </div>

              {/* サービスリスト */}
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 text-xl mt-0.5">•</span>
                  <span className="text-green-800 font-semibold text-lg">緊急時の対応・地域交流支援・ご家族との連絡</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ご利用の流れ */}
      <section id="flow" className="py-8 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-3">ご利用手続き（例）</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>

          <div className="flex flex-col gap-4 mb-6 max-w-fit mx-auto">
            {/* 1行目：1〜5（左から右） */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-2">
              {/* 1 */}
              <div className="w-full md:w-auto bg-gradient-to-br from-orange-100 to-orange-50 px-3 py-3 rounded-xl shadow-sm border border-orange-300 hover:shadow-md transition-shadow min-h-[80px] flex items-center justify-center">
                <div className="text-center w-full">
                  <div className="text-base font-bold text-green-800">ご見学</div>
                </div>
              </div>

              <i className="ri-arrow-down-line md:hidden text-2xl text-orange-600"></i>
              <i className="hidden md:block ri-arrow-right-line text-2xl text-orange-600"></i>

              {/* 2 */}
              <div className="w-full md:w-auto bg-gradient-to-br from-orange-100 to-orange-50 px-3 py-3 rounded-xl shadow-sm border border-orange-300 hover:shadow-md transition-shadow min-h-[80px] flex items-center justify-center">
                <div className="text-center w-full">
                  <div className="text-base font-bold text-green-800">利用申し込み</div>
                </div>
              </div>

              <i className="ri-arrow-down-line md:hidden text-2xl text-orange-600"></i>
              <i className="hidden md:block ri-arrow-right-line text-2xl text-orange-600"></i>

              {/* 3 */}
              <div className="w-full md:w-auto bg-gradient-to-br from-orange-100 to-orange-50 px-3 py-3 rounded-xl shadow-sm border border-orange-300 hover:shadow-md transition-shadow min-h-[80px] flex items-center justify-center">
                <div className="text-center w-full">
                  <div className="text-base font-bold text-green-800">面談</div>
                </div>
              </div>

              <i className="ri-arrow-down-line md:hidden text-2xl text-orange-600"></i>
              <i className="hidden md:block ri-arrow-right-line text-2xl text-orange-600"></i>

              {/* 4 */}
              <div className="w-full md:w-auto bg-gradient-to-br from-orange-100 to-orange-50 px-3 py-3 rounded-xl shadow-sm border border-orange-300 hover:shadow-md transition-shadow min-h-[80px] flex items-center justify-center">
                <div className="text-center w-full">
                  <div className="text-base font-bold text-green-800">体験入居</div>
                </div>
              </div>

              <i className="ri-arrow-down-line md:hidden text-2xl text-orange-600"></i>
              <i className="hidden md:block ri-arrow-right-line text-2xl text-orange-600"></i>

              {/* 5 */}
              <div className="w-full md:w-auto bg-gradient-to-br from-orange-100 to-orange-50 px-3 py-3 rounded-xl shadow-sm border border-orange-300 hover:shadow-md transition-shadow min-h-[80px] flex items-center justify-center">
                <div className="text-center w-full">
                  <div className="text-base font-bold text-green-800">ご入居審査</div>
                </div>
              </div>
            </div>

            {/* 行間の矢印（デスクトップ：右端、モバイル：中央） */}
            <div className="flex justify-center md:justify-end md:pr-8">
              <i className="ri-arrow-down-line text-2xl text-orange-600"></i>
            </div>

            {/* 2行目：6〜10（右から左） */}
            <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-2">
              {/* 6 */}
              <div className="w-full md:w-auto bg-gradient-to-br from-orange-100 to-orange-50 px-3 py-3 rounded-xl shadow-sm border border-orange-300 hover:shadow-md transition-shadow min-h-[80px] flex items-center justify-center">
                <div className="text-center w-full">
                  <div className="text-base font-bold text-green-800">受給者証の申請</div>
                </div>
              </div>

              <i className="ri-arrow-down-line md:hidden text-2xl text-orange-600"></i>
              <i className="hidden md:block ri-arrow-left-line text-2xl text-orange-600"></i>

              {/* 7 */}
              <div className="w-full md:w-auto bg-gradient-to-br from-orange-100 to-orange-50 px-3 py-3 rounded-xl shadow-sm border border-orange-300 hover:shadow-md transition-shadow min-h-[80px] flex items-center justify-center">
                <div className="text-center w-full">
                  <div className="text-base font-bold text-green-800">支給決定</div>
                </div>
              </div>

              <i className="ri-arrow-down-line md:hidden text-2xl text-orange-600"></i>
              <i className="hidden md:block ri-arrow-left-line text-2xl text-orange-600"></i>

              {/* 8 */}
              <div className="w-full md:w-auto bg-gradient-to-br from-orange-100 to-orange-50 px-3 py-3 rounded-xl shadow-sm border border-orange-300 hover:shadow-md transition-shadow min-h-[80px] flex items-center justify-center">
                <div className="text-center w-full">
                  <div className="text-base font-bold text-green-800">利用契約</div>
                </div>
              </div>

              <i className="ri-arrow-down-line md:hidden text-2xl text-orange-600"></i>
              <i className="hidden md:block ri-arrow-left-line text-2xl text-orange-600"></i>

              {/* 9 */}
              <div className="w-full md:w-auto bg-gradient-to-br from-orange-100 to-orange-50 px-3 py-3 rounded-xl shadow-sm border border-orange-300 hover:shadow-md transition-shadow min-h-[80px] flex items-center justify-center">
                <div className="text-center w-full">
                  <div className="text-base font-bold text-green-800">入居準備</div>
                </div>
              </div>

              <i className="ri-arrow-down-line md:hidden text-2xl text-orange-600"></i>
              <i className="hidden md:block ri-arrow-left-line text-2xl text-orange-600"></i>

              {/* 10 */}
              <div className="w-full md:w-auto bg-gradient-to-br from-orange-500 to-orange-600 px-3 py-3 rounded-xl shadow-sm border border-orange-600 hover:shadow-md transition-shadow min-h-[80px] flex items-center justify-center">
                <div className="text-center w-full">
                  <div className="text-base font-bold text-white">ご入居</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-orange-100 to-orange-50 p-7 rounded-2xl border border-orange-200 shadow-sm">
            <p className="text-gray-700 text-center leading-relaxed text-xl font-medium">※上記は一般的な流れです。詳細については、お気軽にお問い合わせください。</p>
          </div>
        </div>
      </section>



      {/* 施設紹介ヘッダー */}
      <section id="facility-intro" className="pt-24 pb-8 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            施設紹介
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>
      </section>

      {/* 左京ビル施設詳細 */}
      <section id="shikiji-detail" className="py-12 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-green-800">やすらぎの家 敷地</h2>
            <div className="bg-orange-500 flex items-center justify-center px-6 py-3 rounded-full shadow-md">
              <p className="text-white text-2xl font-bold">残り1室</p>
            </div>
          </div>

          {/* 統合されたブロック - 施設概要とアクセスをぎゅっと詰める */}
          <div className="bg-white p-4 md:p-6 rounded-2xl border border-orange-100 shadow-sm mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              {/* 外観写真 */}
              <div className="relative min-h-[200px] md:min-h-0">
                <img
                  src="https://readdy.ai/api/search-image?query=Modern%20apartment%20building%20housing%20group%20home%20facility%2C%20multi-story%20residential%20complex%20with%20accessible%20entrance%2C%20clean%20contemporary%20architecture%2C%20urban%20setting%20with%20parking%20area%20and%20landscaping&width=600&height=400&seq=shikiji-exterior-main&orientation=landscape"
                  alt="敷地施設 外観"
                  className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-lg"
                />
              </div>

              {/* 施設概要 & 主な設備 (2カラムレイアウト) */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* 左側: 施設概要テーブル */}
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-green-800 mb-2 text-center md:text-left">施設概要</h3>
                  <table className="w-full text-gray-700 text-base mb-4">
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 font-semibold w-1/3">定員</td>
                        <td className="py-1">5名</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 font-semibold">居室数</td>
                        <td className="py-1">6畳5室</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 font-semibold">建物構造</td>
                        <td className="py-1">木造2階建 2階</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 font-semibold">開設年月</td>
                        <td className="py-1">2022年1月</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* 主な設備 */}
                <div className="bg-stone-50 rounded-xl p-4 h-full">
                  <h4 className="text-sm font-bold text-green-800 mb-2 text-center">主な設備</h4>
                  <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                    <li>全室個室（各個室）</li>
                    <li>各居室にエアコン、ベッド</li>
                    <li>布団一式、カーテン、照明完備</li>
                    <li>トイレ、浴室、洗面、洗濯機</li>
                    <li>冷蔵庫、WiFi完備（共有）</li>
                    <li>二重窓、防音壁で防音効果を強化</li>
                  </ul>
                </div>
              </div>

              {/* 内観写真 */}
              <div className="relative min-h-[200px] md:min-h-0">
                <img
                  src="https://readdy.ai/api/search-image?query=Modern%20group%20home%20living%20room%20with%20comfortable%20furniture%2C%20accessible%20design%2C%20bright%20natural%20lighting%2C%20communal%20seating%20area%2C%20clean%20and%20welcoming%20interior%20space%20for%20residents%20with%20disabilities&width=600&height=400&seq=shikiji-interior-main&orientation=landscape"
                  alt="敷地施設 内観"
                  className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-lg"
                />
              </div>

              {/* 利用料金 */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-green-800 mb-2 text-center md:text-left">利用料金</h3>
                <table className="w-full text-gray-700 text-base">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-1 font-semibold">月額利用料</td>
                      <td className="py-1 text-right font-bold">68,000円</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-1 font-semibold pl-4 text-sm">家賃</td>
                      <td className="py-1 text-right text-sm">28,000円</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-1 font-semibold pl-4 text-sm">食費</td>
                      <td className="py-1 text-right text-sm">25,000円</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-1 font-semibold pl-4 text-sm">水道光熱費</td>
                      <td className="py-1 text-right text-sm">12,000円</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-1 font-semibold pl-4 text-sm">日用品費</td>
                      <td className="py-1 text-right text-sm">3,000円</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-xs text-gray-500 mt-2">
                  国の家賃補助利用で上記金額より10,000円/月引かれます。<br />
                  ※体験利用1泊2食/2,500円（日数、回数はご相談ください）<br />
                  ※各市町村に助成制度がありますので、各自治体にご確認ください。
                </p>
              </div>
            </div>

            {/* アクセス情報を施設概要ブロック内に追加 */}
            <div className="mt-3 pt-3 border-t border-orange-200">
              <h3 className="text-sm md:text-base font-bold text-green-800 mb-2 text-center">アクセス</h3>
              <div className="grid lg:grid-cols-2 gap-3">
                <div className="space-y-2 text-gray-700 text-base">
                  <p><strong>住所：</strong>静岡市駿河区敷地2-26-2 左京ビル201</p>
                  <p><strong>最寄り駅：</strong>JR東海道線「静岡駅」より徒歩15分</p>
                  <p><strong>バス停：</strong>「敷地」バス停より徒歩3分</p>
                  <p><strong>駐車場：</strong>あり（4台分）</p>
                  <p><strong>周辺環境：</strong>住宅街、商業施設・医療機関が近隣</p>
                </div>
                <div className="bg-gray-100 rounded-xl overflow-hidden">
                  <iframe
                    src="https://maps.google.com/maps?q=静岡市駿河区敷地2-26-2&output=embed"
                    width="100%"
                    height="120"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="敷地施設の地図"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 三番町施設詳細 */}
      {/* 三番町施設詳細 */}
      <section id="sanbancho-detail" className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-green-800">やすらぎの家 三番町</h2>
            <div className="bg-gray-400 flex items-center justify-center px-6 py-3 rounded-full shadow-md">
              <p className="text-white text-2xl font-bold">満室</p>
            </div>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-2xl border border-orange-100 shadow-sm mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              {/* 外観写真 */}
              <div className="relative min-h-[200px] md:min-h-0">
                <img
                  src="https://readdy.ai/api/search-image?query=Urban%20group%20home%20building%20in%20city%20center%2C%20modern%20multi-story%20residential%20facility%2C%20accessible%20entrance%20with%20ramp%2C%20clean%20contemporary%20design%2C%20well-maintained%20urban%20setting%20with%20street%20access&width=600&height=400&seq=sanbancho-exterior-main&orientation=landscape"
                  alt="三番町施設 外観"
                  className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-lg"
                />
              </div>

              {/* 施設概要 & 主な設備 (2カラムレイアウト) */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* 左側: 施設概要テーブル */}
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-green-800 mb-2 text-center md:text-left">施設概要</h3>
                  <table className="w-full text-gray-700 text-base mb-4">
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 font-semibold w-1/3">定員</td>
                        <td className="py-1">6名</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 font-semibold">居室数</td>
                        <td className="py-1">6畳6室</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 font-semibold">建物構造</td>
                        <td className="py-1">鉄筋コンクリート造3階建て</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 font-semibold">開設年月</td>
                        <td className="py-1">2022年10月</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* 主な設備 */}
                <div className="bg-stone-50 rounded-xl p-4 h-full">
                  <h4 className="text-sm font-bold text-green-800 mb-2 text-center">主な設備</h4>
                  <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                    <li>全室個室（各個室）</li>
                    <li>各居室にエアコン、ベッド</li>
                    <li>布団一式、カーテン、照明完備</li>
                    <li>トイレ、浴室、洗面、洗濯機</li>
                    <li>冷蔵庫、WiFi完備（共有）</li>
                    <li>二重窓、防音壁で防音効果を強化</li>
                  </ul>
                </div>
              </div>

              {/* 内観写真 */}
              <div className="relative min-h-[200px] md:min-h-0">
                <img
                  src="https://readdy.ai/api/search-image?query=Spacious%20group%20home%20common%20area%20with%20comfortable%20seating%2C%20modern%20interior%20design%2C%20accessible%20layout%2C%20natural%20lighting%2C%20welcoming%20community%20space%20for%20residents%20and%20staff%20interaction&width=600&height=400&seq=sanbancho-interior-main&orientation=landscape"
                  alt="三番町施設 内観"
                  className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-lg"
                />
              </div>

              {/* 利用料金 */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-green-800 mb-2 text-center md:text-left">利用料金</h3>
                <table className="w-full text-gray-700 text-base">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-1 font-semibold">月額利用料</td>
                      <td className="py-1 text-right font-bold">68,000円</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-1">家賃</td>
                      <td className="py-1 text-right">28,000円</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-1">食費</td>
                      <td className="py-1 text-right">25,000円</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-1">水道光熱費</td>
                      <td className="py-1 text-right">12,000円</td>
                    </tr>
                    <tr>
                      <td className="py-1">日用品費</td>
                      <td className="py-1 text-right">3,000円</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* アクセス */}
            <div className="mt-3 pt-3 border-t border-orange-200">
              <h3 className="text-sm md:text-base font-bold text-green-800 mb-2 text-center">アクセス</h3>
              <div className="grid lg:grid-cols-2 gap-3">
                <div className="space-y-2 text-gray-700 text-base">
                  <p><strong>住所：</strong>静岡市葵区三番町23-6</p>
                  <p><strong>最寄り駅：</strong>JR東海道線「静岡駅」より徒歩12分</p>
                  <p><strong>バス停：</strong>「三番町」バス停より徒歩2分</p>
                  <p><strong>駐車場：</strong>あり（2台分）</p>
                  <p><strong>周辺環境：</strong>市街地中心部、商業施設・医療機関が充実</p>
                </div>
                <div className="bg-gray-100 rounded-xl overflow-hidden">
                  <iframe
                    src="https://maps.google.com/maps?q=静岡市葵区三番町23-6&output=embed"
                    width="100%"
                    height="120"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="三番町施設の地図"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* プチ小鹿施設詳細 */}
      {/* プチ小鹿施設詳細 */}
      <section id="petit-oga-detail" className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-green-800">やすらぎの家 小鹿</h2>
            <div className="bg-orange-500 flex items-center justify-center px-6 py-3 rounded-full shadow-md">
              <p className="text-white text-2xl font-bold">残り4室</p>
            </div>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-2xl border border-orange-100 shadow-sm mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              {/* 外観写真 */}
              <div className="relative min-h-[200px] md:min-h-0">
                <img
                  src="https://readdy.ai/api/search-image?query=Modern%20Japanese%20group%20home%20exterior%20building%20facade%2C%20two-story%20residential%20building%20with%20accessible%20entrance%2C%20clean%20contemporary%20architecture%2C%20well-maintained%20garden%20and%20parking%20area%2C%20welcoming%20community%20facility%20design&width=600&height=400&seq=petit-oga-exterior-main&orientation=landscape"
                  alt="プチ小鹿 外観"
                  className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-lg"
                />
              </div>

              {/* 施設概要 & 主な設備 (2カラムレイアウト) */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* 左側: 施設概要テーブル */}
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-green-800 mb-2 text-center md:text-left">施設概要</h3>
                  <table className="w-full text-gray-700 text-base mb-4">
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 font-semibold w-1/3">定員</td>
                        <td className="py-1">6名</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 font-semibold">居室数</td>
                        <td className="py-1">6畳6室</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 font-semibold">建物構造</td>
                        <td className="py-1">木造2階建て</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 font-semibold">開設年月</td>
                        <td className="py-1">2023年4月</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* 主な設備 */}
                <div className="bg-stone-50 rounded-xl p-4 h-full">
                  <h4 className="text-sm font-bold text-green-800 mb-2 text-center">主な設備</h4>
                  <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                    <li>全室個室（各個室）</li>
                    <li>各居室にエアコン、ベッド</li>
                    <li>布団一式、カーテン、照明完備</li>
                    <li>トイレ、浴室、洗面、洗濯機</li>
                    <li>冷蔵庫、WiFi完備（共有）</li>
                    <li>二重窓、防音壁で防音効果を強化</li>
                  </ul>
                </div>
              </div>

              {/* 内観写真 */}
              <div className="relative min-h-[200px] md:min-h-0">
                <img
                  src="https://readdy.ai/api/search-image?query=Comfortable%20group%20home%20living%20room%20with%20modern%20furniture%2C%20accessible%20design%2C%20warm%20lighting%2C%20communal%20seating%20area%2C%20clean%20and%20welcoming%20interior%20space%20for%20residents%20with%20disabilities&width=600&height=400&seq=petit-oga-interior-main&orientation=landscape"
                  alt="プチ小鹿 内観"
                  className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-lg"
                />
              </div>

              {/* 利用料金 */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-green-800 mb-2 text-center md:text-left">利用料金</h3>
                <table className="w-full text-gray-700 text-base">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-1 font-semibold">月額利用料</td>
                      <td className="py-1 text-right font-bold">68,000円</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-1">家賃</td>
                      <td className="py-1 text-right">28,000円</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-1">食費</td>
                      <td className="py-1 text-right">25,000円</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-1">水道光熱費</td>
                      <td className="py-1 text-right">12,000円</td>
                    </tr>
                    <tr>
                      <td className="py-1">日用品費</td>
                      <td className="py-1 text-right">3,000円</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* アクセス */}
            <div className="mt-3 pt-3 border-t border-orange-200">
              <h3 className="text-sm md:text-base font-bold text-green-800 mb-2 text-center">アクセス</h3>
              <div className="grid lg:grid-cols-2 gap-3">
                <div className="space-y-2 text-gray-700 text-base">
                  <p><strong>住所：</strong>静岡市駿河区小鹿886　プチ小鹿</p>
                  <p><strong>最寄り駅：</strong>JR東海道線「静岡駅」よりバス15分</p>
                  <p><strong>バス停：</strong>「小鹿」バス停より徒歩3分</p>
                  <p><strong>駐車場：</strong>あり（3台分）</p>
                  <p><strong>周辺環境：</strong>住宅街、自然豊かな環境</p>
                </div>
                <div className="bg-gray-100 rounded-xl overflow-hidden">
                  <iframe
                    src="https://maps.google.com/maps?q=静岡市駿河区小鹿886　プチ小鹿&output=embed"
                    width="100%"
                    height="120"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="プチ小鹿の地図"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 中田施設詳細 */}
      <section id="nakada-detail" className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-green-800">やすらぎの家 中田</h2>
            <div className="bg-blue-600 flex items-center justify-center px-6 py-3 rounded-full shadow-md">
              <p className="text-white text-xl font-bold">2026年4月OPEN予定！</p>
            </div>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-2xl border border-orange-100 shadow-sm mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              {/* 外観写真 (Placeholder) */}
              <div className="relative min-h-[200px] md:min-h-0 bg-gray-200 rounded-xl flex items-center justify-center">
                <div className="text-center p-4">
                  <i className="ri-building-line text-4xl text-gray-400 mb-2 block"></i>
                  <span className="text-gray-500 font-bold">外観パース準備中</span>
                </div>
              </div>

              {/* 施設概要 & 主な設備 (2カラムレイアウト) */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* 左側: 施設概要テーブル */}
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-green-800 mb-2 text-center md:text-left">施設概要</h3>
                  <table className="w-full text-gray-700 text-base mb-4">
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 font-semibold w-1/3">定員</td>
                        <td className="py-1">5名</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 font-semibold">開設年月</td>
                        <td className="py-1">2026年4月予定</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* 主な設備 */}
                <div className="bg-stone-50 rounded-xl p-4 h-full">
                  <h4 className="text-sm font-bold text-green-800 mb-2 text-center">主な設備</h4>
                  <p className="text-sm text-gray-500 text-center">準備中</p>
                </div>
              </div>

              {/* 内観写真 (Placeholder) */}
              <div className="relative min-h-[200px] md:min-h-0 bg-gray-200 rounded-xl flex items-center justify-center">
                <div className="text-center p-4">
                  <i className="ri-home-smile-line text-4xl text-gray-400 mb-2 block"></i>
                  <span className="text-gray-500 font-bold">内観イメージ準備中</span>
                </div>
              </div>

              {/* 利用料金 */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-green-800 mb-2 text-center md:text-left">利用料金</h3>
                <p className="text-base text-gray-700 text-center md:text-left py-4">詳細が決まり次第、掲載いたします。</p>
              </div>
            </div>

            {/* アクセス */}
            <div className="mt-3 pt-3 border-t border-orange-200">
              <h3 className="text-sm md:text-base font-bold text-green-800 mb-2 text-center">アクセス</h3>
              <div className="grid lg:grid-cols-2 gap-3">
                <div className="space-y-2 text-gray-700 text-base">
                  <p><strong>住所：</strong>静岡市駿河区中田1-9-21</p>
                  <p><strong>最寄り駅：</strong>JR東海道線「静岡駅」より徒歩13分</p>
                  <p><strong>バス停：</strong>「中田三丁目」バス停より徒歩3分</p>
                  <p><strong>周辺環境：</strong>住宅街、公園近く</p>
                </div>
                <div className="bg-gray-100 rounded-xl overflow-hidden">
                  <iframe
                    src="https://maps.google.com/maps?q=静岡市駿河区中田1-9-21&output=embed"
                    width="100%"
                    height="120"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="中田施設の地図"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 採用情報 */}
      <section id="recruit" className="py-16 px-6 relative overflow-hidden bg-orange-50">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
              採用情報
            </h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto"></div>
          </div>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            やすらぎの家では、一緒に働く仲間を募集しています。<br />
            詳細な求人情報は、以下の採用サイト（Airワーク）をご覧ください。
          </p>

          <a
            href="https://airwork.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-full text-lg font-bold shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
          >
            採用情報を見る（Airワーク）
            <i className="ri-external-link-line"></i>
          </a>
        </div>
      </section>

      {/* お問い合わせ */}
      <section id="contact" className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
              お問い合わせ
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>
          <div className="bg-gradient-to-br from-white to-orange-50 p-12 rounded-3xl border border-orange-200 shadow-lg text-center">
            <div className="mb-12">
              <h3 className="text-4xl font-semibold text-green-800 mb-8">障がい者グループホーム やすらぎの家</h3>
              <div className="space-y-4 text-gray-700 text-xl">
                <p>〒422-8036</p>
                <p>静岡県静岡市駿河区敷地2-26-2 左京ビル201</p>
                <p className="text-3xl font-bold text-green-800">TEL：054-260-4730</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-green-800 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-6">障がい者グループホーム やすらぎの家</h3>
            <p className="text-2xl text-green-200">穏やかに、自分らしく暮らせる居場所</p>
          </div>

          <div className="border-t border-green-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
                <Link href="/privacy" className="text-green-300 hover:text-white transition-colors text-lg">プライバシーポリシー</Link>
                <Link href="/terms" className="text-green-300 hover:text-white transition-colors text-lg">運営会社</Link>
                <a href="https://readdy.ai/?origin=logo" target="_blank" rel="noopener noreferrer" className="text-green-300 hover:text-white transition-colors text-lg">Made with Readdy</a>
              </div>
              <p className="text-green-300 text-lg">© 2024 やすらぎの家. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* スマホ版固定ボタン */}
      <div className="md:hidden fixed bottom-8 right-6 z-50">
        <button
          onClick={() => scrollToSection('contact')}
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg transition-all duration-300 whitespace-nowrap cursor-pointer hover:shadow-xl transform hover:-translate-y-1"
        >
          無料見学・ご相談はこちら
        </button>
      </div>
    </div>
  );
}
