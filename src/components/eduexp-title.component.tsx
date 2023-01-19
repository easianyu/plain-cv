import React, { FC } from 'react';
import styled from 'styled-components';

type Props = {
  institute: string;
  job?: string;
  address?: string;
  duration: string;
};

const EduExpContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;

  div:nth-child(2) {
    font-style: italic;
  }
`;

const InstituteInfo = styled.div`
  display: flex;
  align-items: baseline;
  gap: 5px;

  span:nth-of-type(2) {
    font-style: italic;
  }
`;

const EduExpTitle: FC<Props> = ({ institute, job, address, duration }) => {
  return (
    <EduExpContainer>
      <InstituteInfo>
        <h3>{institute}, </h3>
        <span>{job}, </span>
        <span>{address}</span>
      </InstituteInfo>
      <div className='duration'>{duration}</div>
    </EduExpContainer>
  );
};

export default EduExpTitle;
