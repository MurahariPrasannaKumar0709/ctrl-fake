import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import Button from '../ui/Button';

const MobileAppSection = () => {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Smart Task Scheduling',
      description: 'Automatically prioritize and schedule tasks based on urgency, deadlines, and user preferences.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      title: 'Automated Workflows',
      description: 'Create and manage complex workflows with ease, automating repetitive tasks and multi-step processes.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Analytics',
      description: 'Analyze data trends and receive insights that help optimize business decisions and strategies.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
      title: 'Real-Time Notifications',
      description: 'Stay informed with real-time alerts and notifications for critical updates and task completions.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Customizable Dashboards',
      description: 'Personalize your dashboard to display key metrics, tasks, and data that matter most to you.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Seamless Third-Party Integration',
      description: 'Connect with other tools and apps effortlessly, integrating your existing systems into the automation process.',
    },
  ];

  return (
    <SectionWrapper className="bg-black relative">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="text-9xl font-extrabold text-white text-center">MOBILE APP</div>
      </div>
      
      <div className="relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 uppercase">
            Mobile App
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-1 space-y-6">
            {features.slice(0, 3).map((feature, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 backdrop-blur-sm"
              >
                <div className="text-white mb-4">{feature.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-8 backdrop-blur-sm h-full">
              <h3 className="text-3xl font-bold text-white mb-4">Go mobile</h3>
              <p className="text-gray-400 mb-6">
                Our AI automation mobile app is designed to simplify and supercharge your productivity.
              </p>
              <div className="bg-gray-800 rounded-lg p-6 mb-6 h-96 flex items-center justify-center">
                <div className="text-center text-gray-400 text-sm">
                  Mobile Phone Mockup
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Easily access all app features with a user-friendly, intuitive menu design that streamlines navigation and enhances productivity.
              </p>
            </div>
          </div>

          <div className="lg:col-span-1 space-y-6">
            {features.slice(3).map((feature, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 backdrop-blur-sm"
              >
                <div className="text-white mb-4">{feature.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button variant="dark" size="lg">
            Get App
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default React.memo(MobileAppSection);
