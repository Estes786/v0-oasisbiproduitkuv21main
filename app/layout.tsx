import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OASIS BI PRO - Pure Business Intelligence SaaS Platform",
  description: "Platform Business Intelligence berbasis AI untuk analisis data real-time. PURE ANALYTICS SAAS - Bukan payment facilitator atau payment aggregator.",
  keywords: ["business intelligence", "analytics", "data visualization", "AI insights", "Indonesia", "SaaS analytics"],
  authors: [{ name: "OASIS Analytics Team" }],
  openGraph: {
    title: "OASIS BI PRO - Business Intelligence Platform",
    description: "Pure Analytics SaaS untuk menganalisis data bisnis Anda",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <nav className="border-b bg-white sticky top-0 z-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">O</span>
                </div>
                <span className="text-2xl font-bold text-blue-600">OASIS BI PRO</span>
              </div>
              <div className="hidden md:flex space-x-8 items-center">
                <a href="/features" className="text-gray-700 hover:text-blue-600 transition">Platform</a>
                <a href="/how-it-works" className="text-gray-700 hover:text-blue-600 transition">Cara Kerja</a>
                <a href="/pricing" className="text-gray-700 hover:text-blue-600 transition">Harga</a>
                <a href="/legal/faq" className="text-gray-700 hover:text-blue-600 transition">FAQ</a>
                <a href="/dashboard" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition shadow-md">
                  Member Dashboard
                </a>
              </div>
            </div>
          </div>
        </nav>
        
        {children}
        
        <footer className="bg-gray-900 text-white mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">OASIS BI PRO</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Pure Business Intelligence SaaS Platform. 
                  Kami menyediakan analytics software, bukan payment processing services.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Produk</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="/features" className="hover:text-white transition">Platform Features</a></li>
                  <li><a href="/how-it-works" className="hover:text-white transition">Cara Kerja</a></li>
                  <li><a href="/pricing" className="hover:text-white transition">Harga</a></li>
                  <li><a href="/dashboard" className="hover:text-white transition">Member Dashboard</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Legal</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="/legal/privacy" className="hover:text-white transition">Privacy Policy</a></li>
                  <li><a href="/legal/terms" className="hover:text-white transition">Terms of Service</a></li>
                  <li><a href="/legal/refund" className="hover:text-white transition">Refund Policy</a></li>
                  <li><a href="/legal/faq" className="hover:text-white transition">FAQ</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Kontak</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>📧 elfaress2425@gmail.com</li>
                  <li>📱 +62 857-1265-8316</li>
                  <li><a href="/legal/contact" className="hover:text-white transition">Hubungi Kami</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p className="text-gray-400 text-sm">
                &copy; 2025 OASIS Analytics. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-2">
                Pure Business Intelligence Platform - NOT a payment processor
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
