'use client';
import { Tabs } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';

export default function Login() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify(data)
      });
      // 处理响应
    } catch (error) {
      console.error('登录失败:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-primary/20 to-secondary/20">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title mb-4">欢迎来到智能菜谱系统</h2>
          
          <Tabs defaultValue="login">
            <div className="tabs">
              <div className="tab-list">
                <div className="tab">登录</div>
                <div className="tab">注册</div>
              </div>
              
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">账号</span>
                  </label>
                  <Input 
                    type="text"
                    placeholder="请输入账号"
                    {...register('username')}
                  />
                </div>
                
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">密码</span>
                  </label>
                  <Input
                    type="password"
                    placeholder="请输入密码"
                    {...register('password')}
                  />
                </div>
                
                <div className="form-control mt-6">
                  <Button type="submit" className="btn-primary">
                    立即登录
                  </Button>
                </div>
              </form>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
}