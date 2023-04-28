import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

const home = () => {
  return (
    <View className="flex-1 item-center justify-center bg-white">
      <Text>Hello World!</Text>
      <StatusBar style="auto" />
      <Link href="/login">Login</Link>
    </View>
  );
};

export default home;
