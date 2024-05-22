import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const LoadingIndicator = ({size}: {size: number}) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        borderWidth: size / 10,
        borderColor: '#fff',
        shadowColor: '#fff',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 10,
      }}></View>
  );
};

const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#010100',
      }}>
      <LoadingIndicator size={100} />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({});
