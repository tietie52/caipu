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
        {/* 饺子装饰 */}
        <div className="absolute top-8 right-8 opacity-60 z-20">
          <img 
            src="/img/饺子.jpg"
            className="w-40 h-40 object-cover rounded-full shadow-xl animate-spin-slow"
            alt="dumpling"
          />
        </div>

        
        {children}
      </body>
    </html>
  );
}

{/* 删除以下装饰元素 */}
{/*
<div className="fixed left-0 bottom-0 -z-10">
  <img 
    src="/img/xshlogo01.png"
    className="w-32 opacity-20 animate-spin-slow"
    alt="decorative"
  />
</div>
*/}