import React from 'react'
import { StyleSheet, Image, Platform } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Redirect } from 'expo-router';



const gotocreate = () => {
  return (
    <Redirect href='/(tabs)' />
  )
}

export default gotocreate