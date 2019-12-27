import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Alert } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '~/services/api';

import { Container, AddButton, List } from './styles';
import Checkin from '~/components/Checkin';

export default function Checkins() {
  const [checkins, setCheckin] = useState([]);

  const studentId = useSelector(state => state.auth.studentId);

  useEffect(() => {
    async function getData() {
      try {
        const response = await api.get(`students/${studentId}/checkins`);

        setCheckin(response.data);
      } catch (err) {
        Alert.alert('Ocorreu um erro', 'Não foi possível baixar os Check-ins');
      }
    }

    getData();
  }, [studentId]);

  const handleNewCheckIn = async () => {
    try {
      const response = await api.post(`students/${studentId}/checkins`);

      const responseCheckins = await api.get(`students/${studentId}/checkins`);

      setCheckin(responseCheckins.data);
    } catch (error) {
      Alert.alert('Ocorreu um erro', 'Não foi possível realizar o Check-in');
    }
  };

  return (
    <Container>
      <AddButton onPress={handleNewCheckIn}>Novo check-in</AddButton>
      <List
        data={checkins}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <Checkin data={item} />}
      />
    </Container>
  );
}

Checkins.navigationOptions = {
  tabBarLabel: 'Check-ins',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="edit-location" size={20} color={tintColor} />
  ),
};
