import React from 'react';

const RecentActivity = ({ recentActivities, getStatusColor }) => {
  return (
    <section className="bg-white rounded-xl shadow-lg border border-blue-50 p-8">
      <h2 className="text-2xl font-bold text-black mb-6">Recent Activity</h2>
      <div className="space-y-4">
        {recentActivities.map((item, index) => (
          <div key={index} className="flex items-center justify-between py-3 border-b border-blue-50 last:border-b-0">
            <div className="flex items-center space-x-3">
              <div className={`w-3 h-3 rounded-full ${getStatusColor(item.status)}`}></div>
              <span className="text-black font-medium">{item.activity}</span>
            </div>
            <span className="text-sm text-black/70 bg-white px-3 py-1 rounded-full">{item.time}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentActivity;