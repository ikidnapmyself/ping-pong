import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Container, Icon } from 'native-base';
import MessageStack from './MessageStack';
import ContactStack from './ContactStack';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();
const MainStack = () => {
  return (
    <Tab.Navigator initialRouteName='Home'>
      <Tab.Screen
        name='Home'
        component={MessageStack}
        options={{
          tabBarIcon: ({ tintColor }) => (
            <Container>
              <Icon style={[{ color: tintColor }]} size={28} name={'home'} />
            </Container>
          ),
        }}
      />
      <Tab.Screen
        name='Friends'
        component={ContactStack}
        options={{
          tabBarIcon: ({ tintColor }) => (
            <Container>
              <Icon style={[{ color: tintColor }]} size={28} name={'person'} />
            </Container>
          ),
        }}
      />
      <Tab.Screen
        name='Settings'
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ tintColor }) => (
            <Container>
              <Icon
                style={[{ color: tintColor }]}
                size={28}
                name={'settings'}
              />
            </Container>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

//export { BottomTabs }
export default MainStack;
