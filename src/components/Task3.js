import React from 'react';

const Task3 = () => {
  return (
    <div className="task-card">
      <h2>Task 3: Cloud Platform Implementation</h2>
      
      <div className="task-section">
        <h3>3.1 AWS Virtual Machine Configuration</h3>
        <p><strong>Selected Platform:</strong> Amazon Web Services (AWS)</p>
        
        <div className="diagram-container">
          <h4>EC2 Instance Configuration</h4>
          <table className="cost-table">
            <tbody>
              <tr>
                <td><strong>Service</strong></td>
                <td>Amazon EC2</td>
              </tr>
              <tr>
                <td><strong>Instance Type</strong></td>
                <td>t3.medium</td>
              </tr>
              <tr>
                <td><strong>Operating System</strong></td>
                <td>Ubuntu Server 20.04 LTS</td>
              </tr>
              <tr>
                <td><strong>vCPUs</strong></td>
                <td>2</td>
              </tr>
              <tr>
                <td><strong>RAM</strong></td>
                <td>4 GB</td>
              </tr>
              <tr>
                <td><strong>Storage</strong></td>
                <td>30 GB GP2 SSD</td>
              </tr>
              <tr>
                <td><strong>Network</strong></td>
                <td>Moderate Network Performance</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="task-section">
        <h3>3.2 Sample Web Application Deployment</h3>
        <p><strong>Application:</strong> Simple React-based LMS Interface</p>
        <p><strong>Deployment Steps:</strong></p>
        <ol>
          <li>Launch EC2 instance with Ubuntu 20.04 LTS</li>
          <li>Install Node.js and npm on the instance</li>
          <li>Clone React application from GitHub repository</li>
          <li>Install dependencies and build the application</li>
          <li>Configure NGINX as reverse proxy</li>
          <li>Set up SSL certificate using Let's Encrypt</li>
          <li>Configure security groups to allow HTTP/HTTPS traffic</li>
        </ol>
        
        <div className="diagram-container">
          <h4>Deployment Architecture</h4>
          <div className="diagram">
            <div className="diagram-box">User Browser</div>
            <div className="diagram-arrow">↓</div>
            <div className="diagram-box">AWS Route 53 (DNS)</div>
            <div className="diagram-arrow">↓</div>
            <div className="diagram-box">Application Load Balancer</div>
            <div className="diagram-arrow">↓</div>
            <div className="diagram-box">EC2 Instance (Web Server)</div>
            <div className="diagram-arrow">↓</div>
            <div className="diagram-box">RDS MySQL Database</div>
          </div>
        </div>
      </div>

      <div className="task-section">
        <h3>3.3 Scaling Configuration</h3>
        <p><strong>Vertical Scaling (Scale Up/Down):</strong></p>
        <ul>
          <li>Increase instance type from t3.medium to t3.large during peak hours</li>
          <li>Add more RAM (from 4GB to 8GB) for better performance</li>
          <li>Upgrade storage from 30GB to 100GB for more data</li>
        </ul>
        
        <p><strong>Horizontal Scaling (Scale Out/In):</strong></p>
        <ul>
          <li>Configure Auto Scaling Group to launch additional instances</li>
          <li>Set minimum: 1 instance, desired: 2 instances, maximum: 4 instances</li>
          <li>Use Load Balancer to distribute traffic across instances</li>
        </ul>
        
        <div className="diagram-container">
          <h4>Auto Scaling Configuration</h4>
          <div className="diagram">
            <div style={{display: 'flex', justifyContent: 'space-around', width: '100%'}}>
              <div>
                <div className="diagram-box" style={{background: '#e74c3c'}}>Scale Out</div>
                <p>When CPU &gt; 80% for 5 minutes</p>
              </div>
              <div>
                <div className="diagram-box" style={{background: '#27ae60'}}>Scale In</div>
                <p>When CPU &lt; 30% for 10 minutes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task3;