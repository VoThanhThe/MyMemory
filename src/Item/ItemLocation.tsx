import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors} from '../contants/Theme';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ItemLocation = ({item, navigation}: any) => {
  
  return (
    <TouchableOpacity style={[styles.container]} onPress={() => navigation.navigate("DetailScreen", {item: item})}>
      <View style={[styles.card]}>
        <Image style={[styles.image]} source={{uri: item.imageURL}} />
        <Text style={[styles.title]}>{item.name}</Text>
      </View>
      <View style={[styles.rate]}>
        <Icon name='star' size={16} color={'white'} />
        <Text style={[styles.text]}>{item.review}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemLocation;

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
    backgroundColor: Colors.LIGTH_COLOR.WHITE,
    borderRadius: 16,
    marginRight: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.4,
    elevation: 2,
    position: 'relative'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.LIGTH_COLOR.PRIMARY,
    textAlign: 'center',
    lineHeight: 50,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'stretch',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  card: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
    overflow: 'hidden',
  },
  rate: {
    flexDirection: 'row', 
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 30,
    backgroundColor: Colors.LIGTH_COLOR.SECONDARY,
    position: 'absolute',
    left: 15,
    top: 15,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.LIGTH_COLOR.WHITE,
    lineHeight: 20,
    marginLeft: 5
  }
});
