import React from 'react';
import { Target, Package, Users2 } from 'lucide-react';

interface SolutionCardProps {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

function SolutionCard({ icon, title, items }: SolutionCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      {icon}
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-blue-600 mt-1">•</span>
            <span className="text-gray-600">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Solutions() {
  return (
    <section className="py-16 px-6 bg-gray-50" id="solutions">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-12">解决方案</h2>
        
        <div className="grid gap-8 md:grid-cols-3">
          <SolutionCard
            icon={<Target className="w-8 h-8 text-blue-600 mb-4" />}
            title="目标群体"
            items={[
              "从事抖音直播或短视频橱窗带货的达人",
              "有直播经历或经验，但没有直播团队",
              "没有产品货源"
            ]}
          />
          
          <SolutionCard
            icon={<Package className="w-8 h-8 text-blue-600 mb-4" />}
            title="我们提供"
            items={[
              "AIGC抖音无人直播系统",
              "优质货源支持",
              "分销团队管理支持",
              "AI学习资料支持"
            ]}
          />
          
          <SolutionCard
            icon={<Users2 className="w-8 h-8 text-blue-600 mb-4" />}
            title="产品优势"
            items={[
              "1人可管理4～8个直播间",
              "人力成本降低至1/12",
              "AI深度学习标杆直播间",
              "解决直播人才专业问题"
            ]}
          />
        </div>
      </div>
    </section>
  );
}