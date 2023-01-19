import { FC } from 'react';
import styled from 'styled-components';
import { Educations } from '../assets/resume-infos/types';
import EduExpTitle from './eduexp-title.component';
import PartTitle from './part-title.component';

type Props = {
  educations: Educations;
};

const EdusContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding-bottom: 3px;
`;

const EducationFC: FC<Props> = ({ educations }) => {
  const { hidden, educationList } = educations;
  if (hidden) return <></>;
  return (
    <div className='education-container'>
      <PartTitle title={'EDUCATIONS'} />
      <EdusContainer>
        {educationList.map((education, idx) => {
          const { hidden, university, major, address, duration } = education;
          if (hidden) return <></>;
          return (
            <EduExpTitle
              key={idx}
              institute={university}
              job={major}
              address={address}
              duration={duration}
            />
          );
        })}
      </EdusContainer>
    </div>
  );
};

export default EducationFC;
