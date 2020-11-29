import React, { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

const Wrapper = styled.div`
  padding: 16px;
  max-height: calc(100vh - 60px);
  overflow-y: auto;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface PanelProps {
  title: string;
  children: ReactNode;
  action?: ReactNode;
}

export const Panel = ({ title, children, action }: PanelProps): ReactElement => (
  <Wrapper>
    <Flex>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      {action}
    </Flex>
    {children}
  </Wrapper>
);
