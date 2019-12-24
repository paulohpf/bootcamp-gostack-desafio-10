import styled from 'styled-components/native';

export const Container = styled.View`
  height: 46px;
  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: '#999999',
})`
  padding: 15px;
  flex: 1;
  font-size: 15px;
  border: 1px solid #dddddd;
  border-radius: 4px;
`;
