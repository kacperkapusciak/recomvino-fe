import React, { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

const Wrapper = styled.div`
  padding: 16px;
  max-height: calc(100vh - 60px);
  overflow-y: auto;
`;

interface PanelProps {
  title: string;
  children: ReactNode;
}

export const Panel = ({ title, children }: PanelProps): ReactElement => (
  <Wrapper>
    <Typography variant="h4" gutterBottom>
      {title}
    </Typography>
    {children}
  </Wrapper>
);
