import { FC } from 'react';
import { AiFillPhone, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import styled from 'styled-components';

import type { Profile } from '../assets/resume-infos/types';

type Props = {
  profile: Profile;
};

const NameAdd = styled.div``;

const ProfileContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding-bottom: 5px;

  h1 {
    font-size: 26px;
  }
`;

const ContactInfo = styled.div`
  position: absolute;
  right: -30px;
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(2, 1fr);
  column-gap: 10px;
  font-size: small;
  margin-top: 4px;

  a {
    display: flex;
    align-items: center;
    gap: 5px;
    color: black;

    .profile-icon {
      color: black;
      font-size: 20px;
      cursor: pointer;
    }

    span {
      border-bottom: solid gray 1px;
    }
  }
`;

const ProfileFC: FC<Props> = ({ profile }) => {
  const { name, phone, email, linkedin, github, address } = profile;

  return (
    <ProfileContainer>
      <NameAdd>
        <h1>{name}</h1>
        <p>{address}</p>
      </NameAdd>
      <ContactInfo>
        <a href={`tel:${phone}`}>
          <AiFillPhone className='profile-icon' />
          <span>{phone}</span>
        </a>
        <a href={`mailto:${email}`}>
          <MdEmail className='profile-icon' />
          <span>{email}</span>
        </a>

        <a href={linkedin}>
          <AiFillLinkedin className='profile-icon' />
          <span>{linkedin.substring(linkedin.indexOf('linkedin'))}</span>
        </a>

        <a href={github}>
          <AiFillGithub className='profile-icon' />
          <span>{github.substring(github.indexOf('github'))}</span>
        </a>
      </ContactInfo>
    </ProfileContainer>
  );
};

export default ProfileFC;
