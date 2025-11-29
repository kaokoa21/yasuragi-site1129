import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico, Zen_Maru_Gothic, M_PLUS_Rounded_1c } from "next/font/google";
import "./globals.css";

const mPlusRounded = M_PLUS_Rounded_1c({
  weight: ['300', '400', '500', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-m-plus-rounded',
})

const zenMaruGothic = Zen_Maru_Gothic({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-zen-maru-gothic',
})

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "障がい者グループホーム やすらぎの家｜静岡市駿河区",
  description: "静岡市駿河区にある障がい者グループホーム「やすらぎの家」。穏やかに、自分らしく暮らせる居場所を提供いたします。定員5名の少人数制で、きめ細やかなサポートを行っています。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning={true}>
      <body
        className={`${mPlusRounded.variable} ${zenMaruGothic.variable} ${geistSans.variable} ${geistMono.variable} ${pacifico.variable} font-m-plus-rounded antialiased`}
      >
        {children}
      </body>
    </html>
  );
}