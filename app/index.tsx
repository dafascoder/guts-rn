import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, View } from 'react-native';

const home = () => {
  return (
    <View className="flex-1 item-center justify-center bg-white">
      <Text>Login</Text>
      <Link href={'/register'} asChild>
        <Pressable>
          <Text>Register</Text>
        </Pressable>
      </Link>
      <StatusBar style="auto" />
    </View>
  );
};

export default home;
