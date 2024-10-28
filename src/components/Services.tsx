import React from 'react';
import { Building2, Users2, Target } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition">
      {icon}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export function Services() {
  return (
    <section className="py-16 px-6">
      <h2 className="text-2xl font-bold text-center mb-12">我们的服务</h2>
      <div className="grid gap-8 max-w-md mx-auto">
        <ServiceCard
          icon={<Building2 className="w-8 h-8 mb-4 text-blue-600" />}
          title="企业解决方案"
          description="为企业提供全方位的技术解决方案"
        />
        
        <ServiceCard
          icon={<Users2 className="w-8 h-8 mb-4 text-blue-600" />}
          title="技术咨询"
          description="专业团队提供技术支持与咨询服务"
        />
        
        <ServiceCard
          icon={<Target className="w-8 h-8 mb-4 text-blue-600" />}
          title="数字化转型"
          description="助力企业实现数字化转型升级"
        />
      </div>
    </section>
  );
}