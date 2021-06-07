import React from 'react';
import LateralMenu from '../components/LateralMenu';
import { Layout, Content, TitlePage } from '../styles/pages/LayoutDashboard';

// import { Container } from './styles';

const Faq: React.FC = () => {
  return (
    <Layout>
    <LateralMenu active="home" />
      <Content>
        <TitlePage>Faq</TitlePage>

      </Content>
    </Layout>
  )
}

export default Faq;