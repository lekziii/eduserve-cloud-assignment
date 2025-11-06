import React from 'react';

const Task5 = () => {
  return (
    <div className="task-card">
      <h2>Task 5: Virtualization & Cloud Computing Relationship</h2>
      
      <div className="task-section">
        <h3>How Virtualization Supports Cloud Computing in EduServe's Setup</h3>
        
        <div className="infographic">
          <div className="info-card">
            <h4>🏗️ Foundation</h4>
            <p>Virtualization provides the fundamental building blocks that enable cloud computing services and resource pooling</p>
          </div>
          
          <div className="info-card">
            <h4>📈 Scalability</h4>
            <p>Allows EduServe to quickly scale resources up or down based on student demand and development needs</p>
          </div>
          
          <div className="info-card">
            <h4>💾 Isolation</h4>
            <p>Provides secure separation between development, testing, and production environments</p>
          </div>
          
          <div className="info-card">
            <h4>💰 Cost Efficiency</h4>
            <p>Maximizes hardware utilization, reducing the need for physical servers and lowering overall costs</p>
          </div>
        </div>
      </div>

      <div className="task-section">
        <h3>Virtualization Benefits for EduServe</h3>
        
        <div className="diagram-container">
          <h4>Virtualization → Cloud Computing Evolution</h4>
          <div className="diagram">
            <div className="diagram-box" style={{background: '#8e44ad'}}>
              Physical Infrastructure
              <br />
              <small>Servers, Storage, Network</small>
            </div>
            
            <div className="diagram-arrow">+ Virtualization</div>
            
            <div className="diagram-box" style={{background: '#3498db'}}>
              Virtualized Resources
              <br />
              <small>VMs, Virtual Networks, Virtual Storage</small>
            </div>
            
            <div className="diagram-arrow">+ Automation & Self-Service</div>
            
            <div className="diagram-box" style={{background: '#2ecc71'}}>
              Cloud Computing
              <br />
              <small>IaaS, PaaS, SaaS for EduServe</small>
            </div>
          </div>
        </div>
      </div>

      <div className="task-section">
        <h3>Key Advantages for Educational Environment</h3>
        <ul>
          <li><strong>Rapid Provisioning:</strong> New virtual labs can be created in minutes instead of days</li>
          <li><strong>Disaster Recovery:</strong> Easy backup and recovery of entire virtual environments</li>
          <li><strong>Resource Optimization:</strong> Better utilization of hardware resources across multiple departments</li>
          <li><strong>Flexibility:</strong> Support for multiple operating systems and application configurations</li>
          <li><strong>Green Computing:</strong> Reduced energy consumption and physical space requirements</li>
        </ul>
      </div>

      <div className="task-section">
        <h3>Implementation Timeline</h3>
        <table className="cost-table">
          <thead>
            <tr>
              <th>Phase</th>
              <th>Duration</th>
              <th>Key Activities</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Planning & Design</td>
              <td>2 weeks</td>
              <td>Requirements gathering, architecture design, cost estimation</td>
            </tr>
            <tr>
              <td>Infrastructure Setup</td>
              <td>3 weeks</td>
              <td>Cloud account setup, network configuration, security implementation</td>
            </tr>
            <tr>
              <td>Application Deployment</td>
              <td>2 weeks</td>
              <td>LMS deployment, database migration, testing environment setup</td>
            </tr>
            <tr>
              <td>Optimization & Training</td>
              <td>1 week</td>
              <td>Performance tuning, team training, documentation</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Task5;