import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';


const TrackListScreen = ({navigation}) => {

  return (
    <View>
        <Text>TrackListScreen</Text>
        <Button title="Go to track detail" onPress={() => navigation.navigate('TrackDetail')} />

    </View>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
