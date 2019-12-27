import React, { useMemo } from 'react';

import { parseISO, formatRelative } from 'date-fns';
import ptbr from 'date-fns/locale/pt-BR';

import { Container, Left, Title, Data } from './styles';

export default function Checkin({ data }) {
  console.tron.log(data);

  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(data.created_at), new Date(), {
      locale: ptbr,
      addSuffix: true,
    });
  }, [data.created_at]);

  // const checkInDate = new Date();

  // console.tron.log(checkInDate);

  return (
    <Container>
      <Left>
        <Title>Check-in #{data.id}</Title>
      </Left>
      <Data>{dateParsed}</Data>
    </Container>
  );
}
