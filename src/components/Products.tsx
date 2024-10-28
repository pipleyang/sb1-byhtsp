import React from 'react';
import { Bot, ShoppingBag, Users } from 'lucide-react';

export function Products() {
  return (
    <section className="py-16 px-6" id="products">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-12">我们的产品</h2>
        
        <div className="grid gap-8 md:grid-cols-2">
          {/* AIGC无人直播 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <Bot className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-4">AIGC抖音无人直播</h3>
            
            <div className="aspect-video mb-4 rounded-lg overflow-hidden">
              <video 
                className="w-full h-full object-cover"
                src="https://digital-man-1317462497.cos.ap-nanjing.myqcloud.com/website_kamooc/aigc_aks_liveroom_15m.mp4"
                controls
              />
            </div>
            
            <div className="space-y-2 text-gray-600">
              <p>• AI迎来送往：智能欢迎和感谢观众</p>
              <p>• AI自主学习：直播策划、产品解说、营销策略</p>
              <p>• 智能问答系统：自动回答观众提问</p>
              <p>• 自动生成：直播策划案和话术</p>
              <p>• 灵活切换：AI与真人直播无缝切换</p>
            </div>
          </div>

          {/* 厂家直采产品 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <ShoppingBag className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-4">厂家直采产品</h3>
            <p className="text-gray-600 mb-4">第一期：新疆应季水果与干果</p>
            
            <div className="aspect-video mb-4 rounded-lg overflow-hidden">
              <video 
                className="w-full h-full object-cover"
                src="https://digital-man-1317462497.cos.ap-nanjing.myqcloud.com/website_kamooc/aigc_aks_liveroom_15m.mp4"
                controls
              />
            </div>
            
            <div className="space-y-2 text-gray-600">
              <p>• 直接从种植农场采购</p>
              <p>• 平台抖店负责配送</p>
              <p>• 专业的售后服务</p>
              <p>• 新疆阿克苏糖心苹果</p>
              <p>• 应季水果与干果</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}