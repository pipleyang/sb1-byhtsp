import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ContactItemProps {
  icon: LucideIcon;
  title: string;
  content: string;
  action?: {
    href?: string;
    onClick?: () => void;
    label: string;
  };
}

export function ContactItem({ icon: Icon, title, content, action }: ContactItemProps) {
  return (
    <div className="flex items-center gap-4">
      <Icon className="w-6 h-6 text-blue-600 flex-shrink-0" />
      <div className="flex-grow">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-gray-600">{content}</p>
        {action && (
          <button
            onClick={action.onClick}
            className="mt-2 text-blue-600 text-sm hover:text-blue-700 transition-colors"
          >
            {action.label}
          </button>
        )}
      </div>
    </div>
  );
}