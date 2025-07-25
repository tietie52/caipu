'use client'

import { useState } from 'react'

import HomePage from './components/home/page'
import Maowenhui from '../Maowenhui/chengzipi'
import Zhongxinna from '../Zhongxinna/TiAom-Z'
import Zhouxiaowen from '../Zhouxiaowen/Zxw'
import Qinlinxiang from '../Qinlinxiang/Qlx'
import Hexinyi from '../Hexinyi/CommunityForum'
const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('home')

  const menuItems = [
    {
      name: '首页',
      key: 'home',
      icon: '🏠'
    },
    {
      name: '分类菜谱',
      key: 'Qinlinxiang',
      icon: '📚'
    },
    {
      name: '今日推荐',
      key: 'Zhongxinna',  // 导航项唯一标识
      icon: '🌟'
    },
    {
      name: '节日特辑',
      key: 'Maowenhui',
      icon: '🎉'
    },
    {
      name: '饮食咨询',
      key: 'consult',
      icon: '💬'
    },
    {
      name: '我的收藏',
      key: 'favorites',
      icon: '❤️'
    },
    {
      name: '关于我们',
      key: 'Zhouxiaowen',
      icon: '👥'
    },
    {
      name: '社区论坛',
      key: 'Hexinyi',
      icon: '💬'
    }
  ]

  const renderContent = () => {
    if (activeTab === 'home') {
      return <HomePage />
    }
    if (activeTab === 'Maowenhui') {
      return <Maowenhui />
    }
    if (activeTab === 'Zhongxinna') {
      return <Zhongxinna />; // 正确渲染对应组件
    }
    if (activeTab === 'Zhouxiaowen'){
      return <Zhouxiaowen />
    }
    if (activeTab === 'Qinlinxiang'){
      return <Qinlinxiang />
    }
    if (activeTab === 'Hexinyi'){
      return <Hexinyi />
    }
    return <div>请选择功能</div>
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* 大标题 */}
      <div className="bg-gradient-to-r from-primary/80 to-secondary/80 py-8 relative">
        {/* 甜品图标组 */}
        <div className="absolute -left-4 -top-2 flex gap-2">
          <img 
            src="\img\aaf8dfe62f7bb6897045524600306edc.png"
            className="w-12 h-12 object-cover rounded-full animate-bounce"
            alt="dessert"
          />
          <img
            src="\img\72f854523d2a8664ee8a435b0ec47baa.png"
            className="w-12 h-12 object-cover rounded-full animate-pulse"
            alt="dessert"
          />
          <img
            src="\img\d3048b10f3d9f8aafb77b3aa6d29ccc4.png"
            className="w-12 h-12 object-cover rounded-full animate-spin-slow"
            alt="dessert"
          />
        </div>
        
        <h1 className="text-5xl font-bold text-center text-white/90">
          智能菜谱系统
        </h1>
      </div>

      {/* 顶部导航 */}
      <div className="navbar bg-base-200">
        <div className="flex-1">
          <div className="tabs tabs-boxed bg-base-300">
            {menuItems.map((item) => (
              <button
                key={item.key}
                onClick={() => setActiveTab(item.key)}
                className={`tab ${activeTab === item.key ? 'tab-active' : ''} hover:bg-primary hover:text-white transition-all duration-300`}
              >
                <span className="mr-2">{item.icon}</span>
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 内容区域 */}
      <div className="flex-1 p-4">
        {renderContent()}
      </div>
    </div>
  )
}

export default Dashboard