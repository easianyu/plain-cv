import styled from 'styled-components';

import pageConfig from '../assets/resume-infos/0-page-setting';
import EducationFC from './education.component';
import ExperienceFC from './experience.component';
import PatentFC from './patent.component';
import ProfileFC from './profile.component';
import ProjectsFC from './projects.component';
import SkillsFC from './skills.component';
import { profileInfo } from '../assets/resume-infos/1-profile-info';
import { skillInfo } from '../assets/resume-infos/3-skill-info';
import { educationInfo } from '../assets/resume-infos/2-education-info';
import { experienceInfo } from '../assets/resume-infos/4-experience-info';
import { projectInfo } from '../assets/resume-infos/5-project-info';
import { patentInfo } from '../assets/resume-infos/6-patent-info';

type MainContainerProps = {
  marginX: number;
  marginY: number;
  fixHeight: boolean;
};

const MainContainer = styled.main<MainContainerProps>`
  width: 850px;
  ${({ fixHeight }) => fixHeight && `height: 1100px;`}

  @media screen and (min-width: 851px) {
    margin: 30px auto;
  }

  box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.4);

  padding: ${({ marginX, marginY }) => `${marginX}px ${marginY}px`};
`;

const InnerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${pageConfig.sectionGap}px;
  width: 100%;
  height: 100%;
  background-color: #fff;

  &:nth-child(-n +) {
    /* margin-top: ${pageConfig.sectionGap}px; */
    background-color: pink;
  }
`;

const Home = () => {
  const { marginX, marginY, fixHeight } = pageConfig;
  return (
    <MainContainer marginX={marginX} marginY={marginY} fixHeight={fixHeight}>
      <InnerContent>
        <ProfileFC profile={profileInfo} />
        <EducationFC educations={educationInfo} />
        <SkillsFC skills={skillInfo} />
        <ExperienceFC experiences={experienceInfo} />
        <ProjectsFC projects={projectInfo} />
        <PatentFC patents={patentInfo} />
      </InnerContent>
    </MainContainer>
  );
};

export default Home;
