import { FC } from 'react';
import styled from 'styled-components';
import { Skills } from '../assets/resume-infos/types';
import PartTitle from './part-title.component';
import SkillType from './skill-type.component';
type Props = {
  skills: Skills;
};

const SkillTypesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding-bottom: 3px;
`;

const SkillsFC: FC<Props> = ({ skills }) => {
  const { hidden, skillList } = skills;
  if (hidden) return <></>;
  return (
    <div>
      <PartTitle title='skills' />
      <SkillTypesContainer>
        {skillList.map((skill, idx) => (
          <SkillType key={idx} skillName={skill.skillType} skillItems={skill.skillItems} />
        ))}
      </SkillTypesContainer>
    </div>
  );
};

export default SkillsFC;
