import {Animated, SafeAreaView, StyleSheet, Text, View, Dimensions} from 'react-native';
import React, { useEffect, useRef } from 'react';

const WIDTH = Dimensions.get('window').width;
const HEIGTH = Dimensions.get('window').height;

const FlashScreen = () => {
    const animation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(
            animation,
            {
                toValue: 500,
                duration: 1000,
                useNativeDriver: false,
            }
        ).start();
    }, [animation])
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Animated.View style={[styles.box, {marginTop: animation}]}></Animated.View>
      </View>
    </SafeAreaView>
  );
};

export default FlashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: 4,
    borderColor: 'red',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
});
