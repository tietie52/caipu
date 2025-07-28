import React from 'react';

const EmptyState: React.FC = () => {
  return (
    <div className="text-center py-16">
      <div className="text-6xl mb-4">🍽️</div>
      <h2 className="text-2xl font-semibold text-gray-600 mb-2">还没有收藏任何菜谱</h2>
      <p className="text-gray-500">去浏览菜谱页面，点击❤️收藏你喜欢的菜谱吧！</p>
    </div>
  );
};

export default EmptyState;