'use client'

import Link from 'next/link'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export default function HomePage() {
  return (
    <div className="space-y-8">
      {/* 欢迎横幅 */}
      <div className="bg-white p-8 rounded-lg text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          开启您的烹饪之旅
        </h1>
        <p className="text-xl text-gray-600">发现美食，创造美味</p>
      </div>

      {/* 搜索功能 */}
      <div className="w-full max-w-2xl mx-auto">
        <div className="join w-full">
          <input
            type="text"
            placeholder="搜索菜谱..."
            className="input input-bordered join-item w-full"
          />
          <button className="btn btn-primary join-item">搜索</button>
        </div>
      </div>

      {/* 轮播图片 */}
      <div className="w-full max-w-3xl mx-auto">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={3000}
          className="border-4 border-primary rounded-xl overflow-hidden shadow-lg"
        >
          <div>
            <img src="\img\下载 (1).jpg" alt="美食展示1" className="object-cover h-64" />
          </div>
          <div>
            <img src="\img\下载.jpg" alt="美食展示2" className="object-cover h-64" />
          </div>
          <div>
            <img src="\img\OIP-C.jpg" alt="美食展示3" className="object-cover h-64" />
          </div>
        </Carousel>
      </div>

      {/* 特色功能展示 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <Link href="/dashboard?tab=recommend">
          <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
            <div className="card-body items-center text-center">
              <div className="text-4xl mb-4">🍳</div>
              <h2 className="card-title">今日推荐</h2>
              <p>精选每日特色菜谱</p>
            </div>
          </div>
        </Link>

        <Link href="/dashboard?tab=festival">
          <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
            <div className="card-body items-center text-center">
              <div className="text-4xl mb-4">🎉</div>
              <h2 className="card-title">节日特辑</h2>
              <p>节日特别菜谱合集</p>
            </div>
          </div>
        </Link>

        <Link href="/dashboard?tab=consult">
          <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
            <div className="card-body items-center text-center">
              <div className="text-4xl mb-4">💬</div>
              <h2 className="card-title">饮食咨询</h2>
              <p>专业营养师在线解答</p>
            </div>
          </div>
        </Link>
      </div>

      {/* 用户统计 */}
      <div className="stats shadow max-w-4xl mx-auto">
        <div className="stat">
          <div className="stat-title">总用户数</div>
          <div className="stat-value">12,345</div>
        </div>
        <div className="stat">
          <div className="stat-title">总菜谱数</div>
          <div className="stat-value">5,678</div>
        </div>
        <div className="stat">
          <div className="stat-title">今日访问量</div>
          <div className="stat-value">1,234</div>
        </div>
      </div>
    </div>
  )
}
