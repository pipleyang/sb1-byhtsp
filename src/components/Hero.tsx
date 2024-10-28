import React from 'react';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <header className="relative h-screen">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1633355444132-695d5876cd00?auto=format&fit=crop&q=80"
          alt="直播背景" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="relative h-full flex flex-col items-center justify-center px-6 text-white text-center">
        <img 
          src="https://digital-man-1317462497.cos.ap-nanjing.myqcloud.com/website_kamooc/kaoomc.ico"
          alt="三体网络科技"
          className="w-24 h-24 mb-8"
        />
        <h1 className="text-4xl font-bold mb-4">三体网络科技有限公司</h1>
        <p className="text-xl mb-8">精选联盟直播带货达人解决方案</p>
        <div className="animate-bounce mt-12">
          <ChevronDown className="w-8 h-8" />
        </div>
      </div>
    </header>
  );
}