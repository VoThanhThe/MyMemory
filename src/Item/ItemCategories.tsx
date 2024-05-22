import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors} from '../contants/Theme';

const ItemCategories = ({item}: any) => {
  return (
    <TouchableOpacity style={[styles.container]}>
      <Image style={[styles.image]} source={{uri: item.imageURL}} />
      <Text style={[styles.title]}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default ItemCategories;

const styles = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
    borderRadius: 20,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    width: 100,
    height: 120,
    backgroundColor: Colors.LIGTH_COLOR.WHITE,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    padding: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.41,

    elevation: 2,
    marginRight: 20,
  },
  title: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.LIGTH_COLOR.PRIMARY,
    marginTop: 4,
    // không cần thiết lập width ở đây nếu sử dụng flexbox cho container
  },
});
