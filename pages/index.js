import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Chart from '../components/Charts';
import Deposits from '../components/Deposits';
import Orders from '../components/Orders';

import Layout from '../components/layout'

function DashboardContent() {

  return (
    
          <Layout>
            Hello NeyX
          </Layout>
        
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}