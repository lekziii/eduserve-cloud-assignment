import React from 'react';

const Task4 = () => {
  return (
    <div className="task-card">
      <h2>Task 4: Security and Cost Analysis</h2>
      
      <div className="task-section">
        <h3>4.1 Security Measures</h3>
        
        <div className="infographic">
          <div className="info-card">
            <h4>🔐 Identity & Access Management</h4>
            <p>Implement Multi-Factor Authentication (MFA) for all administrative accounts and use Role-Based Access Control (RBAC) to enforce principle of least privilege</p>
          </div>
          
          <div className="info-card">
            <h4>🛡️ Network Security</h4>
            <p>Configure Security Groups and Network ACLs to restrict traffic, implement Web Application Firewall (WAF), and use VPN for secure remote access</p>
          </div>
        </div>

        <h4>Additional Security Measures:</h4>
        <ul>
          <li><strong>Data Encryption:</strong> Encrypt data at rest using AWS KMS and in transit using TLS 1.3</li>
          <li><strong>Regular Backups:</strong> Automated daily backups with versioning and cross-region replication</li>
          <li><strong>Security Monitoring:</strong> Implement AWS CloudTrail for logging and Amazon GuardDuty for threat detection</li>
          <li><strong>Patch Management:</strong> Automated security patches for operating systems and applications</li>
        </ul>
      </div>

      <div className="task-section">
        <h3>4.2 Monthly Cost Estimation (AWS)</h3>
        <table className="cost-table">
          <thead>
            <tr>
              <th>Service</th>
              <th>Configuration</th>
              <th>Monthly Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>EC2 Instances</td>
              <td>2 x t3.medium (Linux)</td>
              <td>$60.00</td>
            </tr>
            <tr>
              <td>EBS Storage</td>
              <td>100 GB GP2</td>
              <td>$10.00</td>
            </tr>
            <tr>
              <td>RDS MySQL</td>
              <td>db.t3.small</td>
              <td>$25.00</td>
            </tr>
            <tr>
              <td>S3 Storage</td>
              <td>50 GB Standard</td>
              <td>$1.15</td>
            </tr>
            <tr>
              <td>Load Balancer</td>
              <td>Application LB</td>
              <td>$18.00</td>
            </tr>
            <tr>
              <td>Data Transfer</td>
              <td>100 GB out</td>
              <td>$9.00</td>
            </tr>
            <tr>
              <td><strong>Total Estimated</strong></td>
              <td></td>
              <td><strong>$123.15</strong></td>
            </tr>
          </tbody>
        </table>
        <p><em>Note: Costs based on AWS US East (N. Virginia) region pricing</em></p>
      </div>

      <div className="task-section">
        <h3>4.3 Cost Optimization Strategies</h3>
        
        <div className="infographic">
          <div className="info-card">
            <h4>💰 Reserved Instances</h4>
            <p>Commit to 1-year term for stable workloads to save up to 40% compared to on-demand pricing</p>
          </div>
          
          <div className="info-card">
            <h4>⚡ Auto Scaling</h4>
            <p>Automatically scale resources based on demand to avoid over-provisioning and reduce costs</p>
          </div>
          
          <div className="info-card">
            <h4>📊 Resource Monitoring</h4>
            <p>Use AWS Cost Explorer and Budgets to monitor spending and identify optimization opportunities</p>
          </div>
        </div>

        <h4>Additional Cost Optimization Tips:</h4>
        <ul>
          <li><strong>Spot Instances:</strong> Use spot instances for development and testing environments (up to 90% savings)</li>
          <li><strong>Storage Tiering:</strong> Implement S3 lifecycle policies to move infrequently accessed data to cheaper storage classes</li>
          <li><strong>Right-Sizing:</strong> Regularly review and adjust instance sizes based on actual usage patterns</li>
          <li><strong>Shutdown Schedules:</strong> Automatically stop non-production instances during off-hours</li>
        </ul>
      </div>
    </div>
  );
};

export default Task4;