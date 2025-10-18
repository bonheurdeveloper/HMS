import React from 'react';
import { Link } from 'react-router-dom';

const QuickActions = ({ quickActions }) => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-black mb-8 text-center">Quick Actions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickActions.map((action, index) => {
          const ActionComponent = action.link === '#' ? 'div' : Link;
          const props = action.link === '#' 
            ? { className: "bg-white rounded-xl shadow-lg border border-blue-50 text-center hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 block p-6 opacity-70" }
            : { to: action.link, className: "bg-white rounded-xl shadow-lg border border-blue-50 text-center hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 block p-6" };
          
          return (
            <ActionComponent key={index} {...props}>
              <div className="text-4xl mb-4">{action.icon}</div>
              <h3 className="text-lg font-semibold text-black mb-2">{action.title}</h3>
              <p className="text-sm text-black/70">{action.description}</p>
            </ActionComponent>
          );
        })}
      </div>
    </section>
  );
};

export default QuickActions;