import { Tabs } from 'expo-router';

const Home = () => {
  return (
    <Tabs>
      <Tabs.Screen name="main" />
      <Tabs.Screen name="food" />
      <Tabs.Screen name="profile" />
      <Tabs.Screen name="diet" />
    </Tabs>
  );
};

export default Home;
