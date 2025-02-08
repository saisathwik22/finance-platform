import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WalletWise",
  description: "Finance Platform ",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.className}`}>
        {/* header */}
        <Header />
        <main className='min-h-screen'>{children}</main>

        {/* Footer */}
        <footer className='bg-blue-50 py-12'>
          <div className='container mx-auto px-4 text-center text-gray-600'>
            <p>Made with passion</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
