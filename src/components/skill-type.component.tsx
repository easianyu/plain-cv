import { FC } from 'react';
import styled from 'styled-components';

const SkillTypeContainer = styled.div`
  display: flex;
  gap: 5px;
`;
const SkillType: FC<{ skillName: string; skillItems: string[] }> = ({ skillName, skillItems }) => {
  return (
    <SkillTypeContainer className='skill-type'>
      <h3>{`${skillName}:`}</h3>
      <p>
        {skillItems.map((item, idx) => (
          <span key={idx}>
            {item}
            {idx === skillItems.length - 1 ? '' : ', '}
          </span>
        ))}
      </p>
    </SkillTypeContainer>
  );
};

export default SkillType;
