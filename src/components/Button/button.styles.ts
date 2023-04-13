import Button from 'antd/es/button';
import styled from 'styled-components';
import token from '../../token/tokens.json';

export const SButton = styled(Button)`
  background-color: ${token.global.orange.value};
  color: #ffffff;
`;
