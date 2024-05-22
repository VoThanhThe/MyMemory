import {SafeAreaView, StyleSheet, Text, View, Animated} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import QRCode from 'react-native-qrcode-svg';
import {Colors} from '../../contants/Theme';

const SettingScreen = () => {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.title]}>Scan me</Text>
      <QRCode
        value="https://facebook.com/ThanhThe2304/"
        logo={{
          uri: 'https://cdn.dribbble.com/userupload/6535392/file/original-d03082136ecc61c583ca918175752947.jpg?resize=700x525&vertical=center',
        }}
        logoSize={50}
        // logoBackgroundColor="transparent"
        backgroundColor="white"
        color="black"
        size={300}
        enableLinearGradient={true}
        linearGradient={['rgb(255,0,0)', 'rgb(0,255,255)']}
        logoBorderRadius={5}
        quietZone={10}
        ecl="Q"
      />
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: Colors.LIGTH_COLOR.PRIMARY,
  },
});
