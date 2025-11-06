import React from 'react';

const Task1 = () => {
  return (
    <div className="task-card">
      <h2>Task 1: Cloud Setup Planning</h2>
      
      <div className="task-section">
        <h3>1.1 Cloud Deployment Model Selection</h3>
        <p><strong>Selected Model:</strong> Hybrid Cloud</p>
        <p><strong>Justification:</strong></p>
        <ul>
          <li><strong>Security:</strong> Sensitive student data can be kept in private cloud while public-facing services use public cloud</li>
          <li><strong>Flexibility:</strong> Allows developers to scale resources dynamically while maintaining data privacy</li>
          <li><strong>Cost-Effective:</strong> Balances performance needs with budget constraints</li>
          <li><strong>Compliance:</strong> Meets educational data protection requirements</li>
        </ul>
      </div>

      <div className="task-section">
        <h3>1.2 Service Model for LMS Hosting</h3>
        <p><strong>Selected Model:</strong> PaaS (Platform as a Service)</p>
        <p><strong>Why PaaS is Suitable:</strong></p>
        <ul>
          <li><strong>Focus on Development:</strong> EduServe can focus on building educational content rather than managing infrastructure</li>
          <li><strong>Automatic Scaling:</strong> Handles variable student loads during peak usage periods</li>
          <li><strong>Reduced Maintenance:</strong> Platform handles updates, security patches, and backups</li>
          <li><strong>Rapid Deployment:</strong> Faster time-to-market for new features and updates</li>
          <li><strong>Cost Efficiency:</strong> Pay only for the platform services used, not entire infrastructure</li>
        </ul>
      </div>
    </div>
  );
};

export default Task1;