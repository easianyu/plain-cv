import { FC } from 'react';
import styled from 'styled-components';

import pageConfig from '../assets/resume-infos/0-page-setting';
import PlainText from './plaintext.component';

type Props = {
  task: string;
};

const ParaDot = styled.div`
  flex: 1;
  height: 100%;
  position: relative;

  span {
    position: absolute;
    transform: translateY(6px) translateX(3px);
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #000;
  }
`;

const TextDetails = styled.div`
  flex: 35;
  text-align: justify;
`;

const TaskDetailContainer = styled.div`
  display: flex;
  margin: ${pageConfig.taskGap}px 0;
`;

const TaskDetail: FC<Props> = ({ task }) => {
  return (
    <TaskDetailContainer>
      <ParaDot>
        <span></span>
      </ParaDot>
      <TextDetails>
        <PlainText text={task} />
      </TextDetails>
    </TaskDetailContainer>
  );
};

export default TaskDetail;
