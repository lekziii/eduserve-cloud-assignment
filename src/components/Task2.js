import React from 'react';

const Task2 = () => {
  return (
    <div className="task-card">
      <h2>Task 2: Virtualization Design</h2>
      
      <div className="task-section">
        <h3>2.1 Virtualization Architecture</h3>
        <p><strong>Selected Platform:</strong> VMware vSphere</p>
        <p><strong>Architecture Components:</strong></p>
        <ul>
          <li><strong>Host Machine:</strong> Dell PowerEdge R740xd Server</li>
          <li><strong>Hypervisor:</strong> VMware ESXi 7.0</li>
          <li><strong>Management:</strong> vCenter Server</li>
          <li><strong>Guest OS:</strong> Multiple VMs with different purposes</li>
        </ul>
      </div>

      <div className="task-section">
        <h3>2.2 Virtualization Architecture Diagram</h3>
        <div className="diagram-container">
          <h4>EduServe Virtualization Architecture</h4>
          <div className="diagram">
            {/* Host Machine */}
            <div className="diagram-box" style={{background: '#2c3e50'}}>
              Host Machine (Physical Server)
              <br />
              <small>Dell PowerEdge R740xd</small>
            </div>
            
            <div className="diagram-arrow">↓</div>
            
            {/* Hypervisor */}
            <div className="diagram-box" style={{background: '#34495e'}}>
              VMware ESXi Hypervisor
            </div>
            
            <div className="diagram-arrow">↓</div>
            
            {/* Virtual Machines */}
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem'}}>
              <div className="diagram-box">
                VM 1: LMS Server
                <br />
                <small>Ubuntu 20.04 LTS</small>
              </div>
              <div className="diagram-box">
                VM 2: Database Server
                <br />
                <small>Windows Server 2019</small>
              </div>
              <div className="diagram-box">
                VM 3: Dev Environment
                <br />
                <small>CentOS 8</small>
              </div>
              <div className="diagram-box">
                VM 4: Testing Server
                <br />
                <small>Ubuntu 20.04 LTS</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="task-section">
        <h3>Resource Allocation</h3>
        <table className="cost-table">
          <thead>
            <tr>
              <th>Virtual Machine</th>
              <th>vCPU</th>
              <th>RAM</th>
              <th>Storage</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>LMS Server</td>
              <td>4 cores</td>
              <td>8 GB</td>
              <td>100 GB SSD</td>
              <td>Hosts Learning Management System</td>
            </tr>
            <tr>
              <td>Database Server</td>
              <td>4 cores</td>
              <td>16 GB</td>
              <td>500 GB SSD</td>
              <td>Student records and course data</td>
            </tr>
            <tr>
              <td>Dev Environment</td>
              <td>2 cores</td>
              <td>4 GB</td>
              <td>50 GB SSD</td>
              <td>Developer testing and coding</td>
            </tr>
            <tr>
              <td>Testing Server</td>
              <td>2 cores</td>
              <td>4 GB</td>
              <td>50 GB SSD</td>
              <td>QA and staging environment</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="task-section">
        <h3>Network Connectivity</h3>
        <ul>
          <li><strong>Virtual Switch:</strong> All VMs connected through VMware vSwitch</li>
          <li><strong>VLAN Segmentation:</strong> Separate networks for development and production</li>
          <li><strong>Firewall Rules:</strong> Restricted inter-VM communication based on requirements</li>
          <li><strong>Load Balancer:</strong> Distributes traffic between LMS instances</li>
        </ul>
      </div>
    </div>
  );
};

export default Task2;