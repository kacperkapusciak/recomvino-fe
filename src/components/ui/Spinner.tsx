import styled from 'styled-components';
import { CircularProgress } from '@material-ui/core';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Spinner = () => (
  <Wrapper>
    <CircularProgress />
  </Wrapper>
);
