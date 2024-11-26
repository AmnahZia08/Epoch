import React from 'react';
import Drive from '../assets/svg/drive.svg';
import Operation from '../assets/svg/operation.svg';
import Growth from '../assets/svg/growth.svg';
import { ReactSVG } from 'react-svg';

const FeatureCard = ({ icon, title }) => {
  return (
    <div className='feature-card shadow-sm'>
      <div className='feature-card-icon'>
        <ReactSVG src={icon} />
      </div>
      <span className='feature-card-title'>{title}</span>
    </div>
  );
};

const FeatureCardRow = () => {
  const features = [
    { icon: Drive, title: 'AI-Driven Market Analysis' },
    { icon: Operation, title: 'Operational Efficiency Optimization' },
    { icon: Growth, title: 'Predictive Analytics for Growth' },
  ];

  return (
    <div className='feature-card-row'>
      {features.map((feature, index) => (
        <FeatureCard key={index} icon={feature.icon} title={feature.title} />
      ))}
    </div>
  );
};

export default FeatureCardRow;
