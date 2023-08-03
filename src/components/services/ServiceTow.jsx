import React from 'react';
import './style.scss';

import DsnGrid from '../DsnGrid';
import type { DsnGridProps } from '../DsnGrid';
import { dsnCN } from '../../hooks/helper';

const ServicesDetails = [
  {
    title: 'Software Development',
    description: `As an intern at Geotab, as well as participating in multiple hackathons, and working on a wide array of projects, I have an abundant amount of experience with all aspects of software development ranging from frontend to backend. \n\nI have worked with a wide array of frameworks ranging from React to Backbone. I also have copious amounts of experience with unit testing.`,
  },
  {
    title: 'Mathematics',
    description: `From being invited to AIME, to being the co-head of the math club at Crescent School, I have been working with math and doing all sorts of contest for, frankly, most of my life. \n\nI am experienced in both the theoretical as well as the practical elements of mathematics, being a finalist in the High School Big Data Challenge as well as trying to apply my math knowledge anywhere I can from robotics to school projects where I aim to incorporate working with big data and doing data analysis.`,
  },
  {
    title: 'Algorithmic Analysis',
    description: `Having completed and gotten a 5 in AP Computer Science at the age of 15, I have worked with many general purpose programming languages. \n\nI started with Python at the age of 10 to C++ which I use right now for numerous contests and learning all types of data structures and algorithms, ranging from Djikstra's Algorithm to Fenwick's Tree.`,
  },
  {
    title: 'Robotics Programming',
    description: `As a programmer on Team 610, which competes in the First Robotics Competition (FRC), I have learned and implemented all sorts of knowledge that are crucial in creating a winning robot. \n\n I have implemented PID Control (Proportional-Integral-Derivative Feedback Control) as well as using limelight to reset the odometry of the robot.`,
  },
];

const ServiceTow = ({ className, ...restProps }: DsnGridProps) => {
  return (
    <DsnGrid className={dsnCN('dsn-services service-tow', className)} {...restProps}>
      {ServicesDetails.map((item, index) => (
        <div className="service-item" key={index}>
          <div className="line-before mb-20" />
          <h4 className="title-block">{item.title}</h4>
          <p className="mt-15 dsn-auto">
            {/* Display the description with line breaks */}
            {item.description.split('\n').map((line, idx) => (
              <React.Fragment key={idx}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
        </div>
      ))}
    </DsnGrid>
  );
};

export default ServiceTow;
