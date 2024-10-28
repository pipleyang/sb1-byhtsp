import React from 'react';
import { Briefcase, Target, Shield } from 'lucide-react';

export function Team() {
  return (
    <section className="py-16 px-6" id="team">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-12">关于我们</h2>
        
        <div className="grid gap-8 md:grid-cols-2">
          {/* 团队介绍 */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">专业团队</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Briefcase className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">核心成员</p>
                  <p className="text-gray-600">前腾讯资深员工、人工智能专家、传统行业运营专家</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Target className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">团队定位</p>
                  <p className="text-gray-600">AIGC无人直播产业链应用方案定制专家</p>
                </div>
              </li>
            </ul>
          </div>

          {/* 企业文化 */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">企业文化</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">价值观</p>
                  <p className="text-gray-600">以用户和客户的价值为依归</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">经营原则</p>
                  <p className="text-gray-600">速度、质量、成本、安全</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}