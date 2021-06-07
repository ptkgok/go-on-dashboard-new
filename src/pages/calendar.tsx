import React from 'react';
import LateralMenu from '../components/LateralMenu';
import { Layout, Content, TitlePage } from '../styles/pages/LayoutDashboard';

// import { Container } from './styles';

const Calendar: React.FC = () => {
  return (
    <Layout>
    <LateralMenu active="home" />
      <Content>
        <TitlePage>Calendário</TitlePage>

      </Content>
    </Layout>
  )
}

export default Calendar