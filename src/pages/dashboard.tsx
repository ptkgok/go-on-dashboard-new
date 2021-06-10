import React from 'react';
import { BiCalendarAlt, BiRocket, BiUserCircle } from 'react-icons/bi';
import { MdQuestionAnswer, MdViewDay } from 'react-icons/md';
import LateralMenu from '../components/LateralMenu';
import HeaderCard from '../components/UIKits/Cards/HeaderCards';
import MediumCard from '../components/UIKits/Cards/MediumCards';
import { GridRow, Row } from '../styles/grids';
import { Layout, Content, TitlePage } from '../styles/pages/LayoutDashboard';

const Dashboard: React.FC = () => {
  return (
    <Layout>
    <LateralMenu active="home" />
      <Content>
        <TitlePage>Dashboard</TitlePage>
        <Row>
        <HeaderCard 
        day="10" 
        month="JAN" 
        hour="17:30" 
        title="[GO-TALK] Sinuca para campeões"
        description="Palestrante Rafael Bellarmino" 
        />
        </Row>
        <GridRow justify="space-around">
          <MediumCard title="Projetos">
            <BiRocket />
          </MediumCard>
          <MediumCard title="Gokers" url="/gokers">
            <BiUserCircle />
          </MediumCard>
          <MediumCard title="Férias" url="/vacations" >
            <MdViewDay />
          </MediumCard>
          <MediumCard title="Calendário" url="/calendar">
            <BiCalendarAlt />
          </MediumCard>
          <MediumCard title="FAQ" url="/faq">
            <MdQuestionAnswer />
          </MediumCard>
        </GridRow>
      </Content>
    </Layout>
  )
}

export default Dashboard;