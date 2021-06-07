import React, { useContext } from 'react'
import {
  ProfilePart,
  TopMenuContainer,
  Notification,
  ProfileImage,
  BalloonContainer,
  ItensBalloon
} from './styles'
import { useRouter } from 'next/dist/client/router'
import { MdNotifications } from 'react-icons/md'
import ProfileBalloon from './ProfileBalloon'
import { BiLogOut } from 'react-icons/bi'

interface Menu {
  active?: string
}

const TopMenu: React.FC<Menu> = ({ active }) => {
  const Navigate = useRouter()

  return (
    <>
      <TopMenuContainer>
        <div>
          {/* <InputComponent style={{ backgroundColor: '#F2F5F8' }} /> */}
        </div>
        <ProfilePart>
          <BalloonContainer id="balloon">
            <ItensBalloon>
              Deslogar <BiLogOut />
            </ItensBalloon>
          </BalloonContainer>
          <Notification>
            <MdNotifications color="#38D430" size="18px" />
          </Notification>
          <ProfileImage
            id="profileimg"
            src="https://m.media-amazon.com/images/M/MV5BZWZiNzE0Y2YtOTNmYy00ZmFlLWFiZWMtZjk3NzM3ZmYzYWMwXkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg"
          />
        </ProfilePart>
      </TopMenuContainer>
    </>
  )
}

export default TopMenu
