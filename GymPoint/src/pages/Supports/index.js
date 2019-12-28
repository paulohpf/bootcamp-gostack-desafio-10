import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Alert } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import { Container, AddButton, List } from './styles';

import Support from '~/components/Support';

export default function Supports(props) {
  console.tron.log(props);

  const [support, setSupport] = useState([]);
  const [pagination, setPagination] = useState({});

  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const [page, setPage] = useState(1);

  const studentId = useSelector(state => state.auth.studentId);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await api.get(`/students/${studentId}/help-orders`, {
          params: { page },
        });

        const { rows, ..._pagination } = response.data;

        setSupport(page >= 2 ? [...support, ...rows] : rows);
        setPagination(_pagination);

        setLoading(false);
        setRefresh(false);
      } catch (err) {
        Alert.alert(
          'Ocorreu um erro',
          'Não foi possível baixar os pedidos de auxílio'
        );
        setLoading(false);
        setRefresh(false);
      }
    };

    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, refresh]);

  const loadMore = () => {
    if (page < pagination.totalPages) {
      const nextPage = page + 1;

      setPage(nextPage);
    }
  };

  const refreshList = () => {
    setPage(1);
    setSupport([]);
    setRefresh(true);
  };

  const handleNavigate = () => {
    const { navigation } = props;

    navigation.navigate('NewSupport');
  };

  return (
    <Container>
      <AddButton loading={loading} onPress={handleNavigate}>
        Novo pedido de auxílio
      </AddButton>

      <List
        data={support}
        onRefresh={refreshList}
        refreshing={refresh}
        onEndReachedThreshold={0.2}
        onEndReached={loadMore}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <Support data={item} />}
      />
    </Container>
  );
}

Supports.navigationOptions = {
  tabBarLabel: 'Pedir Ajuda',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="live-help" size={20} color={tintColor} />
  ),
};
