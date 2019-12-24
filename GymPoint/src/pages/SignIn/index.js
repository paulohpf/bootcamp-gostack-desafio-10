import React from 'react';
import { View, Text } from 'react-native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export default function SignIn() {
  return (
    <View>
      <Text>SignIn</Text>
      <Input
        style={{ marginTop: 30 }}
        placeholder="Informe seu ID de cadastro"
      />
      <Button>Entrar no sistema</Button>
    </View>
  );
}
