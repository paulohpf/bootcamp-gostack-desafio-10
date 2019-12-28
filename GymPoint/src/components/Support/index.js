import React, { useMemo } from 'react';
import { View } from 'react-native';

import { parseISO, formatRelative } from 'date-fns';
import ptbr from 'date-fns/locale/pt-BR';

import { Container, Header, Status, Data, Question } from './styles';

export default function Support({ data }) {
  console.tron.log(data);

  return (
    <Container>
      <Header>
        <Status status={data.answer}>
          {data.answer ? 'Respondido' : 'Sem resposta'}
        </Status>
        <Data>Hoje às 14h</Data>
      </Header>
      <Question>{data.question}</Question>
    </Container>
  );
}
