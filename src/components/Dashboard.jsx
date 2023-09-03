import React from 'react';
import GridLayout from 'react-grid-layout';

const Dashboard = ({ layout, children }) => {
  return (
    <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
      {children}
    </GridLayout>
  );
};

export default Dashboard;
