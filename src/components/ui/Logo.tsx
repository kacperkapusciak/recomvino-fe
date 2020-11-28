import styled from 'styled-components';
import { LocalBarTwoTone } from '@material-ui/icons';

const Wrapper = styled.h1`
  color: #722f37;
  font-weight: black;
  font-size: 22px;
  user-select: none;
  display: flex;
  align-items: center;
`;

export const Logo = () => (
  <Wrapper>
    <LocalBarTwoTone />
    Recomvino
  </Wrapper>
);
