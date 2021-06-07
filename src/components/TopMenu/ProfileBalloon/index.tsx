import React from 'react';
import { BiLogOut } from 'react-icons/bi';

import { BalloonContainer, ItensBalloon } from '../styles';

const ProfileBalloon: React.FC = () => {
  return (
    <BalloonContainer id="balloon">
      <ItensBalloon>
        Deslogar <BiLogOut />
      </ItensBalloon>
    </BalloonContainer>
  )
}

export default ProfileBalloon;