'use client';

import { useState } from 'react';

type Post = {
  id: number;
  author: string;
  avatar: string;
  content: string;
  images?: string[];
  likes: number;
  comments: Comment[];
  timestamp: string;
};

type Comment = {
  id: number;
  author: string;
  content: string;
};

export default function CommunityForum() {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      author: '美食达人',
      avatar: '/img/xshlogo01.png',
      content: '今天尝试了红烧肉新做法，加入山楂口感更软烂！',
      images: ['/img/红烧肉.jpg', '/img/西红柿炒鸡蛋.jpg'],
      likes: 42,
      comments: [
        { id: 1, author: '厨房小白', content: '求详细步骤！' },
      ],
      timestamp: '2小时前'
    },
    {
      id: 2,
      author: '烘焙爱好者',
      avatar: '/img/xshlogo01.png',
      content: '首次成功制作马卡龙，分享配方比例！🎂',
      images: ['/img/月饼.jpg', '/img/饺子.jpg'],
      likes: 28,
      comments: [
        { id: 1, author: '甜点控', content: '好漂亮的颜色！烤箱温度是多少？' },
        { id: 2, author: '新手烘焙', content: '蛋白需要打发到什么状态？' }
      ],
      timestamp: '1小时前'
    }
  ]);

  const [newPost, setNewPost] = useState('');

  return (
    <div className="max-w-2xl mx-auto p-4">
      {/* 发帖框 */}
      <div className="bg-base-100 rounded-lg shadow-md p-4 mb-6">
        <textarea
          className="textarea textarea-bordered w-full mb-4"
          placeholder="分享你的美食心得..."
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <button className="btn btn-sm">📷 添加图片</button>
            <button className="btn btn-sm">🍳 关联菜谱</button>
          </div>
          <button className="btn btn-primary">发布</button>
        </div>
      </div>

      {/* 帖子列表 */}
      {posts.map(post => (
        <div key={post.id} className="bg-base-100 rounded-lg shadow-md p-4 mb-4">
          {/* 帖子头部 */}
          <div className="flex items-center mb-4">
            <img 
              src={post.avatar} 
              className="w-10 h-10 rounded-full object-cover mr-3"
              alt="用户头像"
            />
            <div>
              <h3 className="font-bold">{post.author}</h3>
              <p className="text-sm text-gray-500">{post.timestamp}</p>
            </div>
          </div>

          {/* 帖子内容 */}
          <p className="mb-4">{post.content}</p>
          
          {/* 图片展示 */}
          {post.images && (
            <div className="grid grid-cols-2 gap-2 mb-4">
              {post.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  className="w-full h-32 object-cover rounded-lg"
                  alt="美食图片"
                />
              ))}
            </div>
          )}

          {/* 互动区 */}
          <div className="flex items-center gap-4 text-gray-500">
            <button className="flex items-center gap-1 hover:text-primary">
              ❤️ {post.likes}
            </button>
            <button className="flex items-center gap-1 hover:text-primary">
              💬 {post.comments.length}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}