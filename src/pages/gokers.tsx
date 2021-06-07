import React from 'react';
import LateralMenu from '../components/LateralMenu';
import { Layout, Content, TitlePage } from '../styles/pages/LayoutDashboard';

const Gokers: React.FC = () => {
  return (
    <Layout>
    <LateralMenu active="home" />
      <Content>
        <TitlePage>Gokers</TitlePage>

      </Content>
    </Layout>
  )
}

export default Gokers;