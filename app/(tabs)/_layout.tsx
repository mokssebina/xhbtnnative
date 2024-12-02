import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

/*---------------------------Icon imports--------------------------*/
import { HomeIcon, PlusCircleIcon, MagnifyingGlassIcon, UserCircleIcon, HomeModernIcon } from "react-native-heroicons/solid";
import { HomeIcon as HomeIconOutline, PlusCircleIcon as PlusCircleIconOutline, MagnifyingGlassIcon as MagnifyingGlassIconOutline, UserCircleIcon as UserCircleIconOutline } from "react-native-heroicons/outline";


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ focused, color }) => (
            focused ?
            <HomeIcon color={color} />
            :
            <HomeIconOutline color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="gotocreate"
        options={{
          title: '',
          tabBarIcon: ({ focused, color }) => <PlusCircleIconOutline color={color} />,
          href: '/create'
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: '',
          tabBarIcon: ({ focused, color }) => (
            focused ?
            <UserCircleIcon color={color} />
            :
            <UserCircleIconOutline color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
