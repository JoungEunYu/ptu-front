import React, { useLayoutEffect } from 'react'
import {createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CustomersScreen from '../screens/CustomersScreen';
import OrdersScreen from '../screens/OrdersScreen';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/themed';
import BoardScreen from '../screens/BoardScreen';
import OptionScreen from '../screens/OptionScreen';


export type TabStackParamList = {
  Customers: undefined;
  Orders: undefined;
  Board: undefined;
  Option: undefined;
}

const Tab = createBottomTabNavigator<TabStackParamList>()

  const TabNavigator = () => {
    const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

 
  return (
    <Tab.Navigator screenOptions= { ({route}) => ({
      tabBarActiveTintColor: "#59C1CC",
      tabBarInactiveTintColor: "gray",
      tabBarIcon: ({focused, color, size }) => {                // TAB 아이콘 모양, 색 (클릭시, 넌클릭시)
        if (route.name === 'Customers') {
          return (
          <Icon
            name ="users"
            type ="entypo"
            color={focused ? "#59C1CC" : "gray"}
          />
          )
        } else if (route.name ==='Orders') {
          return(
          <Icon
            name ="box"
            type ="entypo"
            color={focused ? "#EB6A7C" : "gray"} 
          />
          )
        }
          else if (route.name ==='Board') {
            return(
            <Icon
              name ="list"
              type ="entypo"
              color={focused ? "#CEF245" : "gray"} 
            />
          )
        }
          else if (route.name ==='Option') {
          return(
          <Icon
            name ="dots-three-vertical"
            type ="entypo"
            color={focused ? "#FA732C" : "gray"} 
          />
        )
      }
        
      } 
    })}>
      <Tab.Screen name="Customers" component={CustomersScreen} />
      <Tab.Screen name="Orders" component={OrdersScreen} />
      <Tab.Screen name="Board" component={BoardScreen} />
      <Tab.Screen name="Option" component={OptionScreen} />
    </Tab.Navigator>
  )
}


export default TabNavigator