import React, { useContext } from 'react'
import {
  ProfilePart,
  TopMenuContainer,
  Notification,
  ProfileImage,
  BalloonContainer,
  ItensBalloon,
} from './styles'
import { useRouter } from 'next/dist/client/router'
import { MdNotifications, MdPeople } from 'react-icons/md'
import ProfileBalloon from './ProfileBalloon'
import { BiLogOut, BiShapePolygon } from 'react-icons/bi'

interface Menu {
  active?: string
}

const TopMenu: React.FC<Menu> = ({ active }) => {
  const Navigate = useRouter()

  return (
    <>
      <TopMenuContainer>
        <div>
        </div>
        <ProfilePart>
          <Notification>
            <MdNotifications color="#38D430" size="18px" />
          </Notification>
          <ProfileImage
            id="profileimg"
            src="https://media.istockphoto.com/vectors/user-icon-human-person-sign-vector-id587957104?k=6&m=587957104&s=170667a&w=0&h=umaeFHgEnWFB-A45hQYZXvrcqKh-2fnsx68pwcWCR1c="
          />
          <BalloonContainer id="balloon">
            <div style={{ width: 100, height: 40, position: 'absolute', top: -30, right: 20 }}></div>
            <ItensBalloon onClick={()=>{}}>
            <span>Deslogar</span> <BiLogOut />
            </ItensBalloon>
            {/* <ItensBalloon>
              <span>Perfil</span> <MdPeople />
            </ItensBalloon> */}
          </BalloonContainer>
        </ProfilePart>
      </TopMenuContainer>
    </>
  )
}

export default TopMenu
