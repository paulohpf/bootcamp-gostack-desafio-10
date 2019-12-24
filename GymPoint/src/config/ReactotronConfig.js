import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure({
    host: '192.168.10.108', // IP da maquina com o Reactotron
  })
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}
