import React from 'react';
import { Trophy } from 'lucide-react';

export function Cases() {
  return (
    <section className="py-16 px-6 bg-gray-50" id="cases">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-12">成功案例</h2>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Trophy className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="text-xl font-semibold">精选联盟加盟商成功案例</h3>
                <p className="text-gray-600 mt-1">3天直播间的营业额为4160元</p>
              </div>
            </div>
            
            <div className="aspect-[16/9] rounded-lg overflow-hidden">
              <img
                src="https://digital-man-1317462497.cos.ap-nanjing.myqcloud.com/website_kamooc/liveRoomeByDou_successful.png"
                alt="精选联盟加盟商成功案例"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}