'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function HomePage() {
  // 轮播状态管理
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    { src: "/img/下载 (1).jpg", alt: "美食展示1" },
    { src: "/img/下载.jpg", alt: "美食展示2" },
    { src: "/img/OIP-C.jpg", alt: "美食展示3" }
  ]

  // 自动轮播效果
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <div className="space-y-8 p-4">
      {/* 欢迎横幅 */}
      <div className="bg-white p-8 rounded-lg text-center shadow-md">
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

      {/* 自定义轮播组件 */}
      <div className="w-full max-w-3xl mx-auto relative overflow-hidden border-4 border-primary rounded-xl shadow-lg">
        {/* 轮播图片容器 */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="min-w-full">
              <img
                src={slide.src}
                alt={slide.alt}
                className="object-cover h-64 w-full"
              />
            </div>
          ))}
        </div>

        {/* 轮播指示器 */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${currentSlide === index ? 'bg-white' : 'bg-white/50'
                }`}
              aria-label={`切换到第 ${index + 1} 张图片`}
            />
          ))}
        </div>

        {/* 左右箭头控制 */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
          aria-label="上一张"
        >
          ❮
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
          aria-label="下一张"
        >
          ❯
        </button>
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
