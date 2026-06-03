import React from 'react';
import { Bot, TrendingUp, AlertCircle, PackageX, Award } from 'lucide-react';

export function AiInsights() {
  const insights = [
    {
      icon: TrendingUp,
      title: 'Revenue Projection',
      description: 'Revenue expected to grow by 12% this month based on new subscriptions.',
      color: 'text-emerald-600',
      bg: 'bg-emerald-100'
    },
    {
      icon: AlertCircle,
      title: 'Retention Risk',
      description: '35 memberships are expiring this week with no renewal scheduled.',
      color: 'text-amber-600',
      bg: 'bg-amber-100'
    },
    {
      icon: PackageX,
      title: 'Inventory Warning',
      description: 'Creatine stock running low. Reorder suggested to meet demand.',
      color: 'text-rose-600',
      bg: 'bg-rose-100'
    },
    {
      icon: Award,
      title: 'Performance Insight',
      description: 'Marcus Thorne is the top-performing trainer this month with 84 bookings.',
      color: 'text-primary-600',
      bg: 'bg-primary-100'
    }
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-secondary-100 h-full flex flex-col">
      <a href="/ai-assistant" className="flex items-center gap-3 mb-6 group hover:opacity-80 transition-opacity">
        <div className="p-2 bg-primary-100 rounded-lg group-hover:bg-primary-200 transition-colors">
          <Bot className="w-5 h-5 text-primary-600" />
        </div>
        <h2 className="text-lg font-bold text-secondary-900 group-hover:text-primary-600 transition-colors">AI Insights</h2>
      </a>
      
      <div className="space-y-4 flex-1">
        {insights.map((insight, i) => (
          <div key={i} className="flex gap-4 items-start p-3 rounded-xl hover:bg-secondary-50 transition-colors">
            <div className={`p-2 rounded-lg shrink-0 ${insight.bg}`}>
              <insight.icon className={`w-4 h-4 ${insight.color}`} />
            </div>
            <div>
              <p className="text-sm font-semibold text-secondary-900">{insight.title}</p>
              <p className="text-xs text-secondary-600 mt-1 leading-relaxed">{insight.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <a href="/ai-assistant/insights" className="w-full mt-4 py-2 bg-secondary-50 hover:bg-secondary-100 text-sm font-bold text-secondary-700 rounded-lg transition-colors border border-secondary-200 block text-center">
        View All AI Insights
      </a>
    </div>
  );
}
