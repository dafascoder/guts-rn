import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

interface LoginProps {
  email: string;
  password: string;
}

const Login = () => {
  const router = useRouter();

  const [loginData, setLoginData] = useState<LoginProps>({
    email: '',
    password: '',
  });

  const setPassword = (password: string) => {
    setLoginData({ ...loginData, password });
  };

  const setEmail = (email: string) => {
    setLoginData({ ...loginData, email });
  };

  return (
    <View className={`flex-1 bg-white p-6`}>
      <View className={`flex-1 justify-center items-center`}>
        <Text className={`text-lg font-bold mb-6`}>Welcome Back</Text>
        <TextInput
          id="email"
          className={`w-full p-2 border-b-2 border-gray-400 mb-6`}
          placeholder="Email"
          value={loginData.email}
          onChangeText={setEmail}
          autoComplete="email"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <TextInput
          className={`w-full p-2 border-b-2 border-gray-400 mb-6`}
          placeholder="Password"
          onChangeText={setPassword}
          value={loginData.password}
          autoComplete="password"
          secureTextEntry
          textContentType="password"
        />
        <TouchableOpacity
          className={`w-full bg-blue-500 py-2 rounded-md mt-4`}
          onPress={() => router.push('/home/food')}
        >
          <Text className={`text-center text-white font-bold`}>Log In</Text>
        </TouchableOpacity>
      </View>
      <View className={`flex-0 justify-center items-center`}>
        <TouchableOpacity onPress={() => console.log('Forgot Password pressed')}>
          <Text className={`text-sm font-semibold text-blue-500`}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity className={`mt-4`} onPress={() => router.push('/register')}>
          <Text className={`text-sm font-semibold text-gray-500`}>
            Don't have an account? Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
