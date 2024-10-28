import React from 'react';
import { ArrowRight } from 'lucide-react';

export function About() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">关于我们</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          未来科技有限公司成立于2020年，是一家专注于技术创新的高科技企业。我们致力于为客户提供最前沿的技术解决方案，帮助企业在数字时代保持竞争力。
        </p>
        <div className="flex justify-center">
          <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
            了解更多 <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}