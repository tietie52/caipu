import 'reflect-metadata';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '智能菜谱',
  description: '基于AI的智能菜谱推荐系统',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className="bg-orange-50">
        <nav className="p-4 bg-base-100">
          <Link href="/login" className="btn btn-ghost">
            登录/注册
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}