import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';

interface RegisterProps {
  email: string;
  password: string;
  confirmPassword?: string;
}

const Register = () => {
  const router = useRouter();

  const [registerData, setRegisterData] = useState<RegisterProps>({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const setPassword = (password: string) => {
    setRegisterData({ ...registerData, password });
  };

  const setEmail = (email: string) => {
    setRegisterData({ ...registerData, email });
  };

  return (
    <View className={`flex-1 bg-white p-6`}>
      <View className={`flex-1 justify-center items-center`}>
        <Text className={`text-lg font-bold mb-6`}>Register</Text>
        <TextInput
          className="w-full p-2 border-b-2 border-gray-400 mb-6"
          placeholder="Email"
          value={registerData.email}
          onChangeText={setEmail}
          autoComplete="email"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <TextInput
          className={`w-full p-2 border-b-2 border-gray-400 mb-6`}
          placeholder="Password"
          onChangeText={setPassword}
          value={registerData.password}
          autoComplete="password"
          secureTextEntry
          textContentType="password"
        />
        <TextInput
          className="w-full p-2 border-b-2 border-gray-400 mb-6"
          placeholder="Confirm Password"
          onChangeText={setPassword}
          value={registerData.confirmPassword}
          autoComplete="password"
          secureTextEntry
          textContentType="password"
        />
        <TouchableOpacity
          className={`w-full bg-blue-500 py-2 rounded-md mt-4`}
          onPress={() => console.log('Login button pressed')}
        >
          <Text className={`text-center text-white font-bold`}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
