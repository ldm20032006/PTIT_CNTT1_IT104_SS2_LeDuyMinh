import React from 'react';

const AdminIndex: React.FC = () => {
  return (
    <div style={{ display: 'flex', 
                flexDirection: 'column', 
                height: '100vh' }}>
      <div style={{ backgroundColor: '#d3d3d3',
                    padding: '10px',
                    textAlign: 'center'
                }}>Header</div>
      <div style={{ display: 'flex', flex: 1 }}>
        <div style={{ backgroundColor: '#1e90ff',
                      width: '100px', 
                      height: '400px', 
                      color: 'white', 
                      padding: '10px' 
                    }}>Menu</div>
        <div style={{ padding: '20px', 
                      minHeight: '400px', 
                      textAlign: 'center', 
                      flex: 1 
                    }}>Main</div>
      </div>
      <div style={{ backgroundColor: '#d3d3d3', padding: '10px', textAlign: 'center' }}>Footer</div>
    </div>
  );
};

export default AdminIndex;