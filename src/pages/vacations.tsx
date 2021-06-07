import React from 'react';
import LateralMenu from '../components/LateralMenu';
import { Content, Layout, TitlePage } from '../styles/pages/LayoutDashboard';

const Vacations: React.FC = () => {
  return (
    <Layout>
    <LateralMenu active="item1" />

      <Content>
        <TitlePage>Vacations</TitlePage>
      </Content>
    </Layout>
  )
}

export default Vacations;